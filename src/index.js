import React from 'react';
import ReactDom from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import rootReducer from './reducers/index'


//let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware));
let store = configureStore(window.__PRELOADED_STATE__);

delete window.__PRELOADED_STATE__;

export default function configureStore(initialState) {
  let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), initialState, applyMiddleware(thunkMiddleware));
  return store;
}

const application = document.createElement('div');
document.body.appendChild(application);


const render = (store) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    application
  )
};

render(store);

if (module.hot) {
  module.hot.accept('./components/App', () => render(store));
}
