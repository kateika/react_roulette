import React from 'react';
import * as common from '../styles/common.css';
import * as search from '../styles/search.css';

export class Search extends React.Component {
  render() {
    return (
      <div className={search.searchContainer}>
        <h2 className={search.title}>Find your movie</h2>
        <form method="post" action="./" className={common.clearfix}>
          <div>
            <input type="search" />
          </div>
          <div className={search.choice}>
            <span>Search by</span>
            <a href="#" className={common.btn + " " + common.btnActive}>title</a>
            <a href="#" className={common.btn}>director</a>
          </div>
          <div className={search.submitContainer}>
            <input type="submit" value="search" className={common.btn}/>
          </div>
        </form>
      </div>
    )
  }
};

