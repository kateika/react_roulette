import React from "react";
import { Provider } from 'react-redux';
import { renderToString } from "react-dom/server";
//import { StaticRouter } from 'react-router-dom';
//import configureStore from '../index';
import App from "../components/App";
//import csshook from 'css-modules-require-hook/preset' // import hook before routes
//import routes from '/shared/views/routes'


export function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}
//
//export function handleRender(request, response) {
//  const store = configureStore();
//  const context = {};
//  const app = (
//    <Provider store={store}>
//      <StaticRouter location={req.ul} context={context} >
//        <App />
//      </StaticRouter>
//    </Provider>
//  );
//
//  const html = renderToString(app);
//
//  if (context.url) {
//    return response.redirect(context.url);
//  }
//
//  const preloadedState = store.getState();
//
//  return response.send(renderFullPage(html, preloadedState));
//}
