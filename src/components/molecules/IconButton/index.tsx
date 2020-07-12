import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

import Figure, { IconType } from '../../atoms/Figure'
import { calculateSpacing } from '../../lib'

export enum IconButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface IProps {
  iconType: IconType
  margin?: number[]
  size?: IconButtonSize
  className?: string
  children?: React.ReactNode
}

const IconButton: React.FC<IProps> = ({
  iconType,
  margin = [0],
  size = IconButtonSize.MEDIUM,
  className,
  children,
}) => {
  const classProps = classNames(styles.default, styles[size], className)
  const styleProps = {
    margin: calculateSpacing(margin),
  }

  let iconWidth, iconHeight
  switch (size) {
    case IconButtonSize.SMALL:
      iconWidth = iconHeight = 10
      break
    case IconButtonSize.LARGE:
      iconWidth = iconHeight = 14
      break
    default:
      iconWidth = iconHeight = 12
  }

  return (
    <button className={classProps} style={styleProps}>
      <Figure width={iconWidth} height={iconHeight} type={iconType} />
      {children}
    </button>
  )
}

export default IconButton
