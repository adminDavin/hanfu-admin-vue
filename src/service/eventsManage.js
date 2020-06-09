/* eslint-disable require-jsdoc */
import eventsManage from '@/api/eventsManage.js';

// 获取秒杀商品列表
async function getProdcutActivityType(name, handleResult) {
  eventsManage.getProdcutActivityType(name).then((res) => handleResult(res));
}
// 删除活动
async function eventsDelete(id, handleResult) {
  eventsManage.eventsDelete(id).then((res) => handleResult(res));
}
// 删除活动里的商品
async function deleteGoods(id, handleResult) {
  eventsManage.deleteGoods(id).then((res) => handleResult(res));
}
// 给活动绑定商品
async function seniorityBinding(params, handleResult) {
  eventsManage.seniorityBinding(params).then((res) => handleResult(res));
}
// 查询活动商品列表信息
async function getActivityProductList(id, handleResult) {
  eventsManage.getActivityProductList(id).then((res) => handleResult(res));
}
// 完善活动商品信息 添加价格
async function updateActivityProduct(id, handleResult) {
  eventsManage.updateActivityProduct(id).then((res) => handleResult(res));
}
// 修改活动品接口
async function updateProdcutActivity(id, handleResult) {
  eventsManage.updateProdcutActivity(id).then((res) => handleResult(res));
}
// ========================================秒杀

// 获取秒杀商品列表
async function select(name, handleResult) {
  eventsManage.select(name).then((res) => handleResult(res));
}

// 获取所有商品列表
async function selectAll(handleResult) {
  eventsManage.selectAll().then((res) => handleResult(res));
}
// 添加秒杀商品接口
async function ceateInsert(params, handleResult) {
  eventsManage.ceateInsert(params).then((res) => handleResult(res));
}
// 修改秒杀商品接口
async function killupdate(params, handleResult) {
  eventsManage.killupdate(params).then((res) => handleResult(res));
}

// ========================================拼团
// 获取团购商品列表
async function groupSelete(name, handleResult) {
  eventsManage.groupSelete(name).then((res) => handleResult(res));
}
// 添加团购商品接口
async function groupInsert(params, handleResult) {
  eventsManage.groupInsert(params).then((res) => handleResult(res));
}
// 修改团购商品接口
async function groupupdate(params, handleResult) {
  eventsManage.groupupdate(params).then((res) => handleResult(res));
}
// 单个删除秒杀商品
async function groupDelete(params, handleResult) {
  eventsManage.groupDelete(params).then((res) => handleResult(res));
}
// ========================================精选
// 查询排行相关信息
async function seniorityfindSeniorityInfo(name, handleResult) {
  eventsManage.seniorityfindSeniorityInfo(name).then((res) => handleResult(res));
}
// 查询排行内容
async function seniorityfindSeniorityContent(handleResult) {
  eventsManage.seniorityfindSeniorityContent().then((res) => handleResult(res));
}
// 添加排行相关信息
async function seniorityEvent(params, handleResult) {
  eventsManage.seniorityEvent(params).then((res) => handleResult(res));
}

// 单个删除排行相关信息
async function seniorityDelete(seniorityId, handleResult) {
  eventsManage.seniorityDelete(seniorityId).then((res) => handleResult(res));
}
// 根据排行相关信息获取 绑定信息
async function seniorityfind(seniorityId, handleResult) {
  eventsManage.seniorityfind(seniorityId).then((res) => handleResult(res));
}
// ========================================分销
// 获取分销活动列表
async function findProdcutActivity(name, handleResult) {
  eventsManage.findProdcutActivity(name).then((res) => handleResult(res));
}
// ========================================轮播图
// 获取分销活动列表
async function ratationActivity(name, handleResult) {
  eventsManage.ratationActivity(name).then((res) => handleResult(res));
}
export default {
  eventsDelete: eventsDelete,
  // 秒杀
  select: select,
  ceateInsert: ceateInsert,
  selectAll: selectAll,
  killupdate: killupdate,
  // 团购
  groupSelete: groupSelete,
  groupInsert: groupInsert,
  groupDelete: groupDelete,
  groupupdate: groupupdate,
  // 精选
  seniorityfindSeniorityInfo: seniorityfindSeniorityInfo,
  seniorityDelete: seniorityDelete,
  seniorityEvent: seniorityEvent,
  seniorityBinding: seniorityBinding,
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
