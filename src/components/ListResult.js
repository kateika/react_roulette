import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from '../containers/SearchForm';
import { Sorting } from '../containers/Sorting';
import { MovieList } from './MovieList';
import * as cssList from '../styles/movie-list.css';

export class ListResult extends React.Component {
  render() {
    const resultQuentity = this.props.movies.length;
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
              <SearchForm />
            </div>
          </header>
          <main>
            <MovieList movies={this.props.movies}>
              { movieListBar }
              <Sorting />
            </MovieList>
          </main>
        </div>
        <footer className="footer">
          <div className="container">
            <h1 className="logo"><Link to="/">netflixroulette</Link></h1>
          </div>
        </footer>
      </div>
    )
  }
};
