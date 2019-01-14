import { INPUT_CHANGE, ADD_ITEM, REMOVE_ITEM, INIT_LIST_DATA } from './actionTypes'

const initState = {
  list: [],
  inputValue: ''
}

export default (state = initState, action) => { 
  if (action.type === INPUT_CHANGE) { 
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === INIT_LIST_DATA) { 
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  if (action.type === ADD_ITEM) { 
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState;
  }
  if (action.type === REMOVE_ITEM) { 
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState;
  }
  return state
}