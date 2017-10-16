import React from 'react';
import * as css from '../styles/movie-card-description.css';

export class MovieCardDescription extends React.Component {
  render() {
    const { poster_path, title, vote_average, release_date, runtime, overview, budget } = this.props.currentMovie;

    return (
      <article className={css.container + " clearfix"}>
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`} className={css.poster}/>
        <div className={css.description}>
          <h4 className={css.title}>{title}</h4>
          <span className={css.rating}>{vote_average}</span>
          <div className={css.boldCaption}>
            <span className={css.year}>{release_date}</span>
            <span>{runtime} min</span>
          </div>
          <p>{overview}</p>
          { budget ? <span className={css.caption}>Budget is {budget}$</span> : null }
        </div>
      </article>
    )
  }
};

