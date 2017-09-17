import React from 'react';
import * as common from '../styles/common.css';
import { Search } from '../components/Search';
import { MovieList } from '../components/MovieList';

const movies = [
  {
    'title': 'Clara cartoon',
    'poster': 'https://i.ytimg.com/vi/IjN-WsRh0tI/maxresdefault.jpg',
    'year': '2017',
    'genre': 'Animated Movie'
  },
  {
    'title': 'Strange door',
    'poster': 'http://dreamicus.com/data/door/door-03.jpg',
    'year': '2007',
    'genre': 'Horror Movie'
  }
];

export class ListResult extends React.Component {
  render() {
    return (
      <div>
        <div className={common.pageWrapper}>
          <header className={common.header}>
            <div className={common.container}>
              <div className={common.topHeader}>
                <h1 className={common.logo}>netflixroulette</h1>
              </div>
              <Search />
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
};
