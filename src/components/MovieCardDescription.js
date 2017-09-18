import React from 'react';

export class MovieCardDescription extends React.Component {
  render() {
    const { poster, title, rating, category, year, duration, description, director, cast } = this.props.currentMovie;
    return (
      <article className="movieCardDescription" style={{backgroundColor: 'lightblue'}}>
        <img src={poster} width="500"/>
        <div>
          <h4>{title}</h4>
          <span>{rating} </span>
          <span>{category}</span>
          <div>
            <span>{year} </span>
            <span>{duration} min</span>
          </div>
          <p>{description}</p>
          <small>{director} </small>
          <small>{cast}</small>
        </div>
      </article>
    )
  }
};

