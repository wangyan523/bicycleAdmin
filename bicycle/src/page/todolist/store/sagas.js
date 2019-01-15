import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { getInitListData } from './actionCreators'
import axios from 'axios' 

function* getInitList() { 
  const res = yield axios.get('/list.json')
  const action = getInitListData(res.data)
  yield put(action)
}
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;