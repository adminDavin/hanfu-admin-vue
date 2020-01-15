<template>
  <!-- 有问题 -->
  <div
    style="width: 99%;height: 1160px;background: #ffffff;margin: 0 auto;margin-top: 22px;"
  >
    <div
      class="header"
      style="border-bottom: 1px solid #CCCCCC;background:#ffffff;"
    >
      <div style="margin-left: 22px;color: #666666;font-size:16px">
        全部订单 > 订单详情
      </div>
      <div
        style="margin-top: 43px;background:rgba(245,246,250,1);line-height:36px;width:100%;height:36px;font-size:13px;padding-left:42px;box-sizing:border-box"
      >
        订单号：1521554132152
      </div>
      <div style="color: #A6A3FB;font-size: 24px;margin-left:65px;">
        {{ arr.orderDetailStatus }}
      </div>
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="下单"></el-step>
        <el-step title="付款"></el-step>
        <el-step title="配货"></el-step>
        <el-step title="出库"></el-step>
        <el-step title="交易成功"></el-step>
      </el-steps>
      <div
        style="width:30%;height:14px;font-size:12px;padding-left:103px;box-sizing:border-box;display:flex;justify-content:space-between"
      >
        <div style="width: 40%;linr-height:14px">{{ arr[0].createTime }}</div>
        <div style="width: 40%;linr-height:14px">{{ arr[0].modifyTime }}</div>
      </div>
      <div
        style="width:100%;overflow:hidden;padding-left:66px;box-sizing:border-box"
      >
        <div style="width: 100%;height: 75px;margin-top: 70px;">
          <img src="" style="width:75px;height:75px;float: left; " />
          <div style="float: left;margin-left:16px;margin-top: 18px;">
            太平鸟男装 双色连帽卫衣乐事...
          </div>
          <div style="float: left;margin-left:138px;margin-top: 18px;">
            ￥377.00×1
          </div>
        </div>
        <div
          style="width:100%;height:2px;background:rgba(245,246,250,1);margin-top:22px;margin-left:-66px"
        ></div>
        <div style="width: 100%;height: 75px;margin-top: 27px;">
          <img src="" style="width:75px;height:75px;float: left; " />
          <div style="float: left;margin-left:16px;margin-top: 18px;">
            太平鸟男装 双色连帽卫衣乐事...
          </div>
          <div style="float: left;margin-left:138px;margin-top: 18px;">
            ￥377.00×1
          </div>
        </div>
        <div
          style="width:100%;height:2px;background:rgba(245,246,250,1);margin-top:42px;margin-left:-66px"
        ></div>
        <div style="width:100%;height:160px;padding-top:36px;">
          <div style="font-weight: bold;font-size: 18px;">收货信息</div>
          <div
            style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);"
          >
            姓名:{{ arr[0].userName }}
          </div>
          <div
            style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);line-height:24px;"
          >
            联系电话:{{ arr[0].phone }}
          </div>
          <div
            style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);"
          >
            收货地址: {{ arr[0].address }}
          </div>
        </div>
        <div
          style="width:100%;height:2px;background:rgba(245,246,250,1);margin-top:60px;margin-left:-66px"
        ></div>
        <div style="width:100%;height:160px;padding-top:36px;">
          <div style="font-weight: bold;font-size: 18px;">
            支付方式及送货时间
          </div>
          <div
            style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);"
          >
            支付方式: {{ arr[0].payMethodType }}
          </div>
          <div
            style="font-weight: bold;font-size: 16px;line-height:24px;color: rgba(102,102,102,1);"
          >
            送货时间: 不限送货时间
          </div>
          <div
            style="font-weight: bold;font-size: 16px;color: rgba(102,102,102,1);"
          >
            送达时间: 预计五天内送达
          </div>
        </div>
        <div
          style="width:173px;height:53px;background:rgba(163,160,251,1);border-radius:4px;float:right;margin-right:61px;margin-top:118px;font-size:20px;font-family:SourceHanSansCN;font-weight:400;color:rgba(255,255,255,1);text-align:center;line-height:53px"
        >
          发货
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      arr: {},
      articleId: '',

      createTime: ''
      //   id:this.$route.query.id
    }
  },
  created () {
    this.getParams()
    this.money()
    this.goods()
  },
  methods: {
    getParams () {
      this.articleId = this.$route.query.id
      console.log(this.articleId)
    },
    async money () {
      const data = await this.$http.get(
        `/qui/order/queryDetail?id=${this.articleId}`
      )
      console.log(data)
      this.arr = data.data.data
      console.log(this.arr)
    },
    async goods () {
      const data = await this.$http.get(
        `cat/product/specifies?productId==${this.data.data.googsId}`
      )
      console.log(123)
      this.arr = data.data.data
      //   console.log(this.arr)
    }
    // async deletes (articleId) {
    //   await this.$http
    //     .get('/qui/order/queryDetail?id=' + this.articleId)
    //     .then(res => {
    //       console.log(res)
    //       this.seek()
    //       console.log('成功')
    //       // console.log('类目', this.onecatalogues)
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error)
    //     })
    // }
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
