import { IEmployee } from '../apis/employee'

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

  static createUser(res: IEmployee): User {
    return new User({
      name: res.first_name + res.last_name,
      image: res.avatar,
      followerCount: 50,
      followCount: 100,
      description: res.last_name,
      feedCount: 11,
    })
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

  json() {
    return {
      image: this.image,
      description: this.description,
      feedCount: this.feedCount,
      followCount: this.followCount,
      followerCount: this.followerCount,
    }
  }

  private readonly name: string
  private readonly image: string
  private readonly followerCount: number
  private readonly followCount: number
  private readonly feedCount: number
  private readonly description: string
}

export default User
