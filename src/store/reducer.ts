import { createAction, createReducer, ActionType } from 'typesafe-actions'

/*
  action 과 상태

  상태 커밋
  
*/

const UPDATE = 'UPDATE'
export const update = createAction(UPDATE)<{ text: string }>()

const state = {
  text: '',
}
const actions = {
  update,
}

type State = {
  text: string
}

type Action = ActionType<typeof actions>

const reducer = createReducer<State, Action>(state).handleAction(
  update,
  (state, action) => {
    // ...
    const { text } = action.payload
    // console.log('state', state)
    return {
      ...state,
      text,
    }
  }
)

export default reducer
