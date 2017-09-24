import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDom from 'react-dom';
import App from '../containers/App';
import { ListResult } from '../containers/ListResult';
import { FilmDescription } from '../containers/FilmDescription';


const application = document.createElement('div');
document.body.appendChild(application);


const render = () => {
  ReactDom.render(
    <AppContainer>
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
    </AppContainer>,
    application
  )
};

render();

if (module.hot) {
  module.hot.accept('../containers/App', render);
}
