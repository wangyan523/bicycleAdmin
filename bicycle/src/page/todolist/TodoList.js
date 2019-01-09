import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleLiClick = this.handleLiClick.bind(this)
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="inpArea">输入</label>
        <input
          id="inpArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(input) => { this.input = input }}
        />
        <button
          onClick={this.handleClick}
        >提交</button>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            this.state.list.map((e, i) => {
              return (
                <TodoItem
                  content={e}
                  key={i}
                  index={i}
                  delItem={this.handleLiClick}
                />
              ) 
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputChange() {
    const value = this.input.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => { 
      console.log(this.ul.querySelectorAll('div').length);
    })
  }
  handleLiClick(i) {
    this.setState(prevState => {
      const list = [...prevState.list]
      list.splice(i, 1)
      return {
        list
      }
    })
  }
}

export default TodoList