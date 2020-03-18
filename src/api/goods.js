/* eslint-disable require-jsdoc */
import Axios from 'axios';
// =============================================商品模块

function getGoodsByProductId(productId) {
  return Axios.get('/api/api/product/product/selectProductGoods?productId=' + productId);
}
// 根据文件ID获取图片
function getFileFileId(fileId) {
  return Axios.get('/api/api/product/goods/getFile?fileId=' + fileId);
}
// 物品详情信息
function selectProductGoods(goodsId, productId) {
  return Axios.get('/api/api/product/product/selectProductGoods?goodsId=' + goodsId + '&productId=' + productId);
}

// 删除物品
function deleteById(goodsId) {
  return Axios.get('/api/api/product/goods/deleteGoods?goodsId=' + goodsId);
}
// 物品规格
function goodsSpecifies(goodsId) {
  return Axios.get('/api/api/product/goods/specifies?goodsId=' + goodsId);
}
// 添加物品
function addProduct(params) {
  let fd = new FormData();
  fd.append('productId', params.productId);
  fd.append('cancelId', params.cancelId);
  fd.append('claim', params.claim);
  // fd.append('frames', params.frames);
  fd.append('goodName', params.goodName);
  fd.append('goodsDesc', params.goodsDesc);
  fd.append('requestId', params.requestId);
  fd.append('token', params.token);
  fd.append('fileInfo1', params.fileInfo1);
  fd.append('userId', params.userId);
  fd.append('specValue', params.specValue);
  return Axios.post('/api/api/product/goods/create', fd);
}
// 设置物品价格
function setPrice (params) {
  let fd = new FormData();
  fd.append('hfGoodsId', params.hfGoodsId);
  fd.append('sellPrice', params.sellPrice);
  fd.append('quantity', params.quantity);
  fd.append('linePrice', params.linePrice);
  return Axios.post('/api/api/product/goods/setPrice', fd);
}
// 编辑物品
function updateGood (params) {
  let fd = new FormData();
  fd.append('brandName', params.brandName);
  fd.append('goodName', params.goodsName);
  fd.append('goodsDesc', params.goodsDesc);
  fd.append('sellPrice', params.sellPrice);
  fd.append('id', params.goodsId);
  // fd.append('linePrice', params.linePrice); 划线价
  return Axios.post('/api/api/product/goods/updategood', fd);
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
// 更新物品规格值
function goodsSpecUpdate (params, goosID) {
  let fd = new FormData();
  fd.append('goodsId', goosID);
  fd.append('specValue', params.specValue);
  fd.append('productSpecId', params.id);
  // fd.append('timestamp', '200195.35.12');
  // fd.append('token', '13');
  return Axios.post('/api/api/product/goods/spec/update', fd);
}
export default {
  getGoodsByProductId: getGoodsByProductId,
  getFileFileId: getFileFileId,
  addProduct: addProduct,
  additionSpecs: additionSpecs,
  deleteById: deleteById,
  selectProductGoods: selectProductGoods,
  updateGood: updateGood,
  setPrice: setPrice,
  goodsSpecifies: goodsSpecifies,
  goodsSpecUpdate: goodsSpecUpdate,
};
