import React from 'react'

import Header from '../../organisms/Header'
import Contents from '../../organisms/Contents'
import Block, { Direction } from '../../molecules/Block'

interface IProps {
  profile: any
  stories: any[]
  contents: any[]
}

const UserTemplate: React.FC<IProps> = ({ profile, stories, contents }) => {
  return (
    <Block direction={Direction.COLUMN}>
      <Header {...profile} stories={stories} />
      <Contents />
    </Block>
  )
}

export default UserTemplate
