import React from 'react';
import { MovieCard } from './MovieCard';
import * as css from '../styles/start-page.css';
import * as cssList from '../styles/movie-list.css';

export class MovieList extends React.Component {
  render() {
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

    return (
      <div>
        <div className={cssList.resultsBar}>
          <div className={cssList.resultsContainer + " container"}>
            {movies.length ? this.props.children : null}
          </div>
        </div>
        <div className="flex container relative">
          { movies.length ? movies : noMovies}
        </div>
      </div>
    )
  }
};
