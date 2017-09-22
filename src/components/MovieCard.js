import React from 'react';
import { Link } from 'react-router-dom';
import * as movieCard from '../styles/movie-card.css';

export class MovieCard extends React.Component {
  render() {
    const { poster, title, year, genre } = this.props;
    return (
      <Link to="/film" className={movieCard.card}>
        <div className={movieCard.content}>
          <img src={poster}/>
          <div className="clearfix">
            <h4 className={movieCard.title}>{title}</h4>
            <span className={movieCard.year}>{year}</span>
          </div>
          <span className={movieCard.genre}>{genre}</span>
        </div>
      </Link>
    )
  }
};
