import Feed from '../models/Feed'
import { feedsResponse } from '../__MOCK__'

function useFeed() {
  let feeds = feedsResponse.map((feed) => new Feed(feed))
  return [feeds]
}

export default useFeed
