import React from 'react'

import classNames from 'classnames'

import style from './style.module.scss'

export enum Direction {
  ROW,
  COLUMN,
}

interface IProps {
  direction?: Direction
  className?: string
}

const Block: React.FC<IProps> = ({
  children,
  direction = Direction.ROW,
  className,
}) => {
  const classProps = classNames(
    style.default,
    className,
    direction === Direction.ROW ? style.row : style.column
  )

  return <div className={classProps}>{children}</div>
}

export default Block
