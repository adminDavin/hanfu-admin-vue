/* eslint-disable require-jsdoc */
import Axios from './index';


function addSup(params) {
  console.log(params);
  let fd = new FormData();
  fd.append('authKey', params.authKey);
  fd.append('LastUser', params.LastUser);
  fd.append('authType', params.authType);
  fd.append('type', params.type);
  fd.append('BSid', params.BSid);
  return Axios.post('/api/api/user/hf-auth/addSup', fd);
}

function selectAccount() {
  return Axios.get('/api/api/user/jurisdiction/selectAccount');
}

function deleteAccount(params) {
  return Axios.get('/api/api/user/jurisdiction/deleteAccount?id=' + params.id + '&type=' + params.accountType);
}

export default {
  addSup: addSup,
  selectAccount: selectAccount,
  deleteAccount: deleteAccount,
};
