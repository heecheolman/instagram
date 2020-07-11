import React from 'react'
import Block from '../Block'

interface IProps {
  children?: React.ReactNode
}

const TabPanels: React.FC<IProps> = ({ children }) => {
  return <Block>{children}</Block>
}

export default TabPanels
