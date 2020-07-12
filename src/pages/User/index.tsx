import React from 'react'

import UserTemplate from '../../components/templates/UserTemplate'
import Block from '../../components/molecules/Block'
import { userResponse, feedsResponse } from '../../__MOCK__'

import User from '../../models/User'
import Feed from '../../models/Feed'

const UserPage: React.FC = () => {
  const user = new User(userResponse)
  const feeds = feedsResponse.map((feed) => new Feed(feed))

  return (
    <Block>
      <UserTemplate user={user} feeds={feeds} />
    </Block>
  )
}

export default UserPage
