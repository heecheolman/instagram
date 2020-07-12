import React from 'react'
import classNames from 'classnames'

import Image from '../../atoms/Image'

import styles from './style.module.scss'

interface IProps {
  image: string
  className?: string
}

const FeedCell: React.FC<IProps> = ({ image, className }) => {
  const classProps = classNames(styles.default, className)
  const imageElement = image && <Image src={image} alt="피드이미지" />

  return <div className={classProps}>{imageElement}</div>
}

export default FeedCell
