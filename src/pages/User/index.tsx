import React, { useEffect } from 'react'

import UserTemplate from '../../components/templates/UserTemplate'
import Block from '../../components/molecules/Block'

import useUser from '../../hooks/useUser'
import useFeed from '../../hooks/useFeed'

const UserPage: React.FC = () => {
  const { user, getUser } = useUser()
  const { feeds, fetch } = useFeed()

  const fetchFunc = async () => {
    const result = await fetch()
    console.log('result', result)
  }

  useEffect(() => {
    getUser()
    fetchFunc()
  }, [])

  return (
    <Block>
      <UserTemplate user={user.json()} feeds={feeds} />
    </Block>
  )
}

export default UserPage
