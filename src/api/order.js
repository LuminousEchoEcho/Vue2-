// 此处用于存放所有订单相关的接口请求
import request from '@/utils/request'

// 订单结算确认
// mode:cart    => obj { cartId }
// mode:buyNow  => obj { goodsId , goodsNum , goodsSkuId }
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // cart  buyNaw
      delivery: 10, // 10 快递配送 20 门店自提
      shopId: 0,
      couponId: 0, // 优惠券ID，传零 不使用优惠券
      isUsePoints: 0, // 积分 传零 不使用积分
      ...obj// 将传递过来的参数对象 动态展开
    }
  })
}

// 提交订单
// mode:cart    => obj { cartId , remark }
// mode:buyNow  => obj { goodsId , goodsNum , goodsSkuId , remark }
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10, // 快递配送
    couponId: 0,
    isUsePoints: 0,
    payType: 10, // 余额支付
    ...obj
  })
}

// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
