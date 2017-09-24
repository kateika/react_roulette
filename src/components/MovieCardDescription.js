import React from 'react';
import * as movieCardDescription from '../styles/movie-card-description.css';

export class MovieCardDescription extends React.Component {
  render() {
    const { poster, title, rating, category, year, duration, description, director, cast } = this.props.currentMovie;

    return (
      <article className={movieCardDescription.container + " clearfix"}>
        <img src={poster} className={movieCardDescription.poster}/>
        <div className={movieCardDescription.description}>
          <h4 className={movieCardDescription.title}>{title}</h4>
          <span className={movieCardDescription.rating}>{rating}</span>
          <span className={movieCardDescription.caption}>{category}</span>
          <div className={movieCardDescription.boldCaption}>
            <span className={movieCardDescription.year}>{year}</span>
            <span>{duration} min</span>
          </div>
          <p>{description}</p>
          <small>Director: {director} </small>
          <small>Cast: {cast}</small>
        </div>
      </article>
    )
  }
};

