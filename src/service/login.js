/* eslint-disable require-jsdoc */
import goods from '@/api/goods.js';

async function getGoodsByProductId(productId, handleResult) {
  goods.getGoodsByProductId(productId).then((res) => handleResult(res));
}

// 根据文件ID获取图片
async function getFileFileId(fileId, handleResult) {
  goods.getFileFileId(fileId).then((res) => handleResult(res));
}

export default {
  getGoodsByProductId: getGoodsByProductId,
  getFileFileId: getFileFileId,
};
