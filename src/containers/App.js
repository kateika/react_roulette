import React from 'react';
import { ListResult } from './ListResult';
import { FilmDescription } from './FilmDescription';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ListResult />
        {/*<FilmDescription />*/}
      </div>
    )
  }
}
