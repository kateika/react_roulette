import React from 'react';
import { Search } from '../components/Search';
import * as startPage from '../styles/start-page.css';

export class StartPage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-wrapper">
          <header className="header">
            <div className="container">
              <div className="top-header">
                <h1 className="logo">netflixroulette</h1>
              </div>
              <Search />
            </div>
          </header>
          <main>
            <div className={startPage.container}>No films found</div>
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
