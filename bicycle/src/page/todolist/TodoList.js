import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="inpArea">输入</label>
        <input
          id="inpArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button
          onClick={this.handleClick.bind(this)}
        >提交</button>
        <ul>
          {
            this.state.list.map((e,i) => {
              return (
                <li
                  key={i}
                  onClick={this.handleLiClick.bind(this, i)}
                  dangerouslySetInnerHTML={{__html:e}}
                ></li> 
              ) 
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleLiClick(i) {
    const list = [...this.state.list]
    list.splice(i, 1)
    this.setState({
      list
    }) 
  }
}

export default TodoList