import React from 'react';
// import logo from '../images/marvel-logo.png';
import * as style from '../styles/style.css';
import { Search } from '../components/Search';
import { MovieList } from '../components/MovieList';

console.log(style);
export class ListResult extends React.Component {
  render() {
    return (
      <div>
        <header className={style.header}>
            <div className={style.headerContentWrapper}>
                <h1>netflixroulette</h1>
                <Search />
            </div>
        </header>
        <main>
          <MovieList />
        </main>
        <footer style={{backgroundColor: 'gray'}}>
          <h1>netflixroulette</h1>
        </footer>
      </div>
    )
  }
}