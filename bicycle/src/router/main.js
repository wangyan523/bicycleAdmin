import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Main extends Component{
  render() {
    return(
      <div>
        main page
        <Link to="/about">about</Link>
      </div>
    )
  }
}