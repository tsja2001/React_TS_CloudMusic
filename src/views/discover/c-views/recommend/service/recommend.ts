import hyRequest from '@/server'

export const getBenners = () => {
  return hyRequest.get({
    url: '/banner'
  })
}
export const getHotRecommend = (limit = 30) => {
  return hyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}
