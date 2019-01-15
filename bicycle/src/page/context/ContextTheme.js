import React, { Component, createContext } from 'react'

const contextValue = {
  dark: '#000',
  light: '#eee'
}

const ThemeContext = createContext(contextValue)

class Context extends Component {
  render() {
    return (
      <ThemeContext.Provider value={contextValue}>
        <Toolbar/>
      </ThemeContext.Provider>
    )
  }
}

function Toolbar(props) { 
  return (
    <div>
      <ThemedButton/>
    </div>
  )
}

class ThemedButton extends Component { 
  static contextType = ThemeContext
  render() { 
    return (
      <div
        style={{ width: '100px', height: '100px', background: this.context.light }}
      />
    )
  }
}

export default Context