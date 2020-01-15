
import Axios from 'axios'
// 获取用户
function categoryId () {
  return Axios.get('/log/user/selectList')
}

export default {
  categoryId: categoryId
}
