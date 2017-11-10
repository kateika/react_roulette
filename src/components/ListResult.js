import React from 'react';
import { Link } from 'react-router-dom';
import { SearchContainer } from '../containers/SearchContainer';
import { SortingContainer } from '../containers/SortingContainer';
import { MovieList } from './MovieList';
import { fetchMovies } from '../actions/index';


export class ListResult extends React.Component {
  static fetchData(store, match) {
    return store.dispatch(fetchMovies(match.params.searchQuery));
  }

  componentDidMount() {
    if(this.props.match.params.searchQuery === undefined) return;
    this.props.onSubmitSearch(this.props.match.params.searchQuery);
    this.props.updateSearchValue(this.props.match.params.searchQuery);
  }


  render() {
    const resultQuentity = this.props.movies.length;
    const results = resultQuentity == 1 ? "result" : "results";
    const movieListBar =  <span>{resultQuentity} {results} was found</span>;

    return (
      <div>
        <div className="page-wrapper">
          <header className="header">
            <div className="container">
              <div className="top-header">
                <h1 className="logo"><Link to="/">netflixroulette</Link></h1>
              </div>
              <SearchContainer searchQuery={this.props.match.params.searchQuery} />
            </div>
          </header>
          <main>
            <MovieList movies={this.props.movies}>
              { movieListBar }
              <SortingContainer />
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
