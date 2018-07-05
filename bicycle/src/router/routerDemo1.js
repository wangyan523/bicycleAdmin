import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Main from './main'
import About from './about'
import Person from './person'
import Home from './Home'

class Router extends Component{
  render() {
    return(
      <HashRouter>
        <Home>
          <Route path="/home" render={()=>
            <Main>
              <Route path="/about" component={About}></Route>
            </Main>
          }></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/person" component={Person}></Route>
        </Home>
      </HashRouter>
    )
  }
}
export default Router;