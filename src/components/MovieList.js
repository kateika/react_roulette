import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { MovieListBar } from '../components/MovieListBar';
import * as startPage from '../styles/start-page.css';


export class MovieList extends React.Component {
  render() {
    const movies = this.props.movies.map((movie, index) => {
      return <MovieCard
        title={movie.title}
        year={movie.year}
        poster={movie.poster}
        genre={movie.genre}
        key={index}
      />
    });
    const noMovies = <div className={startPage.container}>No films found</div>;
    return (
      <div>
        <MovieListBar />
        <div className="flex container">
          { movies.length ? movies : noMovies}
        </div>
      </div>
    )
  }
};
