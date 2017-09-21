import React from 'react';
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

const movieWithDescr = {
  'title': 'Clara',
  'poster': 'https://i.pinimg.com/originals/83/0d/80/830d8038e1a86fe740514f8427c40be9.jpg',
  'year': '2014',
  'genre': 'Cartoon',
  'rating': '4.8',
  'duration': '120',
  'description': 'This is description for Clara cartoon',
  'director': 'Someone',
  'cast': 'dragon, girl',
  'category': 'Oscar-winning movie'
};

export class FilmDescription extends React.Component {
  render() {
    return (
      <div>
        <div className="page-wrapper">
          <header className="header">
            <div className="container">
              <div className="top-header clearfix">
                <h1 className="logo">netflixroulette</h1>
                <a href="#" className="btn secondary-btn">Search</a>
              </div>
              <MovieCardDescription currentMovie={movieWithDescr} />
            </div>
          </header>
          <main>
            <MovieList movies={movies}/>
          </main>
        </div>
        <footer className="footer">
          <div className="container">
            <h1 className="logo">netflixroulette</h1>
          </div>
        </footer>
      </div>
    )
  }
};
