<template>
  <div class="table">
    <!-- 页面标题end-->
    <div class="container">
      <!-- 页面内容区begin -->
      <div id="app">

        <div style=" width:50%;float:left;">

          <div class="clearfix">
            <el-col :span="1" class="grid">
              <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleAdd" size="mini" round>新增仓库</el-button>
            </el-col>
          </div>

          <!--表格数据及操作-->
          <el-table :data="tableData" class="mgt20" border style="width: 100%" stripe ref="multipleTable"
            tooltip-effect="dark">

            <!--索引-->
            <el-table-column type="index" :index="indexMethod" label="序号" width="50px" align="center">
            </el-table-column>
            <el-table-column prop="hfName" label="仓库名称" sortable align="center">
            </el-table-column>
            <el-table-column prop="hfRegion" label="仓库位置" align="center">
            </el-table-column>


            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" size="mini" @click="enditRole(scope.row)">编辑</el-button>
                 <el-button type="danger" icon="el-icon-delete" @click="delRole(scope.row)" size="mini">删除</el-button>
              </template>
            </el-table-column>
            
          </el-table>
          <br>
          <br>
          <!--分页条total, sizes, prev, pager, next, jumper-->

          <el-pagination @size-change="3" @current-change="3" :current-page="2" :page-size="3" layout="total, prev, pager, next"
            :total="tableData.length">
          </el-pagination>
          <!--新增界面-->
          <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
            <el-form :model="addForm" :rules="addFormRules" ref="addForm" label-width="166px">
              <el-form-item label="仓库名称" prop="hfName">
                <el-input v-model="addForm.hfName" auto-complete="off" style="width:400px;"></el-input>
              </el-form-item>
              <el-form-item label="仓库位置" prop="hfRegion">
                <el-input v-model="addForm.hfRegion" auto-complete="off" style="width:400px;"></el-input>
              </el-form-item>


              </el-form-item>

            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="addFormVisible = false">取消</el-button>
              <el-button type="primary" @click="addSubmit" :loading="addLoading">提交</el-button>
            </div>
          </el-dialog>
          <!--编辑界面-->
          <el-dialog title="编辑" :visible.sync="addFormVisible1" :close-on-click-modal="false">
            <el-form :model="editRow" :rules="addFormRules" ref="addForm" label-width="166px">
              <el-form-item label="仓库名称" prop="hfName">
                <el-input v-model="editRow.hfName" auto-complete="off" style="width:400px;"></el-input>
              </el-form-item>
              <el-form-item label="角色位置" prop="hfRegion">
                <el-input v-model="editRow.hfRegion" auto-complete="off" style="width:400px;"></el-input>
              </el-form-item>


              </el-form-item>

            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="addFormVisible = false">取消</el-button>
              <el-button type="primary" @click="editSubmit" :loading="addLoading">提交</el-button>
            </div>
          </el-dialog>
        </div>
        <div style=" width:45%;float:right;">

          <!--新增界面-->
          <el-dialog title="新增用户" :visible.sync="addRoleUserVisible" :close-on-click-modal="false">
            <el-row>
              <el-col :span="200" class="grid">
                <el-input v-model="s_username" label="用户名称" placeholder="请输入内容" style="width:200px; heght:30px;" size="mini"></el-input>
              </el-col>
              <el-col :span="1" class="grid">
                <el-button type="success" @click="addRoleUser(1)" icon="el-icon-search" size="mini">搜索</el-button>
              </el-col>
            </el-row>
            <br>
            <el-table :data="userData" @selection-change="userSelectionChange" border style="width: 100%" stripe ref="multipleTable"
              tooltip-effect="dark">
              <!--勾选框-->
              <el-table-column type="selection" width="55">
              </el-table-column>
              <!--索引-->
              <el-table-column type="index" :index="indexMethod">
              </el-table-column>
              <el-table-column prop="userName" label="用户名称" width="180">
              </el-table-column>
              <el-table-column prop="id" label="用户编号">
              </el-table-column>

            </el-table>
            <el-pagination @current-change="addRoleUser" :current-page="usercurrentPage" :page-size="pageSize" layout="total, prev, pager, next"
              :total="usercount">
            </el-pagination>
            <br>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="saveUserRole" :loading="addLoading">保存</el-button>
              <el-button @click="addRoleUserVisible= false">关闭</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
    <!-- 页面内容区end-->
  </div>
  <!-- 页面表格end -->
