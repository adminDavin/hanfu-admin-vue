/* eslint-disable require-jsdoc */
import Axios from './index';

// 删除活动
function eventsDelete(id) {
  console.log(id);
  return Axios.post('/api/api/product/hfProductActivity/deleteProdcutActivity?id=' + id);
}
// 删除活动里的商品
function deleteGoods(id) {
  console.log(id);
  return Axios.post('/api/api/product/hfProductActivity/deleteActivityProduct?id=' + id);
}
// 给活动绑定商品
function seniorityBinding(params) {
  let fd = new FormData();
  fd.append('productId', params.goodsId);
  fd.append('id', params.seniorityId);
  fd.append('instanceId', params.instanceId);
  return Axios.post('/api/api/product/hfProductActivity/intoActivityProduct', fd);
}
// 获取所有商品列表
function selectAll() {
  return Axios.get('/api/api/product/hfProduct/getProductsForRotation?quantity=10');
}

// 查询活动商品列表信息
function getActivityProductList(id) {
  return Axios.get('/api/api/product/hfProductActivity/getActivityProductList?id=' + id);
}
// 完善活动商品信息 添加价格
function updateActivityProduct(params) {
  let fd = new FormData();
  if (params.id !== undefined) {
    fd.append('id', params.id);
  }
  if (params.groupNum !== undefined) {
    fd.append('groupNum', params.groupNum);
  }

  if (params.distributionRatio !== undefined) {
    fd.append('distributionRatio', params.distributionRatio);
  }

  if (params.favoravlePrice !== undefined) {
    fd.append('favoravlePrice', params.favoravlePrice);
  }
  if (params.discountRatio !== undefined) {
    fd.append('discountRatio', params.discountRatio);
  }

  if (params.inventoryCelling !== undefined) {
    fd.append('inventoryCelling', params.inventoryCelling);
  }

  fd.append('timestamp', params.timestamp);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  fd.append('requestId', params.requestId);
  return Axios.post('/api/api/product/hfProductActivity/updateActivityProduct', fd);
}

// 修改活动品接口
function updateProdcutActivity(params) {
  console.log(params);
  let fd = new FormData();
  fd.append('activityName ', params.activityName);
  fd.append('id', params.id);
  if (params.startTime !== undefined) {
    fd.append('startTime', params.startTime);
  }
  if (params.endTime !== undefined) {
    fd.append('endTime', params.endTime);
  }
  return Axios.post('/api/api/product/hfProductActivity/updateProdcutActivity', fd);
}
// ========================================秒杀

// 获取秒杀商品列表
function select(name) {
  console.log(name);
  if (name === undefined) {
    name = '';
  }
  return Axios.get('/api/api/product/hfProductActivity/findProdcutActivity?activityType=seckillActivity&name=' + name);
}
// 获取商品活动类型
function getProdcutActivityType() {
  return Axios.get('/api/api/product/hfProductActivity/getProdcutActivityType');
}

// 添加秒杀商品接口
function ceateInsert(params) {
  let fd = new FormData();
  fd.append('activityName', params.activityName);
  fd.append('activityType', params.activityType);

  if (params.startTime !== '') {
    fd.append('startTime', params.startTime);
  }
  if (params.endTime !== '') {
    fd.append('endTime', params.endTime);
  }

  fd.append('timestamp', params.timestamp);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  fd.append('requestId', params.requestId);
  return Axios.post('/api/api/product/hfProductActivity/addProdcutActivity', fd);
}
// 修改秒杀商品接口 startTime
function killupdate(params) {
  let fd = new FormData();
  fd.append('goodsId', params.goodsId);
  fd.append('price', params.price);
  fd.append('id', params.id);
  fd.append('repertory', params.repertory);
  fd.append('startTime', params.startTime);
  fd.append('stopTime', params.stopTime);
  return Axios.post('/api/api/product/kill/update', fd);
}

// ========================================拼团
// 获取团购商品列表
function groupSelete(name) {
  return Axios.get('/api/api/product/hfProductActivity/findProdcutActivity?activityType=groupActivity&name=' + name);
}
// 单个删除秒杀商品
function groupDelete(id) {
  return Axios.get('/api/api/product/group/delete?id=' + id);
}

// 添加团购商品接口
function groupInsert(params) {
  let fd = new FormData();
  fd.append('goodsId', params.goodsId);
  fd.append('number', params.number);
  fd.append('price', params.price);
  fd.append('repertory', params.repertory);
  fd.append('startTime', params.startTime);
  fd.append('stopTime', params.stopTime);
  return Axios.post('/api/api/product/group/insert', fd);
}
// 修改团购商品接口
function groupupdate(params) {
  let fd = new FormData();
  fd.append('goodsId', params.goodsId);
  fd.append('number', params.number);
  fd.append('groupId', params.groupId);
  fd.append('price', params.price);
  fd.append('repertory', params.repertory);
  fd.append('startTime', params.startTime);
  fd.append('stopTime', params.stopTime);
  return Axios.post('/api/api/product/group/update', fd);
}
// ========================================精选

// 查询排行相关信息
function seniorityfindSeniorityInfo(name) {
  return Axios.get('/api/api/product/hfProductActivity/findProdcutActivity?activityType=seniorityActivity&name=' + name);
}
// 查询排行内容
function seniorityfindSeniorityContent() {
  return Axios.get('/api/api/product/seniority/findSeniorityContent');
}
// 添加排行相关信息
function seniorityEvent(params) {
  let fd = new FormData();
  // fd.append('fileId', params.fileId);
  fd.append('fileInfo', params.fileInfo);
  fd.append('repertory', params.repertory);
  fd.append('seniorityName', params.seniorityName);
  fd.append('timestamp', params.timestamp);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  return Axios.post('/api/api/product/seniority/addSeniorityInfo', fd);
}

// 单个删除排行相关信息
function seniorityDelete(seniorityId) {
  return Axios.get('/api/api/product/seniority/deleteSeniorityInfo?seniorityId=' + seniorityId);
}

// 根据排行相关信息获取 绑定信息
function seniorityfind(seniorityId) {
  return Axios.get('/api/api/product/seniority/findSeniorityContent?seniorityId=' + seniorityId);
}
// ========================================分销
// 获取分销活动列表
function findProdcutActivity(name) {
  return Axios.get('/api/api/product/hfProductActivity/findProdcutActivity?activityType=distributionActivity&name=' + name);
}
// ========================================轮播图
// 获取轮播图活动列表
function ratationActivity(name) {
  return Axios.get('/api/api/product/hfProductActivity/findProdcutActivity?activityType=ratationActivity&name=' + name);
}
export default {
  // 秒杀
  select: select,
  ceateInsert: ceateInsert,
  selectAll: selectAll,
  eventsDelete: eventsDelete,
  killupdate: killupdate,
  // 团购
  groupSelete: groupSelete,
  groupInsert: groupInsert,
  groupDelete: groupDelete,
  groupupdate: groupupdate,
  // 精选
  seniorityfindSeniorityInfo: seniorityfindSeniorityInfo,
  seniorityEvent: seniorityEvent,
  seniorityBinding: seniorityBinding,
  seniorityDelete: seniorityDelete,
  seniorityfind: seniorityfind,
  seniorityfindSeniorityContent: seniorityfindSeniorityContent,
  // 分销
  findProdcutActivity: findProdcutActivity,

  getProdcutActivityType: getProdcutActivityType,
  getActivityProductList: getActivityProductList,
  updateActivityProduct: updateActivityProduct,
  deleteGoods: deleteGoods,
  updateProdcutActivity: updateProdcutActivity,

  // 轮播图
  ratationActivity: ratationActivity,
};

