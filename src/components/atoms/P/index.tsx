import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'
import { calculateSpacing } from '../../../utils/style'

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum WordBreak {
  NORMAL = 'normal',
  BREAK_ALL = 'break-all',
  BREAK_WORD = 'break-word',
  KEEP_ALL = 'keep-all',
}

export enum WhiteSpace {
  NORMAL = 'normal',
  NOWRAP = 'nowrap',
  PRE = 'pre',
  PRE_WRAP = 'pre-wrap',
  PRE_LINE = 'pre-line',
  BREAK_SPACES = 'break-spaces',
}

interface IProps {
  margin?: number[]
  fontSize?: number
  fontWeight?: number
  lineHeight?: number
  ellipsis?: boolean
  wordBreak?: WordBreak
  whiteSpace?: WhiteSpace
  textAlign?: TextAlign
  className?: string
  children?: React.ReactNode
}

const P: React.FC<IProps> = ({
  margin = [0],
  fontSize = 13,
  fontWeight = 300,
  lineHeight = 1.5,
  ellipsis = false,
  whiteSpace = WhiteSpace.NORMAL,
  wordBreak = WordBreak.NORMAL,
  textAlign = TextAlign.LEFT,
  className,
  children,
}) => {
  const classProps = classNames(styles.default, className)

  const styleProps = {
    margin: calculateSpacing(margin),
    textAlign,
    wordBreak,
    lineHeight,
    fontWeight,
    fontSize,
    whiteSpace: ellipsis ? WhiteSpace.NOWRAP : whiteSpace,
    textOverflow: ellipsis ? 'ellipsis' : 'clip',
    overflow: ellipsis ? 'hidden' : 'visible',
  }

  return (
    <p className={classProps} style={styleProps}>
      {children}
    </p>
  )
}

export default P
