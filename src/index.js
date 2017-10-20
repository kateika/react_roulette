import React from 'react';
import ReactDom from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './components/App';
import rootReducer from './reducers/index'


let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware));


const application = document.createElement('div');
document.body.appendChild(application);


const render = (store) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    application
  )
};

render(store);

if (module.hot) {
  module.hot.accept('./components/App', () => render(store));
}
