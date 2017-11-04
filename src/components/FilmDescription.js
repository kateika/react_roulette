import React from 'react';
import { Link } from 'react-router-dom';
import { MovieList } from './MovieList';
import { MovieCardDescription } from './MovieCardDescription';


export class FilmDescription extends React.Component {
  //static fetchData(store) {
  //  return store.dispatch(props.loadMovieInfo(props.match.params.filmId, props.match.params.type));
  //}

  componentWillMount() {
    this.props.loadMovieInfo(this.props.match.params.filmId, this.props.match.params.type);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.filmId != this.props.match.params.filmId) {
      this.props.loadMovieInfo(nextProps.match.params.filmId, this.props.match.params.type);
    }
  }

  render() {
    let movieListBar = `Films by ${this.props.currentMovie.director}`;
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
              {this.props.currentMovie.director ? movieListBar : null}
            </MovieList>
          </main>
        </div>
        <footer className="footer">
          <div className="container">
            <h1 className="logo"><Link to="/">netflixroulette</Link></h1>
            <span className="api-logo">This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
          </div>
        </footer>
      </div>
    )
  }
};
