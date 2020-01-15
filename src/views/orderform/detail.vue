<template>
<!-- 有问题 -->
    <div style="width: 99%;height: 1160px;background: #ffffff;margin: 0 auto;margin-top: 22px;">
        <div class="header" style="border-bottom: 1px solid #CCCCCC;background:#ffffff;">
            <div style="margin-left: 22px;color: #666666;font-size:16px">全部订单 > 订单详情</div>
            <div
                style="margin-top: 43px;background:rgba(245,246,250,1);line-height:36px;width:100%;height:36px;font-size:13px;padding-left:42px;box-sizing:border-box"
            >订单号：1521554132152</div>
            <div style="color: #A6A3FB;font-size: 24px;margin-left:65px;">{{arr.orderDetailStatus}}</div>
            <div
                style="width:60%;height: 30px;margin-left: 65px;border-radius:15px;margin-top: 22px;"
            >
                <div
                    style="width:20%;height: 30px;background: #A6A3FB;float: left;border-radius:15px;text-align: center;"
                >
                    <span style="display: block;margin-top:-8px;color: #ffffff;">下单</span>
                </div>
                <div
                    style="width:20%;height: 30px;background: #A6A3FB;float: left;border-radius:15px;text-align: center;border-left:0px solid #cccccc;"
                >
                    <span style="display: block;margin-top:-8px;color: #ffffff;">付款</span>
                </div>
                <div
                    style="width:20%;height: 30px;background: #cccccc;float: left;border-radius:15px;text-align: center;"
                >
                    <span style="display: block;margin-top:-8px;color: #ffffff;">配货</span>
                </div>
                <div
                    style="width:20%;height: 30px;background:#cccccc;float: left;border-radius:15px;text-align: center;"
                >
                    <span style="display: block;margin-top:-8px;color: #ffffff;">出库</span>
                </div>
                <div
                    style="width:20%;height: 30px;background:#cccccc;float: left;border-radius:15px;text-align: center;"
                >
                    <span style="display: block;margin-top:-8px;color: #ffffff;">交易成功</span>
                </div>
            </div>
            <div
                style="width:30%;height:14px;font-size:12px;padding-left:103px;box-sizing:border-box;display:flex;justify-content:space-between"
            >
                <div style="width: 40%;linr-height:14px">2019-11-14 13:32</div>
                <div style="width: 40%;linr-height:14px">2019-11-14 13:32</div>
            </div>
            <div style="width:100%;overflow:hidden;padding-left:66px;box-sizing:border-box">
                <div style="width: 100%;height: 75px;margin-top: 70px;">
                    <img src="" style="width:75px;height:75px;float: left; ">
                    <div style="float: left;margin-left:16px;margin-top: 18px;">太平鸟男装 双色连帽卫衣乐事...</div>
                    <div style="float: left;margin-left:138px;margin-top: 18px;">￥377.00×1</div>
                </div>
                <div
                    style="width:100%;height:2px;background:rgba(245,246,250,1);margin-top:22px;margin-left:-66px"
                ></div>
                <div style="width: 100%;height: 75px;margin-top: 27px;">
                    <img src="" style="width:75px;height:75px;float: left; ">
                    <div style="float: left;margin-left:16px;margin-top: 18px;">太平鸟男装 双色连帽卫衣乐事...</div>
                    <div style="float: left;margin-left:138px;margin-top: 18px;">￥377.00×1</div>
                </div>
                <div
                    style="width:100%;height:2px;background:rgba(245,246,250,1);margin-top:42px;margin-left:-66px"
                ></div>
                <div
                    style="width:100%;height:160px;padding-top:36px;"
                >
                    <div style="font-weight: bold;font-size: 18px;">收货信息</div>
                    <div style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);">姓名:C.vo</div>
                    <div
                        style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);line-height:24px;"
                    >联系电话: 15688108250</div>
                    <div
                        style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);"
                    >收货地址: 天津市 西青区 智慧山南塔380室</div>
                </div>
                <div
                    style="width:100%;height:2px;background:rgba(245,246,250,1);margin-top:60px;margin-left:-66px"
                ></div>
                <div
                    style="width:100%;height:160px;padding-top:36px;"
                >
                    <div style="font-weight: bold;font-size: 18px;">支付方式及送货时间</div>
                    <div style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);">支付方式: 在线支付</div>
                    <div
                        style="font-weight: bold;font-size: 16px;line-height:24px;color: rgba(102,102,102,1);"
                    >送货时间: 不限送货时间</div>
                    <div style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);">送达时间: 预计五天内送达</div>
                </div>
                <div style="width:173px;height:53px;background:rgba(163,160,251,1);border-radius:4px;float:right;margin-right:61px;margin-top:118px;font-size:20px;font-family:SourceHanSansCN;font-weight:400;color:rgba(255,255,255,1);text-align:center;line-height:53px">发货</div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/apis/order-api.js'
// import orderDetail from '../../apis/order-api.js'
export default {
  data: () => {
    return {
      arr: []
      // id:this.$route.query.id
    }
  },
  methods: {

  },
  created () {
    console.log(this.$route.query.id)
    const ID = this.$route.query.id
    api.orderDetail(ID).then((res) => {
      console.log(res.data.data[0])
      this.arr = res.data.data[0]
    })
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 41px;
  line-height: 41px;
}
body {
  width: 100%;
  height: 100%;
}
</style>
