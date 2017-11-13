import Perf from 'react-addons-perf';
import React from 'react';
import ReactDom from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import { renderRoutes } from 'react-router-config';

import routes from "./routes";
import rootReducer from './reducers/index';
import ScrollToTop from './components/ScrollToTop';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, window.__PRELOADED_STATE__, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

delete window.__PRELOADED_STATE__;

const application = document.getElementById('root');

const render = (store) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            {renderRoutes(routes)}
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    application
  );
};

render(store);

if (module.hot) {
  module.hot.accept('./routes.js', () => render(store));
}
