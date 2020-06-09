/* eslint-disable require-jsdoc */
import Axios from './index';
function getstoneproduct(bossId) {
  return Axios.get('/api/api/product/home/findAmountData?bossId=' + bossId);
}
function findAmountDataByStone(stoneId) {
  return Axios.get('/api/api/product/stone/findAmountDataByStone?stoneId=' + stoneId);
}
function getpai(bossId) {
  return Axios.get('/api/api/product/home/findSalesVolumeData?bossId=' + bossId);
}
function getorder(bossId) {
  return Axios.get('/api/api/product/home/findOrderTypeData?bossId=' + bossId);
}
function xiao(bossId) {
  return Axios.get('/api/api/product/home/findSaleMouthData?bossId=' + bossId);
}
function ke(bossId) {
  return Axios.get('/api/api/product/home/findBrowseCountData?bossId=' + bossId + '&count=3');
}
export default {
  getstoneproduct: getstoneproduct,
  getpai: getpai,
  getorder: getorder,
  xiao: xiao,
  ke: ke,
  findAmountDataByStone: findAmountDataByStone,
};
