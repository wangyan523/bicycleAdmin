import React, { Component } from 'react'
import PropTypes from 'prop-types';

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

TodoItem.protoTypes = {
  index: PropTypes.func,
  content: PropTypes.string,
  delItem: PropTypes.func,
  test: PropTypes.number.isRequired
}
TodoItem.defaultProps = {
  test:'hello'
}

export default TodoItem