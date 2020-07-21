import { takeEvery, put, call } from 'redux-saga/effects'
import { fetchEmployee } from '../apis/employee'
import { fetchUser } from './reducer'

// 이벤트
// 반응에 대한 이벤트
function* watchUser() {
  try {
    const user = yield call(fetchEmployee)

    yield put({
      type: fetchUser.success,
      payload: {
        data: user.data,
      },
    })
  } catch (error) {
    yield put({
      type: fetchUser.failure,
      payload: {
        message: error.message,
      },
    })
  }
}

const saga = function* () {
  yield takeEvery(fetchUser.request, watchUser)
}

export default saga
