/* eslint-disable require-jsdoc */
import Axios from './index';
// =============================================商品模块
// 获取商品列表
function getProductList () {
  return Axios.get('/api/api/product/hfProduct/getstone?stoneId=1');
}
// 获取库存或出售中
function selectFrames (id) {
  return Axios.get('/api/api/product/hfProduct/getstone?isDelete=' + id + '&stoneId=1');
}
// 获取商品总数
function queryGoods () {
  return Axios.get('/api/api/product/goods/queryGoods');
}
// 获取出售中和库存总数
function selectQ (id) {
  return Axios.get('/api/api/product/goods/selectQ?frames=' + id);
}
// 获取商品规格
function specifies (id) {
  return Axios.get('/api/api/product/product/specifies?productId=' + id);
}
// 查询物品规格
function specification (id) {
  return Axios.get('/api/api/product/goods/specifies?goodsId=' + id);
}
// 获取规格
function gainSpecifications (id) {
  return Axios.get('/cat/api/product/product/category' + id);
}

// 查询
function queryList (params) {
  let fd = new FormData();
  fd.append('hfGoodsId', params.goodsName);
  fd.append('hfGoodsId', params.productCategoryName);
  return Axios.get('/api/api/product/goods/queryList', fd);
}
// 设置商品价格
function setPrice (params) {
  let fd = new FormData();
  fd.append('hfGoodsId', params.hfGoodsId);
  fd.append('sellPrice', params.sellPrice);
  // fd.append('productSpecId', params.productSpecId)
  fd.append('requestId', params.requestId);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  fd.append('username', params.username);
  fd.append('quantity', params.quantity);
  fd.append('respDesc', params.respDesc);
  fd.append('linePrice', params.linePrice);
  return Axios.post('/api/api/product/goods/setPrice', fd);
}
// 核销员
function verifier () {
  return Axios.get('/ver/api/product/cancel/selectCancel');
}
// 获取类目
function category () {
  return Axios.get('/api/api/product/product/category');
}
// 获取二级类目
function categoryTwo (id) {
  let params = {
    params: {
      parentCategoryId: id,
    },
  };
  return Axios.get('/api/api/product/product/category', params);
}
// 编辑商品
function bianProduct (params) {
  let fd = new FormData();
  fd.append('id', params.id);
  fd.append('productDesc', params.productDesc);
  return Axios.post('/api/api/product/product/addproduct', fd, { responseType: 'arraybuffer' });
}
// 编辑商品
function updategoods (params, categoryiD) {
  let fd = new FormData();
  fd.append('bossId', categoryiD);
  fd.append('categoryId', categoryiD);
  fd.append('id', params.id);
  fd.append('hfName', params.productName);
  fd.append('requestId', '12123');
  fd.append('lastModifier', params.lastModifier);
  // fd.append('timestamp', params.timestamp)
  fd.append('productDesc', params.productDesc);
  fd.append('token', '23');
  fd.append('userId', 1);
  return Axios.post('/api/api/product/product/updateProductId', fd, { responseType: 'arraybuffer' });
}
// 添加物品
function addProduct (params) {
  let fd = new FormData();
  fd.append('productId', params.productId);
  fd.append('cancelId', params.cancelId);
  fd.append('claim', params.claim);
  fd.append('frames', params.frames);
  fd.append('goodName', params.goodName);
  fd.append('goodsDesc', params.goodsDesc);
  fd.append('requestId', params.requestId);
  fd.append('token', params.token);
  fd.append('fileInfo1', params.fileInfo1);
  fd.append('userId', params.userId);
  return Axios.post('/api/api/product/goods/create', fd);
}
// 添加商品
function tianjianwup (params) {
  let fd = new FormData();
  fd.append('categoryId', params.categoryId);
  fd.append('hfName ', params.hfName);
  // fd.append('specName', params.specName)
  fd.append('requestId', params.requestId);
  fd.append('lastModifier', params.lastModifier);
  fd.append('productDesc', params.productDesc);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  fd.append('fileInfo', params.fileInfo);
  fd.append('bossId ', params.bossId);
  return Axios.post('/api/api/product/product/addproduct', fd);
}
// 添加商品规格
function addSpecify (params) {
  let fd = new FormData();
  fd.append('hfName', params.hfName);
  fd.append('requestId ', params.requestId);
  fd.append('timestamp', params.timestamp);
  fd.append('productId', params.productId);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  fd.append('specValue', params.specValue);
  return Axios.post('/api/api/product/product/addSpecify', fd);
}
// 添加物品规格值
function additionSpecs (params) {
  let fd = new FormData();
  fd.append('goodsId', params.goodsId);
  fd.append('requestId ', params.requestId);
  fd.append('specValue', params.specValue);
  fd.append('timestamp', params.timestamp);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  fd.append('productSpecId', params.productSpecId);
  return Axios.post('/api/api/product/goods/addSpecify', fd);
}
// 修改商品规格
function update (params) {
  let fd = new FormData();
  fd.append('productId', params.productId);
  fd.append('specName', params.specName);
  fd.append('productSpecId', params.productSpecId);
  fd.append('specUnit', params.specUnit);
  fd.append('categorySpecId', params.categorySpecId);
  return Axios.post('/api/api/product/product/updatespec', fd);
}
// 修改物品规格
function updatespec (params, updates, goodsId) {
  let fd = new FormData();
  fd.append('goodsId ', goodsId);
  fd.append('categorySpecId ', params.categorySpecId);
  fd.append('productSpecId', params.id);
  fd.append('specValue ', params.specValue);
  fd.append('requestId ', updates.requestId);
  fd.append('timestamp ', updates.timestamp);
  fd.append('token ', updates.token);
  fd.append('userId ', updates.userId);
  return Axios.post('/api/api/product/goods/spec/update', fd);
}
// 按条件查询商品
function search (id, cateId, name) {
  let params = {
    params: {
      bossId: id,
      categoryId: cateId,
      productName: name,
    },
  };
  return Axios.get('/api/api/product/product/categoryId', params);
}
// 删除商品
function deleteProduct (id) {
  let params = {
    params: {
      productId: id,
    },
  };
  return Axios.get('/api/api/product/product/deleteSelectProductId', params);
}
function singledeleteProduct (id) {
  let params = {
    params: {
      productId: id,
    },
  };
  return Axios.get('/api/api/product/product/deleteProductId', params);
}
// 删除规格
function deleteSpec (id) {
  let params = {
    params: {
      productSpecId: id,
    },
  };
  return Axios.get('/api/api/product/product/deleteSpecifies', params);
}
// ============================================================================================店铺模块
// 获取店铺列表
function getStoreList (Id) {
  let params = {
    params: {
      bossId: Id,
    },
  };
  return Axios.get('/api/api/product/stone/byBossId', params);
}

