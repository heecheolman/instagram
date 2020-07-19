import React from 'react'

import Header from '../../organisms/Header'
import Contents from '../../organisms/Contents'
import TabList from '../../molecules/TabList'
import Tab from '../../atoms/Tab'
import Block, { Direction } from '../../molecules/Block'
import Figure, { IconType } from '../../atoms/Figure'
import Feed from '../../../models/Feed'

interface IProps {
  user: {
    image: string
    description: string
    feedCount: number
    followCount: number
    followerCount: number
  }
  feeds: Feed[]
}

const UserTemplate: React.FC<IProps> = ({ user, feeds }) => {
  return (
    <Block direction={Direction.COLUMN}>
      <Header {...user} />
      <TabList position="sticky" top={0} margin={[0, 0, 2, 0]}>
        <Tab active={true}>
          <Figure width={15} height={15} type={IconType.GRID} />
        </Tab>
        <Tab>
          <Figure width={15} height={15} type={IconType.VISITOR} />
        </Tab>
      </TabList>
      <Contents feeds={feeds} />
    </Block>
  )
}

export default UserTemplate
