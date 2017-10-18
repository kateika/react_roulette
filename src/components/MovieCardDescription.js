import React from 'react';
import * as css from '../styles/movie-card-description.css';

export class MovieCardDescription extends React.Component {
  render() {
    const { poster, title, vote_average, release_date, runtime, overview, budget, seasons, last_air_date } = this.props.currentMovie;
    const rating = <div className={css.ratingCircle}>
                     <span className={css.rating}>{vote_average}</span>
                   </div>;
    return (
      <article className={css.container + " clearfix"}>
        {poster ? <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster}`} className={css.poster}/> : null}
        <div className={css.description}>
          <h4 className={css.title}>{title}
            { vote_average ? rating : null }
          </h4>

          <div className={css.boldCaption}>
            { release_date ? <span className={css.year}>{release_date}</span> : null }
            { runtime ? <span>{runtime} min</span> : null }
          </div>
          <p>{overview}</p>
          { budget ? <span className={css.caption}>Budget is {budget}$</span> : null }
          { seasons ? <span className={css.caption}>Seasons: {seasons}</span> : null }
          { last_air_date ? <span className={css.caption}>Last air date: {last_air_date}</span> : null }
        </div>
      </article>
    )
  }
};

