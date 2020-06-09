/* eslint-disable indent */
/* eslint-disable require-jsdoc */
import Axios from './index';
// 添加后台管理员
function addUser(params) {
    let fd = new FormData();
    fd.append('name', params.name);
    fd.append('phone', params.phone);
    return Axios.post('/api/api/user/hf-auth/addAdminUser', fd);
}

// 删除台管理员
function deleteUser(userId) {
    return Axios.get('/api/api/user/hf-auth/deleteAdminUser?userId=' + userId);
}

function uploadPicture(file, userId) {
    let fd = new FormData();
    fd.append('file', file);
    fd.append('userId', userId);
    return Axios.post('/api/api/user/user/upload_avatar', fd);
}
// 查询台管理员
function checkUser(param) {
    return Axios.get('/api/api/user/hf-auth/findAdminUser');
}

function checkUsers(param) {
    console.log(param);
    let params = {

    };
    if (param.phone !== '') {
        params.phone = param.phone;
    }
    if (param.name !== '') {
        params.name = param.name;
    }
    return Axios.get('/api/api/user/hf-auth/findAdminUser', { params });
}

function getUserDetails(userId) {
    return Axios.get('/api/api/user/hf-auth/findUserDetails?userId=' + userId);
}

function updatePerson(params) {
    let fd = new FormData();
    console.log(params);
    fd.append('nickName', params.nickName);
    fd.append('invitationCode', params.invitationCode);
    fd.append('userId', params.userId);
    fd.append('phone', params.phone);
    return Axios.post('/api/api/user/hf-auth/update', fd);
}

function checkAdmin(param) {
    console.log(param);
    let params = {
        bossId: param,
    };
    // params.phone = param.phone;
    // params.name = param.name;
    return Axios.get('/api/api/user/hf-auth/selectStoneAdmin', {
        params,
    });
}

function checkAdmins(param) {
    console.log(param);
    let params = {
        bossId: param.bossId,
    };
    if (param.phone !== '') {
        params.phone = param.phone;
    }
    if (param.name !== '') {
        params.name = param.name;
    }
    return Axios.get('/api/api/user/hf-auth/selectStoneAdmin', {
        params,
    });
}

function bossinfor(bossId) {
    return Axios.get('/api/api/user/hf-auth/findBossInfo?bossId=' + bossId);
}

export default {
    addUser: addUser,
    checkUser: checkUser,
    checkUsers: checkUsers,
    deleteUser: deleteUser,
    updatePerson: updatePerson,
    uploadPicture: uploadPicture,
    getUserDetails: getUserDetails,
    checkAdmin: checkAdmin,
    checkAdmins: checkAdmins,
    bossinfor: bossinfor,
    // eslint-disable-next-line eol-last
};