/* eslint-disable indent */
/* eslint-disable require-jsdoc */
import Axios from './index';
// import store from '@/store';
// http request拦截器 添加一个请求拦截器
// Axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     let token = store.getUser().token;
//     if (token) {
//         config.headers.token = token; // 将token放到请求头发送给服务器
//         return config;
//     }
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });
// =============================================商品模块
// 获取商品列表
function getProductsByBossId(bossId) {
    return Axios.get('/api/api/product/hfProduct/getstone?bossId=' + bossId);
}
// 获取商品商品管理列表
function getProductListBoss(bossId) {
    // eslint-disable-next-line no-useless-concat
    return Axios.get('/api/api/product/hfProduct/getProductListBoss?bossId=' + bossId);
}
// 获取商品商品管理列表筛选
function productNameListBos(bossId, inquire) {
    console.log(inquire);
    // eslint-disable-next-line no-useless-concat
    return Axios.get('/api/api/product/hfProduct/getProductListBoss?bossId=' + bossId + '&category=' + inquire.productCategoryName + '&productName=' + inquire.goodsName);
}
// 获取当前商品
function getDetail(productId, stoneId) {
    return Axios.get('/api/api/product/hfProduct/getProductInfo?productId=' + productId + '&stoneId=' + stoneId);
}
// 删除商品图片
function deleteProductPictrue(fileId, productId) {
    return Axios.post('/api/api/product/product/deleteProductPictrue?fileId=' + fileId + '&productId=' + productId);
}
// 删除商品介绍图片
function deletedPictrue(fileId, productId) {
    return Axios.get('/api/api/product/product/deletedPictrue?fileId=' + fileId + '&productId=' + productId);
}
// 添加商品接口 lastModifier
function ceateProduct(params) {
    let fd = new FormData();
    fd.append('bossId ', params.bossId);
    if (params.stoneId !== undefined) {
        fd.append('stoneId ', params.stoneId);
    }
    fd.append('categoryId', params.categoryId);
    fd.append('hfName ', params.productName);
    fd.append('productDesc ', params.productDesc);
    // fd.append('lastModifier ', params.lastModifier);
    fd.append('userId ', params.userId);

    // fd.append('requestId', params.requestId);
    // fd.append('lastModifier', params.lastModifier);
    // fd.append('productDesc', params.productDesc);
    // fd.append('token', params.token);
    // fd.append('userId', params.userId);
    // fd.append('fileInfo', params.fileInfo);
    // 添加商品接口
    return Axios.post('/api/api/product/product/addproduct', fd);
}

// 更新商品接口
function updateProduct(params) {
    let fd = new FormData();
    fd.append('bossId ', params.bossId);
    fd.append('categoryId', params.categoryId);
    fd.append('hfName', params.productName);
    fd.append('productDesc', params.productDesc);
    fd.append('id', params.id);
    fd.append('lastModifier', params.userId);
    return Axios.post('/api/api/product/product/updateProductId', fd);
}
// 删除商品
function deleteProduct(productId) {
    return Axios.get('/api/api/product/product/deleteProductId?productId=' + productId);
}
// 批量删除商品
function deleteSelectProduct(productId) {
    return Axios.get('/api/api/product/product/deleteSelectProductId?productId=' + productId);
}
// 删除商品规格
function deleteSpecifies(productSpecId) {
    return Axios.get('/api/api/product/product/deleteSpecifies?productSpecId=' + productSpecId);
}
// 获取类目列表
function getCatagery() {
    return Axios.get('/api/api/product/product/categoryAll');
}

// 根据商品ID获取商品图片列表和文件ID
function selectProductPictures(productId) {
    return Axios.get('/api/api/product/product/selectProductPictures?productId=' + productId);
}
// 根据商品ID获取商品介绍图片列表和文件ID
function selectProductIntroducePictrue(productId) {
    return Axios.get('/api/api/product/product/selectProductIntroducePictrue?productId=' + productId);
}
// 商品规格
function specifies(productId) {
    return Axios.get('/api/api/product/product/specifies?productId=' + productId);
}

// 优惠券筛选
function selectDiscountCoupon(param) {
    let params = {
        DiscountCouponName: param.goodsName,
        bossId: 1,
    };
    if (param.productCategoryName !== '') {
        params.DiscountCouponType = param.productCategoryName;
    }
    if (param.stoneId !== '') {
        params.stoneId = param.stoneId;
    }
    return Axios.get('/api/api/product/discountCoupon/selectDiscountCoupon', { params });
}
// 添加商品规格
function addSpecify(params) {
    let fd = new FormData();
    fd.append('hfName', params.hfName);
    fd.append('requestId ', params.requestId);
    fd.append('timestamp', params.timestamp);
    fd.append('productId', params.productId);
    fd.append('specType', params.specType);
    fd.append('specUnit', params.specUnit);
    fd.append('token', params.token);
    fd.append('userId', params.userId);
    fd.append('specValue', params.specValue);
    return Axios.post('/api/api/product/product/addSpecify', fd);
}
// 修改商品规格
function updatespec(params) {
    let fd = new FormData();
    fd.append('specName', params.specName);
    fd.append('productId', params.productId);
    fd.append('productSpecId', params.productSpecId);
    fd.append('specType', params.specType);
    fd.append('specValue', params.specValue);
    fd.append('specUnit', params.specUnit);
    return Axios.post('/api/api/product/product/updatespec', fd);
}
// 商家是否同意仓库申请物品
function bossAgreeApply(params) {
    let fd = new FormData();
    fd.append('applyId', params.applyId);
    fd.append('type', params.type);
    return Axios.post('/api/api/product/wareHouse/bossAgreeApply', fd);
}

export default {
    getProductsByBossId: getProductsByBossId,
    ceateProduct: ceateProduct,
    getCatagery: getCatagery,
    selectProductPictures: selectProductPictures,
    specifies: specifies,
    addSpecify: addSpecify,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    getDetail: getDetail,
    deleteSpecifies: deleteSpecifies,
    deleteProductPictrue: deleteProductPictrue,
    updatespec: updatespec,
    selectProductIntroducePictrue: selectProductIntroducePictrue,
    getProductListBoss: getProductListBoss,
    productNameListBos: productNameListBos,
    deleteSelectProduct: deleteSelectProduct,
    deletedPictrue: deletedPictrue,
    selectDiscountCoupon: selectDiscountCoupon,
    // eslint-disable-next-line eol-last
    bossAgreeApply: bossAgreeApply,
};
