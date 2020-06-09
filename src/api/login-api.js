/* eslint-disable require-jsdoc */
import Axios from 'axios';

function login (params) {
  console.log(params);
  let fd = new FormData();
  fd.append('authKey', params.authKey);
  fd.append('authType', params.authType);
  fd.append('passwd', params.code);
  fd.append('type', params.type);
  return Axios.post('/api/api/user/hf-auth/login', fd);
}

function token (params) {
  console.log(params);
  let fd = new FormData();
  fd.append('merId', params.merId);
  fd.append('type', params.type);
  fd.append('userId', params.userId);
  return Axios.post('/api/api/user/hf-auth/token', fd);
}
export default {
  login: login,
  token: token,
};
