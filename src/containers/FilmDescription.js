import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from '../components/MovieCard';
import { MovieList } from '../components/MovieList';
import { MovieCardDescription } from '../components/MovieCardDescription';
import * as css from '../styles/start-page.css';
import * as cssList from '../styles/movie-list.css';


export class FilmDescription extends React.Component {
  componentWillMount() {
    this.props.loadMovieInfo(this.props.match.params.filmName);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.filmName != this.props.match.params.filmName) {
      this.props.loadMovieInfo(nextProps.match.params.filmName);
    }
  }

  render() {
    const relatedMovies = this.props.movies.map((movie, index) => {
      return <MovieCard
        title={movie.show_title}
        year={movie.release_year}
        poster={movie.poster}
        category={movie.category}
        key={index}
      />
    });

    const movieListBar =
      <div className={cssList.resultsContainer + " container"}>
        {this.props.currentMovie.director ? <div>Films by {this.props.currentMovie.director}</div> : ""}
      </div>;

    return (
      <div>
        <div className="page-wrapper">
          <header className="header">
            <div className="container">
              <div className="top-header clearfix">
                <h1 className="logo"><Link to="/">netflixroulette</Link></h1>
                <Link to="/search" className="btn secondary-btn">Search</Link>
              </div>
              <MovieCardDescription currentMovie={this.props.currentMovie} />
            </div>
          </header>
          <main>
            <MovieList>
              <div className={cssList.resultsBar}>
                { movieListBar }
              </div>
              <div className="flex container relative">
                { relatedMovies }
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
