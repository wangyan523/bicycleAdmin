import React, { Component } from 'react'
import TodoListUI from './TodoListUI'
import store from './store'
import { getInputChange, getAddItem, getRemoveItem, getInitList } from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStateChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        hanldeDelClick={this.hanldeDelClick}
      />
    )
  }

  componentDidMount() { 
    const action = getInitList()
    store.dispatch(action)
  }

  handleStateChange = () => {
    this.setState(store.getState())
  }

  handleInputChange = (e) => {
    store.dispatch(getInputChange(e.target.value))
  }
  handleClick = () => {
    store.dispatch(getAddItem())
  }
  hanldeDelClick = (i) => {
    store.dispatch(getRemoveItem(i))
  }
}

export default TodoList