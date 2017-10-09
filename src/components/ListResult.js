import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from '../containers/SearchForm';
import { Sorting } from '../containers/Sorting';
import { MovieCard } from './MovieCard';
import { MovieList } from './MovieList';
import * as css from '../styles/start-page.css';
import * as cssList from '../styles/movie-list.css';

export class ListResult extends React.Component {

  render() {
    {/*console.log(this.props.movies);*/}
    const movies = this.props.movies.map((movie, index) => {
      return <MovieCard
        title={movie.show_title}
        year={movie.release_year}
        poster={movie.poster}
        category={movie.category}
        key={index}
      />
    });

    const noMovies = <div className={css.container}>No films found</div>;

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
            <MovieList>
              <div className={cssList.resultsBar}>
                { movies.length ? movieListBar : emptyMovieListBar}
              </div>
              <div className="flex container relative">
                { movies.length ? movies : noMovies}
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
