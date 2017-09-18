import React from 'react';
import * as normalize from '../styles/normalize.css';
import { ListResult } from './ListResult';
import { FilmDescription } from './FilmDescription';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ListResult /> */}
        <FilmDescription />
      </div>
    )
  }
}
