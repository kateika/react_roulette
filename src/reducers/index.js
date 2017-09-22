import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDom from 'react-dom';
import App from '../containers/App';
import { ListResult } from '../containers/ListResult';
import { FilmDescription } from '../containers/FilmDescription';
import { StartPage } from '../containers/StartPage';


const application = document.createElement('div');
document.body.appendChild(application);


const render = () => {
  ReactDom.render(
    <AppContainer>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route path="/search" component={ListResult} />
            <Route path="/film" component={FilmDescription} />
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
