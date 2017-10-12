import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from '../containers/SearchForm';
import { Sorting } from '../containers/Sorting';
import { MovieList } from './MovieList';
import * as css from '../styles/start-page.css';
import * as cssList from '../styles/movie-list.css';

export class ListResult extends React.Component {
  render() {
    const movieListBar =
      <div className={cssList.resultsContainer + " container"}>
        {this.props.movies.length == 1 ? <span>1 result was found</span> : <span>{this.props.movies.length} results was found</span>}
        <Sorting />
      </div>;

    const emptyMovieListBar = <div className={cssList.resultsContainer + " container"}></div>;

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
              <div className={cssList.resultsBar}>
                { this.props.movies.length ? movieListBar : emptyMovieListBar}
              </div>
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
