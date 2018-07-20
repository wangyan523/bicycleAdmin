import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component{
  render() {
    return(
      <div>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/person">person</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}