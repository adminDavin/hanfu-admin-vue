// eslint-disable-next-line require-jsdoc
import Axios from 'axios';
// 查看订单状态
// eslint-disable-next-line require-jsdoc
function getProductList () {
  return Axios.get('/foo//order/query');
}
// 活动 秒杀 编辑商品
// eslint-disable-next-line require-jsdoc
function update (params) {
  let fd = new FormData()
  fd.append('goodsId', params.goodsId)
  fd.append('id', params.id)
  fd.append('price', params.price)
  fd.append('repertory', params.repertory)
  fd.append('startTime', params.startTime)
  fd.append('stopTime', params.stopTime)
  return Axios.post('/jietu/kill/update', fd, { responseType: 'arraybuffer' });
}
// 活动 拼团 编辑商品
function groupupdate (params) {
  let fd = new FormData()
  fd.append('goodsId', params.goodsId)
  fd.append('id', params.id)
  fd.append('price', params.price)
  fd.append('repertory', params.repertory)
  fd.append('startTime', params.startTime)
  fd.append('stopTime', params.stopTime)
  return Axios.post('http://192.168.1.175:9911/group/update', fd, { responseType: 'arraybuffer' })
}
export default {
  getProductList: getProductList,
  update: update,
  groupupdate: groupupdate
}
