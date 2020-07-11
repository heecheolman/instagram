import React from 'react'

import Block, { Direction, VSort, HSort } from '../../molecules/Block'
import Avatar from '../../molecules/Avatar'
import Image from '../../atoms/Image'
import Span from '../../atoms/Span'
import Button, { ButtonTheme } from '../../atoms/Button'
import Figure, { IconType } from '../../atoms/Figure'
import P from '../../atoms/P'

interface IProps {
  image: string
  description: string
  stories: any[]
  postCount: number
  followerCount: number
  followCount: number
}

const Header: React.FC<IProps> = ({
  image,
  description,
  stories,
  postCount,
  followerCount,
  followCount,
}) => {
  const storyElements = stories.map((story) => (
    <Avatar border={0} radius={50}>
      <Image src={image} alt="유저이미지" />
    </Avatar>
  ))

  return (
    <Block padding={[10]} direction={Direction.COLUMN}>
      <Block sort={[VSort.CENTER, HSort.SPACE_BETWEEN]} margin={[0, 0, 8, 0]}>
        <Avatar border={0} radius={50} size={100}>
          <Image src={image} alt="유저이미지" />
        </Avatar>
        <Block>
          <Block direction={Direction.COLUMN} padding={[0, 20]}>
            <Span fontBold={true} fontSize={16}>
              {postCount}
            </Span>
            <Span>게시물</Span>
          </Block>
          <Block direction={Direction.COLUMN} padding={[0, 20]}>
            <Span fontBold={true} fontSize={16}>
              {followerCount}
            </Span>
            <Span>팔로워</Span>
          </Block>
          <Block direction={Direction.COLUMN} padding={[0, 20]}>
            <Span fontBold={true} fontSize={16}>
              {followCount}
            </Span>
            <Span>팔로잉</Span>
          </Block>
        </Block>
      </Block>
      <Block sort={[VSort.TOP, HSort.LEFT]} margin={[0, 0, 8, 0]}>
        <P>{description}</P>
      </Block>
      <Block sort={[VSort.CENTER, HSort.LEFT]}>
        <Button theme={ButtonTheme.PRIMARY}>팔로우</Button>
        <Button>메시지</Button>
        <Button>이메일</Button>
        <Button>
          <Figure width={12} height={12} type={IconType.ARROW}></Figure>
        </Button>
      </Block>
      <Block>{storyElements}</Block>
    </Block>
  )
}

export default Header
