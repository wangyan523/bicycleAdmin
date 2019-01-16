import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DEL_LIST_ITEM } from './store/actionTypes'

const TodoList2 = (props) => { 
  const { inputValue, changeInputValue, addListItem, list, delListItem} = props
  return (
    <div>
      <input
        value={inputValue}
        onChange={changeInputValue}
      />
      <button onClick={addListItem}>提交</button>
      <ul>
        {
          list.map((e, i) => { 
            return (
              <li
                key={i}
                onClick={()=>delListItem(i)}
              >
                {e}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateProps = (state) => { 
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    changeInputValue(e) { 
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value
      }
      dispatch(action)
    },
    addListItem() { 
      const action = {
        type: ADD_LIST_ITEM
      }
      dispatch(action)
    },
    delListItem(i) { 
      const action = {
        type: DEL_LIST_ITEM,
        index: i
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(TodoList2)