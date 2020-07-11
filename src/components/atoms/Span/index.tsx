import React from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'
import { calculateSpacing } from '../../../utils/style'

export interface IProps {
  margin?: number[]
  fontSize?: number
  fontWeight?: number
  className?: string
  style?: object
}

const Span: React.FC<IProps> = ({
  fontSize = 13,
  fontWeight = 300,
  margin = [0],
  style,
  children,
  className,
}) => {
  const classProps = classNames(styles.default, className)
  const styleProps = {
    ...style,
    margin: calculateSpacing(margin),
    fontSize: `${fontSize}px`,
    fontWeight,
  }

  return (
    <span className={classProps} style={styleProps}>
      {children}
    </span>
  )
}

export default Span
