import Feed from '../models/Feed'
import { feedsResponse } from '../__MOCK__'
import { fetchEmployees } from '../apis/employee'
import { useCallback } from 'react'

function useFeed() {
  let feeds = feedsResponse.map((feed) => new Feed(feed))
  const fetch = useCallback(fetchEmployees, [])
  return { feeds, fetch }
}

export default useFeed
