import React from 'react'

import Header from '../../organisms/Header'
import Contents from '../../organisms/Contents'

interface IProps {
  profile: any
  stories: any[]
  contents: any[]
}

const UserTemplate: React.FC<IProps> = ({ profile, stories, contents }) => {
  return (
    <div>
      <Header {...profile} stories={stories} />
      <Contents />
    </div>
  )
}

export default UserTemplate
