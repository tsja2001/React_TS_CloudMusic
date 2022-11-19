import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

// 为返回的数据, 增加code和data元素
export interface MyResponse extends AxiosResponse {
  code: number
  data: any
}

// 针对AxiosRequestConfig配置进行扩展
// export interface HYInterceptors<T = AxiosResponse> {
export interface HYInterceptors {
  requestSuccessFn?: (
    config: AxiosRequestConfig
  ) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: MyResponse) => any
  responseFailureFn?: (err: any) => any
}

export interface HYRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  // interceptors?: HYInterceptors<T>
  interceptors?: any
}
