import React from 'react';

export class MovieCardDescription extends React.Component {
  render() {
    return (
      <article className="movieCardDescription" style={{backgroundColor: 'lightblue'}}>
        <img src={this.props.currentMovie.poster} width="500"/>
        <div>
          <h4>{this.props.currentMovie.title}</h4>
          <span>{this.props.currentMovie.rating} </span>
          <span>{this.props.currentMovie.category}</span>
          <div>
            <span>{this.props.currentMovie.year} </span>
            <span>{this.props.currentMovie.duration} min</span>
          </div>
          <p>{this.props.currentMovie.description}</p>
          <small>{this.props.currentMovie.director} </small>
          <small>{this.props.currentMovie.cast}</small>
        </div>
      </article>
    )
  }
};

