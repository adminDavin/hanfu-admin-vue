
import Axios from 'axios';
// 获取用户
function categoryId () {
  return Axios.post('/log/user/selectList');
}
// 添加核销员
function insertCancel (params) {
  return Axios.get('/ver/cancel/insertCancel?RealName=' + params.RealName + '&UserId=' + params.UserId + '&site=' + params.site);
}
// 编辑
function update (params) {
  let fd = new FormData();
  fd.append('userStatus', params.userStatus);
  fd.append('realName', params.realName);
  // fd.append('birthDay', params.birthDay)
  fd.append('phone', params.phone);
  fd.append('requestId', params.requestId);
  fd.append('sex', params.sex);
  fd.append('token', params.token);
  fd.append('userId', params.userId);
  return Axios.post('/log/user/update', fd);
}

// 修改核销员信息
function updateCancel (params) {
  let fd = new FormData();
  if (params.realName !== '') {
    fd.append('RealName', params.realName);
  }
  if (params.userId !== '') {
    fd.append('UserId', params.UserId);
  }
  if (params.cancel2 !== '') {
    fd.append('cancel2', params.cancel2);
  }
  if (params.site !== '') {
    fd.append('site', params.site);
  }
  return Axios.post('/ver/cancel/updateCancel', fd);
}

// 筛选
function filtrateUser (params) {
  let fd = new FormData();
  if (params.email !== '') {
    fd.append('email', params.email);
  } else
  if (params.hfBalance !== '') {
    fd.append('hfBalance', params.hfBalance);
  } else
  if (params.nickName !== '') {
    fd.append('nickName', params.nickName);
  } else
  if (params.userStatus !== '') {
    fd.append('userStatus', params.userStatus);
  }
  if (params.sex !== '') {
    fd.append('sex', params.sex);
  }
  if (params.phone !== '') {
    fd.append('phone', params.phone);
  }
  if (params.region !== '') {
    fd.append('region', params.region);
  }
  if (params.time !== '') {
    fd.append('time', params.time);
  }

  return Axios.post('/log/user/selectList', fd);
}
export default {
  categoryId: categoryId,
  insertCancel: insertCancel,
  update: update,
  updateCancel: updateCancel,
  filtrateUser: filtrateUser,
};
