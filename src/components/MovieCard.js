import React from 'react';

const movieObj = {
  'movie1': {
    'title': 'Clara cartoon',
    'poster': 'https://i.ytimg.com/vi/IjN-WsRh0tI/maxresdefault.jpg',
    'year': '2017',
    'genre': 'Animated Movie'
  },
  'movie2': {
    'title': 'Strange door',
    'poster': 'http://dreamicus.com/data/door/door-03.jpg',
    'year': '2007',
    'genre': 'Horror Movie'
  }
};

//export class MovieCard extends React.Component {
//  render() {
//    return (
//      <div className="movieCard" style={{display: 'inline-block', width: '33%'}}>
//          for (var movie of movieObj) {
//            <img src={ movie.poster } width="100"/>
//            <div>
//              <h4>{ movie.title }</h4>
//              <span>{ movie.year }</span>
//            </div>
//            <span>{ movie.genre }</span>
//          }
//      </div>
//    )
//  }
//};

export class MovieCard extends React.Component {
  render() {
    return (
      <div className="movieCard" style={{display: 'inline-block', width: '33%'}}>
        <img src={ movieObj.movie1.poster } width="100"/>
        <div>
          <h4>{ movieObj.movie1.title }</h4>
          <span>{ movieObj.movie1.year }</span>
        </div>
        <span>{ movieObj.movie1.genre }</span>
      </div>
    )
  }
};
