<template>
  <div>
    <el-button class="" @click="refresh" type="success" round>刷新</el-button>
    <!-- <el-button  type="success" round>{{commodityId}}</el-button> -->
    <el-table
      :data="tableData"
      v-loading="loading"
      border
      @row-click="rowClick"
      highlight-current-row
      ref="multipleTable"
    >
      <el-table-column prop="goodsId" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="goodsName" label="物品名称"></el-table-column>
      <el-table-column prop="goodsDesc" label="物品描述"></el-table-column>
      <el-table-column prop="brandName" label="生产厂家"></el-table-column>
      <el-table-column prop="sellPrice" label="售卖价格"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="137"></el-table-column>
      <el-table-column prop="modifyTime" label="更新时间" width="137"></el-table-column>
      <el-table-column fixed="right" width="100" label="操作">
        <template slot-scope="scope">
          <el-button @click="editProduct(scope.row)" type="text" size="small">查看详情</el-button>
          <el-button @click="deleteProduct(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="totalSize"
      ></el-pagination>
    </div>
    <el-drawer
      title="物品详情"
      :direction="direction"
      :visible.sync="drawer"
      :before-close="handleClose"
      size="80%"
    >
    <div style="float: left;">
      <ListSpecification ref="child" details="false" :interconnectedID="interconnectedID" :detailgoodsId="detailgoodsId" ></ListSpecification>
    </div>
    <div style="float: right;">
        <el-table
        :data="details"
        v-loading="loading"
        border
        highlight-current-row
        ref="multipleTable"
      >
        <el-table-column prop="goodsId" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="brandName" label="物品名称">
          <template slot-scope="scope">
            <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.brandName"></el-input>
                 <span v-show="!show">{{scope.row.brandName}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="goodsDesc" label="物品描述">
          <template slot-scope="scope">
            <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.goodsDesc"></el-input>
            <span v-show="!show">{{scope.row.goodsDesc}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="brandName" label="生产厂家">
          <template slot-scope="scope">
            <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.brandName"></el-input>
            <span v-show="!show">{{scope.row.brandName}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="sellPrice" label="售卖价格">
          <template slot-scope="scope">
            <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.sellPrice"></el-input>
            <span v-show="!show">{{scope.row.sellPrice}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" width="100" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="show =true">编辑</el-button>
            <el-button @click="modification(scope)" type="text" size="small">提交</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    </el-drawer>
  </div>
</template>


<script>
import serviceGoods from '@/service/goods.js';

import ListSpecification from '../list-specification';
export default {
  props: {
    commodityId: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ListSpecification,
  },
  data() {
    return {
      detailgoodsId: '',
      interconnectedID: '',
      show: false,
      loading: false,
      totalSize: 0,
      currpage: 1,
      tableData: [],
      productId: 1,
      drawer: false, // 抽屉组件开关
      direction: 'btt', // 控制抽屉弹出位置
      details: [],
    };
  },
  created() {
    console.log(this.props);
    this.setProducts();
  },

  methods: {
    setProducts() {
      this.loading = true;
      this.productId = this.commodityId;
      console.log(this.commodityId);
      serviceGoods.getGoodsByProductId(this.productId, (res) => {
        this.tableData = res.data.data;
        this.loading = false;
      });
    },
    handleCreate(e) {
      this.$router.push({
        path: '/hf-product/detail',
      });
    },
    // 刷新
    refresh() {
      this.setProducts();
    },
    // 点击物品列表行触发
    rowClick(e) {
      console.log('三级连动', e.goodsId);
      this.interconnectedID = e.goodsId;

      setTimeout(() => {
        console.log(this.$refs.child);
        this.$refs.child.callMethod();
      }, 0);
    },
    // 详情
    editProduct(row) {
      this.detailgoodsId = row.goodsId;
      this.drawer = true;
      serviceGoods.selectProductGoods(row.goodsId, this.commodityId, (res) => {
        this.details = res.data.data;
        console.log(res.data.data);
      });
    },
    // 修改提交
    modification(scope) {
      serviceGoods.updateGood(scope.row, (res) => {
        this.drawer = false;
      });
    },
    deleteProduct(row) {
      this.$confirm('确认删除吗？', '提示', {}).then(async () => {
        serviceGoods.deleteById(row.goodsId, (res) => {
          this.setProducts();
        });
      });
    },
    handleClose(done) {
      this.$confirm('确认关闭？').then((_) => {
        done();
      });
    },
    handleCurrentChange(val) {
      this.currpage = val;
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  margin: 5px;
}

.clearfix {
  height: 40px;
}
</style>

