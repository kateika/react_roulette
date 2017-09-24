import React from 'react';
import * as search from '../styles/search.css';

export class Search extends React.Component {
  render() {
    return (
      <div className={search.searchContainer}>
        <h2 className={search.title}>Find your movie</h2>
        <form method="post" action="./" className="clearfix">
          <div>
            <input type="search" />
          </div>
          <div className={search.choice}>
            <span>Search by</span>
            <a href="#" className="btn btn-active">title</a>
            <a href="#" className="btn">director</a>
          </div>
          <div className={search.submitContainer}>
            <input type="submit" value="search" className="btn"/>
          </div>
        </form>
      </div>
    )
  }
};

