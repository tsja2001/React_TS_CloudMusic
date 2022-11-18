let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  BASE_URL = 'http://codercba.com:9002'
} else if (process.env.NODE_ENV === 'production') {
  // 生成环境
  BASE_URL = 'http://codercba.com:9002'
}

export const TIME_OUT = 10000
export { BASE_URL }
