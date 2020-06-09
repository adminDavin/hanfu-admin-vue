<template>
  <div>
    <el-card class="search-card">
      <hfsearch @parentByClick="childClick" :options="options" labeltype="所在店铺" labelName="优惠名称"></hfsearch>
    </el-card>

    <el-card class="box-card">
      <el-button style="float: right;" size="small" type="primary" @click="drawer = true">+ 添加优惠券</el-button>
      <el-table
        stripe
        :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%"
      >
        <el-table-column type="index" label="序号" align="center"></el-table-column>
        <el-table-column prop="id" label="id" align="center"></el-table-column>
        <el-table-column prop="discountCouponName" label="名称" align="center"></el-table-column>
        <el-table-column align="center" prop="discountCouponType" label="优惠类型">
          <template slot-scope="scope">
            <span v-if="scope.row.discountCouponType==='0'">折扣</span>
            <span v-if="scope.row.discountCouponType==='1'">满减</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="useState" label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.useState===-1">未开始</span>
            <span v-if="scope.row.useState===0">进行中</span>
            <span v-if="scope.row.useState===1">已结束</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="useState" label="活动" width="150">
          <template slot-scope="scope">
            <span
              v-if="scope.row.discountCouponType==='0'"
            >满{{scope.row.useLimit.full}}元打{{scope.row.useLimit.minus}}折</span>
            <span
              v-if="scope.row.discountCouponType==='1'"
            >满{{scope.row.useLimit.full}}减{{scope.row.useLimit.minus}}</span>
          </template>
        </el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          align="center"
          prop="discountCouponDesc"
          label="描述"
        ></el-table-column>
        <el-table-column align="center" label="适用范围">
          <template slot-scope="scope">
            <span v-if="scope.row.scope==='allUser'">所有用户</span>
            <span v-if="scope.row.scope==='vipUser'">会员用户</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="是否可以叠加">
          <template slot-scope="scope">
            <span v-if="scope.row.superposition===1">是</span>
            <span v-if="scope.row.superposition===2">否</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="startTime" width="180" label="有效期开始时间"></el-table-column>
        <el-table-column align="center" width="180" prop="stopTime" label="有效期结束时间"></el-table-column>
        <el-table-column align="center" label="操作" fixed="right">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              align="center"
              @click="checkPersonDetail(scope.row)"
            >修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        style="float:right;"
        background
        layout="prev, pager, next"
        :total="list.length"
        :page-size="pagesize"
      ></el-pagination>
    </el-card>

    <el-dialog title="添加优惠券" :visible.sync="drawer" width="50%" center>
      <el-form
        style="margin-left:20px;"
        :model="formquan"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="名称" prop="discountCouponName">
          <el-input v-model="formquan.discountCouponName" style="width:230px;" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属店铺">
          <el-select v-model="formquan.stoneId" placeholder="请选择">
            <el-option v-for="item in options" :key="item.id" :label="item.hfName" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="优惠类型" prop="discountCouponType">
          <el-radio v-model="radio" label="0" @change="zhe">折扣</el-radio>
          <el-radio v-model="radio" label="1" @change="zhe">满减</el-radio>
        </el-form-item>
        <!-- <el-form-item label="状态" prop="useState">
          <el-radio v-model="formquan.useState" label="-1">未开始</el-radio>
          <el-radio v-model="formquan.useState" label="0" >进行中</el-radio>
          <el-radio v-model="formquan.useState" label="1" >已结束</el-radio>
        </el-form-item>-->
        <el-form-item label="有效期开始时间" prop="startTime">
          <el-date-picker v-model="formquan.startTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="有效期结束时间" prop="stopTime">
          <el-date-picker v-model="formquan.stopTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="描述" prop="discountCouponDesc" style="margin-top:20px;">
          <el-input
            style="width:500px;"
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="formquan.discountCouponDesc"
            maxlength="60"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="适用范围" prop="scope" style="margin-top:20px;">
          <el-select @change="getchangdata" v-model="val" placeholder="请选择">
            <el-option
              v-for="item in scopedata"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否可以叠加使用" style="margin-top:20px;">
          <el-radio v-model="radio1" label="1" @change="die">是</el-radio>
          <el-radio v-model="radio1" label="2" @change="die">否</el-radio>
        </el-form-item>
        <el-row v-if="formquan.discountCouponType ===1">
          <el-col :span="1">
            <el-form-item label="优惠额度" style="margin-top:20px;"></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="满" prop="useLimit.full" style="margin-top:20px;">
              <el-input v-model="formquan.useLimit.full" style="width:100px;" autocomplete="off">
                <i slot="suffix" style="font-style:normal;margin-right: 10px;">元</i>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="减" prop="useLimit.minus" style="margin-top:20px;">
              <el-input v-model="formquan.useLimit.minus" style="width:100px;" autocomplete="off">
                <i slot="suffix" style="font-style:normal;margin-right: 10px;">元</i>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="formquan.discountCouponType ===0">
          <el-col :span="1">
            <el-form-item label="优惠额度" style="margin-top:20px;"></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="满" prop="useLimit.full" style="margin-top:20px;">
              <el-input v-model="formquan.useLimit.full" style="width:100px;" autocomplete="off">
                <i slot="suffix" style="font-style:normal;margin-right: 10px;">元</i>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="折扣" prop="useLimit.minus" style="margin-top:20px;">
              <el-input v-model="formquan.useLimit.minus" style="width:100px;" autocomplete="off">
                <i slot="suffix" style="font-style:normal;margin-right: 10px;">%</i>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-container class="t-10 radius-4">
          <el-header class="font-neue t-10">图片管理</el-header>
          <el-main>
            <list-picture :productId="productInfo.id"></list-picture>
          </el-main>
        </el-container>-->
        <el-form-item>
          <!-- <el-button type="primary" size="medium" @click="submitForm('ruleForm')">提交</el-button> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="drawer = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">提 交</el-button>
      </span>
    </el-dialog>
    <!-- ============================================================================================= -->
    <el-dialog width="55%" title="修改优惠券" :visible.sync="drawer1" center>
      <el-form
        style="margin-left:20px;"
        :model="formquan1"
        status-icon
        :rules="rules"
        ref="ruleForm1"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="名称" prop="discountCouponName">
          <el-input v-model="formquan1.discountCouponName" style="width:230px;" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="优惠类型" prop="discountCouponType">
          <el-radio v-model="radioval" label="0" @change="zhe1">折扣</el-radio>
          <el-radio v-model="radioval" label="1" @change="zhe1">满减</el-radio>
        </el-form-item>
        <el-form-item label="有效期开始时间" prop="startTime">
          <el-date-picker
            @change="uptime1"
            v-model="formquan1.startTime"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="有效期结束时间" prop="stopTime">
          <el-date-picker
            @change="uptime2"
            v-model="formquan1.stopTime"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="描述" prop="discountCouponDesc" style="margin-top:20px;">
          <el-input
            style="width:500px;"
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="formquan1.discountCouponDesc"
            maxlength="60"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="适用范围" prop="scope" style="margin-top:20px;">
          <el-select @change="getchangdata1" v-model="valselect" placeholder="请选择">
            <el-option
              v-for="item in scopedata"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否可以叠加使用" style="margin-top:20px;">
          <el-radio v-model="radiodie" label="1" @change="die1">是</el-radio>
          <el-radio v-model="radiodie" label="2" @change="die1">否</el-radio>
        </el-form-item>
        <el-row v-if="formquan1.discountCouponType ===1">
          <el-col :span="1">
            <el-form-item label="优惠额度" style="margin-top:20px;"></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="满" prop="useLimit.full" style="margin-top:20px;">
              <el-input v-model="formquan1.useLimit.full" style="width:100px;" autocomplete="off">
                <i slot="suffix" style="font-style:normal;margin-right: 10px;">元</i>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="减" prop="useLimit.minus" style="margin-top:20px;">
              <el-input v-model="formquan1.useLimit.minus" style="width:100px;" autocomplete="off">
                <i slot="suffix" style="font-style:normal;margin-right: 10px;">元</i>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="formquan1.discountCouponType ===0">
          <el-col :span="1">
            <el-form-item label="优惠额度" style="margin-top:20px;"></el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="满" prop="useLimit.full" style="margin-top:20px;">
              <el-input v-model="formquan1.useLimit.full" style="width:100px;" autocomplete="off">
                <i slot="suffix" style="font-style:normal;margin-right: 10px;">元</i>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="折扣" prop="useLimit.minus" style="margin-top:20px;">
              <el-input v-model="formquan1.useLimit.minus" style="width:100px;" autocomplete="off">
                <i slot="suffix" style="font-style:normal;margin-right: 10px;">%</i>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-container class="t-10 radius-4">
          <el-header class="font-neue t-10">图片管理</el-header>
          <el-main>
            <list-picture :productId="productInfo.id"></list-picture>
          </el-main>
        </el-container>-->
        <el-form-item>
          <!-- <el-button type="primary" size="medium" @click="submitForm1('ruleForm1')">提交</el-button> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="drawer1 = false">取 消</el-button>
        <el-button type="primary" @click="submitForm1('ruleForm1')">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import quan from '@/service/quan.js';
