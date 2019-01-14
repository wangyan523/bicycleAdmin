import React, { Component, Fragment } from 'react'

const TodoListUI = (props) => { 
  return (
    <Fragment>
      <label htmlFor="inpArea">输入</label>
      <input
        id="inpArea"
        value={props.inputValue}
        onChange={props.handleInputChange}
        ref={(input) => { this.input = input }}
      />
      <button
        onClick={props.handleClick}
      >提交</button>
      <ul ref={(ul) => { this.ul = ul }}>
        {
          props.list.map((e, i) => {
            return (
              <li
                key={i}
                onClick={() => props.hanldeDelClick(i)}
              >{e}</li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}

export default TodoListUI