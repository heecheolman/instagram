import React from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'

export interface IProps {
  size?: number
  className?: string
}

const Avatar: React.FC<IProps> = ({ size = 30, children, className }) => {
  const classProps = classNames(styles.default, className)
  const styleProps = {
    width: `${size}px`,
    height: `auto`,
  }

  return (
    <div className={classProps} style={styleProps}>
      {children}
    </div>
  )
}

export default Avatar
