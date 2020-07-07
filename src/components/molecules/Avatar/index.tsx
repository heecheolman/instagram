import React from 'react'

import classNames from 'classnames'

import style from './style.module.scss'

export interface IProps {
  border: number
  radius: number
  className?: string
}

const Avatar: React.FC<IProps> = ({ children, className }) => {
  const classProps = classNames(style.default, className)

  return <div className={classProps}>{children}</div>
}

export default Avatar
