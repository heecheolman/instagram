import React from 'react'

import classNames from 'classnames'

import style from './style.module.scss'

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
  type?: ButtonType
  theme?: ButtonTheme
  size?: ButtonSize
  children?: React.ReactNode
  className?: string
}

const Button: React.FC<IProps> = ({
  type = ButtonType.BUTTON,
  theme = ButtonTheme.DEFAULT,
  size = ButtonSize.MEDIUM,
  children,
  className,
}) => {
  const classProps = classNames(
    style.default,
    className,
    style[theme],
    style[size]
  )

  return (
    <button type={type} className={classProps}>
      {children}
    </button>
  )
}

export default Button
