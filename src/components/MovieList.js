import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { MovieListBar } from '../components/MovieListBar';

export class MovieList extends React.Component {
  render() {
    return (
      <div className="movieList">
        <MovieListBar />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    )
  }
};
