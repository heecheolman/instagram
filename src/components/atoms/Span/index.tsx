import React from 'react'

import classNames from 'classnames'

import style from './style.module.scss'

export interface IProps {
  className?: string
}

const Span: React.FC<IProps> = ({ children, className }) => {
  const classProps = classNames(style.default, className)

  return <span className={classProps}>{children}</span>
}

export default Span
