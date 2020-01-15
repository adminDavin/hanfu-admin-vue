<template>

  <div>
    <el-form style="background: #fff;padding: 40px 0 20px 20px; " :inline="true" title="编辑商品" :model="bianrow"
      label-width="80px" :rules="bianRules" ref="bianForm">
      <div style="font-size: 17px;margin-bottom: 30px;">
        商品编辑:
      </div>
      <el-form-item label="商品名称" prop="productName">
        <el-input v-model="bianrow.productName" auto-complete="off" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="productDesc">
        <el-input v-model="bianrow.productDesc" auto-complete="off" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
         <el-input v-model="value4" auto-complete="off" :disabled="true"></el-input>
        <!-- <el-select v-model="value4" placeholder="请选择" @change="changeQuentitySubject1(index)">
          <el-option v-for="(item,index) in leiMu" :key="index" :label="hfName" :value="item.hfName">
          </el-option>
        </el-select> -->
      </el-form-item>
      <!-- <el-button type="primary" @click="bianjiSubmit" :loading="addLoading">提交</el-button> -->
    </el-form>
    <div style="background: #fff;margin-top: 20px;padding: 40px 0 20px 20px;">
      <el-form :inline="true" :model="guiform" label-width="80px" :rules="guigerulue" ref="guiform1">
        <div style="font-size: 17px;margin-bottom: 30px;">
          添加规格:
        </div>


        <el-form-item label="规格名称:" prop="hfName" label-width="100px">
          <el-input v-model="guiform.hfName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="规格类型:" prop="specType" label-width="100px">
          <el-input auto-complete="off" v-model="guiform.specType"></el-input>
        </el-form-item>
        <el-form-item label="规格值:" prop="specValue" label-width="100px">
          <el-input auto-complete="off" v-model="guiform.specValue "></el-input>
        </el-form-item>
        <el-form-item label="规格单位:" prop="specUnit" label-width="100px">
          <el-input auto-complete="off" v-model="guiform.specUnit"></el-input>
        </el-form-item>
        <el-button type="primary" @click="add" :loading="editLoading">添加</el-button>
      </el-form>
      <div style="font-size: 17px;margin-bottom: 30px;margin-top: 20px;">
        规格:
      </div>
      <el-table :data="guigelist" size="mini" highlight-current-row border class="el-tb-edit mgt20" ref="multipleTable"
        style="margin-bottom: 40px;" tooltip-effect="dark" v-loading="listLoading" @selection-change="selectChange">
        <el-table-column type="index" label="序号" header-align="center" align="center">
        </el-table-column>
        <el-table-column label="规格名称" align="center" prop="hfName">
        </el-table-column>
        <el-table-column prop="specType" label="规格类型" align="center">
        </el-table-column>

        <el-table-column prop="specValue" label="规格值" align="center">
        </el-table-column>
        <el-table-column prop="specUnit" label="规格单位" align="center">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="260">
          <template slot-scope="scope">
            <!-- <el-button type="primary" plain size="small" @click="addgui(scope.row)" style="margin-bottom: 10px;">查看规格</el-button> -->
            <el-button type="primary" plain size="small" @click="biangui(scope.row)" style="margin-bottom: 10px;">编辑</el-button>
            <el-button type="danger" plain size="small" @click="deletegui(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>
<style lang="scss">
  // 设置输入框的宽度
