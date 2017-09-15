import React from 'react';
import * as normalize from '../styles/normalize.css';
import * as search from '../styles/search.css';

export class Search extends React.Component {
  render() {
    return (
      <div className={search.searchContainer}>
        <h2 className={search.title}>Find your movie</h2>
        <form method="post" action="./" className={normalize.clearfix}>
          <div>
            <input type="search" />
          </div>
          <div className={search.choice}>
            <span>Search by</span>
            <a href="#" className={search.btn + " " + search.btnActive}>title</a>
            <a href="#" className={search.btn}>director</a>
          </div>
          <div className={search.submitContainer}>
            <input type="submit" value="search" className={search.btn}/>
          </div>
        </form>
      </div>
    )
  }
};

