
import Axios from 'axios'
// 添加类目
function typeAddCategory (params, category, fileInfo) {
  let fd = new FormData()
  fd.append('levelId', params.levelId)
  fd.append('parentCategoryId', params.parentCategoryId)
  fd.append('requestId', params.requestId)
  fd.append('timestamp', params.timestamp)
  fd.append('token', params.token)
  fd.append('userId', params.userId)
  fd.append('category', category)
  fd.append('fileInfo', fileInfo)
  return Axios.post('/cat/product/addCategory', fd, { responseType: 'arraybuffer' })
}

function deleteCategory (categoryId) {
  return Axios.get('/cat/product/deleteCategory?categoryId=' + categoryId)
}
export default {
  typeAddCategory: typeAddCategory,
  deleteCategory: deleteCategory
}
