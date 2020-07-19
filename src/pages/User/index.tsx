import React, { useEffect } from 'react'

import UserTemplate from '../../components/templates/UserTemplate'
import Block from '../../components/molecules/Block'

import useUser from '../../hooks/useUser'
import useFeed from '../../hooks/useFeed'

const UserPage: React.FC = () => {
  const { userInfo, updateFunc, dummyState } = useUser()
  const [feeds] = useFeed()

  useEffect(() => {
    updateFunc()
  }, [])

  return (
    <Block>
      {dummyState}
      <UserTemplate user={userInfo} feeds={feeds} />
    </Block>
  )
}

export default UserPage
