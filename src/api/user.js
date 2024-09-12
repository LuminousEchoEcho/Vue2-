// 此处用于存放所有用户个人信息相关的接口请求
import request from '@/utils/request'

// 获取个人信息
export const getUserInfoDetail = () => {
  return request.get('/user/info')
}
