import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/normalize.css';
import  '../styles/common.css';


export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
