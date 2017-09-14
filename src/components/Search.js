import React from 'react';

export class Search extends React.Component {
  render() {
    return (
      <div className="searchContainer" style={{backgroundColor: 'palegoldenrod'}}>
        <h2>Find your movie</h2>
        <form method="post" action="./">
          <div>
            <input type="search" />
          </div>
          <div>
            <span>Search by</span>
            <a href="#">title</a>
            <a href="#">director</a>
          </div>
          <div>
            <input type="submit" value="search" />
          </div>
        </form>
      </div>
    )
  }
};

