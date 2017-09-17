import React from 'react';
import * as normalize from '../styles/normalize.css';
import * as common from '../styles/common.css';
import { Search } from '../components/Search';
import { MovieList } from '../components/MovieList';
import { MovieCardDescription } from '../components/MovieCardDescription';

const movies = [{
  'title': 'How to train a dragon',
  'poster': 'http://cdn.collider.com/wp-content/uploads/how-to-train-your-dragon-riders-of-berk-logo.jpg',
  'year': '2014',
  'genre': 'Cartoon',
  'rating': '4.8'
},
{
  'title': 'Lilo and Stitch',
  'poster': 'https://img06.deviantart.net/1b14/i/2004/312/5/c/lilo_stitch_colour_practice_2_by_dragonix.jpg',
  'year': '2002',
  'genre': 'Cartoon',
  'rating': '4.3'
}];

const movieWithDescr = {
  'title': 'Clara',
  'poster': 'https://i.ytimg.com/vi/IjN-WsRh0tI/maxresdefault.jpg',
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
        <div className={common.pageWrapper}>
          <header className={common.header}>
            <div className={common.container}>
              <div className={common.topHeader}>
                <h1 className={common.logo}>netflixroulette</h1>
                <a href="#">Search button</a>              
              </div>
              <MovieCardDescription currentMovie={movieWithDescr} />
            </div>
          </header>
          <main>
            <MovieList movies={movies}/>
          </main>
        </div>
        <footer className={common.footer}>
          <div className={common.container}>
            <h1 className={common.logo}>netflixroulette</h1>
          </div>
        </footer>
      </div>
    )
  }
}
