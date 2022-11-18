// import { LOGIN_TOKEN } from '@/global/constants'
// import { localCache } from '@/utils/cache'
// import { ElMessage } from 'element-plus'
import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 请求拦截器
    requestSuccessFn: (config: any) => {
      // 添加token
      // const token = localCache.getCache(LOGIN_TOKEN)
      // if (config.headers && token) {
      //   config.headers.Authorization = token
      // }
      return config
    },
    responseSuccessFn(res: any) {
      if (res.code === -1002) {
        // ElMessage({
        //   showClose: true,
        //   message: res.data,
        //   type: 'error'
        // })
      }
      return res
    }
  }
})

export default hyRequest
