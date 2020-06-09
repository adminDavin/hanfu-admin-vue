/* eslint-disable require-jsdoc */
import cang from '@/api/cang-api.js';

async function addcang(params, handleResult) {
  cang.addcang(params).then((res) => handleResult(res));
}
async function checkcang(params, handleResult) {
  cang.checkcang(params).then((res) => handleResult(res));
}
async function delcang(wareHouseId, handleResult) {
  cang.delcang(wareHouseId).then((res) => handleResult(res));
}
async function editcang(params, handleResult) {
  cang.editcang(params).then((res) => handleResult(res));
}
async function findkulist(handleResult) {
  cang.findkulist().then((res) => handleResult(res));
}
async function rucang(params, handleResult) {
  cang.rucang(params).then((res) => handleResult(res));
}
async function findcang(params, handleResult) {
  cang.findcang(params).then((res) => handleResult(res));
}
async function chucang(params, handleResult) {
  cang.chucang(params).then((res) => handleResult(res));
}
async function record(handleResult) {
  cang.record().then((res) => handleResult(res));
}
async function dan(handleResult) {
  cang.dan().then((res) => handleResult(res));
}
async function findRecord(params, handleResult) {
  cang.findRecord(params).then((res) => handleResult(res));
}
async function findru(params, handleResult) {
  cang.findru(params).then((res) => handleResult(res));
}
async function checkgood(params, handleResult) {
  cang.checkgood(params).then((res) => handleResult(res));
}
async function subapply(params, handleResult) {
  cang.subapply(params).then((res) => handleResult(res));
}

async function findkulistone(id, handleResult) {
  cang.findkulistone(id).then((res) => handleResult(res));
}
async function danone(id, handleResult) {
  cang.danone(id).then((res) => handleResult(res));
}
async function recordone(id, handleResult) {
  cang.recordone(id).then((res) => handleResult(res));
}
async function shenlist(params, handleResult) {
  cang.shenlist(params).then((res) => handleResult(res));
}
async function findGoodsByWarsehouse(id, handleResult) {
  cang.findGoodsByWarsehouse(id).then((res) => handleResult(res));
}
async function stoneApplyGood(params, handleResult) {
  cang.stoneApplyGood(params).then((res) => handleResult(res));
}
async function getProductListBoss(params, handleResult) {
  cang.getProductListBoss(params).then((res) => handleResult(res));
}
async function rejectGoodOutWarsehouse(params, handleResult) {
  cang.rejectGoodOutWarsehouse(params).then((res) => handleResult(res));
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
