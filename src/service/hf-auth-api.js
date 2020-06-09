/* eslint-disable require-jsdoc */
import api from '@/api/hf-auth-api.js';

async function addSup(params, handleResult) {
  api.addSup(params).then((res) => handleResult(res));
}
async function selectAccount(handleResult) {
  api.selectAccount().then((res) => handleResult(res));
}

async function deleteAccount(params, handleResult) {
  api.deleteAccount(params).then((res) => handleResult(res));
}
export default {
  addSup: addSup,
  selectAccount: selectAccount,
  deleteAccount: deleteAccount,
};

