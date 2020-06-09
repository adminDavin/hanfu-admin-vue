<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="a6a" label="商品管理" name="goods">
        <el-card class="search-card">
          <Search @parentByClick="childClick"></Search>
        </el-card>

        <el-card class="box-card">
          <!-- 搜索渲染区 -->
            <div slot="header" class="clearfix">
              <span>已选{{amount}}项商品
              <el-button
                class="ff3"
                style="padding: 10px 10px;"
                type="text"
                @click="toggleSelection()"
              >清空</el-button></span>
              <div style="float: right;">
                <el-button @click="setProducts()">刷新</el-button>
                <el-button @click="handleCreate()" type="purple">新增商品</el-button>
                <el-button @click="BatchRemove()">批量操作</el-button>
              </div>
            </div>

          <!-- 内容区 -->
          <div class="text item">
            <el-table
              :data="tableData"
              v-loading="loading"
              stripe
              align="center"
              style="width: 100%"
              highlight-current-row
              ref="multipleTable"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="50"></el-table-column>
              <el-table-column label="序号" type="index" :index="indexMethod"></el-table-column>
              <el-table-column prop="productName" label="商品名称"></el-table-column>
              <el-table-column prop="productDesc" label="商品描述" show-overflow-tooltip></el-table-column>
              <el-table-column prop="categoryName" label="所属类目名称"></el-table-column>
              <el-table-column prop="stoneName" label="所属店铺"></el-table-column>
              <el-table-column prop="createTime" label="创建时间" width="150"></el-table-column>
              <el-table-column prop="modifyTime" label="更新时间" width="150"></el-table-column>
              <el-table-column prop="lastModifier" label="最近一次操作人" width="150"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button class="a6a" @click="editProduct(scope.row)" type="text" size="small">编辑</el-button>
                  <el-button
                    class="ff3"
                    @click="deleteProduct(scope.row)"
                    type="text"
                    size="small"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="float: right;" class="block">
              <el-pagination
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :total="totalSize"
              ></el-pagination>
            </div>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane class="a6a" label="类目管理" name="category">
        <category></category>
      </el-tab-pane>
      <el-tab-pane class="a6a" label="物品审批" name="shen">
        <el-table
          :data="shendata"
          v-loading="loading"
          stripe
          style="width: 100%"
          highlight-current-row

          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column align="center" label="序号" type="index" :index="indexMethod"></el-table-column>
          <el-table-column align="center" prop="goodName" label="物品名称"></el-table-column>
          <el-table-column align="center" prop="goodDesc" label="物品描述" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="total" label="总数数量"></el-table-column>
          <el-table-column align="center" prop="quantity" label="出库数量"></el-table-column>
          <el-table-column align="center" prop="category" label="物品类目"></el-table-column>
          <el-table-column align="center" prop="warehouseName" label="所属仓库"></el-table-column>
          <el-table-column align="center" label="审批状态" width="150">
            <template slot-scope="scope">
              <span>{{scope.row.status==2?'未审批':'审批'}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="time" label="创建时间" width="150"></el-table-column>
          <el-table-column align="center" prop="name" label="操作人" width="150"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                v-if="scope.row.status==2"
                class="a6a"
                @click="chucang(scope.row)"
                type="text"
                size="small"
              >审批</el-button>
              <el-button
                v-if="scope.row.status==2"
                class="a6a"
                @click="refuse(scope.row)"
                type="text"
                size="small"
              >拒绝</el-button>
              <el-button v-if="scope.row.status!==2" class="ff3" type="text" size="small">已审批</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import serviceProduct from '@/service/product.js';
import cang from '@/service/cang.js';
import category from '../hf-product/category';
import Search from './search';
import store from '@/store';

export default {
  components: {
    Search,
    category,
  },
  data() {
    return {
      Param: {
        applyId: '',
        type: '',
      },

      shendata: [],
      amount: '0',
      indexMethod: 1,
      activeName: 'goods',
      loading: false,
      totalSize: 0,
      currpage: 1,
      tableData: [],
      Batch: [],
    };
  },
  created() {
    this.setProducts();
    this.shenlist();
  },
  methods: {
    chucang(row) {
      console.log(row);

      this.$confirm('是否同意此申请?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.Param.type = 1;
          this.Param.applyId = row.id;
          serviceProduct.bossAgreeApply(this.Param, (res) => {
            console.log(res);
            if (res.data.data === 0) {
              this.$message({
                showClose: true,
                message: '数量不足',
                type: 'error',
              });
            } else {
              this.$message({
                message: '已同意',
                type: 'success',
              });
            }
            this.shenlist();
          });
        })
        // eslint-disable-next-line no-unexpected-multiline
        [
          'catch'
        ](() => {
          this.$message({
            type: 'info',
            message: '已取消',
          });
        });
    },
    refuse(row) {
      console.log(row);

      this.$confirm('是否拒绝此申请?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.Param.type = 2;
          this.Param.applyId = row.id;
          serviceProduct.bossAgreeApply(this.Param, (res) => {
            this.$message({
              message: '已拒绝',
              type: 'warning',
            });
            this.shenlist();
          });
        })
        // eslint-disable-next-line no-unexpected-multiline
        [
          'catch'
        ](() => {
          this.$message({
            type: 'info',
            message: '已取消',
          });
        });
    },
    shenlist: function() {
      let boss = {
        bossId: store.getUser().BSid,
      };
      console.log('boss.bossId', boss.bossId);
      cang.shenlist(boss, (res) => {
        console.log('1', res);
        this.shendata = res.data.data;
        this.loading = false;
      });
    },
    toggleSelection() {
      this.$refs.multipleTable.clearSelection();
      this.amount = '0';
    },
    handleSelectionChange(val) {
      console.log('选中', val);
      this.amount = val.length;
      this.Batch = val;
    },
    setProducts() {
      this.loading = true;
      serviceProduct.getProductListBoss((res) => {
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
      console.log(row);
      this.$router.push({
        path:
          '/hf-product/detail?productId=' +
          row.id +
          '&stoneId=' +
          row.stoneId +
          '&stoneName=' +
          row.stoneName,
      });
    },
    deleteProduct(row) {
      this.$confirm('确认删除吗？', '提示', {}).then(async () => {
        serviceProduct.deleteProduct(row.id, (res) => {
          this.setProducts();
        });
      });
    },
    BatchRemove() {
      let Delete = [];
      for (let i = 0; i < this.Batch.length; i++) {
        Delete.push(this.Batch[i].id);
      }
      console.log(Delete);
      this.$confirm('确认删除吗？', '提示', {}).then(async () => {
        serviceProduct.deleteSelectProduct(Delete, (res) => {
          this.setProducts();
        });
      });
    },
    handleCurrentChange(val) {
      this.currpage = val;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    childClick(tableData) {
      if (tableData === -1) {
        this.setProducts();
      } else {
        this.tableData = tableData;
      }
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
.search-card {
  // margin:0 5px 5px 5px;
  margin-bottom: 25px;
}
.el-tabs__nav-wrap {
  margin-bottom: -6px;
}
</style>
