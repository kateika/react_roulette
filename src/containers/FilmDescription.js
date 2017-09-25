import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../components/Search';
import { MovieList } from '../components/MovieList';
import { MovieCardDescription } from '../components/MovieCardDescription';

const movies = [{
  'title': 'How to train a dragon',
  'poster': 'http://static.rogerebert.com/uploads/movie/movie_poster/how-to-train-your-dragon-2010/large_zMAm3WYmvD40FaWFsOmpicQFabz.jpg',
  'year': '2014',
  'genre': 'Cartoon',
  'rating': '4.8'
},
{
  'title': 'Lilo and Stitch',
  'poster': 'https://images-na.ssl-images-amazon.com/images/I/51wi%2BQtyubL._SY450_.jpg',
  'year': '2002',
  'genre': 'Cartoon',
  'rating': '4.3'
}];

export class FilmDescription extends React.Component {
  constructor(props) {
    super();
    this.state = { movie: {} };
    let urlParams = new URLSearchParams();
    urlParams.append("title", props.match.params.filmName);
    fetch("https://netflixroulette.net/api/api.php?" + urlParams.toString())
      .then(res => res.json())
      .then(movie =>
        this.setState({
          movie
        }));
  }
  render() {
    return (
      <div>
        <div className="page-wrapper">
          <header className="header">
            <div className="container">
              <div className="top-header clearfix">
                <h1 className="logo"><Link to="/">netflixroulette</Link></h1>
                <Link to="/search" className="btn secondary-btn">Search</Link>
              </div>
              <MovieCardDescription currentMovie={this.state.movie} />
            </div>
          </header>
          <main>
            <MovieList movies={movies}/>
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
