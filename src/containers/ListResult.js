import React from 'react';
import * as normalize from '../styles/normalize.css';
import * as common from '../styles/common.css';
import { Search } from '../components/Search';
import { MovieList } from '../components/MovieList';


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
            <MovieList />
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
