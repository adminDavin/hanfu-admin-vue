import Axios from 'axios'
// 查看订单列表
function checkOrderList (id) {
  let params = {
    params: {
      id: id
    }
  }
  return Axios.get('/order/order/query', params)
}

// 查询订单
function query () {
  let params = {
    params: {
      // id:id
    }
  }
  return Axios.get('/order/order/query', params)
}

// 创建订单  这个是创建订单
function creat (add) { // 这里参数不需要
  console.log(add)

  let params = {
    params: {
      amount: add.amount, // 支付金额
      PurchasePrice: add.purchasePrice, // 购买价格
      PurchaseQuantity: add.purchaseQuantity, // 购买数量   少了
      username: add.Addusername, // 用户名
      logisticsCompany: add.logisticsCompany, // 物流公司名字
      orderDetailStatus: add.orderDetailStatus, // 订单详情状况
      hfDesc: add.hfDesc, // 商品描述
      ordersId: add.ordersId, // 订单Id
      // createTime:123,
      distribution: 123,
      googsId: 123,
      hfMemo: 123,
      hfRemark: 123,
      hfTax: 123,
      id: 123,

      logisticsOrderName: 123,
      logisticsOrdersId: 123,
      orderDetailId: 123,

      orderType: 123,

      payMethodName: 123,
      payMethodType: 123,
      payStatus: 123,

      respId: 123,
      userAddressId: 123,
      userId: 1

    }
  }
  console.log(params)

  return Axios.get('/order/order/creat', params, { timeout: 1000 })
}
// 获取订单状态
function getstatus () {
  return Axios.get('/order/order/status')
}

// 修改订单状态
function updatestatus (params) {
  let fd = new FormData()
  fd.append('orderId', params.orderId)
  fd.append('id', params.id)
  // fd.append('hfName', params.hfName);
  return Axios.post('/order/order/updatestatus', fd)
}

// 创建订单
function createorder (id) {
  let params = {
    params: {
      orderId: id,
      bossId: 1,
      Amount: 1
    }
  }
  return Axios.get('/ordersubmit/payment/pay', params)
}
// 修改订单
function update (params) {
  let fd = new FormData()
  fd.append('amount', params.amount)
  // fd.append('createTime',params.createTime )
  fd.append('username', params.username)
  fd.append('distribution', params.distribution)
  fd.append('googsId', params.googsId)
  fd.append('hfDesc ', params.hfDesc)
  fd.append('hfMemo ', params.hfMemo)
  fd.append('hfRemark', params.hfRemark)
  fd.append('hfTax', params.hfTax)
  fd.append('id', params.id)
  fd.append('logisticsCompany', params.logisticsCompany)
  fd.append('logisticsOrderName', params.logisticsOrderName)
  fd.append('logisticsOrdersId', params.logisticsOrdersId)
  fd.append('orderDetailId ', params.orderDetailId)
  fd.append('orderDetailStatus', params.orderDetailStatus)
  fd.append('orderType ', params.orderType)
  fd.append('ordersId', params.ordersId)
  fd.append('payMethodName ', params.payMethodName)
  fd.append('payMethodType ', params.payMethodType)
  fd.append('payStatus ', params.payStatus)
  fd.append('purchasePrice  ', params.purchasePrice)
  fd.append('purchaseQuantity  ', params.purchaseQuantity)
  fd.append('respId ', params.respId)
  fd.append('userAddressId ', params.userAddressId)
  fd.append('userId ', params.userId)
  return Axios.post('/order/order/update', fd)
}

// 查看订单详情
function orderDetail (id) {
  let params = {
    params: {
      id: id

    }
  }
  return Axios.get('/order/order/queryDetail', params)
}
// 根据条件查询订单

function queryorder (add) {
  let params = {
    params: {
      // hfName:add.hfName,
      // orderDetailStatus:add.orderDetailStatus,
      orderId: add.orderId
      // payMethodType:add.payMethodType
    }
  }
  console.log(params)
  return Axios.get('/order/order/queryOrder', params)
}
// 快速打单
function print (id) {
  let params = {
    params: {
      id: 256
    }
  }
  return Axios.get('/order/order/print', params)
}

export default {
  orderDetail: orderDetail,
  checkOrderList: checkOrderList,
  createorder: createorder,
  creat: creat,
  getstatus: getstatus,
  updatestatus: updatestatus,
  query: query,
  queryorder: queryorder,
  print: print,
  update: update
}
