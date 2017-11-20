import React from 'react';
import { Link } from 'react-router-dom';
import { SearchContainer } from '../containers/SearchContainer';
import { SortingContainer } from '../containers/SortingContainer';
import { MovieList } from './MovieList';

export function ListResult(props) {
  const resultQuentity = props.movies.length;
  const results = resultQuentity == 1 ? "result" : "results";
  const movieListBar =  <span>{resultQuentity} {results} was found</span>;

  return (
    <div>
      <div className="page-wrapper">
        <header className="header">
          <div className="container">
            <div className="top-header">
              <h1 className="logo"><Link to="/">netflixroulette</Link></h1>
            </div>
            <SearchContainer />
          </div>
        </header>
        <main>
          <MovieList movies={props.movies}>
            { movieListBar }
            <SortingContainer />
          </MovieList>
        </main>
      </div>
      <footer className="footer">
        <div className="container">
          <h1 className="logo"><Link to="/">netflixroulette</Link></h1>
          <span className="api-logo">This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
        </div>
      </footer>
    </div>
  )
};
