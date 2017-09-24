import React from 'react';
import * as movieList from '../styles/movie-list.css';

export class MovieListBar extends React.Component {
  render() {
    return (
      <div className={movieList.resultsBar}>
        <div className={movieList.resultsContainer + " container"}>
          <span>7 results found. Write js for it</span>
          <div className={movieList.sorting}>
            <span>Sort by:</span>
            <a href="#">release date</a>
            <a href="#" className={movieList.linkActive}>rating</a>
          </div>
        </div>
      </div>
    )
  }
};