</style>
<script>
  export default {
    name: "searchinput",
    data() {
      return {
        value4: '',
        bianrow: '',
        leimu: {
          category: '',
          parentCategoryId: "-1",
          levelId: '0'
        },
        mu: false,
        leiMuId: '',
        value1: '',
        guigelist: '',
        leiId: '',
        leiMu: '',
        editFormVisible3: false,
        editFormVisible2: false,
        editFormVisible1: false,
        guiform: {
          productId: '',
          hfName: '',
          specType: '',
          specUnit: '',
          specValue: '',
          categorySpecId: 1
        },
        dialogImageUrl: '',
        dialogVisible: false,
        //搜索区域参数
        filters: {
          userName: "",
          userNo: "",
          job: "",
          loginName: "",
          mobile: "",
          sex: "",
          //性别下拉框
          sexOptions: [{
              value: "1",
              label: "审核通过"
            },
            {
              value: "0",
              label: "未审核"
            }
          ],
          //岗位列表搜索参数
          positionName: "",
          positionCode: "",
        },
        //table返回的数据
        tableData: [],
        //列表Loading加载
        listLoading: false,
        //批量选中data
        selectList: [],
        //分页
        count: 0,
        currentPage: 1,
        pageSize: 10,
        //角色信息
        roleData: [],
        //新增界面是否显示
        addFormVisible: false,
        //添加按钮Loading加载
        addLoading: false,
        leimuForm: {
          category: [{
            required: true,
            message: "请输入类目名称",
            trigger: "blur"
          }]


        },
        guigerulue: {
          hfName: [{
            required: true,
            message: "请输入规格名称",
            trigger: "blur"
          }],
          specType: [{
            required: true,
            message: "请输入规格类型",
            trigger: "blur"
          }],
          specUnit: [{
            required: true,
            message: "请输入规格单位",
            trigger: "blur"
          }],
          specValue: [{
            required: true,
            message: "请输入规格值",
            trigger: "blur"
          }]

        },
        bianRules: {
          productName: [{
            required: true,
            message: "请输入商品名称",
            trigger: "blur"
          }],
          productDesc: [{
            required: true,
            message: "请输入商品描述",
            trigger: "blur"
          }],
          value4: [{
            required: true,
            message: "请选择商品分类",
            trigger: "blur"
          }]
        },
        //输入框验证
        addFormRules: {
          hfName: [{
            required: true,
            message: "请输入商品名称",
            trigger: "blur"
          }],
          productDesc: [{
            required: true,
            message: "请输入商品描述",
            trigger: "blur"
          }],
          value: [{
            required: true,
            message: "请选择商品分类",
            trigger: "blur"
          }]
        },
        //新增界面数据
        addForm: {
          bossId: '1', //商家id
          brandId: '1', //品牌id
          categoryId: '', //类目
          hfName: '', //商品名称
          lastModifier: '1', //最后修改者
          productDesc: '', //产品描述

        },


        value: '',
        //查看详细
        selectForm: {
          userName: "",
          loginName: "",
          password: "",
          orgname: "",
          positionname: "",
          mobile: "",
          email: "",
          sex: "",
          birthday: "",
          nationality: "",
          education: "",
          job: "",
          homeAddress: "",
          homeZipcode: "",
          homeTel: "",
          officeTel: "",
          officeAddress: ""
        },
        //详细界面是否显示
        selectFormVisible: false,
        //性别下拉框
        sexOptions: [{
            value: "1",
            label: "审核通过"
          },
          {
            value: "0",
            label: "未审核"
          }
        ],

        //编辑界面是否显示
        editFormVisible: false,
        //是否修改密码复选框
        checked: false,
        //编辑按钮Loading加载
        editLoading: false,
        //编辑界面数据
        editForm: {
          id: "",
          userName: "",
          loginName: "",
          password: "",
          orgid: "",
          orgname: "选择主机构",
          positionid: "",
          positionname: "选择岗位",
          mobile: "",
          email: "",
          sex: "",
          birthday: "",
          nationality: "",
          education: "",
          job: "",
          homeAddress: "",
          homeZipcode: "",
          homeTel: "",
          officeTel: "",
          officeAddress: "",
          cardNo: "",
          politicalStatus: "",
          userRelation: "",
          probationPeriod: "",
          entryDate: "",
          quitDate: "",
          workDate: "",
          annualLeave: "",
          njqsrq: "",
          isLocked: ""
        },


        //组织结构界面是否显示
        orgFormVisible: false,
        //结构树Loading
        treeLoading: false,
        //组织结构数据
        treeData: [],
        //属性名称转换
        defaultProps: {
          children: "children",
          label: "name"
        },
        //岗位table返回的数据
        positionTableData: [],
        //岗位列表Loading加载
        positionListLoading: false,
        //是否显示岗位列表
        positionFormVisible: false,
        //岗位table分页
        positionCount: 0,
        positionCurrentPage: 1,
        positionPageSize: 10,
        //用户信息
        infoForm: [],
        //角色Loading加载
        roleListLoading: false,
        //角色信息
        roleData: [],
        //是否显示角色信息
        roleFormVisible: false,
        file: ''
      }
    },
    methods: {
      deletegui: function(row) {
        var _this = this;
        this.guiform.productId = this.bianrow.id;


        this.$confirm("确认删除吗？", "提示", {}).then(() => {
          this.addLoading = true;

          this.$ajax({
            method: "get",
            url: "/api/product/deleteSpecifies",
            params: {
              productSpecId: row.id
            }
          }).then(res => {
            this.addLoading = false;
            console.log('添加规格', res);
            this.checkguige();
            this.$message({
              message: "提交成功",
              type: "success"
            });


          });
        });


      },
      changeQuentitySubject1: function() {
        let obj = {};
        obj = this.leiMu.find((item) => { //这里的selectList就是上面遍历的数据源
          //筛选出匹配数据
          if (item.hfName == this.value4) {
            return item
          }
        });

        this.bianrow.categoryId = obj.id;
        console.log(this.bianrow.categoryId);

      },
      checkguige: function() {
        var _this = this;
        _this.$ajax({
          method: "get",
          url: "/api/product/specifies",
          params: {
            productId: this.bianrow.id
          }
        }).then(res => {
          _this.guigelist = res.data.data;
          console.log('查询规格', res);
        });
      },
      add: function() {
        var _this = this;
        this.guiform.productId = this.bianrow.id;
        this.$refs.guiform1.validate(valid => {
          if (valid) {
            this.$confirm("确认提交吗？", "提示", {}).then(() => {
              this.addLoading = true;
              let param = Object.assign({}, this.guiform);
              console.log(param);
              this.$ajax({
                method: "post",
                url: "/api/product/addSpecify",
                params: param
              }).then(res => {

                this.addLoading = false;
                console.log('添加规格', res);
                this.checkguige();
                this.$message({
                  message: "提交成功",
                  type: "success"
                });

                this.addFormVisible1 = false;
                this.$refs["guiform1"].resetFields();

                // this.getResult(1);
              });
            });
          }
        });
      },

      bianjiSubmit: function() {
        var _this = this;
        _this.$refs.bianForm.validate(valid => {
          if (valid) {
            _this.$confirm("确认提交吗？", "提示", {}).then(() => {
              _this.addLoading = true;
              let param = Object.assign({}, this.bianrow);
              console.log(param);
              _this.$ajax({
                method: "post",
                url: "/api/product/updateProductId",
                params: param
              }).then(res => {
                // _this.editFormVisible3 = false;
                _this.addLoading = false;

                _this.$message({
                  message: "提交成功",
                  type: "success"
                });
                this.$router.push({
                  path: 'SysUser'
                })
              }).catch(res => {
                _this.addLoading = false;
                _this.$message({
                  message: "提交失败",

                });
              });
            });
          }
        });
      },
      // 查询类目
      checkType: function(val) {
        var _this = this;
        this.$ajax({
          method: "get",
          url: "/api/product/category",

        }).then(
          function(resultData) {
            console.log('查询类目', resultData);
            _this.leiMu = resultData.data.data;
            let obj = {};
            obj = _this.leiMu.find((item) => {
              if (item.id == _this.bianrow.categoryId) {
                return item
              }
            });
            console.log(obj)
            _this.value4 = obj.hfName;
          }
        );
      }
    },
    mounted() {
      var list = decodeURIComponent(this.$route.query.row);
      this.bianrow = JSON.parse(list);
      // this.bianrow=this.$route.query.row;
      console.log(this.bianrow)
      this.checkType();
      this.checkguige();

    }

  };
</script>
