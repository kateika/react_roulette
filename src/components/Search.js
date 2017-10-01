import React from 'react';
import { SearchBy } from '../reducers/actions';
import * as css from '../styles/search.css';

export class Search extends React.Component {
  render() {
    const searchByTitle = (searchBy) => {
      if(searchBy === SearchBy.SEARCH_BY_TITLE) {
        return <button type="button" className="btn btn-active">title</button>
      } else {
        return <button
          type="button"
          onClick={ () => this.props.onClick(SearchBy.SEARCH_BY_TITLE) }
          className="btn">title</button>        
      }
    }

    const searchByDirector = (searchBy) => {
      if(searchBy === SearchBy.SEARCH_BY_DIRECTOR) {
        return <button type="button" className="btn btn-active">director</button>
      } else {
        return <button
          type="button"
          onClick={ () => this.props.onClick(SearchBy.SEARCH_BY_DIRECTOR) }
          className="btn">director</button>        
      }
    }

    return (
      <div className={css.searchContainer}>
        <h2 className={css.title}>Find your movie</h2>
        <form method="post" action="./" className="clearfix">
          <div>
            <input type="search" />
          </div>
          <div className={css.choice}>
            <span>Search by</span>
            {searchByTitle(this.props.searchBy)}
            {searchByDirector(this.props.searchBy)}
          </div>
          <div className={css.submitContainer}>
            <input type="submit" value="search" className="btn"/>
          </div>
        </form>
      </div>
    )
  }
};

