<template>
  <section>
    <div class="table">
      <!-- 页面表格begin -->
      <div class="crumbs">
        <!-- 页面标题begin -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item> <i class="el-icon-tickets"></i>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div> <!-- 页面标题end-->
      <div class="container">

        <!--新增按钮-->
        <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleAdd" size="mini" round>新增店铺</el-button>
        <!-- <el-button type="danger" icon="el-icon-delete" @click="handleDeleteList" size="mini" round>删除</el-button> -->
        <template>
          <!--表格数据及操作-->
          <el-table :data="tableData" size="mini" highlight-current-row border class="el-tb-edit mgt20" ref="multipleTable"
            tooltip-effect="dark" v-loading="listLoading" @selection-change="selectChange">
            <!--勾选框-->
            <el-table-column type="index" :index="indexMethod" label="序号" width="50px" align="center">
            </el-table-column>
            <!--索引-->

            <el-table-column prop="hfName" label="店铺名称" align="center">
              <!-- <template slot-scope="scope">
                <el-button @click="handleSelect(scope.$index,scope.row)" type="text" size="small">{{scope.row.userName}}</el-button>
              </template> -->
            </el-table-column>
            <el-table-column prop="hfDesc" label="店铺描述" align="center">
            </el-table-column>
            <el-table-column prop="hfStatus" label="店铺状态" align="center">
                  <template slot-scope="scope">
                    <span v-if="scope.row.hfStatus == 0">营业中</span>
                    <span v-else>未营业</span>
                  </template>
            </el-table-column>



            <!-- <el-table-column prop="birthday" label="出生日期" >
            </el-table-column>   -->

            <!-- <el-table-column prop="isLocked" label="是否锁定" :formatter="formatLocked" sortable>
            </el-table-column>     -->
            <el-table-column fixed="right" label="操作" width="250" align="center">
              <template slot-scope="scope">
                <el-button type="primary" plain size="small" @click="handleRole(scope.row)">编辑</el-button>
                <!-- <el-button size="small" @click="handleEdit(scope.row)"></el-button> -->
                <el-button size="small"  type="danger"   @click="delecteDian(scope.row)">删除</el-button>
              </template>
            </el-table-column>

          </el-table>
        </template>
        <br>
        <br>
        <!-- 分页 -->
        <el-pagination @current-change="getResult" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next"
          :total="count">
        </el-pagination>
      </div><!-- 页面内容区end-->
    </div>
    <!-- 上传图片 -->
    <el-dialog title="上传图片" :visible.sync="picOpen" :close-on-click-modal="false">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-success="handleAvatarSuccess"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click="add" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>
    <!--新增界面-->
    <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form :inline="true" :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="店铺名称" prop="hfName">
          <el-input v-model="addForm.hfName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺描述" prop="stoneDesc" label-width="150px">
          <el-input v-model="addForm.stoneDesc" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺状态 (输入0为营业状态/1未营业状态)" prop="stoneStatus" label-width="300px">
          <el-input v-model="addForm.stoneStatus" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addSubmit" :loading="addLoading">提交</el-button>
      </div>
    </el-dialog>
    <!--详细界面-->
    <el-dialog title="详细信息" :visible.sync="selectFormVisible" :close-on-click-modal="false">
      <el-form :inline="true" :model="selectForm" label-width="80px" ref="selectForm">
        <el-form-item label="姓名" prop="userName">
          <el-input v-model="selectForm.userName" auto-complete="off" :disabled="true"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="selectFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <!--编辑界面-->
    <el-dialog title="编辑" :visible.sync="editFormVisible1" :close-on-click-modal="false">
      <el-form :inline="true" :model="editRow" label-width="80px" :rules="bianaddFormRules" ref="bianinfoForms">
        <el-form-item label="店铺名称" prop="hfName">
          <el-input v-model="editRow.hfName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺描述" prop="hfDesc" label-width="150px">
          <el-input v-model="editRow.hfDesc" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺状态 (输入0为营业状态/1未营业状态)" prop="stoneStatus" label-width="300px">
          <el-input v-model="editRow.hfStatus" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible1 = false">取消</el-button>
        <el-button type="primary" @click="bianSubmit" :loading="addLoading">提交</el-button>
      </div>
    </el-dialog>
    <!--组织结构界面-->
    <el-dialog title="主机构" :visible.sync="orgFormVisible" :close-on-click-modal="false">
      <el-form :inline="true" label-width="500px" v-loading="treeLoading">
        <el-form-item>
          <el-tree :data="treeData" :props="defaultProps" node-key="id" :expand-on-click-node="false">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{node.label}}
                <i class="el-icon-plus" @click="() => append(node)">选择</i>
              </span>
            </span>
          </el-tree>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="orgFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <!--岗位界面-->
    <el-dialog title="岗位列表" :visible.sync="positionFormVisible" :close-on-click-modal="false">
      <el-form :inline="true" label-width="500px" v-loading="positionListLoading">
        <el-form-item>
          <!--工具条-->
          <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
              <el-form-item>
                岗位名称 <el-input v-model="filters.positionName" placeholder="岗位名称" style="width:200px; heght:30px;"></el-input>
              </el-form-item>
              <el-form-item>
                岗位编码：<el-input v-model="filters.positionCode" placeholder="岗位编码：" style="width:200px; heght:30px;"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="getPositionResult(1)" size="mini">搜索</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <!--表格数据及操作-->
          <el-table :data="dianpuList" size="mini" highlight-current-row border class="el-tb-edit" ref="multipleTable"
            tooltip-effect="dark" v-loading="positionListLoading">
            <!--索引-->
            <el-table-column type="index" :index="indexMethod" align="center">
            </el-table-column>
            <el-table-column prop="positionName" label="岗位名称" align="center">
            </el-table-column>
            <el-table-column prop="positionCode" label="岗位编码" align="center">
            </el-table-column>
            <el-table-column prop="orderBy" label="排序" align="center">
            </el-table-column>
            <el-table-column prop="" label="操作" width="150" align="center">
              <template slot-scope="scope">
                <el-button size="small" @click="handleChoice(scope.$index,scope.row)">选中</el-button>
              </template>
            </el-table-column>
          </el-table>
          <br>
          <br>
          <!-- 分页 -->
          <el-pagination @current-change="getPositionResult" :current-page="positionCurrentPage" :page-size="positionPageSize"
            layout="total, prev, pager, next" :total="positionCount">
          </el-pagination>

        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="positionFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <!-- 查看角色 -->
    <el-dialog title="查看物品" :visible.sync="roleFormVisible" :close-on-click-modal="false">
      <el-table :data="result" size="mini" highlight-current-row border ref="multipleTable" style="margin-bottom: 40px;"
        tooltip-effect="dark" v-loading="listLoading" >

        <el-table-column label="商品id" align="center" prop="id">

        </el-table-column>
        <el-table-column prop="hfName" label="商品名称" align="center">
        </el-table-column>

        <el-table-column prop="productDesc" label="商品描述" align="center">
        </el-table-column>
        <el-table-column prop="categoryId" label="商品类目" align="center">
        </el-table-column>
        <el-table-column  label="商品图片" align="center">
                <template slot-scope="scope">
            　　　　<img src="https://img2018.cnblogs.com/blog/1170749/201810/1170749-20181011114946113-918123992.png"
            width="40" height="40" class="head_pic"/>
            　　</template >
        </el-table-column>
        <el-table-column fixed="right" label="操作"  align="center" width="190px">
          <template slot-scope="scope">
             <el-button size="small" @click="deletegoods(scope.row)">删除</el-button>
            <el-button size="small" @click="upLoadPic(scope.row)">上传图片</el-button>
          </template>
        </el-table-column>


      </el-table>
      <el-form :model="ruletable" ref="infoForms" :inline="true" :rules="addRules">
        <el-form-item prop="positionName" label-width="300px" :show-overflow-tooltip="true">
          <el style="display: flex;">
            <el style="width: 340px;font-size: 17px;">输入商品id添加店铺物品:</el>
            <el-input auto-complete="off" v-model="ruletable.productId"></el-input>
            <el-button style="margin-left: 10px;" @click="addGoods">添加</el-button>
          </el>
        </el-form-item>
      </el-form>
      <el-form label-width="80px" :inline="true">
        <div v-for="item in roleData" :key="item.id">
          <el-form-item label="角色名称" prop="">
            <el-input v-model="item.roleName" auto-complete="off" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="角色编码" prop="">
            <el-input v-model="item.roleCode" auto-complete="off" :disabled="true"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="roleFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
  export default {
    name: 'SysUser',
    data() {
      return {
        goodId:"",
        picOpen:false,
        result: '',
        editRow: '',
        ruletable: {
          productId: '',
          stoneId: ''
        },
        rowcheck: '', //查询一行的数据
        dianpuList: '', //店铺列表
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
        editFormVisible1: false,
        //新增界面是否显示
        addFormVisible: false,
        //添加按钮Loading加载
        addLoading: false,
        //输入框验证
        bianaddFormRules: {
          hfName: [{
            required: true,
            message: "请输入规格名称",
            trigger: "blur"
          }],
          hfDesc: [{
            required: true,
            message: "请输入规格描述",
            trigger: "blur"
          }],
          hfStatus: [{
            required: true,
            message: "请输入规格状态",
            trigger: "blur"
          }]

        },
        addFormRules: {
          hfName: [{
            required: true,
            message: "请输入店铺名称",
            trigger: "blur"
          }],
          stoneDesc: [{
            required: true,
            message: "请输入店铺名称",
            trigger: "blur"
          }],
          stoneStatus: [{
            required: true,
            message: "请输入店铺状态",
            trigger: "blur"
          }]

        },
        addRules: {
          ids: [{
            required: true,
            message: "请输入商品id",
            trigger: "blur"
          }]


        },
        stoneStatus: 1,
        //新增界面数据
        addForm: {
          hfName: '',
          stoneDesc: '',

          stoneStatus: '',
          userId: 1,
          stoneManagerId: 1


        },

        value: '',

        value: '',
        options2: [{
          value: '选项1',
          label: '上架'
        }, {
          value: '选项2',
          label: '下架'
        }],
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
      };
    },
    methods: {
      // 删除店铺
      delecteDian: function(row) {
        this.$confirm("删除店铺？", "提示", {}).then(() => {
        var _this = this;

        _this.$ajax({
          method: "get",
          url: "/api/stone/deleteStone",
          params: {
            stoneId:row.id

          }
        }).then(res => {
          console.log('删除店铺',res);
          this.getList();
          _this.$message({
            message: "提交成功",
            type: "success"
          });
        });
        });
      },
// 编辑店铺
  bianSubmit: function() {
        this.$refs.bianinfoForms.validate(valid => {
          if (valid) {
            this.$confirm("确认提交？", "提示", {}).then(() => {
              this.addLoading = true;
              let param =  this.editRow ;

              console.log(param);
              this.$ajax({
                method: "post",
                url: "/api/stone/updateStone",
                params: param
              }).then(res => {
                console.log('编辑店铺',res);
                this.addLoading = false;
                this.getList();
                this.editFormVisible1=false;
                this.$message({
                  message: "提交成功",
                  type: "success"
                });

              }).catch(res=>{
                    this.$message({
                  message: "提交失败",

                });

              })
              ;
            });
          }
        });
      },
      // 删除物品


      deletegoods: function(row) {
        this.$confirm("确认添加吗？", "提示", {}).then(() => {
        var _this = this;
        console.log([row.id,_this.ruletable.stoneId])

        _this.$ajax({

          method: "get",
          url: "/api/product/deleteStone",
          params: {
            // id:[row.id,_this.ruletable.stoneId]
            productId: row.id,
            stoneId:_this.ruletable.stoneId
            // d:[1,2]
          }
        }).then(res => {
          console.log('删除物品',res);
          _this.getmu()
          _this.$message({
            message: "提交成功",
            type: "success"
          });

        });
        });

      },
      // 上传图片
      upLoadPic: function(row) {
          this.goodId=row.id;
          this.picOpen=true;
      },
      handleAvatarSuccess:function( response, file, fileList) {
        console.log( response, file, fileList,fileList[0].name,fileList[0].raw,fileList[0].url);

        var _this = this;
        _this.$ajax({
          method: "post",
          url: "/api/goods/addPicture",
          params: {
            pictureName:fileList[0].name,
            goodsId:this.goodId,
            username:1,
            pictureDesc:'111',
            fileInfo:fileList[0].url

          }
        }).then(res => {
          console.log('11',res);


        });

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //拼量删除
      deleteSelectProductId: function() {
        console.log(this.ruletable.stoneId);
        var _this = this;
        _this.$ajax({
          method: "get",
          url: "/api/product/deleteSelectProductId",
          params: {
            productId: _this.ruletable.stoneId
          }
        }).then(res => {
          console.log(res);


        });
      },
    // 获取店铺列表
      getList: function(val) {
        var _this = this;
        this.$ajax({
          method: "get",
          url: "/api/stone/byBossId",
          params: {
            bossId: 1
          }
        }).then(
          function(resultData) {
            console.log('获取店铺', resultData);
            _this.tableData = resultData.data.data;
            // _this.tableData = resultData.data.data;
            // _this.roletotal = resultData.data.count;
            // _this.listLoading = false;
          },
          function(resultData) {
            // _this.tableData.message = "Local Reeuest Error!";
            console.log('商品列表', resultData);
          }
        );
      },
      //获取店铺物品
      getmu: function() {

        var _this = this;

        _this.$ajax({
          method: "get",
          url: "/api/product/byStoneId",
          params: {
            stoneId: _this.ruletable.stoneId
          }
        }).then(res => {
          console.log(res);

          _this.result = res.data.data;
          console.log(_this.result)
        });
      },
      //新增物品
      addGoods: function() {
        this.$refs.infoForms.validate(valid => {
          if (valid) {
            this.$confirm("确认添加吗？", "提示", {}).then(() => {
              this.addLoading = true;
              let param = this.ruletable;
              console.log(param);
              this.$ajax({
                method: "post",
                url: "/api/product/addToStone",
                params: param
              }).then(res => {
                console.log('新增物品',res);
                this.addLoading = false;
                this.getmu();
                this.$message({
                  message: "提交成功",
                  type: "success"
                });
                // this.$refs["addForm"].resetFields();
                // this.addFormVisible = false;
                // this.getResult(1);
              });
            });
          }
        });
      },
      // 添加物品图片/goods/addPicture
      addPicture: function(val) {
        var _this = this;
        this.$ajax({
          method: "post",
          url: "/api/goods/addgood",
          params: {
            goodDesc: 1,
            goodsId: 1,
            pictureName: 1,
            prictureDesc: 1,
            requestId: 1,
            timestamp: 1,
            token: 1,
            userId: 1,
            username: 1,
            file: '1'
          }
        }).then(
          function(resultData) {
            console.log('添加商品', resultData);
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
      handleSuccess(response, file, fileList) {
        console.log(response, file, fileList);

      },
      // 选择图片
      handleRemove(file, fileList) {
        console.log(file, fileList);

      },
      handlePictureCardPreview(file) {
        console.log('111', file)
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        console.log(this.dialogImageUrl)
      },




      getResult: function(val) {
        var _this = this;
        this.listLoading = true;
        let param = Object.assign({}, {
          currentPage: val,
          pageSize: 10,
          userName: this.filters.userName,
          userNo: this.filters.userNo,
          job: this.filters.job,
          loginName: this.filters.loginName,
          mobile: this.filters.mobile,
          sex: this.filters.sex
        });
        this.$ajax({
          method: "post",
          url: "/api/sysuser-api/querySysUserList",
          data: param
        }).then(function(resultData) {
          _this.tableData = resultData.data.data;
          _this.count = resultData.data.count;
          _this.listLoading = false;
        });
      },

      //是否有效显示转换
      formatState: function(row, column) {
        return row.validateState == 1 ?
          "有效" :
          row.validateState == 0 ? "无效" : "";
      },
      //是否锁定显示转换
      formatLocked: function(row, column) {
        return row.isLocked == 1 ? "锁定" : row.isLocked == 0 ? "未锁定" : "";
      },
      //查看角色
      handleRole: function(row) {



        // this.roleFormVisible = true;
        // this.rowcheck = row;
        // this.ruletable.stoneId = row.id;
        // this.getmu();


        // this.$ajax({
        //   method: "get",
        //   url: "/api/product/byStoneId",
        //   params: {
        //     stoneId: row.id
        //   }
        // }).then(function(resultData) {

        //   console.log('已选物品', resultData);
        // });
        var arr=JSON.stringify(row);
        // this.$router.push('/formpage/'+encodeURIComponent(arr))
        // this.$router.push({path: 'formpage', query: {}})
        this.$router.push({path: 'SysAcl', query: {id: row.id,row: arr}})
      },
      //显示新增界面
      handleAdd: function() {
        this.addFormVisible = true;
      },
      //新增
      addSubmit: function() {
        this.$refs.addForm.validate(valid => {
          if (valid) {
            this.$confirm("确认提交吗？", "提示", {}).then(() => {
              this.addLoading = true;
              let param = {
                hfName: this.addForm.hfName,
                stoneDesc: this.addForm.stoneDesc,
                stoneStatus: this.addForm.stoneStatus,
                stoneManagerId: this.addForm.stoneManagerId,
                userId: this.addForm.userId
              };

              console.log(param);
              this.$ajax({
                method: "post",
                url: "/api/stone/addStone",
                params: param
              }).then(res => {
                console.log(res);
                this.addLoading = false;
                this.getList();
                this.$message({
                  message: "提交成功",
                  type: "success"
                });
                // this.$refs["addForm"].resetFields();
                this.addFormVisible = false;
                // this.getResult(1);
              });
            });
          }
        });
      },
      //显示组织结构
      orgSelect: function() {
        //加载组织结构树
        this.getTreeResult();

        //显示组织结构界面
        this.orgFormVisible = true;
      },
      //获取组织结构信息
      getTreeResult: function() {
        var _this = this;
        this.treeLoading = true;
        let param = Object.assign({}, {});
        this.$ajax({
          method: "post",
          url: "/api/sysorg-api/querySysOrgList",
          data: param
        }).then(
          function(resultData) {
            _this.treeData = resultData.data.data;
            _this.treeLoading = false;
          },
          function(resultData) {
            _this.treeData.message = "Local Reeuest Error!";
          }
        );
      },
      //组织结构节点赋值
      append(node, param) {
        //新增信息赋值
        this.addForm.orgname = node.data.name;
        this.addForm.orgid = node.data.id;
        //编辑信息赋值
        this.editForm.orgname = node.data.name;
        this.editForm.orgid = node.data.id;
        this.orgFormVisible = false;
      },
      //批量删除
      handleDeleteList: function() {
        const length = this.selectList.length;
        let id = "";
        for (let i = 0; i < length; i++) {
          id += this.selectList[i].id + ",";
        }
        //去掉结尾,
        id = id.substring(0, id.length - 1);
        this.$confirm("确认删除该记录吗?", "提示", {
            type: "warning"
          })
          .then(() => {
            this.listLoading = true;
            let param = new URLSearchParams();
            param.append("ids", id);
            console.log("ids:" + param);
            this.$ajax({
              method: "post",
              url: "/api/sysuser-api/delSysUserByUserId",
              data: param
            }).then(res => {
              this.listLoading = false;
              this.$message({
                message: "删除成功",
                type: "success"
              });
              this.selectList = [];
              this.getResult(1);
            });
          })
          .catch(() => {});
      },
      //显示编辑界面
      handleEdit: function(row) {
        this.editFormVisible1 = true;
        this.editRow = row;
        console.log(this.editRow);

      }, //编辑
      editSubmit: function() {

        //如果性别未选择给默认值

        this.$refs.editForm.validate(valid => {
          if (valid) {
            this.$confirm("确认提交吗？", "提示", {}).then(() => {
              this.editLoading = true;
              let param = Object.assign({}, this.editForm);
              console.log(param);
              this.$ajax({
                method: "post",
                url: "/api/wareHouse/updateWareHouse",
                data: param
              }).then(res => {
                this.editLoading = false;
                this.$message({
                  message: "提交成功",
                  type: "success"
                });
                this.$refs["editForm"].resetFields();
                this.editFormVisible = false;
                this.getResult(1);
              });
            });
          }
        });
      },
      //查看详细信息
      handleSelect: function(index, row) {

        this.selectFormVisible = true;
        this.selectForm = Object.assign({}, row);
      },
      //批量选中
      selectChange: function(val) {
        console.log(val);
        this.selectList = val;
      },
      //table序号
      indexMethod(index) {
        return index + 1;
      },
      //显示岗位列表
      positionSelect: function() {
        //加载岗位列表
        this.getPositionResult(1);

        //显示岗位构界面
        this.positionFormVisible = true;
      },
      //获取岗位列表
      getPositionResult: function(val) {
        var _this = this;
        this.positionListLoading = true;
        let param = Object.assign({}, {
          currentPage: val,
          pageSize: 10,
          positionName: this.filters.positionName,
          positionCode: this.filters.positionCode
        });
        this.$ajax({
          method: "post",
          url: "/api/api/sysPosition/Web/getSysPositionList",
          data: param
        }).then(function(resultData) {
          _this.positionTableData = resultData.data.data;
          _this.positionCount = resultData.data.count;
          _this.positionListLoading = false;
        });
      },
      //选中岗位
      handleChoice: function(index, row) {
        //新增信息赋值
        this.addForm.positionid = row.id;
        this.addForm.positionname = row.positionName;
        //编辑信息赋值
        this.editForm.positionid = row.id;
        this.editForm.positionname = row.positionName;
        console.log(row.positionname);

        this.positionFormVisible = false;
      }

    },
    mounted() {
      //初始加载
      // this.addSshang();
      this.getList();
      // this.getResult(1);

    }
  };
</script>
