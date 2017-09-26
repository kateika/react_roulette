import React from 'react';
import * as css from '../styles/movie-list.css';

export class MovieListBar extends React.Component {
  render() {
    return (
      <div className={css.resultsBar}>
        <div className={css.resultsContainer + " container"}>
          {this.props.length == 1 ? <span>1 result was found</span> : <span>{this.props.length} results was found</span>}
          <div className={css.sorting}>
            <span>Sort by:</span>
            <a href="#">release date</a>
            <a href="#" className={css.linkActive}>rating</a>
          </div>
        </div>
      </div>
    )
  }
};
