/* eslint-disable no-magic-numbers */
<template>
  <div style="padding-bottom:130px;background:#fff;">
    <div>
      <div
        style="font-weight:bold; padding-left:11.5px;font-size:16px; padding-bottom:6.5px; color:#666666;border-bottom:1px solid #E5E5E5;"
      >订单详情{{id}}</div>
      <div
        style="font-size:14px; color:#666; padding:5.5px 0 6px 21.5px; background:#F5F6FA;margin-top:8px;"
      >
        <span>订单号:{{detail.orderCode}}</span>
        <span style="margin-left:16.5px;">店铺名称:{{detail.stoneName}}</span>
        <span style="margin-left:16.5px;">支付人:{{detail.nickName}}</span>
        <span style="margin-left:16.5px;">联系方式:{{detail.phone}}</span>
      </div>
    </div>
    <div style="padding-left:30px;border-radius: 17px;">
      <div style="font-size:16px;color:#A6A3FB;font-weight:bold;margin:18px 0 8.5px 0px;">已下单</div>
      <div
        style="width:491.9px; display:flex;align-items:center; background:#EEEEEE;border-radius:17px;margin-left:27.5px;"
      >
        <div
          v-for="( item,index)  in list"
          :key="index"
          :class="activeindex==index ?'active':'statusBar'"
        >{{item.title}}</div>
      </div>
    </div>

    <!-- <el-card class="box-card">
        <span>支付人:{{detail.nickName}}</span>
        <span style="margin-left: 20px;" v-if="detail.paymentName === 'balance'">支付方式:余额支付</span>
        <span style="margin-left: 20px;" v-if="detail.paymentName === 'BalancePayment'">支付方式:余额支付</span>
        <span style="margin-left: 20px;" v-if="detail.takingType === 'selfPickUp'">取货方式:自提</span>
        <span style="margin-left: 20px;" v-if="detail.takingType === 'delivery'">取货方式:邮寄</span>
        <span style="margin-left: 20px;" v-if="detail.paymentName === 'wechart'">支付方式:微信支付</span>
        <span style="margin-left: 20px;">支付金额:{{detail.amount}}</span>
        <span style="margin-left: 20px;">支付时间:{{detail.modifyTime}}</span>

        <span style="margin-left: 20px;" v-if="detail.orderStatus === 'payment'">订单状态:待支付</span>
        <span style="margin-left: 20px;" v-if="detail.orderStatus === 'transport'">订单状态:运送中</span>
        <span style="margin-left: 20px;" v-if="detail.orderStatus === 'process'">订单状态:处理中</span>
        <span style="margin-left: 20px;" v-if="detail.orderStatus === 'complete'">订单状态:已完成</span>
        <span style="margin-left: 20px;" v-if="detail.orderStatus === 'cancel'">订单状态:已取消</span>
        <span style="margin-left: 20px;" v-if="detail.orderStatus === 'evaluate'">订单状态:待评价</span>
        <span style="margin-left: 20px;" v-if="detail.orderStatus === 'controversial'">订单状态:交易纠纷</span>
    </el-card>-->

    <el-card class="box-card">
      <!-- <div slot="header" class="clearfix">
          <span>订单扩展信息</span>
      </div>-->
      <el-table :data="hfOrderDetailList" stripe style="width: 100%">
        <el-table-column align="center" prop="hfName" label="物品图片" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <img
              style="width:70px;"
              :src="'https://www.tjsichuang.cn:1443/api/product/goods/getFile?fileId=' + scope.row.hfDesc.fileIds[0]"
              alt
            />
          </template>
        </el-table-column>
        <el-table-column align="center" prop="hfName" label="商品名称" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span>{{scope.row.hfDesc.goodsName}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="hfName" label="规格" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span
              v-for="item in scope.row.hfDesc.hfGoodsSpecs"
              :key="item.hfValue"
            >{{item.hfValue}}{{item.specUnit}} /</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="hfName" label="价格" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span style="color:#A6A3FB;">¥{{scope.row.sellPrice}} x {{scope.row.quantity}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="hfName" label="支付方式" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span>{{scope.row.takingType=='selfPickUp'?'自提':'配送'}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="支付时间" :show-overflow-tooltip="true">
          <template>
            <span>{{detail.modifyTime}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="订单状态" :show-overflow-tooltip="true">
          <template>
            <span style="color:#FF318A;" v-if="detail.orderStatus === 'payment'">待支付</span>
            <span style="color:#FF318A;" v-if="detail.orderStatus === 'transport'">运送中</span>
            <span style="color:#FF318A;" v-if="detail.orderStatus === 'process'">处理中</span>
            <span style="color:#FF318A;" v-if="detail.orderStatus === 'complete'">已完成</span>
            <span style="color:#FF318A;" v-if="detail.orderStatus === 'cancel'">已取消</span>
            <span style="color:#FF318A;" v-if="detail.orderStatus === 'evaluate'">待评价</span>
            <span style="color:#FF318A;" v-if="detail.orderStatus === 'controversial'">交易纠纷</span>
          </template>
        </el-table-column>

        <!-- <el-table-column
                align="center"
                prop="hfValue"
                label="规格值"
                :show-overflow-tooltip="true"
                width="180"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="specType"
                label="规格值类型"
                :show-overflow-tooltip="true"
                width="180"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="specUnit"
                label="规格单位"
                :show-overflow-tooltip="true"
                width="180"
        ></el-table-column>-->
      </el-table>
      <div v-for="(item,index) in detailRequestList" :key="index">
        <!-- <div v-for="(item1,index1) in item.hfOrderDetailList" :key="index1">
            <span style="margin-left: 20px;">商品名称: {{item1.hfDesc.goodsName}}</span>
            <span style="margin-left: 40px;">购买数量: {{item1.quantity}}</span>
            <span style="margin-left: 40px;">购买数量: {{item1.quantity}}</span>
            <el-table :data="item1.hfDesc.hfGoodsSpecs" stripe style="width: 100%">
              <el-table-column
                align="center"
                prop="hfName"
                label="规格名"
                :show-overflow-tooltip="true"
                width="180"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="hfValue"
                label="规格值"
                :show-overflow-tooltip="true"
                width="180"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="specType"
                label="规格值类型"
                :show-overflow-tooltip="true"
                width="180"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="specUnit"
                label="规格单位"
                :show-overflow-tooltip="true"
                width="180"
              ></el-table-column>
            </el-table>
        </div>-->
        <!-- <div
            style="margin-top:20px; display:flex;align-items:center;justify-content:space-around;"
          >
            <div
              v-if="item.takingType==='selfPickUp'&&item.detailStatus==='process'&&detail.orderType==='nomalOrder'"
              @click="que(item,index)"
              style="background:#00bcd4;color: #fff;padding:6px 10px ;border-radius:4px;height:23px;width:66px;"
            >确认订单</div>
        </div>-->

        <div
          style="display:fkex;align-items:center;margin-top:20px;"
          v-if="item.takingType==='delivery'&&item.detailStatus==='process'&&detail.orderType==='nomalOrder'"
        >
          <!-- <div
          style="display:fkex;align-items:center;margin-top:20px;"
          >-->
          <span>物流单号：</span>
          <el-input v-model="item.logisticsOrdersId" placeholder="请输入物流单号" style="width:200px;"></el-input>
          <!-- <el-input v-model="order.logisticsOrdersId" placeholder="请输入物流单号" style="width:200px;"></el-input> -->
          <el-button @click="que(item,index)" style="margin-left:10px;">提交</el-button>
        </div>
        <el-button
          v-if="item.takingType==='delivery'&&(detail.orderStatus==='transport')&&detail.orderType==='nomalOrder'"
          @click="cha(item,index)"
          style="margin-left:10px;"
        >查询物流信息</el-button>
        <div
          v-if="item.takingType==='delivery'&&(detail.orderStatus==='process'||detail.orderStatus==='transport')&&detail.orderType==='nomalOrder'&&item.wuliu!=0"
          style="line-height:30px; display:fkex;align-items:center;margin-top:20px;font-size:12px;"
        >
          <span style="margin-bottom:10px;">物流单号：{{item.wuliu.logisticCode}}</span>
          <span style="margin-left:20px;margin-bottom:10px;">物流公司名：{{item.wuliu.company}}</span>
          <!-- <span style="margin-left:20px;">物流信息</span> -->
          <!-- <div>物流信息:</div> -->
          <div v-for="(item1,index) in item.wuliu.traces" :key="index">
            <div>
              <span>{{item1.AcceptStation}}</span>
              <span>{{item1.AcceptTime}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <div
        style="display:fkex;align-items:center;margin-top:20px;"
        v-if="takingType==='delivery'&&detail.orderStatus==='process'&&detail.orderType==='nomalOrder'"
      >
        <span>物流单号：</span>
        <el-input v-model="order.logisticsOrdersId" placeholder="请输入物流单号" style="width:200px;"></el-input>
      </div>-->
    </el-card>
    <div v-if="detail.takingType == 'delivery'">
      <div style="color:#444;margin-top:18.5px;font-size:14px;">收货信息</div>
      <div
        style="color:#666666;font-size:11px;margin-top:13px;"
        v-if="detail.takingType != 'delivery'"
      >姓&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;名:{{detail.nickName}}</div>
      <div
        style="color:#666666;font-size:11px;margin-top:13px;"
        v-if="detail.takingType == 'delivery'"
      >姓&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;名:{{detail.contact}}</div>
      <div style="color:#666666;font-size:11px;margin-top:8px;">联系电话：{{detail.phone}}</div>
      <div
        style="color:#666666;font-size:11px;margin-top:8px;"
        v-if="detail.takingType == 'delivery'"
      >收货地址：{{detail.address}}</div>
    </div>
    <div style="margin-top: 50px; display: flex;justify-content: flex-end;;padding:0 10%;">
      <div  v-for="(item,index) in detailRequestList" :key="index">
        <div
          v-if="item.takingType==='selfPickUp'&&item.detailStatus==='process'&&detail.orderType==='nomalOrder'"
          @click="que(item,index)"
          style="margin-right: 19px;background:#00bcd4;color: #fff;padding:6px 10px ;border-radius:4px;height:23px;width:66px;"
        >确认订单</div>
      </div>

      <div
        v-if="detail.orderStatus==='controversial'"
        @click="agree()"
        style="font-size: 15px;
    margin-right: 19px;
    width: 80px;
     color:#fff;
    text-align: center;
    background: rgb(163, 160, 251);
    padding: 8px 0px;
    border-radius: 4px;background: #3f47b5;"
      >同意申请</div>
      <div
        v-if="detail.orderStatus==='payment'"
        @click="pay()"
        style="background: #A3A0FB;font-size: 15px;
    margin-right: 19px;
    width: 80px;
    text-align: center;
 color:#fff;
    padding: 8px 0px;
    border-radius: 4px;"
      >去支付</div>
      <div
        v-if="detail.orderStatus==='payment' || detail.orderStatus==='process'"
        @click="cancle()"
        style=" background: #FF318A;font-size: 15px;
    margin-right: 19px;
    width: 80px;
    text-align: center;
    padding: 8px 0px;
    color:#fff;
    border-radius: 4px;"
      >取消订单</div>
      <div
        v-if="detail.orderStatus==='controversial'"
        @click="noagree()"
        style="width:90px;text-align:center;background:#ff008b;color: #fff;padding:6px 0px ; color:#fff;border-radius:4px;height:23px;"
      >拒绝申请</div>
      <div></div>
    </div>
  </div>
</template>

<script>
import orderCenterService from '@/service/orderCenter.js';
import constants from '@/store/constants.js';
export default {
  props: ['id'],
  data() {
    return {
      activeindex: '0',
      list: [
        { title: '下单' },
        { title: '付款' },
        { title: '配置' },
        { title: '出库' },
        { title: '交易成功' },
      ],
      orderliu: {
        stoneId: '',
        id: '',
      },
      detailRequestList: [],
      hfOrderDetailList: [],
      wuliuinfor: {},
      order: {
        stoneId: '',
        id: '',
        logisticsOrdersId: '',
        logisticsCompany: '',
        googsId: [],
      },
      input: '',
      content: {},
      takingType: '',
      xian: false,
      zhuang: '',
      goodsName: '',
      hfGoodsSpecs: [],
      updata: {
        payOrderId: '',
        targetOrderStatus: 'process',
        id: '',
        orderCode: '',
        originOrderStatus: 'payment',
      },
      updatanoagree: {
        payOrderId: '',
        targetOrderStatus: 'reject',
        id: '',
        orderCode: '',
        originOrderStatus: 'controversial',
      },
      updataagree: {
        payOrderId: '',
        targetOrderStatus: 'cancel',
        id: '',
        orderCode: '',
        originOrderStatus: 'controversial',
      },
      updata1: {
        payOrderId: '',
        targetOrderStatus: 'cancel',
        id: '',
        orderCode: '',
        originOrderStatus: 'payment',
      },
      updata2: {
        payOrderId: '',
        stoneId: '',
        targetOrderStatus: 'transport',
        id: '',
        orderCode: '',
        originOrderStatus: 'process',
      },
      detail: {},
    };
  },
  methods: {
    cha: function(item, index) {
      // console.log(this.detailRequestList);
      this.orderliu.id = this.id;
      this.orderliu.stoneId = item.stoneId;
      // console.log(index);
      // console.log(this.orderliu);
      orderCenterService.getWuLiu(this.orderliu, (res) => {
        // this.detailRequestList[index].show = true;
        // console.log(this.detailRequestList);
        if (item.wuliu === '0') {
          // console.log(1);
          this.detailRequestList[index].wuliu = res.data.data;
        } else {
          // console.log(2);
          this.detailRequestList[index].wuliu = '0';
        }
        // console.log(this.detailRequestList);
        // console.log('6', this.wuliuinfor);
        // eslint-disable-next-line no-eval
        // this.wuliuinfor = JSON.parse(this.wuliuinfor);
        // console.log('7', this.wuliuinfor);
        // var obj = '{LogisticCode:'75338825465751',ShipperCode:'ZTO'}';
        // console.log('7', obj);
        // this.takingType = res.data.data[0].takingType;
        // this.order.googsId = res.data.data[0].goodsId;
      });
    },

    que: function(item, index) {
      console.log(item);
      console.log(this.id);
      this.order.id = this.id;
      if (
        this.detail.orderStatus === 'process' &&
        this.detail.orderType === 'nomalOrder' &&
        item.takingType === 'delivery'
      ) {
        // if (this.order.logisticsOrdersId === '') {
        //   this.$message.error('请填写物流单号');
        // }
        if (!item.logisticsOrdersId) {
          this.$message.error('请填写物流单号');
        } else {
          // console.log(item);
          let arr = [];
          for (var i = 0; i < item.hfOrderDetailList.length; i++) {
            arr.push(item.hfOrderDetailList[i].goodsId);
          }
          this.order.logisticsOrdersId = item.logisticsOrdersId;
          this.order.stoneId = item.stoneId;
          this.updata2.stoneId = item.stoneId;
          this.order.googsId = arr;
          orderCenterService.writeWuLiu(this.order, (res) => {
            // console.log(res);
            if (res.data.status === constants.SUCCESS_CODE) {
              // this.$message({
              //   message: '提交成功',
              //   type: 'success',
              // });

              // console.log(this.updata2);
              orderCenterService.upDataOrderStatus(this.updata2, (res) => {
                console.log(res);
                if (res.data.status === constants.SUCCESS_CODE) {
                  if (res.data.data === 'In spelling') {
                    this.$message.error('尚未拼团成功');
                    return false;
                  }
                  this.$message({
                    message: '已确认',
                    type: 'success',
                  });
                  this.drawer = false;
                  this.getdetail();
                } else {
                  this.$message.error('取消失败');
                }
                return false;
              });
            } else {
              this.$message.error('提交失败');
            }
            // this.takingType = res.data.data[0].takingType;
          });
        }
      } else {
        this.updata2.stoneId = item.stoneId;
        // console.log(this.updata2);
        orderCenterService.upDataOrderStatus(this.updata2, (res) => {
          console.log(res);
          if (res.data.status === constants.SUCCESS_CODE) {
            if (res.data.data === 'In spelling') {
              this.$message.error('尚未拼团成功');
              return false;
            }
            this.$message({
              message: '已确认',
              type: 'success',
            });
            this.drawer = false;
            this.getdetail();
          } else {
            this.$message.error('取消失败');
          }
          return false;
        });
      }
    },
    getdetail: function() {
      orderCenterService.getOrderDetail(this.id, (res) => {
        this.detail = res.data.data;
        console.log(res);
        this.detail.orderDesc = JSON.parse(this.detail.orderDesc);
        this.hfGoodsSpecs = this.detail.orderDesc.hfGoodsSpecs;
        this.goodsName = this.detail.orderDesc.goodsName;
        this.updata.orderCode = this.detail.orderCode;
        this.updata1.orderCode = this.detail.orderCode;
        this.updata2.orderCode = this.detail.orderCode;
        this.updataagree.orderCode = this.detail.orderCode;
        this.updatanoagree.orderCode = this.detail.orderCode;

        this.detail.userId = this.content.id;
        this.updata1.originOrderStatus = this.detail.orderStatus;
        orderCenterService.getOrderDetail1(this.detail, (res) => {
          // console.log(res);
          this.detail = res.data.data[0];
          this.updata.payOrderId = this.detail.payOrderId;
          this.updata1.payOrderId = this.detail.payOrderId;
          this.updata2.payOrderId = this.detail.payOrderId;
          this.updataagree.payOrderId = this.detail.payOrderId;
          this.updatanoagree.payOrderId = this.detail.payOrderId;
          console.log(this.detail);
          // eslint-disable-next-line no-magic-numbers
          this.detail.amount = (this.detail.amount / 100).toFixed(2);
          this.takingType = res.data.data[0].takingType;
          this.order.googsId = res.data.data[0].goodsId;
          this.detailRequestList = res.data.data[0].detailRequestList;

          for (var i = 0; i < this.detailRequestList.length; i++) {
            // this.detailRequestList[i].wuliu = 1;
            for (
              var j = 0;
              j < this.detailRequestList[i].hfOrderDetailList.length;
              j++
            ) {
              this.detailRequestList[i].hfOrderDetailList[
                j
              ].hfDesc = JSON.parse(
                this.detailRequestList[i].hfOrderDetailList[j].hfDesc,
              );
              this.detailRequestList[i].hfOrderDetailList[j].sellPrice = (
                // eslint-disable-next-line no-magic-numbers
                this.detailRequestList[i].hfOrderDetailList[j].sellPrice / 100
              // eslint-disable-next-line no-magic-numbers
              ).toFixed(2);
              // this.detailRequestList[i].show = false;
            }
          }
          this.hfOrderDetailList = this.detailRequestList[0].hfOrderDetailList;
          // console.log('1', this.detailRequestList);
        });
        // if (this.takingType === 'delivery' && this.detail.orderStatus === 'transport' && this.detail.orderType === 'nomalOrder') {

        // }
      });
    },
    agree: function() {
      console.log(this.updataagree);
      // this.updataagree.stoneId = item.stoneId;
      orderCenterService.upDataOrderStatus1(this.updataagree, (res) => {
        // console.log(this.updata, res);
        if (res.data.status === constants.SUCCESS_CODE) {
          this.$message({
            message: '提交成功',
            type: 'success',
          });
          this.drawer = false;
          this.getdetail();
        } else {
          this.$message.error('提交失败');
        }
      });
    },
    noagree: function() {
      // this.updatanoagree.stoneId = item.stoneId;
      orderCenterService.upDataOrderStatus1(this.updatanoagree, (res) => {
        // console.log(this.updata, res);
        if (res.data.status === constants.SUCCESS_CODE) {
          this.$message({
            message: '提交成功',
            type: 'success',
          });
          this.drawer = false;
          this.getdetail();
        } else {
          this.$message.error('提交失败');
        }
      });
    },
    pay: function() {
      // this.updata.stoneId = item.stoneId;
      orderCenterService.upDataOrderStatus1(this.updata, (res) => {
        console.log(this.updata, res);
        if (res.data.status === constants.SUCCESS_CODE) {
          this.$message({
            message: '支付成功',
            type: 'success',
          });
          this.drawer = false;
          this.getdetail();
        } else {
          this.$message.error('支付失败');
        }
        return false;
      });
    },
    cancle: function(item, index) {
      // this.updata1.stoneId = item.stoneId;
      orderCenterService.upDataOrderStatus1(this.updata1, (res) => {
        console.log(this.updata1, res);
        if (res.data.status === constants.SUCCESS_CODE) {
          if (res.data.data === 'In spelling') {
            this.$message.error('尚未拼团成功');
            return false;
          }
          this.$message({
            message: '已取消',
            type: 'success',
          });
          this.drawer = false;
          this.getdetail();
        } else {
          this.$message.error('取消失败');
        }
        return false;
      });
    },
  },

  mounted() {
    // this.id = this.$route.query.id;
    this.updata.id = this.id;
    this.updata1.id = this.id;
    this.updata2.id = this.id;
    this.updatanoagree.id = this.id;
    this.updataagree.id = this.id;
    this.zhuang = this.$route.query.zhuang;
    var content = window.sessionStorage.getItem('userInfor');
    this.content = JSON.parse(content);
    // console.log(this.id);
    this.getdetail();
    // this.getdetail1();
  },
};
</script>
<style scoped>
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
main {
  padding: 0;
}
.el-main {
  padding: 0;
}
.statusBar {
  font-size: 13px;
  color: #666666;
  width: 100.5px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  height: 30px;
  font-size: 15px;
  background: #a6a3fb;
  width: 100.5px;
  border-radius: 17px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
