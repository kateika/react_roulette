import React from 'react';

export class MovieCard extends React.Component {
  render() {
    const { poster, title, year, genre } = this.props;
    return (
      <div className="movieCard" style={{display: 'inline-block', width: '33%'}}>
        <img src={poster } width="100"/>
        <div>
          <h4>{title }</h4>
          <span>{year }</span>
        </div>
        <span>{genre }</span>
      </div>
    )
  }
};
