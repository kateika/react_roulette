import React from 'react';
import '../styles/normalize.css';
import  '../styles/common.css';
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
