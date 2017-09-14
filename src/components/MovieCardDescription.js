import React from 'react';


export class MovieCardDescription extends React.Component {
  render() {
    return (
      <article className="movieCardDescription" style={{backgroundColor: 'lightblue'}}>
        <img src="https://i.ytimg.com/vi/IjN-WsRh0tI/maxresdefault.jpg" width="500"/>
        <div>
          <h4>Clara cartoon</h4>
          <span>Oscar-winning Movies</span>
          <div>
            <span>1994</span>
            <span>154 min</span>
          </div>
          <p>This is lorem ipdum description</p>
          <small>Director: Quentin Tarantino</small>
          <small>Cast: a lot of actors and a dragon</small>
        </div>
      </article>
    )
  }
};

