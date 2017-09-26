import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { MovieListBar } from '../components/MovieListBar';
import * as css from '../styles/start-page.css';


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
        <MovieListBar length={movies.length}/>
        <div className="flex container">
          { movies.length ? movies : noMovies}
        </div>
      </div>
    )
  }
};
