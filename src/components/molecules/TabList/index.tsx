import React from 'react'

import Block from '../Block'

interface IProps {
  position?: string
  margin?: number[]
  top?: number
  children?: React.ReactNode
}

const TabList: React.FC<IProps> = ({
  margin = [0],
  position = 'static',
  top = 0,
  children,
}) => {
  const styleProps = {
    position,
    top,
  }
  return (
    <Block style={styleProps} margin={margin}>
      {children}
    </Block>
  )
}

export default TabList
