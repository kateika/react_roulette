import React from 'react';
import * as css from '../styles/movie-card-description.css';

export class MovieCardDescription extends React.Component {
  render() {
    const { poster, show_title, rating, category, release_year, runtime, summary, director, show_cast } = this.props.currentMovie;

    return (
      <article className={css.container + " clearfix"}>
        <img src={poster} className={css.poster}/>
        <div className={css.description}>
          <h4 className={css.title}>{show_title}</h4>
          <span className={css.rating}>{rating}</span>
          <span className={css.caption}>{category}</span>
          <div className={css.boldCaption}>
            <span className={css.year}>{release_year}</span>
            <span>{runtime}</span>
          </div>
          <p>{summary}</p>
          {director ? <small>Director: {director} </small> : ""}
          {show_cast ? <small>Cast: {show_cast} </small> : ""}
        </div>
      </article>
    )
  }
};

