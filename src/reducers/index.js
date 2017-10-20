import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import searchBy from './searchBy';
import sortBy from './sortBy';
import movies from './movies';
import currentMovie from './currentMovie';
import relatedMovies from './relatedMovies';
import searchText from './searchText';

import ReactDom from 'react-dom';
import App from '../containers/App';
import { ListResultContainer } from '../containers/ListResultContainer';
import { FilmDescriptionContainer } from '../containers/FilmDescriptionContainer';
import NotFound from '../components/NotFound';

let reducer = combineReducers({
  searchBy,
  sortBy,
  movies,
  currentMovie,
  relatedMovies,
  searchText
});


let app = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware));
//let netflixStore = createStore(app, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware));
// let netflixStore = createStore(netflixApp);


const application = document.createElement('div');
document.body.appendChild(application);


const render = (app) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={app}>
        <Router>
          <App>
            <Switch>
              <Route exact path="/" component={ListResultContainer} />
              <Route exact path="/search" component={ListResultContainer} />
              <Route path="/search/:searchQuery" component={ListResultContainer} />
              <Route path="/:type/:filmId/" component={FilmDescriptionContainer} />
              <Route path="*" component={NotFound} />
            </Switch>
          </App>
        </Router>
      </Provider>
    </AppContainer>,
    application
  )
};

render(app);

if (module.hot) {
  module.hot.accept('../containers/App', () => render(app));
}
