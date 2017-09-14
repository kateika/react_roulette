import React from 'react';

export class MovieCard extends React.Component {
  render() {
    return (
      <div className="movieCard" style={{display: 'inline-block', width: '33%'}}>
        <img src="https://i.ytimg.com/vi/IjN-WsRh0tI/maxresdefault.jpg" width="100"/>
        <div>
          <h4>Clara cartoon</h4>
          <span>2017</span>
        </div>
        <span>Animated Movie</span>
      </div>
    )
  }
};
