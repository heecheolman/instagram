import React from 'react'

import classNames from 'classnames'

import { calculateSpacing } from '../../lib'
import styles from './style.module.scss'

export enum Direction {
  ROW = 'row',
  COLUMN = 'column',
}

export enum VSort {
  TOP,
  CENTER,
  BOTTOM,
  SPACE_BETWEEN,
  SPACE_AROUND,
  NORMAL,
}

export enum HSort {
  LEFT,
  CENTER,
  RIGHT,
  SPACE_BETWEEN,
  SPACE_AROUND,
  NORMAL,
}

interface IProps {
  margin?: number[]
  padding?: number[]
  direction?: Direction
  sort?: [VSort, HSort]
  className?: string
  style?: object
}

function calculateSort(sort: [VSort, HSort]): string[] {
  const [vSort, hSort] = sort

  let vertical = 'center'
  let horizontal = 'center'

  switch (vSort) {
    case VSort.TOP:
      vertical = 'flex-start'
      break
    case VSort.BOTTOM:
      vertical = 'flex-end'
      break
    case VSort.SPACE_BETWEEN:
      vertical = 'space-between'
      break
    case VSort.SPACE_AROUND:
      vertical = 'space-around'
      break
    case VSort.NORMAL:
      vertical = 'normal'
      break
  }

  switch (hSort) {
    case HSort.LEFT:
      horizontal = 'flex-start'
      break
    case HSort.RIGHT:
      horizontal = 'flex-end'
      break
    case HSort.SPACE_BETWEEN:
      horizontal = 'space-between'
      break
    case HSort.SPACE_AROUND:
      horizontal = 'space-around'
      break
    case HSort.NORMAL:
      horizontal = 'normal'
      break
  }

  return [vertical, horizontal]
}

const Block: React.FC<IProps> = ({
  children,
  sort = [VSort.CENTER, HSort.CENTER],
  direction = Direction.ROW,
  margin = [0, 0, 0, 0],
  padding = [0, 0, 0, 0],
  style = {},
  className,
}) => {
  const classProps = classNames(styles.default, className)

  const calcedMargin = calculateSpacing(margin)
  const calcedPadding = calculateSpacing(padding)
  const [vertical, horizontal] = calculateSort(sort)

  const styleProps = {
    ...style,
    margin: calcedMargin,
    padding: calcedPadding,
    flexDirection: direction,
    alignItems: vertical,
    justifyContent: horizontal,
  }

  return (
    <div className={classProps} style={styleProps}>
      {children}
    </div>
  )
}

export default Block
