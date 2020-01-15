import { request } from './request'

// 获取轮播图和用户推荐商品的avatar的数据
export function getHomeData () {
  return request({
    url: '/home/multidata'
  })
}

// 获取Home页面中商品图片以及文字数据

export function getProductData (type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
