/* eslint-disable indent */
/* eslint-disable require-jsdoc */
import userCenter from '@/api/userCenter_api.js';
// 添加后台管理员
async function addUser(params, handleResult) {
    userCenter.addUser(params).then((res) => handleResult(res));
}
async function checkUser(handleResult) {
    userCenter.checkUser().then((res) => handleResult(res));
}
async function checkUsers(params, handleResult) {
    console.log(params);
    userCenter.checkUsers(params).then((res) => handleResult(res));
}
async function deleteUser(userId, handleResult) {
    userCenter.deleteUser(userId).then((res) => handleResult(res));
}
async function uploadPicture(file, userId, handleResult) {
    userCenter.uploadPicture(file, userId).then((res) => handleResult(res));
}
async function updatePerson(params, handleResult) {
    userCenter.updatePerson(params).then((res) => handleResult(res));
}
async function getUserDetails(userId, handleResult) {
    userCenter.getUserDetails(userId).then((res) => handleResult(res));
}
async function checkAdmin(bossid, handleResult) {
    userCenter.checkAdmin(bossid).then((res) => handleResult(res));
}
async function checkAdmins(params, handleResult) {
    userCenter.checkAdmins(params).then((res) => handleResult(res));
}
async function bossinfor(bossId, handleResult) {
    userCenter.bossinfor(bossId).then((res) => handleResult(res));
}
async function getOrderDetail1(bossId, handleResult) {
    userCenter.getOrderDetail1(bossId).then((res) => handleResult(res));
}

export default {
    addUser: addUser,
    checkUser: checkUser,
    checkUsers: checkUsers,
    deleteUser: deleteUser,
    uploadPicture: uploadPicture,
    updatePerson: updatePerson,
    getUserDetails: getUserDetails,
    checkAdmin: checkAdmin,
    checkAdmins: checkAdmins,
    bossinfor: bossinfor,
    getOrderDetail1: getOrderDetail1,
    // eslint-disable-next-line eol-last
};