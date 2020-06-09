/* eslint-disable require-jsdoc */
import orderCenter from '@/api/orderCenter_api.js';
// 添加后台管理员
async function checkStatus(handleResult) {
  orderCenter.checkStatus().then((res) => handleResult(res));
}
async function checkOrder(orderStatus, handleResult) {
  orderCenter.checkOrder(orderStatus).then((res) => handleResult(res));
}
async function upDataOrderStatus(params, handleResult) {
  orderCenter.upDataOrderStatus(params).then((res) => handleResult(res));
}
async function upDataOrderStatus1(params, handleResult) {
  orderCenter.upDataOrderStatus1(params).then((res) => handleResult(res));
}


async function getOrderType(handleResult) {
  orderCenter.getOrderType().then((res) => handleResult(res));
}
async function getOrderByType(params, handleResult) {
  // console.log('1');
  // console.log('1', params);
  orderCenter.getOrderByType(params).then((res) => handleResult(res));
}
async function getOrderDetail(id, handleResult) {
  orderCenter.getOrderDetail(id).then((res) => handleResult(res));
}
async function getOrderDetail1(params, handleResult) {
  orderCenter.getOrderDetail1(params).then((res) => handleResult(res));
}
async function writeWuLiu(params, handleResult) {
  orderCenter.writeWuLiu(params).then((res) => handleResult(res));
}
async function writeWuLiu1(params, handleResult) {
  orderCenter.writeWuLiu1(params).then((res) => handleResult(res));
}
async function getWuLiu(orderId, handleResult) {
  orderCenter.getWuLiu(orderId).then((res) => handleResult(res));
}
async function sousuo(params, handleResult) {
  orderCenter.sousuo(params).then((res) => handleResult(res));
}
export default {
  checkStatus: checkStatus,
  checkOrder: checkOrder,
  upDataOrderStatus: upDataOrderStatus,
  upDataOrderStatus1: upDataOrderStatus1,
  getOrderType: getOrderType,
  getOrderByType: getOrderByType,
  getOrderDetail: getOrderDetail,
  getOrderDetail1: getOrderDetail1,
  writeWuLiu: writeWuLiu,
  writeWuLiu1: writeWuLiu1,
  getWuLiu: getWuLiu,
  sousuo: sousuo,
};
