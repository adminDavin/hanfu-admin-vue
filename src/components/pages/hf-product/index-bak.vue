<template>
<div>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">全部商品（{{queryGoods}}）</el-menu-item>
        <el-menu-item index="2">出售中（{{onOffer}}）</el-menu-item>
        <el-menu-item index="3">库存（{{StockQuantity}}）</el-menu-item>
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
  </el-card>

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <router-link to="/hfadditive">
        <el-button class="butttj" style="color: #fff;outline:none; border-radius:5px;float:right;background: #A6A3FB;
          border: none;" size="mini" round>+ 添加商品</el-button>
      </router-link>
    </div>
    <!-- 内容区 -->
    <div class="text item">
      <el-table :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)" :current-page="currpage" :page-size="pagesize" :total="tableData.length" ref="multipleTable">
        <el-table-column type="selection" label="序号" width="59px" align="center"></el-table-column>

        <el-table-column prop="id" label="商品编号" align="center"></el-table-column>

        <el-table-column prop="productDesc" label="商品描述" align="center"></el-table-column>

        <el-table-column prop="modifyTime" label="创建时间" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <span class="el" @click="biangui(scope.row)" style="color:#A6A3FB;font-family:ms sans serif;cursor: pointer;">编辑</span>
            <span class="el" @click="upFrame(scope.row)" style="margin-left: 16px;margin-right: 16px;color:#FFCE26;cursor: pointer;">{{ scope.row.isDeleted==0?'下架':'上架'}}</span>
            <span class="el ff3" style="color:#FF318A;cursor: pointer;" @click="deletesingle(scope.$index,scope.row)">删除</span>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination style="bottom: 0;float: right;margin-right: 50px;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="100" :total="1000" fixed></el-pagination>
    </div>
  </el-card>
</div>
</template>

<script>
import api from '@/api/commodity_api.js';
import qs from 'qs';
export default {
  data() {
    return {
      StockQuantity: '', // 库存数
      queryGoods: '', // 商品总数
      onOffer: '', // 出售中
      activeIndex: '1',
      inquire: {
        goodsName: '', // 商品名称
        productCategoryName: '', // 类目名称
      },
      pagesize: 12,
      currpage: 1,
      // 物品列表
      tableData: [],
      addLoading: false,
    };
  },
  created() {
    this.getcoommo();
  },
  methods: {
    async getcoommo() {
      api.getProductList()
        .then((res) => {
          this.tableData = res.data.data.list;
          this.queryGoods = res.data.data.endRow;
        });
    },
    seeAbout() {
      api.queryList(this.inquire)
        .then((res) => {
          this.tableData = res.data.data;
        });
    },
    sou: function () {
      this.inquire.goodsName = '';
      this.inquire.productCategoryName = '';
    },
    deletesingle: function (index, row) {
      console.log(row);
      console.log(index);
      this.$confirm('确认删除吗？', '提示', {}).then(async () => {
        api.deleteGood(row.id)
          .then((res) => {
            console.log(res);
            this.tableData.splice(index, 1);
            // this.quGoods()
          });
      });
    },
    // 编辑商品
    biangui: function (row) {
      var arr = JSON.stringify(row);
      this.$router.push({
        path: '/hfcompile',
        query: {
          row: arr,
        },
      });
    },
    // 上下架
    upFrame(row) {
      console.log(row.frames);
      if (row.isDeleted === 0) {
        this.$http
          .get('/api/api/product/product/racking', {
            params: {
              frames: 3,
              productId: row.id,
            },
            paramsSerializer: (params) => qs.stringify(params, {
              indices: false,
            }),
          })
          .then((res) => {
            this.getcoommo();
            this.$message({
              showClose: true,
              message: '恭喜你，下架成功',
              type: 'success',
            });
          });
      } else {
        this.$http
          .get('/api/api/product/product/racking', {
            params: {
              frames: 0,
              productId: row.id,
            },
            paramsSerializer: (params) => qs.stringify(params, {
              indices: false,
            }),
          })
          .then((res) => {
            this.getcoommo();
            this.$message({
              showClose: true,
              message: '恭喜你，上架成功',
              type: 'success',
            });
          });
      }
    },
    // 出售中
    qihuanchus() {
      this.qihuans = '1';
      api.selectFrames(0)
        .then((res) => {
          this.tableData = res.data.data.list;
          this.onOffer = res.data.data.endRow;
        });
    },
    // 库存切换
    qihuankuch() {
      this.qihuans = '2';
      let num = 3;
      api.selectFrames(num)
        .then((res) => {
          this.tableData = res.data.data.list;
          this.StockQuantity = res.data.data.endRow;
        });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key === '1') {
        this.getcoommo();
      } else if (key === '2') {
        this.qihuanchus();
        console.log('出售中');
      } else if (key === '3') {
        this.qihuankuch();
      }
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currpage = val;
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  margin: 10px;
}

.clearfix {
  height: 40px;
}
</style>
