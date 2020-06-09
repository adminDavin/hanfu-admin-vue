/* eslint-disable require-jsdoc */
import store from '@/api/store-api.js';

async function addStore(params, handleResult) {
  store.addStore(params).then((res) => handleResult(res));
}
async function getStore(bossId, handleResult) {
  store.getStore(bossId).then((res) => handleResult(res));
}
async function addPerson(params, handleResult) {
  store.addPerson(params).then((res) => handleResult(res));
}
async function checkPerson(storeId, handleResult) {
  store.checkPerson(storeId).then((res) => handleResult(res));
}
async function getStoreid(id, handleResult) {
  store.getStoreid(id).then((res) => handleResult(res));
}
async function updataStore(params, handleResult) {
  store.updataStore(params).then((res) => handleResult(res));
}
async function isCancel(params, handleResult) {
  store.isCancel(params).then((res) => handleResult(res));
}
async function getStoreRole(params, handleResult) {
  store.getStoreRole(params).then((res) => handleResult(res));
}
async function updateRole(params, handleResult) {
  store.updateRole(params).then((res) => handleResult(res));
}
async function getstoneproduct(params, handleResult) {
  store.getstoneproduct(params).then((res) => handleResult(res));
}
async function storeAddProduct(params, handleResult) {
  store.storeAddProduct(params).then((res) => handleResult(res));
}
async function getproductgood(productId, handleResult) {
  store.getproductgood(productId).then((res) => handleResult(res));
}
async function selectProductGoods(productId, stoneId, handleResult) {
  store.selectProductGoods(productId, stoneId).then((res) => handleResult(res));
}
async function updatagood(productId, handleResult) {
  store.updatagood(productId).then((res) => handleResult(res));
}
async function selectStoneBalance(params, handleResult) {
  store.selectStoneBalance(params).then((res) => handleResult(res));
}
async function selectBalanceDetail(params, handleResult) {
  store.selectBalanceDetail(params).then((res) => handleResult(res));
}
async function getStonePicture(params, handleResult) {
  store.getStonePicture(params).then((res) => handleResult(res));
}
export default {
  addStore: addStore,
  getStore: getStore,
  addPerson: addPerson,
  checkPerson: checkPerson,
  getStoreid: getStoreid,
  updataStore: updataStore,
  isCancel: isCancel,
  getStoreRole: getStoreRole,
  updateRole: updateRole,
  getstoneproduct: getstoneproduct,
  storeAddProduct: storeAddProduct,
  getproductgood: getproductgood,
  selectProductGoods: selectProductGoods,
  updatagood: updatagood,
  selectStoneBalance: selectStoneBalance,
  selectBalanceDetail: selectBalanceDetail,
  getStonePicture: getStonePicture,
};
