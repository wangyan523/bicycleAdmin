import { INPUT_CHANGE, ADD_ITEM, REMOVE_ITEM } from './actionTypes' 

export const getInputChange = (value) => ({
  type: INPUT_CHANGE,
  value
})

export const getAddItem = () => ({
  type: ADD_ITEM,
})

export const getRemoveItem = (index) => ({
  type: REMOVE_ITEM,
  index
})