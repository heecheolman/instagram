import React from 'react'

import UserTemplate from '../../components/templates/UserTemplate'
import Block from '../../components/molecules/Block'

import useUser from '../../hooks/useUser'
import useFeed from '../../hooks/useFeed'

const UserPage: React.FC = () => {
  const [user] = useUser()
  const [feeds] = useFeed()

  return (
    <Block>
      <UserTemplate user={user} feeds={feeds} />
    </Block>
  )
}

export default UserPage
