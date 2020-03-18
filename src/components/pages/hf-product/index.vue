<template>
<div>
  <el-card class="box-card">
    <!-- 搜索渲染区 -->
    <div class="filter-container">
      <Search></Search>
      <div class="letf-items" style="float: left;"></div>
      <div class="right-items" style="float: right;padding-top: 10px;">
        <el-button size="mini" @click="setProducts()" type="primary">刷新</el-button>
        <el-button size="mini" @click="handleCreate()" type="primary">新增商品</el-button>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="text item">
      <el-table :data="tableData" v-loading="loading" border style="width: 100%" highlight-current-row ref="multipleTable">
        <el-table-column prop="id" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="productName" label="商品名称"></el-table-column>
        <el-table-column prop="productDesc" label="商品描述"></el-table-column>
        <el-table-column prop="categoryName" label="所属类目名称"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="150"></el-table-column>
        <el-table-column prop="modifyTime" label="更新时间" width="150"></el-table-column>
        <el-table-column prop="lastModifier" label="最近一次操作人" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="editProduct(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="deleteProduct(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :total="totalSize">
        </el-pagination>
      </div>
    </div>
  </el-card>
</div>
</template>

<script>
import serviceProduct from '@/service/product.js';
import Search from './search';

export default {
  components: {
    Search,
  },
  data() {
    return {
      loading: false,
      totalSize: 0,
      currpage: 1,
      tableData: [],
    };
  },
  created() {
    this.setProducts();
  },
  methods: {
    setProducts() {
      this.loading = true;
      serviceProduct.getProductsByBossId((res) => {
        this.tableData = res.data.data.list;
        this.loading = false;
      });
    },

    handleCreate(e) {
      this.$router.push({
        path: '/hf-product/detail',
      });
    },
    editProduct(row) {
      this.$router.push({
        path: '/hf-product/detail?productId=' + row.id,
      });
    },
    deleteProduct(row) {
      this.$confirm('确认删除吗？', '提示', {}).then(async () => {
        serviceProduct.deleteProduct(row.id, (res) => {
          this.setProducts();
        });
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
