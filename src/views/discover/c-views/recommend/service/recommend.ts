import hyRequest from '@/server'

export const getBenners = () => {
  return hyRequest.get({
    url: '/banner'
  })
}
