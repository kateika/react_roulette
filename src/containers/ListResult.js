import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../components/Search';
import { MovieList } from '../components/MovieList';

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
    return (
      <div>
        <div className="page-wrapper">
          <header className="header">
            <div className="container">
              <div className="top-header">
                <h1 className="logo"><Link to="/">netflixroulette</Link></h1>
              </div>
              <Search />
            </div>
          </header>
          <main>
            <MovieList movies={this.state.movies}/>
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
