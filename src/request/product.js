import { request } from './request'

export function getProductDetails (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 因为单个产品的数据内容种类很多 所以需要把数据整合起来
export class GoodDetails {
  constructor (itemInfo, columns, services) {
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.title = itemInfo.title
    this.discountDesc = itemInfo.discountDesc
    this.services = services
    this.columns = columns
  }
}

export class ProductParams {
  constructor (itemParams) {
    this.key = itemParams.info.key
    this.set = itemParams.info.set
  }
}
