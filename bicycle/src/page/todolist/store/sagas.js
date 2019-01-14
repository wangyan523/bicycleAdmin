import { takeEvery } from 'redux-saga/effects'
import { INIT_LIST_ACTION } from './actionTypes'
import { getInitListData } from './actionCreators'
function* mySaga() {
  console.log('abc')
  yield takeEvery(INIT_LIST_ACTION, getInitListData);
}

export default mySaga;