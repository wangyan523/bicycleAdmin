import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const {content,test} = this.props
    return (
      <div
        onClick={this.itemClick}
      >
        {test} - {content}
      </div>
    )
  }
  itemClick = () => {
    const {delItem,index} = this.props
    delItem(index)
  }
}

export default TodoItem