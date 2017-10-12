import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from '../containers/SearchForm';
import { Sorting } from '../containers/Sorting';
import { MovieList } from './MovieList';
import * as cssList from '../styles/movie-list.css';

export class ListResult extends React.Component {
  render() {
    let movieListBar = this.props.movies.length == 1 ? <span>1 result was found</span> : <span>{this.props.movies.length} results was found</span>;

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
