import {} from 'dotenv/config';
import fallback from 'express-history-api-fallback';
import express from 'express';
const app = express();
const root = `${__dirname}/build`;

import React, {Component} from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { renderToString } from "react-dom/server";
import { renderFullPage } from "./src/server/index";

import { MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

import routes from "./src/components/App";
import rootReducer from './src/reducers/index';

const router = express.Router();


app.use(express.static('build'));

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
app.get('/movie/603', (req, res) =>  {
  const branch = matchRoutes(routes, req.url);
  console.log(req.url);
  //console.log("branch", branch);
  const promises = branch.map(({route}) => {
    //console.log("route", route);
    let fetchData = route.component.fetchData;
    //console.log("fetchdata", fetchData);
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });
  return Promise.all(promises).then((data) => {
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
    res.render('index', {title: 'Express', data: store.getState(), content });
  });
  //
  //let context = {};
  //let renderedComponent = renderToString(
  //  <Provider store={store}>
  //    <StaticRouter location={req.url} context={context}>
  //      <App />
  //    </StaticRouter>
  //  </Provider>
  //);
  //let html = renderFullPage(renderedComponent, {});
  //res.send(html);
});

app.use(fallback('index.html', { root }));


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

module.exports = router;
