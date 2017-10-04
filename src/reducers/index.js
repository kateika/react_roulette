import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux'
import ReactDom from 'react-dom';
import App from '../containers/App';
import { ListResult } from '../containers/ListResult';
import { FilmDescription } from '../containers/FilmDescription';
import { SearchBy, SET_SEARCH_BY, SortBy, SET_SORT_BY } from './actions';
import movies from './movies';
import sorting from './sorting';


const initialState = {
  searchBy: SearchBy.SEARCH_BY_DIRECTOR,
  sortBy: SortBy.SORT_BY_RELEASE_DATE
};

const app = (state = initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_BY:
      return Object.assign({}, state, {
        searchBy: action.searchBy
      })
    case SET_SORT_BY:
      return Object.assign({}, state, {
        sortBy: action.sortBy
      })
    default:
      return state
  }
}

let netflixStore = createStore(app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// let netflixStore = createStore(netflixApp);


const application = document.createElement('div');
document.body.appendChild(application);


const render = (netflixStore) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={netflixStore}>
        <Router>
          <App>
            <Switch>
              <Route exact path="/" component={ListResult} />
              <Route exact path="/search" component={ListResult} />
              <Route path="/search/:searchQuery" component={ListResult} />
              <Route path="/film/:filmName" component={FilmDescription} />
            </Switch>
          </App>
        </Router>
      </Provider>
    </AppContainer>,
    application
  )
};

render(netflixStore);

if (module.hot) {
  module.hot.accept('../containers/App', () => render(netflixStore));
}
