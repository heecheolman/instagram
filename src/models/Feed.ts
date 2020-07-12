import User, { IUserResponse } from './User'

export interface IFeedResponse {
  createdAt: Date
  publisher: IUserResponse
  likeList: IUserResponse[]
  commentList: any[] // TODO
  isCollectioned: boolean
  image: string
  description: string
  tagList: any[] // TODO
}

interface IComment {
  description?: string
  user: User
}

class Feed {
  constructor(res: IFeedResponse) {
    this.createdAt = new Date(res.createdAt)
    this.publisher = new User(res.publisher)
    this.likeList = res.likeList.map((likeFeed) => new User(likeFeed))
    this.commentList = res.commentList.map((comment) => ({
      description: comment.description,
      user: new User(comment.user),
    }))
    this.isCollectioned = res.isCollectioned
    this.description = res.description
    this.tagList = res.tagList
    this.image = res.image
  }

  getImage() {
    return this.image
  }
  getCreatedAt() {
    return this.createdAt
  }
  getPublisher() {
    return this.publisher
  }
  getLikeList() {
    return this.likeList
  }
  getCommentList() {
    return this.commentList
  }
  getIsCollectioned() {
    return this.isCollectioned
  }
  getTagList() {
    return this.tagList
  }
  getDescription() {
    return this.description
  }

  private readonly createdAt: Date
  private readonly publisher: User
  private readonly likeList: User[]
  private readonly commentList: IComment[]
  private readonly isCollectioned: boolean
  private readonly description: string
  private readonly tagList: any[] // TODO
  private readonly image: string
}

export default Feed
