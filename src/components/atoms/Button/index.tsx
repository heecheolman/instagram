import React from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'
import { calculateSpacing } from '../../../utils/style'

export enum ButtonType {
  SUBMIT = 'submit',
  BUTTON = 'button',
  RESET = 'reset',
}

export enum ButtonTheme {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  ICON = 'icon',
}

export enum ButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  ICON = 'icon',
}

export interface IProps {
  margin?: number[]
  type?: ButtonType
  theme?: ButtonTheme
  size?: ButtonSize
  children?: React.ReactNode
  style?: object
  className?: string
}

const Button: React.FC<IProps> = ({
  margin = [0],
  type = ButtonType.BUTTON,
  theme = ButtonTheme.DEFAULT,
  size = ButtonSize.MEDIUM,
  style = {},
  children,
  className,
}) => {
  const classProps = classNames(
    styles.default,
    className,
    styles[theme],
    styles[size]
  )

  const styleProps = {
    ...style,
    margin: calculateSpacing(margin),
  }

  return (
    <button type={type} className={classProps} style={styleProps}>
      {children}
    </button>
  )
}

export default Button
