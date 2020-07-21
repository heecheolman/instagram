import { userResponse } from '../__MOCK__'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store'
import User from '../models/User'
import { fetchUser } from '../store/reducer'

function useUser() {
  const dispatch = useDispatch()

  const user = useSelector((rootState: RootState) => rootState.user)
  const getUser = () => {
    console.log('getUser')
    dispatch(fetchUser.request(''))
  }

  return { user, getUser }
}

export default useUser
