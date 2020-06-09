/* eslint-disable no-redeclare */
<template>
  <div style="background:#F0F1F6;padding-top:1px;">
    <el-card class="search-card" style="margin-top:23px;">
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
        <el-form-item label="入库/出库" prop="type1">
          <el-select v-model="inquire.type1" placeholder="请输入" >
            <el-option
              :label="item.typename"
              v-for="item  in type"
              :key="item.typename"
              :value="item.typename"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="仓库" prop="valueset2">
          <el-select v-model="inquire.valueset2" placeholder="请选择" >
            <el-option
             :key="item.hfName"
              v-for="item in  canglist"
              :label="item.hfName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item label="时间" prop="startTime" label-width="79px">
              <el-date-picker
                @change="uptime1"
                v-model="inquire.startTime"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00']"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item style="float: right;">
              <el-button type="purple" @click="sou" >查询</el-button>
              <el-button   @click="resetForm('ruleForms')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <!-- 搜索渲染区 -->
      <!-- 内容区 -->
      <div class="text item">
        <el-table
          style="width: 100%"
          :data="tableData"
          v-loading="loading"
          stripe
          highlight-current-row
          ref="multipleTable"
          @selection-change="handleSelectionChange"
        >
          <el-table-column align="center" label="序号" type="index" :index="indexMethod"></el-table-column>
          <el-table-column align="center" prop="goodName" label="物品名称"></el-table-column>
          <el-table-column align="center" prop="goodDesc" label="物品描述" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="quantity" label="入库/出库数量">
            <template slot-scope="scope">
              <span>{{scope.row.type==1?'+':'-'}}{{scope.row.quantity}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="category" label="物品类目"></el-table-column>
          <el-table-column align="center" prop="warehouseName" label="仓库"></el-table-column>
          <el-table-column align="center" prop="typeName" label="类型"></el-table-column>
          <el-table-column align="center" prop="time" label="创建时间" width="150"></el-table-column>
          <el-table-column align="center" prop="name" label="操作人" width="150"></el-table-column>
          <!-- <el-table-column align="center" label="状态" width="150">
            <template slot-scope="scope">
              <span>{{scope.row.type==1?'入库':'出库'}}</span>
            </template>
          </el-table-column> -->
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
      type: [
        {
          id: 1,
          typename: '入库',
        }, {
          id: 0,
          typename: '出库',
        },
      ],
      inquire1: {
        valueset2: '',
        startTime: '',
        type1: '',
        goodName: '',
        type: '',
        wareHouseId: '',
        strat: '',
        end: '',
      },
      inquire: {
        valueset2: '',
        startTime: '',
        type1: '',
        goodName: '',
        type: '',
        wareHouseId: '',
        strat: '',
        end: '',
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
      this.inquire = this.inquire1;
      this.$refs[ruleForms].resetFields();
      this.setProducts();
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
      this.inquire.strat = this.formatDate(val[0]);
      this.inquire.end = this.formatDate(val[1]);
    },
    sou: function() {
      if (this.inquire.type1 !== '') {
        for (var i = 0; i < this.type.length; i++) {
          if (this.type[i].typename === this.inquire.type1) {
            console.log(this.canglist[i].id);
            this.inquire.type = this.type[i].id;
          }
        }
      }
      if (this.inquire.valueset2 !== '') {
        // eslint-disable-next-line no-redeclare
        for (var i = 0;i < this.canglist.length; i++) {
          if (this.canglist[i].hfName === this.inquire.valueset2) {
            console.log(this.canglist[i].id);
            this.inquire.wareHouseId = this.canglist[i].id;
          }
        }
      }
      cang.findRecord(this.inquire, (res) => {
        console.log(res);
        this.tableData = res.data.data;
        console.log(this.tableData);

      });
    },
    submit1: function(ruleForm1) {
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
    checkcang: function() {
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
      cang.record((res) => {
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
  margin: 0 5px 5px 5px;
  margin-bottom: 25px;
}
.el-tabs__nav-wrap {
  margin-bottom: -6px;
}
.el-main {
  background: #f0f1f6;
}
.el-header {
  height: 31px;
}
</style>
