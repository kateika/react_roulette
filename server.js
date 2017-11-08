import {} from 'dotenv/config';
import fs from 'fs';
import fallback from 'express-history-api-fallback';
import express from 'express';
const app = express();
const root = `${__dirname}/build`;

import React, {Component} from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { renderToString } from "react-dom/server";

import { MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

import csshook from 'css-modules-require-hook/preset';
import routes from './src/routes';
import rootReducer from './src/reducers/index';

const router = express.Router();


app.use(express.static('build', {index: false}));


app.get('*', (req, res) =>  {
  let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route, match}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store, match) : Promise.resolve(null)
  });
  return Promise.all(promises).then(() => {
    let context = {};
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );

     if(context.status === 404) {
       res.status(404);
     }

    fs.readFile('./build/index.html', 'utf8', (err, htmlStr) => {
      if (err) throw err;

      const preloadedState = store.getState();
      let html = htmlStr.replace("<div id='root'></div>", `<div id="root">${content}</div><script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>`);

      res.send(html);
    });
  });
});

app.use(fallback('index.html', { root }));


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

module.exports = router;
