import React from 'react';
import { Link } from 'react-router-dom';
import { MovieList } from './MovieList';
import { MovieCardDescription } from './MovieCardDescription';
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
    let movieListBar = '';

    if (this.props.currentMovie.director) {
      movieListBar = <div className={cssList.resultsContainer + " container"}>Films by {this.props.currentMovie.director}</div>
    }

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
            <MovieList movies={this.props.relatedMovies}>
              { movieListBar }
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
