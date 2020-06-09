/* eslint-disable require-jsdoc */

import Axios from './index';
// 添加类目
function typeAddCategory (params, category) {
  let fd = new FormData();
  fd.append('levelId', params.levelId);
  fd.append('parentCategoryId', params.parentCategoryId);
  fd.append('requestId', params.requestId);
  fd.append('timestamp', params.timestamp);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  fd.append('category', category);
  return Axios.post('/api/api/product/product/addCategory', fd);
}
// 修改类目
function updateCategory (params, userId) {
  let fd = new FormData();
  fd.append('category', params.hfName);
  fd.append('catrgoryId', params.id);
  fd.append('requestId', 1);
  fd.append('timestamp', 1);
  fd.append('token', '2');
  fd.append('userId', userId);
  return Axios.post('/api/api/product/product/updateCategory', fd);
}
function deleteCategory (categoryId) {
  return Axios.get('/api/api/product/product/deleteCategory?categoryId=' + categoryId);
}
function getCategoryByInfo (params) {
  return Axios.get('/api/api/product/product/getCategoryByInfo?level=' + params.level + '&name=' + params.name);
}
// 获取类目列表
function getCatagery() {
  return Axios.get('/api/api/product/product/categoryAll');
}
export default {
  typeAddCategory: typeAddCategory,
  deleteCategory: deleteCategory,
  getCatagery: getCatagery,
  updateCategory: updateCategory,
  getCategoryByInfo: getCategoryByInfo,
};
