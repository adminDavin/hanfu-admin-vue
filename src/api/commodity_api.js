import Axios from 'axios'
// =============================================商品模块
// 获取商品列表
function getProductList () {
  return Axios.get('/api/goods/listGoods?stoneId=1')
}
// 获取商品总数
function queryGoods () {
  return Axios.get('/api/goods/queryGoods')
}
// 查询
function queryList (params) {
  let fd = new FormData()
  fd.append('hfGoodsId', params.goodsName)
  fd.append('hfGoodsId', params.productCategoryName)
  return Axios.get('/api/goods/queryList', fd)
}
// 设置商品价格
function setPrice (params) {
  let fd = new FormData()
  fd.append('hfGoodsId', params.hfGoodsId)
  fd.append('sellPrice', params.sellPrice)
  // fd.append('productSpecId', params.productSpecId)
  fd.append('requestId', params.requestId)
  fd.append('token', params.token)
  fd.append('userId', params.userId)
  fd.append('username', params.username)
  fd.append('quantity', params.quantity)
  fd.append('respDesc', params.respDesc)
  return Axios.post('/api/goods/setPrice', fd)
}
// 核销员
function verifier () {
  return Axios.get('/ver/cancel/selectCancel')
}
// 获取类目
function category () {
  return Axios.get('cat/product/category')
}
// 获取二级类目
function categoryTwo (id) {
  let params = {
    params: {
      parentCategoryId: id
    }
  }
  return Axios.get('/api/product/category', params)
}
// 编辑商品
function bianProduct (params) {
  let fd = new FormData()
  fd.append('id', params.id)
  fd.append('productDesc', params.productDesc)
  return Axios.post('/api/product/addproduct', fd, { responseType: 'arraybuffer' })
}
// 编辑商品
function updategoods (params) {
  let fd = new FormData()
  fd.append('goodsDesc', params.goodsDesc)
  fd.append('productCategoryName', params.productCategoryName)
  fd.append('categoryId', params.categoryId)
  fd.append('id', params.id)
  fd.append('timestamp', 111)
  fd.append('token', 1213)
  fd.append('userId', 123)
  return Axios.post('/api/goods/updategood', fd, { responseType: 'arraybuffer' })
}
// 添加物品
function addProduct (params) {
  let fd = new FormData()
  fd.append('productId', params.productId)
  fd.append('categoryId', params.categoryId)
  fd.append('cancelId', params.cancelId)
  fd.append('claim', params.claim)
  fd.append('member', params.member)
  fd.append('frames', params.frames)
  fd.append('goodName', params.goodName)
  fd.append('goodsDesc', params.goodsDesc)
  fd.append('productDesc', params.productDesc)
  fd.append('requestId', params.requestId)
  fd.append('token', params.token)
  fd.append('fileInfo1', params.fileInfo1)
  fd.append('userId', params.userId)
  fd.append('specValue', params.specValue)
  return Axios.post('/api/goods/create', fd, { responseType: 'arraybuffer' })
}
// 添加商品
function tianjianwup (params) {
  let fd = new FormData()
  fd.append('categoryId', params.categoryId)
  // fd.append('bossId', params.bossId)
  // fd.append('brandId ', params.brandId)
  fd.append('hfName ', params.hfName)
  // fd.append('id', params.id)
  fd.append('specName', params.specName)
  // fd.append('specType ', params.specType)
  // fd.append('specUnit ', params.specUnit)
  // fd.append('specValue ', params.specValue)
  fd.append('requestId', params.requestId)
  fd.append('lastModifier', params.lastModifier)
  fd.append('productDesc', params.productDesc)
  fd.append('token', params.token)
  fd.append('userId', params.userId)
  fd.append('fileInfo', params.fileInfo)
  return Axios.post('/api/product/addproduct', fd)
}
// let fd = new FormData()
// fd.append('bossId', params.bossId)
// fd.append('brandId', params.brandId)
// fd.append('categoryId', params.categoryId)
// fd.append('cancelId ', params.cancelId)
// fd.append('claim ', params.claim)
// fd.append('member ', params.member)
// fd.append('lastModifier ', params.lastModifier)
// fd.append('productDesc ', params.productDesc)
// fd.append('requestId ', params.requestId)
// fd.append('timestamp', params.timestamp)
// fd.append('token', params.token)
// fd.append('userId', params.userId)
// 按条件查询商品
function search (id, cateId, name) {
  let params = {
    params: {
      bossId: id,
      categoryId: cateId,
      productName: name
    }
  }
  return Axios.get('/api/product/categoryId', params)
}
// 删除商品
function deleteProduct (id) {
  let params = {
    params: {
      productId: id
    }
  }
  return Axios.get('/api/product/deleteSelectProductId', params)
}
function singledeleteProduct (id) {
  let params = {
    params: {
      productId: id
    }
  }
  return Axios.get('/api/product/deleteProductId', params)
}
// 删除规格
function deleteSpec (id) {
  let params = {
    params: {
      productSpecId: id
    }
  }
  return Axios.get('/api/product/deleteSpecifies', params)
}
// ============================================================================================店铺模块
// 获取店铺列表
function getStoreList (Id) {
  let params = {
    params: {
      bossId: Id
    }
  }
  return Axios.get('/api/stone/byBossId', params)
}

