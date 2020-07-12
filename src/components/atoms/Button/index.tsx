import React from 'react'

import classNames from 'classnames'

import { calculateSpacing } from '../../lib'
import styles from './style.module.scss'

export enum ButtonType {
  SUBMIT = 'submit',
  BUTTON = 'button',
  RESET = 'reset',
}

export enum ButtonTheme {
  DEFAULT = 'default',
  PRIMARY = 'primary',
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
  className?: string
}

const Button: React.FC<IProps> = ({
  margin = [0],
  type = ButtonType.BUTTON,
  theme = ButtonTheme.DEFAULT,
  size = ButtonSize.MEDIUM,
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
    margin: calculateSpacing(margin),
  }

  return (
    <button type={type} className={classProps} style={styleProps}>
      {children}
    </button>
  )
}

export default Button
