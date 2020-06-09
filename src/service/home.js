/* eslint-disable require-jsdoc */
import home from '@/api/home-api.js';
async function getstoneproduct(bossId, handleResult) {
  home.getstoneproduct(bossId).then((res) => handleResult(res));
}
async function findAmountDataByStone(stoneId, handleResult) {
  home.findAmountDataByStone(stoneId).then((res) => handleResult(res));
}
async function getpai(bossId, handleResult) {
  home.getpai(bossId).then((res) => handleResult(res));
}
async function getorder(bossId, handleResult) {
  home.getorder(bossId).then((res) => handleResult(res));
}
async function xiao(bossId, handleResult) {
  home.xiao(bossId).then((res) => handleResult(res));
}
async function ke(bossId, handleResult) {
  home.ke(bossId).then((res) => handleResult(res));
}

export default {
  getstoneproduct: getstoneproduct,
  getpai: getpai,
  getorder: getorder,
  xiao: xiao,
  ke: ke,
  findAmountDataByStone: findAmountDataByStone,
};

