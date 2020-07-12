import React from 'react'

import Block, { Direction, VSort, HSort } from '../../molecules/Block'
import Avatar from '../../molecules/Avatar'
import Image from '../../atoms/Image'
import Span from '../../atoms/Span'
import Button, { ButtonTheme } from '../../atoms/Button'
import IconButton from '../../molecules/IconButton'
import P from '../../atoms/P'
import { IconType } from '../../atoms/Figure'

interface IProps {
  image: string
  description: string
  feedCount: number
  followerCount: number
  followCount: number
}

const Header: React.FC<IProps> = ({
  image,
  description,
  feedCount,
  followerCount,
  followCount,
}) => {
  return (
    <Block padding={[10]} direction={Direction.COLUMN}>
      <Block sort={[VSort.CENTER, HSort.SPACE_BETWEEN]} margin={[0, 0, 8, 0]}>
        <Avatar size={100}>
          <Image src={image} alt="유저이미지" radius={50} />
        </Avatar>
        <Block>
          <Block direction={Direction.COLUMN} padding={[0, 20]}>
            <Span fontWeight={500} fontSize={16}>
              {feedCount}
            </Span>
            <Span>게시물</Span>
          </Block>
          <Block direction={Direction.COLUMN} padding={[0, 20]}>
            <Span fontWeight={500} fontSize={16}>
              {followerCount}
            </Span>
            <Span>팔로워</Span>
          </Block>
          <Block direction={Direction.COLUMN} padding={[0, 20]}>
            <Span fontWeight={500} fontSize={16}>
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
        <Button className="flex-full" theme={ButtonTheme.PRIMARY}>
          팔로우
        </Button>
        <Button className="flex-full" margin={[0, 0, 0, 8]}>
          메시지
        </Button>
        <Button className="flex-full" margin={[0, 0, 0, 8]}>
          이메일
        </Button>
        <IconButton iconType={IconType.ARROW} margin={[0, 0, 0, 8]} />
      </Block>
    </Block>
  )
}

export default Header
