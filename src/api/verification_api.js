
import Axios from './index';
// 查询
// eslint-disable-next-line require-jsdoc
function login (params) {
  console.log(params);
  let fd = new FormData();
  fd.append('createData', params.createData);
  fd.append('createData1', params.createData1);
  fd.append('site', params.site);
  console.log(fd);
  return Axios.get('/ver/test/login?createData=' + params.createData + '&createDate1=' + params.createData1 + '&site=' + params.site);
}

export default {
  login: login,
};
