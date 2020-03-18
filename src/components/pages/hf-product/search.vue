<template>
<el-collapse v-model="activeNames">
  <el-collapse-item title="搜索条件" name="0">
    <div slot="header" class="clearfix">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="statistics in statusStatistics" v-bind:key="statistics.index">
          {{statistics.desc}} ({{statistics.quantity}})
        </el-menu-item>
      </el-menu>
    </div>
    <div class="text item">
      <el-form :inline="true">
        <div style="padding:25px 0 24px  44px;">
          <el-form-item style="margin-bottom:24px;margin-left: 5px;" label>
            <el-form-item style="margin-bottom:50px;" label>
              <div>物品名称</div>
            </el-form-item>
            <input v-model="inquire.goodsName" type="text" style="box-shadow:0px 2px 137px 1px rgba(107,107,107,0.11);
              width:257px;height:45px;border-radius:6px;outline: none;border:1px solid #EBEDF0;border-top:0.8px solid #EBEDF0;
              border-bottom:1.5px solid #EBEDF0; padding-left: 14px;" placeholder="请输入物品名称 " />
          </el-form-item>

          <el-form-item style="margin-bottom:24px;margin-left: 5px;" label>
            <el-form-item style="margin-bottom:50px;" label>
              <div style>物品分类</div>
            </el-form-item>
            <el-input v-model="inquire.productCategoryName" placeholder="请输入要查询的类目名称" autocomplete="off"></el-input>
          </el-form-item>
          <br />
          <div style="float: right;margin-right: 260px;">
            <el-button type="primary" @click="seeAbout" :loading="addLoading" class="chaxun" style="background: #A6A3FB;border: none;">查询</el-button>
            <el-button class="chaxun" type="primary" @click="sou" :loading="addLoading" style="border:1px solid #EBEDF0;color: #666666; background: #fff;">重置</el-button>
            <br />
            <el-button style="visibility: hidden;"></el-button>
          </div>
        </div>
      </el-form>
    </div>
  </el-collapse-item>
</el-collapse>
</template>

<script>
import api from '@/api/commodity_api.js';

export default {
  data() {
    return {
      addLoading: false,
      activeIndex: '1',
      activeNames: ['1'],
      statusStatistics: [{
        index: '1',
        name: 'all',
        desc: '全部商品',
        quantity: 0,
      }, {
        index: '2',
        name: 'selling',
        desc: '出售中',
        quantity: 0,
      }, {
        index: '3',
        name: 'stock',
        desc: '库存',
        quantity: 0,
      }],
      inquire: {
        goodsName: '', // 商品名称
        productCategoryName: '', // 类目名称
      },
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === '1') {
        this.getcoommo();
      } else if (key === '2') {
        this.qihuanchus();
        console.log('出售中');
      } else if (key === '3') {
        this.qihuankuch();
      }
    },
    sou: function () {
      this.inquire.goodsName = '';
      this.inquire.productCategoryName = '';
    },
    seeAbout() {
      api.queryList(this.inquire)
        .then((res) => {
          this.tableData = res.data.data;
        });
    },
  },
};
</script>
