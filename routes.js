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
import { renderFullPage } from "./src/server/index";

import { MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

import routes from "./src/components/App";
import rootReducer from './src/reducers/index';

const router = express.Router();


app.use(express.static('build'));

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
app.get('*', (req, res) =>  {
  console.log(req.url);

  const branch = matchRoutes(routes, req.url);
  //console.log("branch", branch);
  const promises = branch.map(({route, match}) => {
    //console.log(match);
    // return route.loadData
    // ? route.loadData(match)
    // : Promise.resolve(null)
    //console.log("route", route);
    let fetchData = route.component.fetchData;
    //console.log("fetchdata", fetchData);
    return fetchData instanceof Function ? fetchData(store, match) : Promise.resolve(null)
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
    // console.log("contex", context.url);
    // if(context.status === 404) {
    //   console.log("shtutkphtsi");
    //   res.status(404);
    // }

    fs.readFile('./build/index.html', 'utf8', (err, htmlStr) => {
      if (err) throw err;

      // let serverHtml = renderFullPage(content, {});
      let html = htmlStr.replace("<div id='root'></div>", `<div id="root">${content}</div>`);
      // console.log("serverHtml",serverHtml);
      console.log("html",html);
      res.send(html);
    });
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
