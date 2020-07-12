export interface IUserResponse {
  name: string
  image: string
  followerCount: number
  followCount: number
  feedCount: number
  description: string
}

class User {
  constructor(userRes: IUserResponse) {
    this.name = userRes.name
    this.image = userRes.image
    this.followerCount = userRes.followerCount
    this.followCount = userRes.followCount
    this.feedCount = userRes.feedCount
    this.description = userRes.description
  }

  getName() {
    return this.name
  }
  getImage() {
    return this.image
  }
  getCount() {
    return {
      follower: this.followerCount,
      follow: this.followCount,
      feed: this.feedCount,
    }
  }
  getDescription() {
    return this.description
  }

  private readonly name: string
  private readonly image: string
  private readonly followerCount: number
  private readonly followCount: number
  private readonly feedCount: number
  private readonly description: string
}

export default User
