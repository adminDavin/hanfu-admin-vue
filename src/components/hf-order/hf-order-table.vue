<template>
  <div>

    <div class="handle-box " style="background: #fff;width: 94%;height: 70px;padding:30px 3%  10px 3%;">
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;font-size: 15px;">
        <el-form :inline="true">
          <el-form-item style="margin-bottom:50px;" label="">
            <div style="font-size: 15px;">订单号:</div>
          </el-form-item>

          <el-form-item style="margin-bottom:50px;" label="">
            <el-input v-model="souhfName" auto-complete="off" placeholder="输入订单号"></el-input>
          </el-form-item>
          <el-form-item style="margin-bottom:50px;margin-left: 5px;" label="">
          <!--  <el-form-item style="margin-bottom:50px;" label="">
              <div style="font-size: 15px;">商品分类：</div>
            </el-form-item>
            <el-select v-model="value1" placeholder="请选择" @change="checkMulist">
              <el-option v-for="(item, index) in leiMu" :key="index" :label="item.hfName" :value="item.hfName">
              </el-option>
            </el-select> -->
          </el-form-item>
          <el-button type="primary" @click="sou" :loading="addLoading">搜索</el-button>
         <!-- <el-button type="danger" style="border-radius:3px;float:right;margin-right: 4%;font-size: 15px;" icon="el-icon-delete"
            @click="deletegood" size="mini" round>删除</el-button>
          <el-button type="success" style="border-radius:3px;float:right;" icon="el-icon-circle-plus-outline" @click="handleAdd"
            size="mini" round>新增</el-button> -->
        </el-form>
      </el-col>
    </div>


    <div style="padding-top: 10px;background: #fff;margin-top: 10px;">
      <el-table :data="tableData" size="mini" highlight-current-row border class="el-tb-edit " style="font-size: 15px"
        ref="multipleTable" tooltip-effect="dark">

        <el-table-column type="index" label="序号" width="70px" align="center">
        </el-table-column>
        <el-table-column prop="ordersId" label="订单号" align="center" sortable>
        </el-table-column>
        <el-table-column prop="logisticsCompany" label="物流公司" align="center" sortable>
        </el-table-column>
        <el-table-column prop="logisticsOrderName" label="物流订单名称" align="center" sortable>
        </el-table-column>

        <!-- <el-table-column prop="productDesc" label="商品描述" align="center">
        </el-table-column> -->
        <el-table-column prop="logisticsOrdersId" label="物流单号" align="center" sortable>
        </el-table-column>
        <el-table-column prop="address" label="收获地址" align="center" sortable>
        </el-table-column>
        <el-table-column prop="amount" label="支付金额" align="center" sortable>
        </el-table-column>
        <el-table-column prop="hfDesc" label="订单描述" align="center" sortable>
        </el-table-column>
        <el-table-column prop="hfName" label="商品名称" align="center" sortable>
        </el-table-column>

        <el-table-column prop="purchaseQuantity" label="购买数量" align="center" sortable>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center" sortable>
        </el-table-column>

        <el-table-column prop="purchasePrice" label="商品单价" align="center" sortable>
        </el-table-column>
        <el-table-column prop="orderDetailStatus" label="订单状态" align="center" sortable>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="260" align="center" >
          <template slot-scope="scope">
            <!-- <el-button type="primary" plain size="small" @click="addgui(scope.row)" style="margin-bottom: 10px;">查看规格</el-button> -->
             <!-- <el-button type="primary" plain size="small" @click="biangui(scope.row)" style="margin-bottom: 10px;">修改规格</el-button> -->
            <el-button  type="primary"   size="mini" icon="el-icon-edit"   @click="handleAdd()">修改订单状态</el-button>
            <!-- <el-button type="danger" icon="el-icon-delete" @click="deletesingle(scope.row)" size="mini">删除</el-button> -->
          </template>
        </el-table-column>

      </el-table>
      <div style="float:right;width:100%;background: #fff;">
        <el-pagination style="padding-top:30px; background: #fff;height: 40px;float:right;" @size-change="3"
          @current-change="3" :current-page="2" :page-size="3" layout="total, prev, pager, next" :total="tableData.length">
        </el-pagination>
      </div>
    </div>

    <el-dialog title="修改订单状态" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form :inline="true" :model="addForm" label-width="80px" ref="addForm">
    <!--    <el-form-item label="商品名称" prop="hfName">
          <el-input v-model="addForm.hfName" auto-complete="off"></el-input>
        </el-form-item>
        <br> -->
        <el-form-item label="订单状态" prop="value">
          <el-select v-model="addForm.value" placeholder="请选择" @change="changeQuentitySubject(index)">
            <el-option v-for="(item,index) in leiMu" :key="index" :label="item.hfName" :value="item.hfName">
            </el-option>
          </el-select>
        </el-form-item>
      <!--  <br>
        <el-form-item label="商品描述" prop="productDesc">
          <el-input v-model="addForm.productDesc" auto-complete="off" type="textarea" style="width:550px;" resize="none"></el-input>
        </el-form-item>
        <br> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import api from '@/apis/hf-api.js';
  export default {
    name: 'productTable',
    data() {
      return {
        addForm: {
          bossId: '1', //商家id
          brandId: '1', //品牌id
          categoryId: '', //类目
          hfName: '', //商品名称
          lastModifier: '1', //最后修改者
          productDesc: '', //产品描述
        },
        index: 0,
        addFormVisible: false,
        leiMu: '',
        value1: '',
        souhfName: '',
        tableData: [],
        leiMuId: '',
        selectList: [],
        addLoading: false
      }
    },
    methods: {
      // 编辑商品
      biangui: function(row) {
        var arr = JSON.stringify(row);
        this.$router.push({
          path: '/detail',
          query: {
            row: arr
          }
        })
      },
      deletesingle: function(row) {
        this.$confirm("确认提交吗？", "提示", {}).then(() => {
          var _this = this;
          api.singledeleteProduct(row.id).then(response => {
            console.log(response);
            if (response.data.status === 200) {
              _this.listProduct();
            }
          });
        });
      },
      selectChange: function(val) {
        console.log(val)
        this.selectList = val;
      },
      //删除商品
      deletegood: function(row) {
        let delarr = [];
        const length = this.selectList.length;
        for (let i = 0; i < length; i++) {

          delarr.push(this.selectList[i].id)

        }

        console.log(delarr);
        var _this = this;
        this.$confirm("确认提交吗？", "提示", {}).then(() => {
          api.deleteProduct(delarr.toString()).then(response => {
            console.log(response);
            if (response.data.status === 200) {
              _this.listProduct();
            }
          });

        })

      },
      // 添加商品
      addSubmit: function() {
        // console.log(this.value)
        var _this = this;

        this.$refs.addForm.validate(valid => {
          if (valid) {
            this.$confirm("确认提交吗？", "提示", {}).then(() => {
              // this.addLoading = true;
              // ============
              console.log(_this.addForm);

              let param = Object.assign({}, _this.addForm);
              api.addProduct(param)
                .then(res => {
                  console.log('ssss', res);
                  this.addLoading = false;
                  _this.listProduct();
                  this.$message({
                    message: "提交成功",
                    type: "success"
                  });
                  this.addForm.hfName = '';
                  this.addForm.productDesc = '';
                  this.addFormVisible = false;
                });
            });
          }
        });
      },
      changeQuentitySubject: function() {
        let obj = {};
        obj = this.leiMu.find((item) => { //这里的selectList就是上面遍历的数据源
          //筛选出匹配数据
          if (item.hfName == this.addForm.value) {
            return item
          }
        });
        this.addForm.categoryId = obj.id;


      },
      sou: function() {
        var _this = this;
        console.log(_this.souhfName)
        api.search(1, _this.leiMuId, _this.souhfName).then(response => {
          console.log(response);
          if (response.data.status === 200) {
            _this.tableData = response.data.data;
            for (var i = 0; i < this.tableData.length; i++) {
              this.tableData[i].createTime = this.tableData[i].createTime.split('T');
              this.tableData[i].createTime = this.tableData[i].createTime[0] + '  ' + this.tableData[i].createTime[
                1]
            }
          }
        });
      },
      // 查询类目
      checkType: function(val) {
        var _this = this;
        api.category().then(response => {
          console.log(response);
          if (response.status == 200) {
            if (response.data.status === 200) {

              _this.leiMu = response.data.data;
            }
          }

        });

      },
      // 通过类目查询商品列表
      checkMulist: function() {
        let obj = {};
        obj = this.leiMu.find((item) => {
          //这里的selectList就是上面遍历的数据源
          //筛选出匹配数据
          if (item.hfName == this.value1) {
            return item
          }
        });

        this.leiMuId = obj.id;
        console.log(this.leiMuId)

      },
      conver: function(s) {
        return s < 10 ? '0' + s : s;
      },
      //显示新增界面
      handleAdd: function() {
        this.addFormVisible = true;
      },
      TellMeId(num) {
        console.log(num)
      },
      // 获取商品列表
      listProduct() {
        api.checkOrderList(1).then(response => {
          console.log(response);
          if (response.status == 200) {
            if (response.data.status === 200) {
              this.tableData = response.data.data;
              for (var i = 0; i < this.tableData.length; i++) {
                let date = new Date(this.tableData[i].createTime)
                let Str = date.getFullYear() + '-' +
                  (date.getMonth() + 1) + '-' +
                  date.getDate() + ' ' +
                  (date.getHours() + 8) % 24 + ':' +
                  date.getMinutes() + ':' +
                  date.getSeconds()
                this.tableData[i].createTime = Str;
                // var date = new Date(this.tableData[i].createTime);
                // Calendar cal = Calendar.getInstance();
                // var localeString = date.toLocaleString();
                // console.log(localeString);
                // this.tableData[i].createTime=this.tableData[i].createTime.split('T');
                // this.tableData[i].createTime=this.tableData[i].createTime[0]+''+this.tableData[i].createTime[1];
              }
            }
          }

        });
      },

      init() {
        this.listProduct();
        // this.checkType();
      }
    },
    mounted() {
      this.init();
      var myDate = new Date();

      //获取当前年
      var year = myDate.getFullYear();

      //获取当前月
      var month = myDate.getMonth() + 1;

      //获取当前日
      var date = myDate.getDate();
      var h = myDate.getHours(); //获取当前小时数(0-23)
      var m = myDate.getMinutes(); //获取当前分钟数(0-59)
      var s = myDate.getSeconds();

      //获取当前时间

      var now = year + '-' + this.conver(month) + "-" + this.conver(date) + " " + this.conver(h) + ':' + this.conver(m) +
        ":" + this.conver(s);
      console.log(now)
      let GMT = new Date(now);
      console.log(GMT)

    }
  }
</script>
