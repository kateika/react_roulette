import React from 'react';
import css from '../styles/search.css';
import { Field } from 'redux-form'

export function Search(props) {
  let searchByMovies;
  if(props.isMoviesActive) {
    searchByMovies = <button type="button" className="btn btn-active">movies</button>
  } else {
    searchByMovies = <button
      type="button"
      onClick={props.onMoviesClick}
      className="btn">movies</button>
  }

  let searchByDirector;
  if(props.isTVShowActive) {
    searchByDirector = <button type="button" className="btn btn-active">tv shows</button>
  } else {
    searchByDirector = <button type="button"
      onClick={props.onDirectorClick}
      className="btn">tv shows</button>
  }

  return (
    <div className={css.searchContainer}>
      <h2 className={css.title}>Find your movie</h2>
      <form className="clearfix" onSubmit={props.handleSubmit(props.onSubmitSearch)}>
        <div>
          <label>
            <Field type="search" component="input" name="searchText"/>
          </label>
        </div>
        <div className={css.choice}>
          <span>Search by</span>
          {searchByMovies}
          {searchByDirector}
        </div>
        <div className={css.submitContainer}>
          <label>
            <input type="submit" value="search" className="btn"/>
          </label>
        </div>
      </form>
    </div>
  )
};

