import React from 'react';
// import logo from '../images/marvel-logo.png';
import * as style from '../styles/style.css';
import { MovieList } from '../components/MovieList';
import { MovieCardDescription } from '../components/MovieCardDescription';


export class FilmDescription extends React.Component {
  render() {
    return (
      <div>
        <div className="headerContainer">
            <header>
                <h1>netflixroulette</h1>
                <a href="#">Search button</a>
                <MovieCardDescription />
            </header>
        </div>
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
