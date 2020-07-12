import React from 'react'

import Block, { Direction, VSort, HSort } from '../../molecules/Block'
import Feed from '../../../models/Feed'
import FeedCell from '../../molecules/FeedCell'

interface IProps {
  feeds: Feed[]
  col?: number
}

const Contents: React.FC<IProps> = ({ feeds, col = 3 }) => {
  const ROW = Math.ceil(feeds.length / col)
  const feedsCollection = []
  for (let i = 0; i < ROW; i++) {
    const row = []
    for (let j = 0; j < col; j++) {
      row.push(feeds[i * col + j])
    }
    feedsCollection.push(row)
  }

  const feedbackGridElement = feedsCollection.map((row: Feed[], rowIndex) => {
    const feedRowElement = row.map((feed: Feed, colIndex) => {
      return (
        <FeedCell
          key={`post-${rowIndex}-${colIndex}`}
          image={(feed && feed.getImage()) || ''}
          className={colIndex === col - 1 ? 'm-r-0' : 'm-r-4'}
        />
      )
    })
    return (
      <Block
        sort={[VSort.NORMAL, HSort.NORMAL]}
        key={`row-${rowIndex}`}
        margin={[0, 0, rowIndex === ROW - 1 ? 0 : 4]}
      >
        {feedRowElement}
      </Block>
    )
  })

  return (
    <Block direction={Direction.COLUMN} padding={[10]}>
      {feedbackGridElement}
    </Block>
  )
}

export default Contents
