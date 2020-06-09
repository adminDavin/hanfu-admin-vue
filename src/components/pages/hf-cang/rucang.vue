/* eslint-disable vue/no-parsing-error */
<template>
  <div style="background:#F0F1F6;padding-top:1px;">
        <el-card class="search-card"  style="margin-top:23px;">
          <el-form
        style="padding-top:20px"
        :model="inquire"
        label-width="100px"
        :inline="true"
        class="demo-form-inline"
        ref="ruleForms"
      >
        <el-form-item label="物品名称" prop="goodName">
          <el-input v-model="inquire.goodName" placeholder="请输入物品名称"></el-input>
        </el-form-item>
         <el-form-item label="类目名称" prop="categoryName">
          <el-input v-model="inquire.categoryName" placeholder="请输入物品名称"></el-input>
        </el-form-item>
        <!-- <el-row :gutter="20">
          <el-col :span="16"> -->

          <!-- </el-col>
          <el-col :span="4"> -->
            <el-form-item style="float: right;">
              <el-button type="purple" @click="sou" >查询</el-button>
              <el-button   @click="resetForm('ruleForms')">重置</el-button>
            </el-form-item>
          <!-- </el-col> -->
        <!-- </el-row> -->
      </el-form>
        </el-card>

        <el-card class="box-card">
          <!-- 搜索渲染区 -->
          <div class="filter-container">
            <div class="letf-items" style="float: left;font-size: 14px;">
              已选{{amount}}项商品
              <el-button class="ff3" style="padding: 0 10px;" type="text" @click="toggleSelection()">清空</el-button>
            </div>
            <div class="right-items" style="float: right;padding: 10px 0;">

              <!-- <el-button @click="BatchRemove()">批量操作</el-button> -->
            </div>
          </div>
          <!-- 内容区 -->
          <div class="text item">
            <el-table
              :data="tableData"
              v-loading="loading"
              stripe
              style="width: 100%"
              highlight-current-row
              ref="multipleTable"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="50"></el-table-column>
              <el-table-column align="center" label="序号" type="index" :index="indexMethod"></el-table-column>
              <el-table-column align="center" prop="goodName" label="物品名称"></el-table-column>
              <el-table-column align="center" prop="goodDesc" label="物品描述" show-overflow-tooltip></el-table-column>
              <el-table-column align="center" prop="quantity" label="入库数量"></el-table-column>
              <el-table-column align="center" prop="category" label="物品类目"></el-table-column>
              <el-table-column align="center"  label="类型">
                <template slot-scope="scope">
                  <span>{{scope.row.typeName}}</span><span style="color:red;margin-left:2px;">{{scope.row.type=='1'?'*':''}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="time" label="创建时间" width="150"></el-table-column>
              <el-table-column align="center" prop="name" label="操作人" width="150"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button class="a6a" @click="rucang(scope.row)" type="text" size="small">入库</el-button>
                  <el-button class="a6a" @click="editProduct(scope.row)" type="text" size="small">拒绝入库</el-button>
                  <!-- <el-button class="ff3" @click="deleteProduct(scope.row)" type="text" size="small">删除</el-button> -->
                </template>
              </el-table-column>
            </el-table>
            <div class="block">
              <el-pagination
                style="float:right;"
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :total="totalSize"
              ></el-pagination>
            </div>
          </div>
        </el-card>
 <el-dialog title="物品入库" width="30%" style="height:400px;"  :visible.sync="dialogFormVisible1">
  <el-form :model="form1"
         :rules="rules"
        ref="ruleForm1"
          label-width="100px"
        class="demo-ruleForm">

    <el-form-item label="入库至" prop="warehouseId">
      <el-select @change="selectmethod" v-model="form1.warehouseId" placeholder="请选择仓库">
        <el-option :key="item.hfName" v-for="item in  canglist" :label="item.hfName" :value="item.hfName"></el-option>
        <!-- <el-option label="区域二" value="beijing"></el-option> -->
      </el-select>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer" style="text-align:center;">
    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="submit1('ruleForm1')">保存</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
import serviceProduct from '@/service/product.js';
import category from '../hf-product/category';
import Search from '../hf-product/search';
// eslint-disable-next-line no-unused-vars
import cang from '@/service/cang.js';
import constants from '@/store/constants.js';
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Search,
    // eslint-disable-next-line vue/no-unused-components
    category,
  },
  data() {
    return {
      inquire: {
        categoryName: '',
        goodName: '',
        dataType: 1,
      },
      content: {},
      boss: {
        bossId: 1,
      },
      dialogFormVisible1: false,
      rules: {
        warehouseId: [
          {
            required: true,
            message: '请选择仓库',
            trigger: 'blur',
          },
        ],
      },
      form1: {
        warehouseId: '',
      },
      form: {
        warehouseId: '',
      },
      amount: '0',
      indexMethod: 1,
      activeName: 'goods',
      loading: false,
      totalSize: 0,
      currpage: 1,
      tableData: [],
      Batch: [],
      canglist: [],
    };
  },
  created() {
    this.setProducts();
  },
  methods: {
    resetForm(ruleForms) {
      this.$refs[ruleForms].resetFields();
      this.setProducts();
    },
    sou: function() {

      cang.findru(this.inquire, (res) => {
        console.log(res);
        this.tableData = res.data.data;
        console.log(this.tableData);

      });
    },
    submit1: function (ruleForm1) {
      this.form.userId = this.content.id;
      console.log(this.content.id);
      this.$refs[ruleForm1].validate((valid) => {
        if (valid) {

          console.log(this.form);
          cang.rucang(this.form, (res) => {
            if (res.data.status === constants.SUCCESS_CODE) {
              this.$message({
                message: '入库成功',
                type: 'success',
              });
              this.dialogFormVisible1 = false;
              this.setProducts();
            } else {
              this.$message({
                message: '入库失败',
                type: 'error',
              });
            }
          });
        }
      });
    },
    selectmethod: function(tab) {
      console.log(tab);
      for (var i = 0; i < this.canglist.length; i++) {
        if (this.canglist[i].hfName === tab) {
          console.log(this.canglist[i].id);
          this.form.warehouseId = this.canglist[i].id;

        }
      }
      console.log(this.form);
    },
    checkcang: function () {
      console.log(this.boss);
      cang.checkcang(this.boss, (res) => {
        console.log(res);
        this.canglist = res.data.data;
        console.log(this.canglist);
      });
    },
    rucang: function(row) {
      this.form.productId = row.productId;
      this.form.goodId = row.goodId;
      this.form.quantity = row.quantity;
      this.form.typeWho = row.type;
      this.form.bossId = row.bossId;
      this.form.stoneId = row.stoneId;
      this.form.id = row.id;
      this.dialogFormVisible1 = true;
    //   cang.getProductListBoss((res) => {
    //   });
    },
    toggleSelection() {
      this.amount = '0';
      this.$refs.multipleTable.clearSelection();
    },
    handleSelectionChange(val) {
      console.log('选中', val);
      this.amount = val.length;
      this.Batch = val;
    },
    setProducts() {
      this.loading = true;
      cang.findkulist((res) => {
        console.log(res);
        this.tableData = res.data.data;
        console.log(this.tableData);
        this.loading = false;
      });
    },

    handleCreate(e) {
      this.$router.push({
        path: '/hf-product/detail',
      });
    },
    editProduct(row) {
    //   console.log(row);
    //   this.$router.push({
    //     path:
    //       '/hf-product/detail?productId=' +
    //       row.id +
    //       '&stoneId=' +
    //       row.stoneId +
    //       '&stoneName=' +
    //       row.stoneName,
    //   });
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
      this.tableData = tableData;
    },
  },
  mounted() {
    this.checkcang();
    var content = window.sessionStorage.getItem('userInfor');
    this.content = JSON.parse(content);
    console.log(this.content);
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
  margin:0 5px 5px 5px;
  margin-bottom: 25px;
}
.el-tabs__nav-wrap {
  margin-bottom: -6px;
}
.el-main{
    background: #F0F1F6;
}
.el-header{
  height: 31px;
}
</style>
