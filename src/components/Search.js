import React from 'react';
import * as css from '../styles/search.css';

export class Search extends React.Component {
  render() {
    return (
      <div className={css.searchContainer}>
        <h2 className={css.title}>Find your movie</h2>
        <form method="post" action="./" className="clearfix">
          <div>
            <input type="search" />
          </div>
          <div className={css.choice}>
            <span>Search by</span>
            <a href="#" className="btn btn-active">title</a>
            <a href="#" className="btn">director</a>
          </div>
          <div className={css.submitContainer}>
            <input type="submit" value="search" className="btn"/>
          </div>
        </form>
      </div>
    )
  }
};

