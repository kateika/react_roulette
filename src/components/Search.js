import React from 'react';
import * as css from '../styles/search.css';
import { Field } from 'redux-form'

export class Search extends React.Component {
  render() {
    let searchByMovies;
    if(this.props.isMoviesActive) {
      searchByMovies = <button type="button" className="btn btn-active">movies</button>
    } else {
      searchByMovies = <button
        type="button"
        onClick={this.props.onMoviesClick}
        className="btn">movies</button>
    }

    let searchByDirector;
    if(this.props.isTVShowActive) {
      searchByDirector = <button type="button" className="btn btn-active">tv shows</button>
    } else {
      searchByDirector = <button type="button"
        onClick={this.props.onDirectorClick}
        className="btn">tv shows</button>
    }

    return (
      <div className={css.searchContainer}>
        <h2 className={css.title}>Find your movie</h2>
        <form className="clearfix">
          <div>
            <label>
              <Field type="search" component="input" name="searchText" value={this.props.searchText} onChange={this.props.onSearchChange}/>
            </label>
          </div>
          <div className={css.choice}>
            <span>Search by</span>
            {searchByMovies}
            {searchByDirector}
          </div>
          <div className={css.submitContainer}>
            <label>
              <input type="submit" value="search" className="btn" onClick={this.props.onSubmitSearch}/>
            </label>
          </div>
        </form>
      </div>
    )
  }
};

