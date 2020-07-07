import React from 'react'

import UserTemplate from '../../components/templates/UserTemplate'
import Block from '../../components/molecules/Block'

import ChrisImage from '../../assets/images/chris.jpg'

const User: React.FC = () => {
  const profile = {
    name: '크리스',
    image: ChrisImage,
    description: 'ewifjwiofjwofjweoifjowe',
    postCount: 8145,
    followerCount: 3123,
    followCount: 2382,
  }
  const stories: any[] = []
  const contents: any[] = []

  return (
    <Block>
      <UserTemplate profile={profile} stories={stories} contents={contents} />
    </Block>
  )
}

export default User
