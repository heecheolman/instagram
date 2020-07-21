import {
  createAction,
  createReducer,
  ActionType,
  createAsyncAction,
} from 'typesafe-actions'
import User from '../models/User'
import Feed from '../models/Feed'
import {
  IEmployeeRequest,
  IEmployeeResponse,
  IEmployeeError,
} from '../apis/employee'

/*
  action 과 상태

  상태 커밋
  
*/

// const UPDATE = 'UPDATE'
// export const update = createAction(UPDATE)<{ text: string }>()

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export const fetchUser = createAsyncAction(
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
)<IEmployeeRequest, IEmployeeResponse, IEmployeeError>()

const state = {
  user: new User({
    name: '',
    image: '',
    description: '',
    followCount: 0,
    followerCount: 0,
    feedCount: 0,
  }),
  feeds: [] as Feed[],
}

const actions = {
  fetchUser,
}

type State = {
  user: User
  feeds: Feed[]
}

type Action = ActionType<typeof actions>

const reducer = createReducer<State, Action>(state)
  .handleAction(fetchUser.request, (state, action) => {
    console.log('request')
    return {
      ...state,
    }
  })
  .handleAction(fetchUser.success, (state, action) => {
    console.log(action.payload.data)

    const user = User.createUser(action.payload.data)

    return {
      ...state,
      user,
    }
  })
  .handleAction(fetchUser.failure, (state, action) => {
    return {
      ...state,
    }
  })

export default reducer
