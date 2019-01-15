import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList2 extends Component {
  render() {
    return (
      <div>
        <input />
        <button>提交</button>
        <ul>
          <li>wyyyyyy</li>
        </ul>
      </div>
    )
  }
}

export default connect(null, null)(TodoList2)