// 新增店铺
function addStore (params) {
  let fd = new FormData()
  fd.append('hfName', params.hfName)
  fd.append('hfDesc', params.hfDesc)
  fd.append('hfStatus', params.stoneStatus)
  fd.append('stoneManagerId', params.stoneManagerId)
  fd.append('stoneManagerId', params.stoneManagerId)
  fd.append('bossId', params.bossId)
  // fd.append('hfName', params.hfName);
  return Axios.post('/api/stone/addStone', fd, { responseType: 'arraybuffer' })
}
// 修改店铺
function updateStore (params) {
  let fd = new FormData()
  fd.append('bossId', params.bossId)
  fd.append('stoneId', params.id)
  fd.append('hfDesc', params.hfDesc)
  fd.append('hfStatus', params.hfStatus)

  // fd.append('hfName', params.hfName);
  return Axios.post('/api/stone/updateStone', fd, { responseType: 'arraybuffer' })
}
// 删除店铺
function deleteStore (id) {
  let params = {
    params: {
      stoneId: id
    }
  }
  return Axios.get('/api/stone/deleteStone', params)
}
// ================================================================================================物品模块
// 获取物品
function getGood (id) {
  let params = {
    params: {
      stoneId: id
    }
  }
  return Axios.get('/api/product/byStoneId', params)
}
// 删除物品
function deleteGood (id) {
  let params = {
    params: {
      hfGoodsId: id
    }
  }
  return Axios.get('/api/stone/deleteGood', params)
}

// 编辑物品
function updateGood (params) {
  let fd = new FormData()
  fd.append('goodsDesc', params.goodsDesc)
  fd.append('id', params.id)
  return Axios.post('/api/goods/updategood', fd, { responseType: 'arraybuffer' })
}

// 添加规格
function addSpec (params) {
  let fd = new FormData()
  fd.append('goodsId', params.goodsId)
  fd.append('requestId', params.requestId)
  fd.append('specValue', params.specValue)
  fd.append('timestamp', params.timestamp)
  fd.append('token', params.token)
  fd.append('userId', params.userId)
  fd.append('productSpecId', params.productSpecId)
  return Axios.post('/api/goods/addSpecify', fd, { responseType: 'arraybuffer' })
}

// 上传图片
// function loadPic(params) {
//   let fd = new FormData();
//   fd.append('goodsDesc', params.goodsDesc);
//   fd.append('id', params.id);
//   return Axios.post("/api/goods/updategood", fd, { responseType: 'arraybuffer' });;
// }
//= ==================================================================================================仓库模块
// 查询仓库
function checkWarehouse (id) {
  let params = {
    params: {
      bossId: id
    }
  }
  return Axios.get('/api/wareHouse/listWareHouse', params)
}
// ======================================================================订单模块
// 查看订单列表
function checkOrderList (id) {
  let params = {
    params: {
      userId: id
    }
  }
  return Axios.get('/api', params)
}

export default {
  getProductList: getProductList,
  getStoreList: getStoreList,
  category: category,
  search: search,
  addProduct: addProduct,
  deleteProduct: deleteProduct,
  singledeleteProduct: singledeleteProduct,
  bianProduct: bianProduct,
  addStore: addStore,
  deleteStore: deleteStore,
  updateStore: updateStore,
  updateGood: updateGood,
  getGood: getGood,
  checkWarehouse: checkWarehouse,
  deleteSpec: deleteSpec,
  deleteGood: deleteGood,
  addSpec: addSpec,
  checkOrderList: checkOrderList,
  categoryTwo: categoryTwo,
  verifier: verifier,
  queryGoods: queryGoods,
  updategoods: updategoods,
  tianjianwup: tianjianwup,
  setPrice: setPrice,
  queryList: queryList
}
