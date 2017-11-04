import dotenv from 'dotenv';
dotenv.config();
import fallback from 'express-history-api-fallback';
import express from 'express';
const app = express();
const root = `${__dirname}/build`;
import rootReducer from './src/reducers/index';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { renderToString } from "react-dom/server";
import { renderFullPage } from "./src/server/index";
import { MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom';
import App from "./src/components/App";


app.use(express.static('build'));
app.get('/dev', (req, res) =>  {
  //let store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
  //let renderedComponent = renderToString(
  //  <Provider store={store}>
  //    <StaticRouter>
  //      <App />
  //    </StaticRouter>
  //  </Provider>
  //);
  //let html = renderFullPage(renderedComponent, {});
  //res.send(html);
  res.send(process.env.API_KEY);

});

app.use(fallback('index.html', { root }));


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
