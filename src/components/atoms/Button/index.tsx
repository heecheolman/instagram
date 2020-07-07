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

export interface IProps {
  type?: ButtonType
  theme?: ButtonTheme
  className?: string
}

const Button: React.FC<IProps> = ({
  type = ButtonType.BUTTON,
  theme = ButtonTheme.DEFAULT,
  children,
  className,
}) => {
  const classProps = classNames(style.default, className, style[theme])

  return (
    <button type={type} className={classProps}>
      {children}
    </button>
  )
}

export default Button
