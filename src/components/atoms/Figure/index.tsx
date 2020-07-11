import React from 'react'

import Arrow from '../../../assets/icons/arrow.svg'
import Grid from '../../../assets/icons/grid.svg'
import Visitor from '../../../assets/icons/visitor.svg'

export enum IconType {
  ARROW = (Arrow as unknown) as IconType,
  GRID = (Grid as unknown) as IconType,
  VISITOR = (Visitor as unknown) as IconType,
}

interface IProps {
  type: IconType
  width: number
  height: number
  rotate?: number
  className?: string
}

const Figure: React.FC<IProps> = ({
  width,
  height,
  rotate = 0,
  className,
  type,
}) => {
  return (
    <img
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
      width={width}
      height={height}
      className={className}
      src={type.toString()}
      alt="아이콘"
    />
  )
}

export default Figure
