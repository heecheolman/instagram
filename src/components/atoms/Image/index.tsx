import React from 'react'

import classNames from 'classnames'

import style from './style.module.scss'

export interface IProps {
  src: string
  alt: string
  className?: string
}

const Image: React.FC<IProps> = ({ src, alt, className }) => {
  const classProps = classNames(style.default, className)

  return <img src={src} alt={alt} className={classProps} />
}

export default Image
