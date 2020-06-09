/* eslint-disable eqeqeq */
<template>
  <div>
    <!-- <el-tabs v-model="activeName" @tab-click="getlistByType">
      <el-tab-pane
        :label="item.orderDesc"
        v-for="item  in orderType"
        :key="item.orderDesc"
        :name="item.orderDesc"
      ></el-tab-pane>
    </el-tabs>-->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="普通订单" name="nomalOrder">
        <el-card class="search-card">
          <el-form :inline="true" :model="sousuoinfor1" ref="ruleForms" class="demo-form-inline">
            <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :lg="6" :xl="8">
                <el-form-item label="订单号" prop="orderCode">
                  <el-input v-model="sousuoinfor1.orderCode" placeholder="请输入订单号"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="3" :sm="4" :md="5" :lg="6" :xl="8">
                <el-form-item label="支付方式" prop="valueset1">
                  <el-select
                    v-model="sousuoinfor1.valueset1"
                    placeholder="请选择"
                    @change="selectmethod"
                  >
                    <el-option
                      :label="item.name"
                      v-for="item  in paymethod"
                      :key="item.name"
                      :value="item.name"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="5" :sm="6" :md="7" :lg="8" :xl="10">
                <el-form-item label="下单时间" prop="startTime">
                  <el-date-picker
                    @change="uptime1"
                    v-model="sousuoinfor1.startTime"
                    type="datetimerange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <el-button type="primary" @click="sousuo">筛选</el-button>
                <el-button @click="resetForm('ruleForms')">重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-card>

        <el-tabs type="border-card" @tab-click="getStatus">
          <el-tab-pane :label="item.hfName" v-for="item  in statusData" :key="item.hfName">
            <el-table
              :data="orderData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              stripe
              style="width: 100%"
            >
              <el-table-column
                align="center"
                prop="orderCode"
                label="订单号"
                :show-overflow-tooltip="true"
                width="180"
              ></el-table-column>
              <el-table-column align="center" prop="nickName" label="支付人"></el-table-column>
              <el-table-column align="center" prop="phone" label="手机号"></el-table-column>
              <el-table-column align="center" label="订单类型" prop="orderType">
                <template slot-scope="scope">
                  <span v-if="scope.row.orderType ==='shoppingOrder'">到店支付订单</span>
                  <span v-if="scope.row.orderType ==='nomalOrder'">普通订单</span>
                  <span v-if="scope.row.orderType ==='rechargeOrder'">充值订单</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="支付方式">
                <template slot-scope="scope">
                  <span v-if="scope.row.paymentName === 'BalancePayment'">余额支付</span>
                  <span v-if="scope.row.paymentName ==='balance'">余额支付</span>
                  <span v-if="scope.row.paymentName ==='wechart'">微信支付</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="订单状态">
                <template slot-scope="scope">
                  <!-- <span>{{zhuang}}</span> -->
                  <span>{{scope.row.Status}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="amount" label="支付金额"></el-table-column>
              <el-table-column align="center" prop="modifyTime" label="修改时间" width="180"></el-table-column>
              <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                  <!-- <el-button @click="checkDetail(scope.row)" type="text" size="small">详情</el-button> -->
                  <el-button @click="goDetail(scope.row)" type="text" size="small">订单处理</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              style="float:right;"
              background
              layout="prev, pager, next"
              :total="orderData.length"
              :page-size="pagesize"
            ></el-pagination>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>

      <el-tab-pane label="充值订单" name="rechargeOrder">
        <el-card class="search-card">
          <el-form :inline="true" :model="sousuoinfor1" ref="ruleForms" class="demo-form-inline">
            <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :lg="6" :xl="8">
                <el-form-item label="订单号" prop="orderCode">
                  <el-input v-model="sousuoinfor1.orderCode" placeholder="请输入订单号"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="3" :sm="4" :md="5" :lg="6" :xl="8">
                <el-form-item label="支付方式" prop="valueset1">
                  <el-select
                    v-model="sousuoinfor1.valueset1"
                    placeholder="请选择"
                    @change="selectmethod"
                  >
                    <el-option
                      :label="item.name"
                      v-for="item  in paymethod"
                      :key="item.name"
                      :value="item.name"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="5" :sm="6" :md="7" :lg="8" :xl="10">
                <el-form-item label="下单时间" prop="startTime">
                  <el-date-picker
                    @change="uptime1"
                    v-model="sousuoinfor1.startTime"
                    type="datetimerange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <el-button type="primary" @click="sousuo">筛选</el-button>
                <el-button @click="resetForm('ruleForms')">重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-card>

        <el-tabs type="border-card" @tab-click="getStatus">
          <el-tab-pane :label="item.hfName" v-for="item  in recharge" :key="item.hfName">
            <el-table
              :data="orderData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              stripe
              style="width: 100%"
            >
              <el-table-column
                align="center"
                prop="orderCode"
                label="订单号"
                :show-overflow-tooltip="true"
                width="180"
              ></el-table-column>
              <el-table-column align="center" prop="nickName" label="支付人"></el-table-column>
              <el-table-column align="center" prop="phone" label="手机号"></el-table-column>
              <el-table-column align="center" label="订单类型" prop="orderType">
                <template slot-scope="scope">
                  <span v-if="scope.row.orderType ==='shoppingOrder'">到店支付订单</span>
                  <span v-if="scope.row.orderType ==='nomalOrder'">普通订单</span>
                  <span v-if="scope.row.orderType ==='rechargeOrder'">充值订单</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="支付方式">
                <template slot-scope="scope">
                  <span v-if="scope.row.paymentName === 'BalancePayment'">余额支付</span>
                  <span v-if="scope.row.paymentName ==='balance'">余额支付</span>
                  <span v-if="scope.row.paymentName ==='wechart'">微信支付</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="订单状态">
                <template slot-scope="scope">
                  <!-- <span>{{zhuang}}</span> -->
                  <span>{{scope.row.Status}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="amount" label="支付金额"></el-table-column>
              <el-table-column align="center" prop="modifyTime" label="修改时间" width="180"></el-table-column>
              <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                  <!-- <el-button @click="checkDetail(scope.row)" type="text" size="small">详情</el-button> -->
                  <el-button @click="goDetail(scope.row)" type="text" size="small">订单处理</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>

      <el-tab-pane label="到店支付订单" name="shoppingOrder">
        <el-card class="search-card">
          <el-form :inline="true" :model="sousuoinfor1" ref="ruleForms" class="demo-form-inline">
            <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :lg="6" :xl="8">
                <el-form-item label="订单号" prop="orderCode">
                  <el-input v-model="sousuoinfor1.orderCode" placeholder="请输入订单号"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="3" :sm="4" :md="5" :lg="6" :xl="8">
                <el-form-item label="支付方式" prop="valueset1">
                  <el-select
                    v-model="sousuoinfor1.valueset1"
                    placeholder="请选择"
                    @change="selectmethod"
                  >
                    <el-option
                      :label="item.name"
                      v-for="item  in paymethod"
                      :key="item.name"
                      :value="item.name"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="5" :sm="6" :md="7" :lg="8" :xl="10">
                <el-form-item label="下单时间" prop="startTime">
                  <el-date-picker
                    @change="uptime1"
                    v-model="sousuoinfor1.startTime"
                    type="datetimerange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <el-button type="primary" @click="sousuo">筛选</el-button>
                <el-button @click="resetForm('ruleForms')">重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-card>

        <el-tabs type="border-card" @tab-click="getStatus">
          <el-tab-pane :label="item.hfName" v-for="item  in recharge" :key="item.hfName">
            <el-table
              :data="orderData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              stripe
              style="width: 100%"
            >
              <el-table-column
                align="center"
                prop="orderCode"
                label="订单号"
                :show-overflow-tooltip="true"
                width="180"
              ></el-table-column>
              <el-table-column align="center" prop="nickName" label="支付人"></el-table-column>
              <el-table-column align="center" prop="phone" label="手机号"></el-table-column>
              <el-table-column align="center" label="订单类型" prop="orderType">
                <template slot-scope="scope">
                  <span v-if="scope.row.orderType ==='shoppingOrder'">到店支付订单</span>
                  <span v-if="scope.row.orderType ==='nomalOrder'">普通订单</span>
                  <span v-if="scope.row.orderType ==='rechargeOrder'">充值订单</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="支付方式">
                <template slot-scope="scope">
                  <span v-if="scope.row.paymentName === 'BalancePayment'">余额支付</span>
                  <span v-if="scope.row.paymentName ==='balance'">余额支付</span>
                  <span v-if="scope.row.paymentName ==='wechart'">微信支付</span>
                </template>
              </el-table-column>Status
              <el-table-column align="center" label="订单状态">
                <template slot-scope="scope">
                  <!-- <span>{{zhuang}}</span> -->
                  <span>{{scope.row.Status}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="amount" label="支付金额"></el-table-column>
              <el-table-column align="center" prop="modifyTime" label="修改时间" width="180"></el-table-column>
              <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                  <!-- <el-button @click="checkDetail(scope.row)" type="text" size="small">详情</el-button> -->
                  <el-button @click="goDetail(scope.row)" type="text" size="small">订单处理</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>

    <el-dialog title="订单详情" :visible.sync="centerDialogVisible" width="50%">
      <order-detail v-if="isRouterAlive" :id="id"></order-detail>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>-->
    </el-dialog>

    <el-drawer :visible.sync="drawer">
      <span style="margin-left:20px;font-size:14px;color:#666;">修改订单状态</span>
      <el-select
        v-model="updata.value"
        @change="updateStatus"
        placeholder="请选择"
        style="margin-left:20px;"
      >
        <el-option
          v-for="item in statusData"
          :key="item.hfName"
          :label="item.hfName"
          :value="item.hfName"
        ></el-option>
      </el-select>
    </el-drawer>
  </div>
</template>

<script>
import orderCenterService from '@/service/orderCenter.js';
import userCenterService from '@/service/userCenter.js';
import constants from '@/store/constants.js';
import orderDetail from './orderDetail';
export default {
  components: {
    orderDetail,
  },
  data() {
    return {
      isRouterAlive: true,
      centerDialogVisible: false,
      recharge: [
        { hfName: '全部', hfStatus: 1, hfDesc: 'all' },
        { hfName: '待支付', hfStatus: 1, hfDesc: 'payment' },
        { hfName: '已完成', hfStatus: 1, hfDesc: 'complete' },
        { hfName: '已取消', hfStatus: 1, hfDesc: 'cancel' },
      ],
      sousuoinfor1: {
        orderCode: '',
        valueset1: '',
        valueset2: '',
        valueset: '',
      },
      valueset2: '',
      valueset1: '',
      paymethod: [
        {
          method: 'wechart',
          name: '微信支付',
        },
        {
          method: 'balance',
          name: '余额支付',
        },
      ],
      valueset: '',
      startTime: '',
      value1: {},
      activeName: 'nomalOrder',
      zhuang: '待支付',
      currentPage: 1, // 初始页
      pagesize: 10, // 每页的数据
      type: {
        orderType: '',
        orderStatus: '',
      },
      sousuoinfor: {
        endTime: '',
        startTime: '',
        orderCode: '',
        orderType: '',
        orderStatus: '',
        paymentName: '',
      },
      orderTypeValue: '',
      orderType: [],
      id: '',
      value: '',
      updata: {
        targetOrderStatus: '',
        id: '',
        orderCode: '',
        originOrderStatus: '',
      },
      optionvalue: '',
      options: [],
      drawer: false,
      dialogVisible: false,
      userId: '',
      imageUrl: '',
      pictureVisible: false,
      addUserForm: {
        name: '杨莹',
        phone: '15022209253',
      },
      statusData: [],
      addUserVisible: false,
      orderData: [],
      sousuoinfortab: '',
      sousuoinforpay: '',
    };
  },
  methods: {
    getOrderByTypes() {
      orderCenterService.getOrderByType(this.type, (res) => {
        console.log(res);
        let data = res.data.data;
        for (var i = 0; i < data.length; i++) {
          // eslint-disable-next-line no-magic-numbers
          data[i].amount = (data[i].amount / 100).toFixed(2);
          // eslint-disable-next-line no-magic-numbers
        }
        data.map((item) => {
          // console.log(item);
          item.Status =
            item.orderStatus === 'payment'
              ? '待支付'
              : item.orderStatus === 'transport'
                ? '运送中'
                : item.orderStatus === 'process'
                  ? '处理中'
                  : item.orderStatus === 'complete'
                    ? '已完成'
                    : item.orderStatus === 'cancel'
                      ? '已取消'
                      : item.orderStatus === 'evaluate'
                        ? '待评价'
                        : item.orderStatus === 'controversial'
                          ? '交易纠纷'
                          : '异常';
          // item.Status = item.orderStatus === 'cancel' ? '已取消' : '1';
        });

        console.log(data);
        this.orderData = data;
      });
    },
    resetForm(ruleForms) {
      this.$refs[ruleForms].resetFields();
      this.getOrderByTypes();
    },
    selecttype: function(tab) {
      console.log(tab);
      console.log(this.orderType);
      for (var i = 0; i < this.orderType.length; i++) {
        if (this.orderType[i].orderDesc === tab) {
          console.log(this.orderType[i].orderType);
          this.sousuoinfor.orderType = this.orderType[i].orderType;
        }
      }
    },
    selectmethod: function(tab) {
      console.log(tab);
      for (var i = 0; i < this.paymethod.length; i++) {
        if (this.paymethod[i].name === tab) {
          console.log(this.paymethod[i].method);
          this.sousuoinfor.paymentName = this.paymethod[i].method;
        }
      }
    },
    selectstatus: function(tab) {
      this.sousuoinfortab = tab;
      for (var i = 0; i < this.statusData.length; i++) {
        if (this.statusData[i].hfName === tab) {
          console.log(this.statusData[i].hfDesc);
          this.sousuoinfor.orderStatus = this.statusData[i].hfDesc;
        }
      }
    },
    formatTen: function(num) {
      // eslint-disable-next-line no-magic-numbers
      return num > 9 ? num + '' : '0' + num;
    },

    formatDate: function(date) {
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      // eslint-disable-next-line no-unused-vars
      var hour = date.getHours();
      // eslint-disable-next-line no-unused-vars
      var minute = date.getMinutes();
      // eslint-disable-next-line no-unused-vars
      var second = date.getSeconds();
      // eslint-disable-next-line no-undef
      return (
        year +
        '-' +
        this.formatTen(month) +
        '-' +
        this.formatTen(day) +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
      );
    },
    uptime1: function(val) {
      console.log(val[0], '1', val[1]);
      this.sousuoinfor.startTime = this.formatDate(val[0]);
      this.sousuoinfor.endTime = this.formatDate(val[1]);
    },
    sousuo: function() {
      this.sousuoinfor.orderCode = this.sousuoinfor1.orderCode;
      console.log('1', this.type.orderStatus);
      this.sousuoinfor.orderType = this.type.orderType;
      this.sousuoinfor.orderStatus = this.type.orderStatus;
      console.log(this.sousuoinfor);
      if (this.sousuoinfortab !== '') {
        this.zhuang = this.sousuoinfortab;
      }

      orderCenterService.sousuo(this.sousuoinfor, (res) => {
        console.log(res);
        let data = res.data.data;
        for (var i = 0; i < data.length; i++) {
          // eslint-disable-next-line no-magic-numbers
          data[i].amount = (data[i].amount / 100).toFixed(2);
          // eslint-disable-next-line no-magic-numbers
        }
        this.orderData = data;
      });
    },
    handleSizeChange(val) {
      console.log(val);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getlistByType: function(tab) {
      // console.log(tab);
      this.orderTypeValue = tab.label;
      for (var i = 0; i < this.orderType.length; i++) {
        if (this.orderType[i].orderDesc === this.orderTypeValue) {
          this.type.orderType = this.orderType[i].orderType;
          this.getOrderByTypes();
          // orderCenterService.getOrderByType(this.type, (res) => {
          //   console.log(res);
          //   let data = res.data.data;
          //   for (var i = 0; i < data.length; i++) {
          //     // eslint-disable-next-line no-magic-numbers
          //     data[i].amount = (data[i].amount / 100).toFixed(2);
          //     // eslint-disable-next-line no-magic-numbers
          //   }
          //   this.orderData = data;
          // });
        }
      }
    },
    getOrderByType: function() {
      orderCenterService.getOrderType((res) => {
        // console.log(res);
        this.orderType = res.data.data;
      });
    },
    getOrderType: function() {
      orderCenterService.getOrderType((res) => {
        // console.log(res);
        this.orderType = res.data.data;
        // this.activeName = this.orderType[0].orderDesc;
        this.type.orderType = this.orderType[0].orderType;
        this.type.orderStatus = res.data.data[0].hfDesc;
        this.getStatus1();
      });
    },
    updateStatus: function(aaa) {
      // console.log(aaa);
      for (var i = 0; i < this.statusData.length; i++) {
        if (this.statusData[i].hfName === aaa) {
          this.updata.targetOrderStatus = this.statusData[i].hfDesc;
          orderCenterService.upDataOrderStatus(this.updata, (res) => {
            // console.log(this.updata, res);
            if (res.data.status === constants.SUCCESS_CODE) {
              this.$message({
                message: '修改成功',
                type: 'success',
              });
              this.drawer = false;
            } else {
              this.$message.error('修改失败');
            }
            return false;
          });
        }
      }
    },
    getStatus: function(tab, event) {
      // console.log(tab.label);
      this.zhuang = tab.label;
      for (var i = 0; i < this.statusData.length; i++) {
        if (this.statusData[i].hfName === tab.label) {
          console.log(this.statusData[i].hfDesc);
          this.type.orderStatus = this.statusData[i].hfDesc;
          // console.log(this.type.orderStatus);
          console.log(this.type);
          this.getOrderByTypes();
          // orderCenterService.getOrderByType(this.type, (res) => {
          //   console.log(res);
          //   let data = res.data.data;
          //   for (var i = 0; i < data.length; i++) {
          //     // eslint-disable-next-line no-magic-numbers
          //     data[i].amount = (data[i].amount / 100).toFixed(2);
          //     // eslint-disable-next-line no-magic-numbers
          //   }
          //   this.orderData = data;
          //   // console.log(this.statusData[i].hfDesc);
          //   return false;
          // });
        }
      }
      this.orderData = [];
    },
    getStatus1: function(tab, event) {
      this.type.orderStatus = this.statusData[0].hfDesc;
      // console.log(this.type);
      this.getOrderByTypes();
    },
    addUser: function() {
      this.addUserVisible = true;
    },
    handleChange(file, fileList) {
      // console.log(file);
      userCenterService.uploadPicture(file, this.userId, (res) => {
        // console.log(res);
      });
    },
    addUserSubmit: function() {
      userCenterService.addUser(this.addUserForm, (res) => {
        // console.log(res);
        if (res.data.data === '该用户已经存在') {
          this.$message.error('该用户已经存在');
        } else {
          this.$message({
            message: '添加成功',
            type: 'success',
          });
          this.addUserVisible = false;
          // this.checkUser();
        }
      });
    },
    checkUser: function() {
      orderCenterService.checkStatus((res) => {
        // console.log(res.data.data);
        this.statusData = res.data.data;
        this.getOrderType();
      });
    },
    upload: function(row, id) {
      this.userId = row.id;
      this.pictureVisible = true;
      // console.log(row);
    },
    checkDetail: function(row) {
      this.drawer = true;
      this.updata.id = row.id;
      this.updata.originOrderStatus = row.orderStatus;
      this.updata.orderCode = row.orderCode;
      // console.log(row);
    },
    goDetail: function(row) {
      this.id = row.id;
      this.refresh();
      this.centerDialogVisible = true;
      // // console.log(this.zhuang);
      // this.$router.push({
      //   path: '/orderDetail',
      //   query: {
      //     id: row.id,
      //   },
      // });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      console.log(tab.name);
      this.type.orderType = tab.name;
      this.getStatus1();
    },
    refresh() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
  },
  mounted() {
    this.checkUser();
  },
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

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
.search-card {
  /* margin: 0 5px 5px 5px; */
  margin-bottom: 25px;
}
</style>
