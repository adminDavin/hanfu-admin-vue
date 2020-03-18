/* eslint-disable require-jsdoc */
import userCenter from '@/api/userCenter_api.js';
// 添加后台管理员
async function addUser(params, handleResult) {
  userCenter.addUser(params).then((res) => handleResult(res));
}
async function checkUser(handleResult) {
  userCenter.checkUser().then((res) => handleResult(res));
}
async function deleteUser(userId, handleResult) {
  userCenter.deleteUser(userId).then((res) => handleResult(res));
}
async function uploadPicture(file, userId, handleResult) {
  userCenter.uploadPicture(file, userId).then((res) => handleResult(res));
}
export default {
  addUser: addUser,
  checkUser: checkUser,
  deleteUser: deleteUser,
  uploadPicture: uploadPicture,
};

