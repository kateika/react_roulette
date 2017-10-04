import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { Sorting } from './Sorting';
import { MovieCard } from '../components/MovieCard';
import { MovieList } from '../components/MovieList';
import * as css from '../styles/start-page.css';
import * as cssList from '../styles/movie-list.css';

export class ListResult extends React.Component {
  constructor(props) {
    super();
    this.state = { movies: [] };
    let urlParams = new URLSearchParams();
    urlParams.append("director", props.match.params.searchQuery);
    fetch("https://netflixroulette.net/api/api.php?" + urlParams.toString())
      .then(res => res.json())
      .then(movies =>
        this.setState({
          movies
        })
      );
  }

  render() {
    const movies = this.state.movies.map((movie, index) => {
      return <MovieCard
        title={movie.show_title}
        year={movie.release_year}
        poster={movie.poster}
        category={movie.category}
        key={index}
      />
    });

    const noMovies = <div className={css.container}>No films found</div>;

    const movieListBar =
      <div className={cssList.resultsContainer + " container"}>
        {this.state.movies.length == 1 ? <span>1 result was found</span> : <span>{this.state.movies.length} results was found</span>}
        <Sorting />
      </div>;

    const emptyMovieListBar = <div className={cssList.resultsContainer + " container"}></div>;

    return (
      <div>
        <div className="page-wrapper">
          <header className="header">
            <div className="container">
              <div className="top-header">
                <h1 className="logo"><Link to="/">netflixroulette</Link></h1>
              </div>
              <SearchForm />
            </div>
          </header>
          <main>
            <MovieList>
              <div className={cssList.resultsBar}>
                { movies.length ? movieListBar : emptyMovieListBar}
              </div>
              <div className="flex container relative">
                { movies.length ? movies : noMovies}
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
