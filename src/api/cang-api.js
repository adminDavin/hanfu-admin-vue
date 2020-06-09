/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import Axios from './index';

function addcang(params) {
  let fd = new FormData();
  console.log(params);
  fd.append('hfDesc', params.hfDesc);
  fd.append('bossId', params.bossId);
  fd.append('hfName', params.hfName);
  fd.append('hfRegion', params.hfRegion);
  fd.append('userId', params.userId);
  return Axios.post('/api/api/product/wareHouse/createWareHouse', fd);
}


function checkcang(params) {
  console.log(params);
  return Axios.get('/api/api/product/wareHouse/listWareHouse?bossId=' + params.bossId);

}

function findGoodsByWarsehouse(id) {
  console.log(id);
  return Axios.get('/api/api/product/wareHouse/findGoodsByWarsehouse?warehouseId=' + id);

}

function delcang(wareHouseId) {
  console.log(wareHouseId);
  return Axios.get('/api/api/product/wareHouse/deleteWareHouse?wareHouseId=' + wareHouseId);

}
function editcang(params) {
  let fd = new FormData();
  console.log(params);
  fd.append('hfDesc', params.hfDesc);
  fd.append('bossId', params.bossid);
  fd.append('hfName', params.hfName);
  fd.append('hfRegion', params.hfRegion);
  fd.append('userId', params.userId);
  fd.append('id', params.id);
  return Axios.post('/api/api/product/wareHouse/updateWareHouse', fd);
}
function findkulist() {
  return Axios.get('/api/api/product/wareHouse/findGoodsWarsehouse?dataType=1');

}
function rucang(params) {
  let fd = new FormData();
  console.log(params);
  fd.append('goodId', params.goodId);
  fd.append('productId', params.productId);
  fd.append('quantity', params.quantity);
  fd.append('typeWho', params.typeWho);
  fd.append('userId', params.userId);
  fd.append('warehouseId', params.warehouseId);
  fd.append('bossId ', params.bossId);
  fd.append('stoneId ', params.stoneId);
  fd.append('inStorgeId ', params.id);
  return Axios.post('/api/api/product/wareHouse/goodInWarsehouse', fd);
}
function stoneApplyGood(params) {
  let fd = new FormData();
  console.log(params);
  fd.append('stoneId', params.stoneId);
  fd.append('goodId', params.goodId);
  fd.append('productId', params.productId);
  fd.append('quantity', params.count);
  fd.append('userId', params.userId);
  fd.append('warehouseId', params.warehouseId);
  return Axios.post('/api/api/product/wareHouse/stoneApplyGood', fd);
}
// function findcang(id) {
//   console.log(id);
//   return Axios.get('/api/api/product/wareHouse/findGoodsByWarsehouse?warehouseId=' + id);

// }
function findcang(param) {
  console.log(param);
  let params = {
    warehouseId: param.id,
  };
  if (param.goodName !== '') {
    params.goodName = param.goodName;
  }
  if (param.categoryName !== '') {
    params.categoryName = param.categoryName;
  }
  return Axios.get('/api/api/product/wareHouse/findGoodsByWarsehouse', {params});

}

function chucang(params) {
  let fd = new FormData();
  console.log(params);
  console.log(params.warehouseId, params.type);
  fd.append('goodId', params.goodId);
  fd.append('productId', params.productId);
  fd.append('quantity', params.quantity);
  fd.append('typeWho', params.type);
  fd.append('userId', params.userId);
  fd.append('warehouseId', params.warehouseId);
  fd.append('bossId ', params.bossId);
  fd.append('stoneId ', params.stoneId);
  fd.append('outStorageId ', params.id);
  return Axios.post('/api/api/product/wareHouse/goodOutWarsehouse', fd);
}
function record() {
  return Axios.get('/api/api/product/wareHouse/findWarsehouseRecord');

}
function dan() {

  return Axios.get('/api/api/product/wareHouse/findGoodsWarsehouse?dataType=0');

}
function findRecord(params) {
  console.log(params);
  // eslint-disable-next-line max-len
  // return Axios.get('/api/api/product/wareHouse/findWarsehouseRecord?goodName=' + params.goodName + '&type=' + params.type + '&warehouseId=' + params.wareHouseId);
  return Axios.get('/api/api/product/wareHouse/findWarsehouseRecord?end=' + params.end + '&goodName=' + params.goodName + '&strat=' + params.strat + '&type=' + params.type + '&warehouseId=' + params.wareHouseId);
}
function findru(params) {
  console.log(params);
  // eslint-disable-next-line max-len
  // return Axios.get('/api/api/product/wareHouse/findWarsehouseRecord?goodName=' + params.goodName + '&type=' + params.type + '&warehouseId=' + params.wareHouseId);
  return Axios.get('/api/api/product/wareHouse/findGoodsWarsehouse?categoryName=' + params.categoryName + '&dataType=' + params.dataType + '&goodName=' + params.goodName);
}
function checkgood(params) {
  console.log(params);
  // eslint-disable-next-line max-len
  // return Axios.get('/api/api/product/wareHouse/findWarsehouseRecord?goodName=' + params.goodName + '&type=' + params.type + '&warehouseId=' + params.wareHouseId);
  return Axios.get('/api/api/product/wareHouse/findBossGoods?bossId=' + params.bossId);
}
function subapply(params) {
  let fd = new FormData();
  console.log(params);
  fd.append('bossId', params.bossId);
  fd.append('goodId', params.goodId);
  fd.append('productId', params.productId);
  fd.append('quantity', params.count);
  fd.append('userId', params.userId);
  fd.append('warehouseId', params.warehouseId);

  return Axios.post('/api/api/product/wareHouse/applyGoodsWarsehouse', fd);
}
function getProductListBoss(params) {
  let fd = new FormData();
  console.log(params);
  fd.append('userId', params.userId);
  fd.append('outStorageId', params.id);
  return Axios.post('/api/api/product/wareHouse/goodOutWarsehouse', fd);
}
function rejectGoodOutWarsehouse(params) {
  let fd = new FormData();
  console.log(params);
  fd.append('outStorageId', params.id);
  return Axios.post('/api/api/product/wareHouse/rejectGoodOutWarsehouse', fd);
}
function findkulistone(id) {
  console.log('1', id);
  return Axios.get('/api/api/product/wareHouse/findGoodsWarsehouse?dataType=1&warehouseId=' + id);

}
function danone(id) {

  return Axios.get('/api/api/product/wareHouse/findGoodsWarsehouse?dataType=0&warehouseId=' + id);

}
function recordone(id) {
  return Axios.get('/api/api/product/wareHouse/findWarsehouseRecord?warehouseId=' + id);

}
function shenlist(params) {
  return Axios.get('/api/api/product/wareHouse/findApplyforWarehouse?bossId=' + params.bossId);

}

export default {
  addcang: addcang,
  checkcang: checkcang,
  delcang: delcang,
  editcang: editcang,
  findkulist: findkulist,
  rucang: rucang,
  findcang: findcang,
  chucang: chucang,
  record: record,
  dan: dan,
  findRecord: findRecord,
  findru: findru,
  checkgood: checkgood,
  subapply: subapply,
  findkulistone: findkulistone,
  danone: danone,
  recordone: recordone,
  shenlist: shenlist,
  findGoodsByWarsehouse: findGoodsByWarsehouse,
  stoneApplyGood: stoneApplyGood,
  getProductListBoss: getProductListBoss,
  rejectGoodOutWarsehouse: rejectGoodOutWarsehouse,
};

