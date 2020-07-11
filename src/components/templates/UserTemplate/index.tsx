import React from 'react'

import Header from '../../organisms/Header'
import Contents from '../../organisms/Contents'
import TabList from '../../molecules/TabList'
import Tab from '../../atoms/Tab'
import Block, { Direction } from '../../molecules/Block'
import Figure, { IconType } from '../../atoms/Figure'

interface IProps {
  profile: any
  stories: any[]
  postList: any[]
}

const UserTemplate: React.FC<IProps> = ({ profile, stories, postList }) => {
  return (
    <Block direction={Direction.COLUMN}>
      <Header {...profile} stories={stories} />
      <TabList position="sticky" top={0} margin={[0, 0, 2, 0]}>
        <Tab active={true}>
          <Figure width={15} height={15} type={IconType.GRID} />
        </Tab>
        <Tab>
          <Figure width={15} height={15} type={IconType.VISITOR} />
        </Tab>
      </TabList>
      <Contents postList={postList} />
    </Block>
  )
}

export default UserTemplate
