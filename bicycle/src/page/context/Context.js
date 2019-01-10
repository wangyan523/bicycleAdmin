import React, { Component } from 'react'

const ThemeContext = React.createContext()
const ThemeProvider = ThemeContext.Provider
const ThemeConsumer = ThemeContext.Consumer

class Context extends Component {
  render() {
    return (
      <div>Context page</div>
    )
  }
}

export default Context