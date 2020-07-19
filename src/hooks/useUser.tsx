import { userResponse } from '../__MOCK__'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store'
import { update } from '../store/reducer'
import User from '../models/User'

function useUser() {
  const user = new User(userResponse)
  const dispatch = useDispatch()
  const dummyState = useSelector((rootState: RootState) => rootState.text)

  const {
    feed: feedCount,
    follow: followCount,
    follower: followerCount,
  } = user.getCount()

  const userInfo = {
    image: user.getImage(),
    description: user.getDescription(),
    feedCount,
    followCount,
    followerCount,
  }

  const updateFunc = () => {
    dispatch(update({ text: 'Siba' }))
  }

  return { userInfo, dummyState, updateFunc }
}

export default useUser
