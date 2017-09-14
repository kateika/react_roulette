import React from 'react';

export class MovieListBar extends React.Component {
  render() {
    return (
      <div className="MovieListBar" style={{backgroundColor: 'lightgray'}}>
        <span>Results</span>
        <div>
          <span>Sort by</span>
          <a href="#">release date</a>
          <a href="#">rating</a>
        </div>
      </div>
    )
  }
};
