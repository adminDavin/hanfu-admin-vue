/* eslint-disable require-jsdoc */
import category from '@/api/category_api.js';

async function getCatagery(handleResult) {
  category.getCatagery().then((res) => handleResult(res));
}

async function typeAddCategory(params, categorys, handleResult) {
  category.typeAddCategory(params, categorys).then((res) => handleResult(res));
}

async function deleteCategory(categoryId, handleResult) {
  category.deleteCategory(categoryId).then((res) => handleResult(res));
}
async function updateCategory(params, userId, handleResult) {
  category.updateCategory(params, userId).then((res) => handleResult(res));
}
async function getCategoryByInfo(params, handleResult) {
  category.getCategoryByInfo(params).then((res) => handleResult(res));
}
export default {
  getCatagery: getCatagery,
  typeAddCategory: typeAddCategory,
  deleteCategory: deleteCategory,
  updateCategory: updateCategory,
  getCategoryByInfo: getCategoryByInfo,
};

