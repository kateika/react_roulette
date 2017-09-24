import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../components/Search';
import { MovieList } from '../components/MovieList';

const movies = [
  {
    'title': 'Clara cartoon',
    'poster': 'https://i.pinimg.com/736x/c1/ab/78/c1ab782b93344350aa968604dbfdc9d8--fun-recipes-jodie-foster.jpg',
    'year': '2017',
    'genre': 'Animated Movie'
  },
  {
    'title': 'Strange door very big movie name!',
    'poster': 'https://upload.wikimedia.org/wikipedia/en/4/4d/This_Gun_For_Hire_movie_poster.jpg',
    'year': '2007',
    'genre': 'Horror Movie'
  },
  {
    'title': 'Clara cartoon',
    'poster': 'https://i.pinimg.com/originals/24/51/0c/24510c2b8182ce92589586acd586401a.jpg',
    'year': '2017',
    'genre': 'Animated Movie'
  },
  {
    'title': 'Strange door',
    'poster': 'https://i.pinimg.com/736x/c5/3e/b0/c53eb0e8c0d133c414f73bbc6c22f80e--srk-movies-upcoming-movies.jpg',
    'year': '2007',
    'genre': 'Horror Movie'
  },
  {
    'title': 'Clara cartoon',
    'poster': 'https://i.pinimg.com/736x/c1/ab/78/c1ab782b93344350aa968604dbfdc9d8--fun-recipes-jodie-foster.jpg',
    'year': '2017',
    'genre': 'Animated Movie'
  },
  {
    'title': 'Clara cartoon',
    'poster': 'https://i.pinimg.com/originals/24/51/0c/24510c2b8182ce92589586acd586401a.jpg',
    'year': '2017',
    'genre': 'Animated Movie'
  },
  {
    'title': 'Strange door',
    'poster': 'https://upload.wikimedia.org/wikipedia/en/4/4d/This_Gun_For_Hire_movie_poster.jpg',
    'year': '2007',
    'genre': 'Horror Movie'
  }
];

export class ListResult extends React.Component {
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
            <span style={{fontSize: "26px", color: "pink"}}>{this.props.match.params.searchQuery}</span>
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
