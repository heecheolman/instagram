import Feed from './Feed'

interface ITagResponse {
  name: string
  image: string
  feedList: Feed[]
  followed: boolean
}

class Tag {
  constructor(res: ITagResponse) {
    this.name = res.name
    this.image = res.image
    this.feedList = res.feedList
    this.followed = res.followed
  }

  // action
  doFollow() {}
  doUnFollow() {}

  private readonly name: string
  private readonly image: string
  private readonly feedList: Feed[]
  private readonly followed: boolean
}

export default Tag