// 新增店铺
function addStore (params) {
  let fd = new FormData();
  fd.append('hfName', params.hfName);
  fd.append('hfDesc', params.hfDesc);
  fd.append('hfStatus', params.stoneStatus);
  fd.append('stoneManagerId', params.stoneManagerId);
  fd.append('stoneManagerId', params.stoneManagerId);
  fd.append('bossId', params.bossId);
  // fd.append('hfName', params.hfName);
  return Axios.post('/api/api/product/stone/addStone', fd, { responseType: 'arraybuffer' });
}
// 修改店铺
function updateStore (params) {
  let fd = new FormData();
  fd.append('bossId', params.bossId);
  fd.append('stoneId', params.id);
  fd.append('hfDesc', params.hfDesc);
  fd.append('hfStatus', params.hfStatus);

  // fd.append('hfName', params.hfName);
  return Axios.post('/api/api/product/stone/updateStone', fd, { responseType: 'arraybuffer' });
}
// 删除店铺
function deleteStore (id) {
  let params = {
    params: {
      stoneId: id,
    },
  };
  return Axios.get('/api/api/product/stone/deleteStone', params);
}
// ================================================================================================物品模块
// 获取物品
function getGood (id) {
  let params = {
    params: {
      stoneId: id,
    },
  };
  return Axios.get('/api/api/product/product/byStoneId', params);
}
// 删除商品
function deleteGood (id) {
  let params = {
    params: {
      productId: id,
    },
  };
  return Axios.get('/api/api/product/product/deleteProductId', params);
}

// 编辑物品
function updateGood (params) {
  let fd = new FormData();
  fd.append('goodsDesc', params.goodsDesc);
  fd.append('id', params.id);
  return Axios.post('/api/api/product/goods/updategood', fd, { responseType: 'arraybuffer' });
}

// 添加规格
function addSpec (params) {
  let fd = new FormData();
  fd.append('goodsId', params.goodsId);
  fd.append('requestId', params.requestId);
  fd.append('specValue', params.specValue);
  fd.append('timestamp', params.timestamp);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  fd.append('productSpecId', params.productSpecId);
  return Axios.post('/api/api/product/goods/addSpecify', fd, { responseType: 'arraybuffer' });
}

// 根据商品ID获取物品
function selectProductGoods (id) {
  let params = {
    params: {
      productId: id,
    },
  };
  return Axios.get('/api/api/product/product/selectProductGoods', params);
}

// 上传图片
// function loadPic(params) {
//   let fd = new FormData();
//   fd.append('goodsDesc', params.goodsDesc);
//   fd.append('id', params.id);
//   return Axios.post("/api/goods/updategood", fd, { responseType: 'arraybuffer' });;
// }
// = ==================================================================================================仓库模块
// 查询仓库
function checkWarehouse (id) {
  let params = {
    params: {
      bossId: id,
    },
  };
  return Axios.get('/api/api/product/wareHouse/listWareHouse', params);
}
// ======================================================================订单模块
// 查看订单列表
function checkOrderList (id) {
  let params = {
    params: {
      userId: id,
    },
  };
  return Axios.get('/api', params);
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
  queryList: queryList,
  addSpecify: addSpecify,
  specifies: specifies,
  additionSpecs: additionSpecs,
  gainSpecifications: gainSpecifications,
  selectFrames: selectFrames,
  selectQ: selectQ,
  update: update,
  specification: specification,
  selectProductGoods: selectProductGoods,
  updatespec: updatespec,
};
