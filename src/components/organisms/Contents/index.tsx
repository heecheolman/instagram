import React from 'react'
import Block, { Direction } from '../../molecules/Block'
import Image from '../../atoms/Image'

interface IProps {
  postList: any[]
}

const Contents: React.FC<IProps> = ({ postList }) => {
  const gap = 1

  const postsElement = postList.map((row, rowIndex) => {
    const isLastRow = rowIndex === postList.length - 1
    const rowPosts = row.map((post: { thumbnail: string }, index: number) => {
      const isLastColumn = index === row.length - 1
      return (
        <Block margin={[0, isLastColumn ? 0 : gap, 0, 0]} key={`post-${index}`}>
          <Image src={post.thumbnail} alt="포스트"></Image>
        </Block>
      )
    })
    return (
      <Block margin={[0, 0, isLastRow ? 0 : gap, 0]} key={`row-${rowIndex}`}>
        {rowPosts}
      </Block>
    )
  })

  console.log(postsElement)

  return <Block direction={Direction.COLUMN}>{postsElement}</Block>
}

export default Contents
