/* eslint-disable require-jsdoc */
import Axios from './index';
function checkStatus(state) {
  return Axios.get('/api/api/order/order/status');
}
function checkOrder(orderStatus) {
  return Axios.get('/api/api/order/hf-order/query?orderStatus=' + orderStatus);
}
function upDataOrderStatus(params) {
  console.log(params);
  return Axios.get('/api/api/order/hf-order/modifyStatus?Id=' + params.id + '&orderCode=' + params.orderCode +
    '&originOrderStatus=' + params.originOrderStatus + '&targetOrderStatus=' + params.targetOrderStatus + '&stoneId=' + params.stoneId + '&payOrderId=' + params.payOrderId);
}
function upDataOrderStatus1(params) {
  console.log(params);
  return Axios.get('/api/api/order/hf-order/modifyStatus?Id=' + params.id + '&orderCode=' + params.orderCode +
    '&originOrderStatus=' + params.originOrderStatus + '&targetOrderStatus=' + params.targetOrderStatus + '&payOrderId=' + params.payOrderId);
}
function getOrderType(params) {
  return Axios.get('/api/api/order/order/orderType');
}
function getOrderByType(params) {
  return Axios.get('/api/api/order/hf-order/query?orderStatus=' + params.orderStatus + '&orderType=' + params.orderType);
}
function getOrderDetail(id) {
  return Axios.get('/api/api/order/order/queryDetail?id=' + id);
}
function getOrderDetail1(params) {
  // console.log(params);
  return Axios.get('/api/api/order/hf-order/query?orderCode=' + params.orderCode +
  '&orderStatus=' + params.orderStatus + '&orderType=' + params.orderType);
}

function writeWuLiu(params) {
  // console.log(params);
  return Axios.get('/api/api/order/order/insertLogistics?ordersId=' + params.id +
  '&logisticsOrdersId=' + params.logisticsOrdersId + '&googsId=' + params.googsId + '&stoneId=' + params.stoneId);
}
function writeWuLiu1(params) {
  // console.log(params);
  return Axios.get('/api/api/order/order/insertLogistics?ordersId=' + params.id +
    '&googsId=' + params.googsId);
}
function getWuLiu(params) {
  return Axios.get('/api/api/order/query/logistics?orderId=' + params.id + '&stoneId=' + params.stoneId);
}
function sousuo(params) {
  console.log(params);
  return Axios.get('/api/api/order/hf-order/query?orderCode=' + params.orderCode +
   '&orderStatus=' + params.orderStatus + '&orderType=' + params.orderType +
   '&stateTime=' + params.startTime + '&endTime=' + params.endTime + '&paymentName=' + params.paymentName + '&productName=' + params.productName);
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
