import React from 'react';
import { Link } from 'react-router-dom';
import * as css from '../styles/movie-card.css';

export class MovieCard extends React.Component {
  render() {
    const { poster, title, year, category, id } = this.props;
    return (
      <Link to={`/film/${id}`} className={css.card}>
        <div className={css.content}>
          <img src={poster}/>
          <div className="clearfix">
            <h4 className={css.title}>{title}</h4>
            {year ? <span className={css.year}>{year}</span> : null}
          </div>
          <span className={css.category}>{category}</span>
        </div>
      </Link>
    )
  }
};