import constants from '@/store/constants.js';
// eslint-disable-next-line no-unused-vars
// import ListPicture from './list-picture';
import hfsearch from '../hf-eventsManage/hf-search';
import storeService from '@/service/store.js';
import store from '@/store';
export default {
  components: { hfsearch },
  data() {
    return {
      activeName: 'second',
      bossid: 1,
      zhuangval: '',
      currentPage: 1, // 初始页
      pagesize: 10, // 每页的数据
      radiodie: '',
      valselect: '',
      radioval: '0',
      drawer1: false,
      val: '',
      scopedata: [],
      radio1: '1',
      options: [
        // {
        //   id: '0',
        //   label: '店铺名',
        // },
      ],
      value: '',
      direction: 'rtl',
      rules: {
        discountCouponName: [
          {
            required: true,
            message: '请输入名称',
            trigger: 'blur',
          },
        ],
        startTime: [
          {
            required: true,
            message: '请选择开始时间',
            trigger: 'blur',
          },
        ],
        stopTime: [
          {
            required: true,
            message: '请选择结束时间',
            trigger: 'blur',
          },
        ],
        discountCouponDesc: [
          {
            required: true,
            message: '请输入描述',
            trigger: 'blur',
          },
        ],
        // scope: [
        //   {
        //     required: true,
        //     message: '请选择适用范围',
        //     trigger: 'blur',
        //   },
        // ],
        useLimit: {
          full: [
            {
              required: true,
              message: '请填写优惠额度',
              trigger: 'blur',
            },
          ],
          minus: [
            {
              required: true,
              message: '请填写优惠额度',
              trigger: 'blur',
            },
          ],
        },
      },
      list: [],
      radio: '0',
      textarea: '',
      drawer: false,
      formquan: {
        stoneId: '',
        useState: '-1',
        discountCouponDesc: '',
        bossId: 1,
        useLimit: {
          full: '',
          minus: '',
        },
        superposition: 1,
        discountCouponName: '',
        discountCouponType: 0,
        startTime: '',
        stopTime: '',
      },
      formquan1: {
        useState: '-1',
        id: '',
        bossId: 1,
        useLimit: {
          full: '',
          minus: '',
        },
        superposition: 1,
        discountCouponName: '',
        discountCouponType: 0,
        startTime: '',
        stopTime: '',
        discountCouponDesc: '',
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    childClick(tableData) {
      if (tableData === -1) {
        this.getlist();
      } else {
        this.list = tableData;
      }

    },

    uptime1: function(val) {
      console.log(val);
      this.formquan1.startTime = this.formatDate(val);
    },
    uptime2: function(val) {
      console.log(val);
      this.formquan1.stopTime = this.formatDate(val);
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
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
    getchangdata: function(aaa) {
      // console.log(aaa);
      this.formquan.scope = aaa;
      for (var i = 0; i < this.scopedata.length; i++) {
        if (this.scopedata[i].name === aaa) {
          this.formquan.scope = this.scopedata[i].code;
        }
      }
      // console.log(this.formquan.scope);
    },
    getchangdata1: function(aaa) {
      // console.log(aaa);
      this.formquan1.scope = aaa;
      for (var i = 0; i < this.scopedata.length; i++) {
        if (this.scopedata[i].name === aaa) {
          this.formquan1.scope = this.scopedata[i].code;
        }
      }
      // console.log(this.formquan.scope);
    },
    zhe: function(e) {
      console.log(e);
      if (e === '0') {
        this.formquan.discountCouponType = 0;
      } else {
        this.formquan.discountCouponType = 1;
      }
      // console.log(this.formquan.discountCouponType);
    },
    zhe1: function(e) {
      console.log(e);
      if (e === '0') {
        this.formquan1.discountCouponType = 0;
      } else {
        this.formquan1.discountCouponType = 1;
      }
      // console.log(this.formquan.discountCouponType);
    },
    checkPersonDetail: function(row) {
      this.drawer1 = true;
      console.log(row);
      this.formquan1.id = row.id;
      this.formquan1.discountCouponName = row.discountCouponName;
      this.formquan1.discountCouponType = row.discountCouponType;
      this.formquan1.useLimit = row.useLimit;
      this.radioval = this.formquan1.discountCouponType;
      if (this.formquan1.discountCouponType === '1') {
        this.formquan1.discountCouponType = 1;
      } else {
        this.formquan1.discountCouponType = 0;
      }
      this.formquan1.startTime = row.startTime;
      this.formquan1.stopTime = row.stopTime;
      this.formquan1.discountCouponDesc = row.discountCouponDesc;
      this.formquan1.scope = row.scope;
      this.formquan1.useLimit = JSON.parse(this.formquan1.useLimit);
      // eslint-disable-next-line no-magic-numbers
      this.formquan1.useLimit.full = this.formquan1.useLimit.full / 100;
      if (row.discountCouponType === '1') {
        // eslint-disable-next-line no-magic-numbers
        this.formquan1.useLimit.minus = this.formquan1.useLimit.minus / 100;
      }
      console.log(this.formquan1.useLimit);
      if (row.superposition === 1) {
        this.radiodie = '1';
        // eslint-disable-next-line no-magic-numbers
      } else if (row.superposition === 2) {
        this.radiodie = '2';
      }
    },
    submitForm(ruleForm) {
      //   this.formquan.startTime = this.formquan.startTime.toLocaleString();
      //   this.formquan.stopTime = this.formquan.startTime.toLocaleString();
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          this.formquan.startTime = this.formatDate(this.formquan.startTime);
          this.formquan.stopTime = this.formatDate(this.formquan.stopTime);
          // eslint-disable-next-line no-magic-numbers
          this.formquan.useLimit.full = this.formquan.useLimit.full * 100;
          if (this.formquan.discountCouponType === 1) {
            // eslint-disable-next-line no-magic-numbers
            this.formquan.useLimit.minus = this.formquan.useLimit.minus * 100;
          }
          this.formquan.useLimit = JSON.stringify(this.formquan.useLimit);
          quan.addCoupon(this.formquan, (res) => {
            console.log('添加优惠券', res);
            if (res.data.status === constants.SUCCESS_CODE) {
              this.$message({
                message: '添加成功',
                type: 'success',
              });
              this.drawer = false;
              this.getlist();
              this.$refs[ruleForm].resetFields();
            } else {
              this.$message({
                message: '添加失败',
                type: 'error',
              });
            }
          });
        }
      });
    },
    submitForm1(ruleForm) {
      //   this.formquan.startTime = this.formquan.startTime.toLocaleString();
      //   this.formquan.stopTime = this.formquan.startTime.toLocaleString();
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          // eslint-disable-next-line no-magic-numbers
          this.formquan1.useLimit.full = this.formquan1.useLimit.full * 100;
          if (this.formquan1.discountCouponType === 1) {
            // eslint-disable-next-line no-magic-numbers
            this.formquan1.useLimit.minus = this.formquan1.useLimit.minus * 100;
          }
          this.formquan1.useLimit = JSON.stringify(this.formquan1.useLimit);
          // this.formquan1.startTime = this.formatDate(this.formquan1.startTime);
          // this.formquan1.stopTime = this.formatDate(this.formquan1.stopTime);
          quan.bianCoupon(this.formquan1, (res) => {
            console.log(res);
            console.log(this.formquan1);
            if (res.data.status === constants.SUCCESS_CODE) {
              this.$message({
                message: '修改成功',
                type: 'success',
              });
              this.drawer1 = false;
              this.getlist();
            } else {
              this.$message({
                message: '修改失败',
                type: 'error',
              });
            }
          });
        }
      });
    },
    die: function(e) {
      // console.log(e);
      if (e === '1') {
        this.formquan.superposition = 1;
      } else if (e === '2') {
        this.formquan.superposition = 2;
      }
      // console.log(this.formquan.superposition);
    },
    die1: function(e) {
      // console.log(e);
      if (e === '1') {
        this.formquan1.superposition = 1;
      } else if (e === '2') {
        this.formquan1.superposition = 2;
      }
      // console.log(this.formquan.superposition);
    },
    getStore: function() {
      let bossid = store.getUser().BSid;
      storeService.getStore(bossid, (res) => {
        console.log(res);
        this.options = res.data.data;
      });
    },
    getScope: function() {
      quan.getScope(this.editid, (res) => {
        console.log(res);
        this.scopedata = res.data.data;
      });
    },
    getlist: function() {
      console.log(this.options);
      let stoneId = 1;
      quan.getliststoneId(stoneId, (res) => {
        console.log(res);
        for (var i = 0; i < res.data.data.length; i++) {
          res.data.data[i].useLimit = JSON.parse(res.data.data[i].useLimit);

          res.data.data[i].useLimit.full = (
            // eslint-disable-next-line no-magic-numbers
            res.data.data[i].useLimit.full / 100
          // eslint-disable-next-line no-magic-numbers
          ).toFixed(2);
          if (res.data.data[i].discountCouponType === 1) {

            res.data.data[i].useLimit.minus = (
            // eslint-disable-next-line no-magic-numbers
              res.data.data[i].useLimit.minus / 100
            // eslint-disable-next-line no-magic-numbers
            ).toFixed(2);
          } else {
            // eslint-disable-next-line no-magic-numbers
            res.data.data[i].useLimit.minus = (
            // eslint-disable-next-line no-magic-numbers
              res.data.data[i].useLimit.minus / 10
            // eslint-disable-next-line no-magic-numbers
            ).toFixed(2);
          }
        }
        this.list = res.data.data;
      });
    },
  },

  // eslint-disable-next-line no-empty-function
  mounted() {
    this.getStore();
    this.getScope();
    this.getlist();
    this.formquan.bossId = store.getUser().BSid;
    this.formquan1.bossId = store.getUser().BSid;
  },
};
</script>
<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.el-textarea .el-textarea__inner {
  resize: none;
}
.search-card {
  margin-bottom: 25px;
}
</style>
