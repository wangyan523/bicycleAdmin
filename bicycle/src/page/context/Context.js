import React, { Component } from 'react'

const ThemeContext = React.createContext()
const ThemeProvider = ThemeContext.Provider
const ThemeConsumer = ThemeContext.Consumer

class Context extends Component {
  render() {
    return (
      <ThemeConsumer>
        {
          (theme) => { 
            <h1 style={{color:theme.mainColor}}>
              {this.props.children}
            </h1>
          }
        }
      </ThemeConsumer>
    )
  }
}

export default Context