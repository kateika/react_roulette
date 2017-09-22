import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/normalize.css';
import  '../styles/common.css';


export default class App extends React.Component {
  render() {
    return (
      <div>
        {/*<ListResult />*/}
        {/*<FilmDescription />*/}
        <Link to="/search" style={{color: "black", marginRight: "20"}}>ListResult</Link>
        <Link to="/film" style={{color: "black"}}>FilmDescr</Link>
        {this.props.children}
      </div>
    )
  }
}
