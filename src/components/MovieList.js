import React from 'react';
import { MovieCard } from './MovieCard';
import css from '../styles/start-page.css';
import cssList from '../styles/movie-list.css';

export function MovieList(props) {
  const movies = props.movies.map((movie, index) => {
    return <MovieCard
      title={movie.title}
      release_date={extractYear(movie.release_date)}
      poster={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster}`}
      id={movie.id}
      type={movie.type}
      key={index}
    />
  });

  const noMovies = <div className={css.container}>No films found</div>;

  return (
    <div>
      <div className={cssList.resultsBar}>
        <div className={cssList.resultsContainer + " container"}>
          {movies.length ? props.children : null}
        </div>
      </div>
      <div className="flex container relative">
        { movies.length ? movies : noMovies}
      </div>
    </div>
  )
};

function extractYear(dateString) {
  if(dateString) {
    let year = dateString.slice(0,4);
    return year;
  }
}
