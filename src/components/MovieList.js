import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { MovieListBar } from '../components/MovieListBar';

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
    
    return (
      <div className="movieList">
        <MovieListBar />
        {movies}
      </div>
    )
  }
};
