/* eslint-disable require-jsdoc */
import vip from '@/api/vip-api.js';

async function addLevel(params, handleResult) {
  vip.addLevel(params).then((res) => handleResult(res));
}
async function checkLevel (handleResult) {
  vip.checkLevel().then((res) => handleResult(res));
}
async function addvip(params, handleResult) {
  vip.addvip(params).then((res) => handleResult(res));
}
async function findvip(handleResult) {
  vip.findvip().then((res) => handleResult(res));
}
async function findvips(params, handleResult) {
  vip.findvips(params).then((res) => handleResult(res));
}
async function editLevel(params, handleResult) {
  vip.editLevel(params).then((res) => handleResult(res));
}
async function adddes(params, handleResult) {
  vip.adddes(params).then((res) => handleResult(res));
}
async function finddes(levelId, handleResult) {
  vip.finddes(levelId).then((res) => handleResult(res));
}
async function deletevip(id, handleResult) {
  vip.deletevip(id).then((res) => handleResult(res));
}

export default {
  addLevel: addLevel,
  checkLevel: checkLevel,
  addvip: addvip,
  findvip: findvip,
  editLevel: editLevel,
  adddes: adddes,
  finddes: finddes,
  deletevip: deletevip,
  findvips: findvips,
};

