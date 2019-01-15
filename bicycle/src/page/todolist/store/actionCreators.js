import { GET_INIT_LIST, INPUT_CHANGE, ADD_ITEM, REMOVE_ITEM, INIT_LIST_DATA } from './actionTypes'

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

export const getInitListData = (data) => ({
  type: INIT_LIST_DATA,
  data
})

export const getInitList = () => ({
  type: GET_INIT_LIST
})

// export const getListAction = () => { 
//   return (dispatch) => { 
//     axios.get('/list.json').then(res => { 
//       if (res.status === 200) { 
//         const data = res.data;
//         dispatch(getInitListData(data))
//       }
//     })
//   } 
// }