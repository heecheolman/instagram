import React from 'react'
import TabPanels from '../../molecules/TabPannels'
import Block from '../../molecules/Block'

interface IProps {
  children?: React.ReactNode
}

const TabPanel: React.FC<IProps> = ({ children }) => {
  return <Block>{children}</Block>
}

export default TabPanel
