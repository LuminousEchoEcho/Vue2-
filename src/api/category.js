// 此处用于存放所有商品分类列表相关的接口请求
import request from '@/utils/request'

// 获取商品分类列表的数据
export const getCategoryData = () => {
  return request.get('/category/list')
}
