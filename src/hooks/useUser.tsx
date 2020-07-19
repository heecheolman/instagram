import { userResponse } from '../__MOCK__'

import User from '../models/User'

function useUser() {
  const user = new User(userResponse)

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

  return [userInfo]
}

export default useUser
