import React from 'react';
import { Link } from 'react-router-dom';
import { MovieList } from '../components/MovieList';
import { MovieCardDescription } from '../components/MovieCardDescription';
import * as cssList from '../styles/movie-list.css';


export class FilmDescription extends React.Component {
  componentWillMount() {
    this.props.loadMovieInfo(this.props.match.params.filmName);
  }

  componentWillReceiveProps(nextProps) {
    console.log("I am inside");
    if(nextProps.match.params.filmName != this.props.match.params.filmName) {
      console.log("I am here");
      this.props.loadMovieInfo(nextProps.match.params.filmName);
    }
  }

  render() {
    const movieListBar =
      <div className={cssList.resultsContainer + " container"}>
        <div>Films by {this.props.currentMovie.director}</div>
      </div>;

    const emptyMovieListBar = <div className={cssList.resultsContainer + " container"}></div>;

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
            <MovieList movies={this.props.movies}>
              <div className={cssList.resultsBar}>
                { this.props.currentMovie.length ? movieListBar : emptyMovieListBar}
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
