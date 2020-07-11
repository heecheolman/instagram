import React from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'

export interface IProps {
  src: string
  alt: string
  radius?: number
  className?: string
}

const Image: React.FC<IProps> = ({ src, alt, radius = 0, className }) => {
  const classProps = classNames(styles.default, className)
  const styleProps = {
    borderRadius: `${radius}%`,
  }

  return <img src={src} alt={alt} className={classProps} style={styleProps} />
}

export default Image
