import React, { CSSProperties } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'

export interface IProps {
  fontSize?: number
  fontBold?: boolean
  className?: string
  style?: object
}

const Span: React.FC<IProps> = ({
  fontSize = 13,
  fontBold = false,
  style,
  children,
  className,
}) => {
  const classProps = classNames(styles.default, className)
  const styleProps = {
    ...style,
    fontSize: `${fontSize}px`,
    fontWeight: fontBold ? 'bold' : 'normal',
  } as CSSProperties

  return (
    <span className={classProps} style={styleProps}>
      {children}
    </span>
  )
}

export default Span
