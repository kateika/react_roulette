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
import todos from './movies';
import visibilityFilter from './sorting';

//console.log("1",todos);
//console.log("2",visibilityFilter);
const netflixApp = combineReducers({
  todos,
  visibilityFilter
});

let netflixStore = createStore(netflixApp);
console.log(netflixStore);


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

render({netflixStore});

if (module.hot) {
  module.hot.accept('../containers/App', render);
}
