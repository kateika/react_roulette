import React from 'react';

export class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
};
