import React from 'react';
import logo from '../images/logo.png';
import * as style from '../styles/style.css';
import { Search } from '../components/Search';
import { MovieList } from '../components/MovieList';
import { MovieCardDescription } from '../components/MovieCardDescription';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>netflixroulette</h1>
          <a href="#">Search button</a>
          <Search />
          or
          <MovieCardDescription />
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
