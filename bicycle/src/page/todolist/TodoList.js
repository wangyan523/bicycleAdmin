import React, { Component } from 'react'
import TodoListUI from './TodoListUI'
import store from './store'
import { getInputChange, getAddItem, getRemoveItem, getInitListData } from './store/actionCreators'
import axios from 'axios' 

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
    axios.get('/list.json').then(res => { 
      if (res.status === 200) { 
        const data = res.data;
        store.dispatch(getInitListData(data))
      }
    })
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