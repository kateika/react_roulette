import React from 'react';
import { Link } from 'react-router-dom';
import * as css from '../styles/movie-card.css';

export class MovieCard extends React.Component {
  render() {
    const { poster, title, release_date, id } = this.props;
    return (
      <Link to={`/film/${id}`} className={css.card}>
        <div className={css.content}>
          <img src={poster}/>
          <div className="clearfix">
            <h4 className={css.title}>{title}</h4>
            {release_date ? <span className={css.year}>{release_date}</span> : null}
          </div>
        </div>
      </Link>
    )
  }
};
