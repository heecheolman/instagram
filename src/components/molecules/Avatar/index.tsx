import React from 'react'

import classNames from 'classnames'

import Block from '../Block'
import styles from './style.module.scss'

export interface IProps {
  size?: number
  className?: string
}

const Avatar: React.FC<IProps> = ({ size = 30, children, className }) => {
  const classProps = classNames(styles.default, className)
  const styleProps = {
    width: `${size}px`,
    height: `${size}px`,
  }

  return (
    <Block className={classProps} style={styleProps}>
      {children}
    </Block>
  )
}

export default Avatar
