/* eslint-disable indent */
/* eslint-disable require-jsdoc */
import quan from '@/api/quan-api.js';

async function addCoupon(params, handleResult) {
    quan.addCoupon(params).then((res) => handleResult(res));
}
async function getScope(params, handleResult) {
    quan.getScope(params).then((res) => handleResult(res));
}
async function getlist(params, handleResult) {
    quan.getlist(params).then((res) => handleResult(res));
}
async function getliststoneId(params, handleResult) {
    quan.getliststoneId(params).then((res) => handleResult(res));
}
async function bianCoupon(params, handleResult) {
    quan.bianCoupon(params).then((res) => handleResult(res));
}


export default {
    addCoupon: addCoupon,
    getScope: getScope,
    getlist: getlist,
    bianCoupon: bianCoupon,
    getliststoneId: getliststoneId,
    // eslint-disable-next-line eol-last
};