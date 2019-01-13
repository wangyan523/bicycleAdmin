import React, { Component, Fragment } from 'react'

class TodoListUI extends Component {
  render() {
    return (
      <Fragment>
        <label htmlFor="inpArea">输入</label>
        <input
          id="inpArea"
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
          ref={(input) => { this.input = input }}
        />
        <button
          onClick={this.props.handleClick}
        >提交</button>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            this.props.list.map((e, i) => {
              return (
                <li
                  key={i}
                  onClick={(i) => this.props.hanldeDelClick(i)}
                >{e}</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoListUI