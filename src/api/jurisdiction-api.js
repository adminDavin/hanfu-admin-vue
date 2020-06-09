/* eslint-disable require-jsdoc */
import Axios from './index';

function selectRole () {
  return Axios.get('/api/api/user/jurisdiction/selectRole');
}
function findAdminHasModel (params) {
  console.log(params);
  return Axios.get('/api/api/user/jurisdiction/findAdminHasModel', {params});
}
function findAdminHasJusInModel (params) {
  console.log(params);
  return Axios.get('/api/api/user/jurisdiction/findAdminHasJusInModel', {params});
}
function roleAddModel (params) {
  console.log(params);
  return Axios.get('/api/api/user/jurisdiction/roleAddModel', {params});
}
// 下拉框
function selectRoleCode () {
  return Axios.get('/api/api/user/jurisdiction/selectRoleCode');
}
// 取消模块
function roleDeleteModel (params) {
  console.log(params);
  let fd = new FormData();
  fd.append('modelId', params.modelId);
  fd.append('roleId', params.roleId);
  return Axios.post('/api/api/user/jurisdiction/roleDeleteModel', fd);
}

// 绑定模块下的小权限
function roleAddJurisdiction (params) {
  console.log(params);
  let fd = new FormData();
  fd.append('JurisdictionIds', params.JurisdictionIds);
  fd.append('roleId', params.roleId);
  return Axios.post('/api/api/user/jurisdiction/roleAddJurisdiction', fd);
}
// 取消绑定模块下的小权限
function roleDeleteJurisdiction (params) {
  console.log(params);
  let fd = new FormData();
  fd.append('JurisdictionIds', params.JurisdictionIds);
  fd.append('roleId', params.roleId);
  return Axios.post('/api/api/user/jurisdiction/roleDeleteJurisdiction', fd);
}
// 添加角色
function addRole (params) {
  console.log(params);
  let fd = new FormData();
  fd.append('roleCode', params.roleCode);
  fd.append('roleName', params.roleName);
  fd.append('userId', params.userId);
  return Axios.post('/api/api/user/jurisdiction/addRole', fd);
}

export default {
  selectRole: selectRole,
  findAdminHasModel: findAdminHasModel,
  findAdminHasJusInModel: findAdminHasJusInModel,
  roleAddModel: roleAddModel,
  roleDeleteModel: roleDeleteModel,
  roleAddJurisdiction: roleAddJurisdiction,
  roleDeleteJurisdiction: roleDeleteJurisdiction,
  addRole: addRole,
  selectRoleCode: selectRoleCode,
};