import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import ReactDom from 'react-dom';
import App from '../containers/App';
import { ListResultContainer } from '../containers/ListResultContainer';
import { FilmDescriptionContainer } from '../containers/FilmDescriptionContainer';
import { SearchBy, SET_SEARCH_BY, SortBy, SET_SORT_BY, SEARCH_INPUT, RECEIVE_MOVIES, RECEIVE_CURRENT_MOVIE } from './actions';
import movies from './movies';
import sorting from './sorting';


const initialState = {
  searchBy: SearchBy.SEARCH_BY_DIRECTOR,
  sortBy: SortBy.SORT_BY_RELEASE_DATE,
  movies: [],
  searchText: ''
};

const app = (state = initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_BY:
      return Object.assign({}, state, {
        searchBy: action.searchBy
      });
    case SET_SORT_BY:
      return Object.assign({}, state, {
        sortBy: action.sortBy
      });
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        movies: action.movies
      });
    case RECEIVE_CURRENT_MOVIE:
      return Object.assign({}, state, {
        currentMovie: action.currentMovie
      });
    case SEARCH_INPUT:
      return Object.assign({}, state, {
        searchText: action.searchText
      });
    default:
      return state
  }
};

let netflixStore = createStore(app, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware));
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
              <Route exact path="/" component={ListResultContainer} />
              <Route exact path="/search" component={ListResultContainer} />
              <Route path="/search/:searchQuery" component={ListResultContainer} />
              <Route path="/film/:filmName" component={FilmDescriptionContainer} />
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
