import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/normalize.css';
import  '../styles/common.css';
import ListResultContainer from '../containers/ListResultContainer';
import FilmDescriptionContainer from '../containers/FilmDescriptionContainer';
import NotFound from '../components/NotFound';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ListResultContainer} />
      <Route exact path="/search" component={ListResultContainer} />
      <Route path="/search/:searchQuery" component={ListResultContainer} />
      <Route path="/:type/:filmId/" component={FilmDescriptionContainer} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}
