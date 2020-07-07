import React from 'react'

import Block, { Direction } from '../../molecules/Block'
import Avatar from '../../molecules/Avatar'
import Image from '../../atoms/Image'
import Span from '../../atoms/Span'
import Button, { ButtonTheme } from '../../atoms/Button'
import Figure, { IconType } from '../../atoms/Figure'

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
    <Block direction={Direction.COLUMN}>
      <Block>
        <Avatar border={0} radius={50}>
          <Image src={image} alt="유저이미지" />
        </Avatar>
        <Block direction={Direction.COLUMN}>
          <Span>{postCount}</Span>
          <Span>게시물</Span>
        </Block>
        <Block direction={Direction.COLUMN}>
          <Span>{followerCount}</Span>
          <Span>팔로워</Span>
        </Block>
        <Block direction={Direction.COLUMN}>
          <Span>{followCount}</Span>
          <Span>팔로우</Span>
        </Block>
      </Block>
      <Block>{description}</Block>
      <Block>
        <Button theme={ButtonTheme.PRIMARY}>팔로우</Button>
        <Button>메시지</Button>
        <Button>
          <Figure
            width={12}
            height={12}
            type={IconType.ARROW}
            rotate={90}
          ></Figure>
        </Button>
      </Block>
      <Block>{storyElements}</Block>
    </Block>
  )
}

export default Header
