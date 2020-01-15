<template>
<section>
  <div class="table">
    <div class="container">
      <!-- 页面内容区begin -->
      <div class="handle-box">
        <!-- 搜索区begin -->
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="filters">
            <el-form-item style="margin-bottom:50px;" label="商品名称:">

              <el-input v-model="souhfName" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item style="margin-bottom:50px;margin-left: 5px;" label="商品分类：">

              <!--<el-input v-model="filters.job"  placeholder="岗位" style="width:200px; heght:30px;" size="mini"></el-input>-->
              <el-select v-model="value1" placeholder="请选择" @change="checkMulist">
                <el-option v-for="(item,index) in leiMu" :key="index" :label="item.hfName" :value="item.hfName">
                </el-option>
              </el-select>
            </el-form-item>
            <el-button type="primary" @click="sou" :loading="addLoading">搜索</el-button>
          </el-form>
        </el-col>
      </div> <!-- 搜索区end -->
      <!--新增按钮-->
      <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleAdd" size="mini" round>新增</el-button>
      <el-button type="danger" icon="el-icon-delete" @click="deletegood" size="mini" round>删除</el-button>
      <el-button type="success" @click="addMu" size="mini" round>添加分类</el-button>
      <template>
        <!--表格数据及操作-->
        <el-table :data="tableData" size="mini" highlight-current-row border class="el-tb-edit mgt20" ref="multipleTable" tooltip-effect="dark"  v-loading="listLoading"
        @selection-change="selectChange"
         >
          <el-table-column type="selection" label="序号" width="50px" align="center" >
          </el-table-column>
          <el-table-column type="index" :index="indexMethod" label="序号" width="50px" align="center">
          </el-table-column>
          <el-table-column prop="id" label="商品编号" align="center">
          </el-table-column>
          <el-table-column prop="productName" label="商品名称" align="center">
          </el-table-column>
          <el-table-column prop="productDesc" label="商品描述" align="center">
          </el-table-column>
          <el-table-column prop="productCategoryName" label="商品类目" align="center">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="260">
            <template slot-scope="scope">
              <!-- <el-button type="primary" plain size="small" @click="addgui(scope.row)" style="margin-bottom: 10px;">查看规格</el-button> -->
              <el-button type="primary" plain size="small" @click="biangui(scope.row)" style="margin-bottom: 10px;">修改规格</el-button>
              <el-button type="danger" plain size="small" @click="deletesingle(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <br>
      <br>
      <!-- 分页 -->
      <el-pagination @current-change="getResult" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="count">
      </el-pagination>
    </div><!-- 页面内容区end-->
  </div><!-- 页面表格end -->
  <!--新增界面-->
  <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
    <el-form :inline="true" :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
      <el-form-item label="商品名称" prop="hfName">
        <el-input v-model="addForm.hfName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="productDesc">
        <el-input v-model="addForm.productDesc" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="value" placeholder="请选择" @change="changeQuentitySubject(index)">
          <el-option v-for="(item,index) in leiMu" :key="index" :label="item.hfName" :value="item.hfName">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addFormVisible = false">取消</el-button>
      <el-button type="primary" @click="addSubmit" :loading="addLoading">提交</el-button>
    </div>
  </el-dialog>
  <!--详细界面-->

  <!--添加规格界面-->
  <el-dialog title="" :visible.sync="editFormVisible1" :close-on-click-modal="false">

    <div style="font-size: 17px;margin-bottom: 30px;">
      规格:
    </div>
    <el-table :data="guigelist" size="mini" highlight-current-row border class="el-tb-edit mgt20" ref="multipleTable" style="margin-bottom: 40px;" tooltip-effect="dark" v-loading="listLoading" @selection-change="selectChange">
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
    </el-table>
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
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="editFormVisible1 = false">取消</el-button>
      <el-button type="primary" @click="add" :loading="editLoading">提交</el-button>
    </div>
  </el-dialog>
  <!--添加规格界面-->

  <el-dialog title="编辑" :visible.sync="editFormVisible3" :close-on-click-modal="false">

    <el-form :inline="true" :model="bianrow" label-width="80px" :rules="bianRules" ref="bianForm">
      <el-form-item label="商品名称" prop="productName">
        <el-input v-model="bianrow.productName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="productDesc">
        <el-input v-model="bianrow.productDesc" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="value4" placeholder="请选择" @change="changeQuentitySubject1(index)">
          <el-option v-for="(item,index) in leiMu" :key="index" :label="hfName" :value="item.hfName">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="editFormVisible3=false">取消</el-button>
      <el-button type="primary" @click="bianjiSubmit" :loading="addLoading">提交</el-button>
    </div>
  </el-dialog>
  <!--上传图片-->
  <el-dialog title="上传图片" :visible.sync="editFormVisible2" :close-on-click-modal="false">
    <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="editFormVisible1 = false">取消</el-button>
      <el-button type="primary" @click="add" :loading="editLoading">提交</el-button>
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
  <!--添加类目-->
  <el-dialog title="添加类目" :visible.sync="mu" :close-on-click-modal="false">
    <el-form :model="leimu" label-width="80px" ref="leimuForm" :inline="true">
      <el-form-item label="类目名称" prop="category">
        <el-input v-model="leimu.category" auto-complete="off"></el-input>
        <el-button type="primary" @click="addleimu">提交</el-button>
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
        <el-table :data="positionTableData" size="mini" highlight-current-row border class="el-tb-edit" ref="multipleTable" tooltip-effect="dark" v-loading="positionListLoading">
          <!--索引-->
          <el-table-column type="index" :index="indexMethod">
          </el-table-column>
          <el-table-column prop="positionName" label="岗位名称">
          </el-table-column>
          <el-table-column prop="positionCode" label="岗位编码">
          </el-table-column>
          <el-table-column prop="orderBy" label="排序">
          </el-table-column>
          <el-table-column prop="" label="操作" width="150">
            <template slot-scope="scope">
              <el-button size="small" @click="handleChoice(scope.$index,scope.row)">选中</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <br>
        <!-- 分页 -->
        <el-pagination @current-change="getPositionResult" :current-page="positionCurrentPage" :page-size="positionPageSize" layout="total, prev, pager, next" :total="positionCount">
        </el-pagination>

      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="positionFormVisible = false">取消</el-button>
    </div>
  </el-dialog>
  <!-- 查看角色 -->
  <el-dialog title="查看角色" :visible.sync="roleFormVisible" :close-on-click-modal="false">
    <el-form :model="infoForm" label-width="80px" ref="infoForm" :inline="true">
      <el-form-item label="姓名" prop="positionName">
        <el-input v-model="infoForm.userName" auto-complete="off" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="编码" prop="positionCode">
        <el-input v-model="infoForm.id" auto-complete="off" :disabled="true"></el-input>
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
  name: 'product',
  data() {
    return {
      souhfName: '',
      hfName: '',
      value4: '',
      bianrow: '',
      leimu: {
        category: '',
        parentCategoryId: "-1",
        levelId: '0'
      },
      mu: false,
      leiMuId: '',
         leiMu: '',
      value1: '',
      guigelist: '',
      leiId: '',

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
    };
  },
  methods: {
    // 编辑商品
    biangui: function (row) {
      var arr = JSON.stringify(row);
      // this.$router.push('/formpage/'+encodeURIComponent(arr))
      this.$router.push({
        path: 'formpage',
        query: {
          row: arr
        }
      })
      // console.log(row.id);

      // this.bianrow = row;
      // console.log(this.bianrow )
      // this.editFormVisible3 = true;
      // let obj = {};
      // obj = this.leiMu.find((item) => {

      //   if (item.id== this.bianrow.categoryId) {
      //     return item
      //   }
      // });
      // console.log( obj)
      // this.value4 = obj.hfName;

    },
    bianjiSubmit: function () {
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
              _this.editFormVisible3 = false;
              _this.addLoading = false;
              _this.getList();
              _this.$message({
                message: "提交成功",
                type: "success"
              });

              _this.$refs["bianForm"].resetFields();

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

    addMu: function (row) {

      this.mu = true;
    },
    // 添加类目
    addleimu: function () {
      var _this = this;
      _this.$refs.leimuForm.validate(valid => {
        if (valid) {
          _this.$confirm("确认提交吗？", "提示", {}).then(() => {
            _this.addLoading = true;
            let param = Object.assign({}, _this.leimu);
            console.log(param);
            _this.$ajax({
              method: "post",
              url: "/api/product/addCategory",
              params: param
            }).then(res => {
              _this.mu = false;
              _this.addLoading = false;
              console.log('添加类目', res)
              _this.$message({
                message: "提交成功",
                type: "success"
              });

              _this.$refs["leimuForm"].resetFields();

              // this.getResult(1);
            });
          });
        }
      });

    },
    deletesingle: function (row) {
      this.$confirm("确认提交吗？", "提示", {}).then(() => {
        var _this = this;
        _this.$ajax({
          method: "get",
          url: "/api/product/deleteProductId",
          params: {
            productId: row.id
          }
        }).then(res => {
          console.log(res)
          this.getList();

        });
      });

    },
    //删除商品
    deletegood: function (row) {

      let delarr = [];
      const length = this.selectList.length;

      for (let i = 0; i < length; i++) {

        delarr.push(this.selectList[i].id)

      }
      console.log(delarr);
      this.$confirm("确认提交吗？", "提示", {}).then(() => {
        var _this = this;
        _this.$ajax({
          method: "post",
          url: "/api/product/deleteSelectProductId",
          params: {
            productId: delarr.toString()
          }
        }).then(res => {
          console.log(res)
          this.getList();

        });
      });

    },
    sou: function () {

      // console.log( '类目id',this.leiMuId)
      var _this = this;
      _this.$ajax({
        method: "get",
        url: "/api/product/categoryId",
        params: {
          bossId: 1,
          categoryId: _this.leiMuId,
          hfName: _this.souhfName
        }
      }).then(res => {
        _this.tableData = res.data.data;
        console.log('通过类目查询商品列表', res);
      });

    },
    // 通过类目查询商品列表
    checkMulist: function () {

      let obj = {};
      obj = this.leiMu.find((item) => { //这里的selectList就是上面遍历的数据源
        //筛选出匹配数据
        if (item.hfName == this.value1) {
          return item
        }
      });

      this.leiMuId = obj.id;

    },
    // 查询规格
    checkguige: function () {
      var _this = this;
      _this.$ajax({
        method: "get",
        url: "/api/product/specifies",
        params: {
          productId: _this.guiform.productId
        }
      }).then(res => {
        _this.guigelist = res.data.data;
        console.log('查询规格', res);

      });
    },
    changeQuentitySubject: function () {
      let obj = {};
      obj = this.leiMu.find((item) => { //这里的selectList就是上面遍历的数据源
        //筛选出匹配数据
        if (item.hfName == this.value) {
          return item
        }
      });
      this.addForm.categoryId = obj.id;

    },
    changeQuentitySubject1: function () {
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
    chuanId: function (index) {
      console.log(index);
    },
    // 添加规格
    addgui: function (row) {
      console.log(row.id);
      this.guiform.productId = row.id;
      this.editFormVisible1 = true;
      this.checkguige();

    },
    chuan: function () {
      this.editFormVisible2 = true;
      this.guiform.productId = row.id;
    },

    add: function () {
      var _this = this;
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
              // this.editFormVisible1 = false;
              this.addLoading = false;
              console.log('添加规格', res)
              this.$message({
                message: "提交成功",
                type: "success"
              });
              _this.checkguige();
              this.addFormVisible1 = false;
              this.$refs["guiform1"].resetFields();

              // this.getResult(1);
            });
          });
        }
      });
    },

    // 查询类目
    checkType: function (val) {
      var _this = this;
      this.$ajax({
        method: "get",
        url: "/api/product/category",

      }).then(
        function (resultData) {
          console.log('查询类目', resultData);
          _this.leiMu = resultData.data.data;
          console.log(_this.leiMu);
          // _this.tableData = resultData.data.data;
          // _this.roletotal = resultData.data.count;
          // _this.listLoading = false;
        }
      );
    },
    // 添加物品图片/goods/addPicture
    addPicture: function (val) {
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
        function (resultData) {
          console.log('添加商品', resultData);
          // _this.tableData = resultData.data.data;
          // _this.roletotal = resultData.data.count;
          // _this.listLoading = false;
        },
        function (resultData) {
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
    // 获取商品列表
    getList: function (val) {
      var _this = this;
      this.$ajax({
        method: "get",
        url: "/api/product/listProductAndCategoryName",
        params: {
          bossId: 1
        }
      }).then(
        function (resultData) {
          console.log('商品列表', resultData);

          _this.tableData = resultData.data.data;
          // _this.roletotal = resultData.data.count;
          // _this.listLoading = false;
        },
        function (resultData) {
          // _this.tableData.message = "Local Reeuest Error!";
          console.log('商品列表', resultData);
        }
      );
    },

    getResult: function (val) {
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
      }).then(function (resultData) {
        _this.tableData = resultData.data.data;
        _this.count = resultData.data.count;
        _this.listLoading = false;
      });
    },
    //性别显示转换
    formatSex: function (row, column) {
      return row.sex == 1 ? "男" : row.sex == 0 ? "女" : "未知";
    },

    //是否有效显示转换
    formatState: function (row, column) {
      return row.validateState == 1 ?
        "有效" :
        row.validateState == 0 ? "无效" : "";
    },
    //是否锁定显示转换
    formatLocked: function (row, column) {
      return row.isLocked == 1 ? "锁定" : row.isLocked == 0 ? "未锁定" : "";
    },
    //查看角色
    handleRole: function (index, row) {
      //显示角色信息页面
      this.roleFormVisible = true;

      var _this = this;
      _this.infoForm = Object.assign({}, row);
      this.roleListLoading = true;
      let param = Object.assign({}, {
        targetId: row.id
      });
      this.$ajax({
        method: "post",
        url: "/api/sysrole-api/queryRoleUserList",
        data: param
      }).then(function (resultData) {
        _this.roleData = resultData.data.data;
        _this.roleListLoading = false;
        console.log(_this.roleData);
      });

    },
    //显示新增界面
    handleAdd: function () {
      this.addFormVisible = true;
    },
    //新增
    addSubmit: function () {
      console.log(this.value)
      var _this = this;
      this.$refs.addForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.addLoading = true;
            let param = Object.assign({}, this.addForm);
            console.log(param);
            this.$ajax({
              method: "post",
              url: "/api/product/addproduct",
              params: param
            }).then(res => {
              this.addLoading = false;
              _this.getList();
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.addForm.hfName = '';
              this.addForm.productDesc = '';
              this.addFormVisible = false;
              // this.$refs["addForm"].resetFields();

              // this.getResult(1);
            });
          });
        }
      });
    },

    //显示组织结构
    orgSelect: function () {
      //加载组织结构树
      this.getTreeResult();

      //显示组织结构界面
      this.orgFormVisible = true;
    },
    //获取组织结构信息
    getTreeResult: function () {
      var _this = this;
      this.treeLoading = true;
      let param = Object.assign({}, {});
      this.$ajax({
        method: "post",
        url: "/api/sysorg-api/querySysOrgList",
        data: param
      }).then(
        function (resultData) {
          _this.treeData = resultData.data.data;
          _this.treeLoading = false;
        },
        function (resultData) {
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
    handleDeleteList: function () {
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
    handleEdit: function (index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
      if (row.positionname == null) {
        this.editForm.positionname = "选择岗位";
      }
      this.checkGei();
    }, //编辑
    editSubmit: function () {
      if (this.checked == true) {
        this.editForm.isLocked = "1";
      }
      if (this.checked == false) {
        this.editForm.isLocked = "0";
      }
      //主机构必填提示
      if (this.editForm.orgid == "") {
        this.$message({
          message: "请选择主机构",
          type: "error"
        });
        return;
      }
      //岗位必填提示
      if (this.editForm.positionid == "") {
        this.$message({
          message: "请选择岗位",
          type: "error"
        });
        return;
      }
      //如果性别未选择给默认值
      if (this.editForm.sex == "") {
        this.editForm.sex = "-1";
      }
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            let param = Object.assign({}, this.editForm);
            console.log(param);
            this.$ajax({
              method: "post",
              url: "/api/sysuser-api/addUser",
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
    handleSelect: function (index, row) {

      this.selectFormVisible = true;
      this.selectForm = Object.assign({}, row);
    },

    //批量选中
    selectChange: function (val) {
      console.log(111111)
      console.log(val)
      this.selectList = val;
    },
    //table序号
    indexMethod(index) {
      return index + 1;
    },
    //显示岗位列表
    positionSelect: function () {
      //加载岗位列表
      this.getPositionResult(1);

      //显示岗位构界面
      this.positionFormVisible = true;
    },
    //获取岗位列表
    getPositionResult: function (val) {
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
      }).then(function (resultData) {
        _this.positionTableData = resultData.data.data;
        _this.positionCount = resultData.data.count;
        _this.positionListLoading = false;
      });
    },
    //选中岗位
    handleChoice: function (index, row) {
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
    this.checkType();
    this.getList();

    // this.getResult(1);
  }
};
</script>

<style>
.el-table {
  overflow: auto;
}

.el-table__header-wrapper,
.el-table__body-wrapper,
.el-table__footer-wrapper {
  overflow: visible;
}

.el-table__body-wrapper {
  overflow-x: visible !important;
}

/* 这个是为了解决前面样式覆盖之后伪类带出来的竖线 */
.el-table::after {
  position: relative;
}
</style>
