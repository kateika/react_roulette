import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from '../components/MovieCard';
import { MovieList } from '../components/MovieList';
import { MovieCardDescription } from '../components/MovieCardDescription';
import * as css from '../styles/start-page.css';
import * as cssList from '../styles/movie-list.css';

const moviesEx = [{
  'title': 'How to train a dragon',
  'poster': 'http://static.rogerebert.com/uploads/movie/movie_poster/how-to-train-your-dragon-2010/large_zMAm3WYmvD40FaWFsOmpicQFabz.jpg',
  'release_year': '2014',
  'category': 'Cartoon',
  'rating': '4.8'
},
{
  'title': 'Lilo and Stitch',
  'poster': 'https://images-na.ssl-images-amazon.com/images/I/51wi%2BQtyubL._SY450_.jpg',
  'release_year': '2002',
  'category': 'Cartoon',
  'rating': '4.3'
}];

export class FilmDescription extends React.Component {
  componentWillMount() {
    this.props.loadMovieInfo(this.props.match.params.filmName);
  }
  render() {
    const movies = moviesEx.map((movie, index) => {
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
        {this.props.movies.director ? <div>Films by {this.props.movies.director}</div> : ""}
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
              <MovieCardDescription currentMovie={this.props.movies} />
            </div>
          </header>
          <main>
            <MovieList>
              <div className={cssList.resultsBar}>
                { movieListBar }
              </div>
              <div className="flex container relative">
                { movies }
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
