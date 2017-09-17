import React from 'react';

export class MovieCard extends React.Component {
  render() {
    return (
      <div className="movieCard" style={{display: 'inline-block', width: '33%'}}>
        <img src={ this.props.poster } width="100"/>
        <div>
          <h4>{ this.props.title }</h4>
          <span>{ this.props.year }</span>
        </div>
        <span>{ this.props.genre }</span>
      </div>
    )
  }
};
