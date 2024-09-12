// 此处用于存放所有地址相关的接口请求
import request from '@/utils/request'

export const getAddressList = () => {
  return request.get('/address/list')
}

export const setAddressList = (name, phone, region) => {
  return request.post('/address/add', {
    name,
    phone,
    region
  })
}
