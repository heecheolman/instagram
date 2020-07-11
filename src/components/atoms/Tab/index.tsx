import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

interface IProps {
  active?: boolean
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  children?: React.ReactNode
}

const Tab: React.FC<IProps> = ({
  active = false,
  onClick,
  className,
  children,
}) => {
  const classProps = classNames(styles.default, className, {
    [styles.active]: active,
  })

  return (
    <button className={classProps} {...onClick}>
      {children}
    </button>
  )
}

export default Tab