</template>
<script>
  export default {
    data() {
      return {
        editRow: '',
        imageUrl: '',
        tableData: [],
        roleTypeData: [],
        roleUserList: [],
        userData: [],
        roleuserSelect: [],
        input: "",
        curentroleid: "",
        curentrow: null,
        //列表Loading加载
        listLoading: false,
        addFormVisible1: false,
        //新增界面是否显示
        addFormVisible: false,
        //添加按钮Loading加载
        addLoading: false,
        //新增角色用户
        addRoleUserVisible: false,
        roletotal: 0,
        usercount: 0,
        roleusercount: 0,
        currentPage: 1,
        usercurrentPage: 1,
        roleusercurrentPage: 1,
        pageSize: 3,
        //检索字段
        s_rolename: "",
        s_rolecode: "",
        s_username: "",
        //     s_roleType:"",
        //输入框验证
        addFormRules: {
          hfName: [{
            required: true,
            message: "请输入角色名称",
            trigger: "blur"
          }],
          hfRegion: [{
            required: true,
            message: "请输入仓库位置",
            trigger: "blur"
          }]
        },
        //新增界面数据
        addForm: {
          bossId: 1,
          hfDesc: 1,
          hfName: '',
          hfRegion: '',
          requestId: 1,
          timestamp: 1,
          token: 1,
          userId: 1,
        },
        UserSelection: []
      }
    },

    methods: {
      delRole: function(row) {
        console.log(row.id)
        this.$ajax({
            method: "get",
            url: "/api/wareHouse/deleteWareHouse",
            params: {
              wareHouseId: row.id
            }
          })
          .then(() => {
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.checkCang();
          })
          .catch(() => {
            this.$message({
              message: "删除失败",
              type: "success"
            });
          });

      },
      //编辑
      editSubmit: function() {
        this.$refs.addForm.validate(valid => {
          if (valid) {
            this.$confirm("确认提交吗？", "提示", {}).then(() => {
              this.addLoading = true;
              let param = Object.assign({}, this.editRow);
              console.log(param)
              this.$ajax({
                method: "post",
                url: "/api/wareHouse/updateWareHouse",
                params: param
              }).then(res => {
                this.addFormVisible1 = false;
                console.log(res);
                this.checkCang();
                this.addLoading = false;
                this.$message({
                  message: "提交成功",
                  type: "success"
                });
                this.$refs["editRow"].resetFields();


              });
            });
          }
        });
      },
      //新增
      addSubmit: function() {
        this.$refs.addForm.validate(valid => {
          if (valid) {
            this.$confirm("确认提交吗？", "提示", {}).then(() => {
              this.addLoading = true;
              let param = Object.assign({}, this.addForm);
              console.log(param)
              this.$ajax({
                method: "post",
                url: "/api/wareHouse/createWareHouse",
                params: param
              }).then(res => {
                console.log(res);
                this.checkCang();
                this.addLoading = false;
                this.$message({
                  message: "提交成功",
                  type: "success"
                });
                this.$refs["addForm"].resetFields();
                this.addFormVisible = false;

              });
            });
          }
        });
      },

      // 查询仓库
      checkCang: function(val) {
        var _this = this;
        this.listLoading = true;
        this.$ajax({
          method: "get",
          url: "/api/wareHouse/listWareHouse",
          params: {
            bossId: 1,
          }
        }).then(
          function(resultData) {

            console.log('查询仓库', resultData);
            // this.listLoading = false;
            _this.tableData = resultData.data.data;
            // _this.roletotal = resultData.data.count;
            _this.listLoading = false;
          },
          function(resultData) {
            // _this.tableData.message = "Local Reeuest Error!";
            console.log(resultData);
          }
        );
      },
      // 修改仓库
      updataCang: function(val) {
        var _this = this;
        this.$ajax({
          method: "get",
          url: "/api/wareHouse/listWareHouse",
          params: {
            bossId: 1,
          }
        }).then(
          function(resultData) {
            console.log('查询仓库', resultData);
            // _this.tableData = resultData.data.data;
            // _this.roletotal = resultData.data.count;
            // _this.listLoading = false;
          },
          function(resultData) {
            // _this.tableData.message = "Local Reeuest Error!";
            console.log(resultData);
          }
        );
      },
      //添加库存
      addKuCun: function(val) {
        var _this = this;
        this.$ajax({
          method: "post",
          url: "/api/wareHouse/addResp",
          params: {
            goodsId: 1,
            hfDesc: 1, //仓库描述
            hfStatus: 1, //仓库状态
            quatity: 1, //数量
            requestId: 1,
            timestamp: '20181023T081324Z',
            token: 1,
            userId: 1,
            wareHouseId: 1 //仓库位置
          }
        }).then(
          function(resultData) {
            console.log('添加库存', resultData);
            // _this.tableData = resultData.data.data;
            // _this.roletotal = resultData.data.count;
            // _this.listLoading = false;
          },
          function(resultData) {
            // _this.tableData.message = "Local Reeuest Error!";
            console.log(resultData);
          }
        );


      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      indexMethod(index) {
        return index;
      },
      //获取角色列表
      getResult: function(val) {
        var _this = this;

        // this.listLoading = true;

        console.log();

        this.$ajax({
          method: "get",
          url: "/api/goods/byInstanceId",
          params: {
            instanceId: 1
          }
        }).then(
          function(resultData) {
            console.log('1', resultData);
            // _this.tableData = resultData.data.data;
            // _this.roletotal = resultData.data.count;
            // _this.listLoading = false;
          },
          function(resultData) {
            // _this.tableData.message = "Local Reeuest Error!";
            console.log(resultData);
          }
        );


      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.getResult(1);

      },


      //显示新增界面
      handleAdd: function() {
        this.addFormVisible = true;

      },
      //显示编辑角色界面
      enditRole: function(row) {
        var _this = this;
        this.addFormVisible1 = true;
        this.editRow = row;

      },

      getRoleUserList: function(val) {
        var _this = this;
        this.listLoading = true;
        let param = Object.assign({}, {
          currentPage: val,
          pageSize: 10,
          roleId: this.curentroleid
        });
        this.$ajax({
          method: "post",
          url: "/api/sysrole-api/queryRoleUserList",
          data: param
        }).then(
          function(resultData) {

            _this.roleUserList = resultData.data.data;
            _this.roleusercount = resultData.data.count;
            //alert(_this.tableData);
            //_this.listLoading = false;
          }
        );
      },
      clickRow: function(row) {
        this.roleuserSelect = [];
        // var roleid=row.id;
        var _this = this;
        this.curentroleid = row.id;
        this.curentrow = row;
        _this.getRoleUserList(1)

      },
      addRoleUser: function(val) {
        this.addRoleUserVisible = true;
        var _this = this;
        this.listLoading = true;
        let param = Object.assign({}, {
          currentPage: val,
          pageSize: 10,
          userName: this.s_username
        });
        this.$ajax({
          method: "post",
          url: "/api/sysuser-api/querySysUserList",
          data: param
        }).then(
          function(resultData) {

            _this.userData = resultData.data.data;
            _this.usercount = resultData.data.count;
            //alert(_this.tableData);
            //_this.listLoading = false;
          }
        );

      },
      deleteRoleUser: function() {
        let param = new URLSearchParams();
        param.append("id", row.id);

        this.$ajax({
          method: "post",
          url: "/api/sysrole-api/deleteSysRoleUserByid",
          data: param
        }).then(() => {
          this.$message({
            message: "删除成功",
            type: "success"
          });
        });

      },
      userSelectionChange: function(val) {
        //alert(val);
        this.UserSelection = val;
      },
      roleuserSelectChange: function(val) {
        this.roleuserSelect = val;
      },
      saveUserRole: function() {
        if (this.curentroleid == "") {
          alert("请选择要添加的角色，单击选择行。");
        }
        var rows = this.UserSelection;
        if (rows) {
          rows.forEach(row => {
            var _this = this;
            this.listLoading = true;
            let param = Object.assign({}, {
              id: 0,
              roleId: this.curentroleid,
              targetId: row.id
            });
            this.$ajax({
              method: "post",
              url: "/api/sysrole-api/saveRoleUser",
              data: param
            }).then(
              function(resultData) {

              }
            );
            // alert(row.id)
          });
        }
        this.$refs["addRoleUser"].resetFields();
        this.addRoleUserVisible = false;
        this.clickRow(this.curentrow);
        //alert(this.UserSelection);
      },
      deleteUserRole: function() {
        var rows = this.roleuserSelect;
        if (rows) {
          rows.forEach(row => {
            var _this = this;
            this.listLoading = true;
            let param = new URLSearchParams();
            param.append("id", row.id);
            this.$ajax({
              method: "post",
              url: "/api/sysrole-api/deleteSysRoleUserByid",
              data: param
            }).then(
              function(resultData) {

              }
            );
          });
        }
        this.addRoleUserVisible = false;
        this.clickRow(this.curentrow);
      }
    },
    mounted() {
      //获取列表
      // this.getResult();
      // this.getRoleType();

      this.checkCang();
      // this.addKuCun();
    }
  };
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  /* #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    } */


  /* #roleuser {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
    el-input{width:200px;height: 50px;} */
</style>
