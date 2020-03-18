<template>
  <div style="padding-bottom:130px ;">
    <div style="font-weight: bold;">订单详情</div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>订单号:{{detail.id}}</span>
      </div>
      <span>商品名称:{{detail.goodName}}</span>
      <span style="margin-left: 20px;">订单类型:{{detail.orderType}}</span>
      <span style="margin-left: 20px;">支付方式:{{detail.paymentName}}</span>
      <span style="margin-left: 20px;">支付金额:{{detail.amount}}</span>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>订单扩展信息</span>
      </div>
      <span>创建时间:{{detail.modifyTime}}</span>
      <span style="margin-left: 20px;">订单类型:{{detail.hfRemark}}</span>
    </el-card>
    <div
      style="margin-top: 200px; display: flex;align-items: center;justify-content: space-around;padding:0 10%;"
    >
      <div
        v-if="detail.orderStatus==='payment'"
        @click="pay"
        style="background: #409EFF;color: #fff;padding:6px 10px ;border-radius:4px;"
      >去支付</div>
      <div style="background: #40e5ff;color: #fff;padding:6px 10px ;border-radius:4px;">提醒用户支付</div>
      <div
        v-if="detail.orderStatus!='cancel'"
        @click="cancle()"
        style="background: #ff4040;color: #fff;padding:6px 10px ;border-radius:4px;"
      >取消订单</div>
      <div>联系用户：{{detail.phone}}</div>
    </div>
  </div>
</template>

<script>
import orderCenterService from "@/service/orderCenter.js";
export default {
  data() {
    return {
      updata: {
        targetOrderStatus: "process",
        id: "",
        orderCode: "",
        originOrderStatus: "payment"
      },
      updata1: {
        targetOrderStatus: "cancel",
        id: "",
        orderCode: "",
        originOrderStatus: "payment"
      },
      id: "",
      detail: ""
    };
  },
  methods: {
    getdetail: function() {
      orderCenterService.getOrderDetail(this.id, res => {
        console.log(res);
        this.detail = res.data.data;
        this.updata.orderCode = this.detail.orderCode;
        this.updata1.orderCode = this.detail.orderCode;
      });
    },
    pay: function() {
      orderCenterService.upDataOrderStatus(this.updata, res => {
        console.log(this.updata, res);
        if (res.data.status === 200) {
          this.$message({
            message: "支付成功",
            type: "success"
          });
          this.drawer = false;
        } else {
          this.$message.error("支付失败");
        }
        return false;
      });
    },
    cancle: function() {
      orderCenterService.upDataOrderStatus(this.updata1, res => {
        console.log(this.updata1, res);
        if (res.data.status === 200) {
          this.$message({
            message: "已取消",
            type: "success"
          });
          this.drawer = false;
        } else {
          this.$message.error("取消失败");
        }
        return false;
      });
    }
  },

  mounted() {
    this.id = this.$route.query.id;
    this.updata.id = this.$route.query.id;
    this.updata1.id = this.$route.query.id;
    console.log(this.id);
    this.getdetail();
  }
};
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  margin-top: 30px;
}
</style>
