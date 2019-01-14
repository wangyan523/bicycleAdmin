import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import mySaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export default store;
