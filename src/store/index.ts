import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducer from './reducer'

/*
  1. 리듀서 등록
  2. 사가 등록
  3. 사가 실행
*/
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof reducer>

export default store
