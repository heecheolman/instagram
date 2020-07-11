import React from 'react'

import classNames from 'classnames'

import Block from '../Block'
import style from './style.module.scss'

export interface IProps {
  size?: number
  border: number
  radius: number
  className?: string
}

const Avatar: React.FC<IProps> = ({ size = 30, children, className }) => {
  const classProps = classNames(style.default, className)
  const sizeStyle = {
    width: `${size}px`,
    height: `${size}px`,
  }

  return (
    <Block className={classProps} style={sizeStyle}>
      {children}
    </Block>
  )
}

export default Avatar
