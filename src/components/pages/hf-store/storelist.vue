<template>
  <div>
    <el-card class="search-card">
      <div slot="header" class="clearfix">
        <span>店铺列表</span>
      </div>
      <hfsearch
        @parentByClick="childClick"
        :options="optionsStatus"
        labeltype="店铺状态"
        labelName="店铺名称"
      ></hfsearch>
    </el-card>

    <el-card class="box-card">
      <el-button type="primary" style="float: right;margin-bottom:10px;" @click="drawer = true">添加店铺</el-button>
      <el-table
        :data="storeData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        style="width: 100%"
        @row-click="getStoreId"
      >
        <el-table-column align="center" prop="hfName" label="店铺名称"></el-table-column>
        <el-table-column align="center" prop="hfDesc" label="店铺描述"></el-table-column>
        <el-table-column align="center" prop="hfStatus" label="店铺状态">
          <template slot-scope="scope">
            <span v-if="scope.row.hfStatus===0">未营业</span>
            <span v-if="scope.row.hfStatus===1">营业</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="address" label="店铺位置"></el-table-column>
        <el-table-column align="center" prop="hfDesc" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" align="center" @click="edit(scope.row.id)">编辑</el-button>

            <el-button type="text" size="small" align="center" @click="dialogVisible = true">添加店铺成员</el-button>

            <el-button
              type="text"
              size="small"
              align="center"
              @click="gostoreproduct(scope.row.id)"
            >店铺商品</el-button>

            <!-- <el-button  type="text" size="small" align="center" @click="getstoneproduct(scope.row.id)">店铺商品</el-button> -->
            <!-- <el-button  type="text" size="small" align="center" @click="getstoneproduct(scope.row.id)">添加店铺商品</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        style="float:right;margin-top:10px;"
        background
        layout="prev, pager, next"
        :total="storeData.length"
        :page-size="pagesize"
      ></el-pagination>
    </el-card>

    <div style="display:flex;">
      <div style="width:50%"></div>
      <!-- <div style="margin-left:20px;width:50%" >
     <div style="margin-bottom:20px;" >店铺经营状态</div>
     <div style="height:100px;background:#f0f0f0;margin-bottom:10px;">

     </div>
    <div style="margin-bottom:20px;" >店铺成员</div>
     <el-button type="primary" style="margin-bottom:10px;background:#ff0099;border-color:#ff0099;"  @click="dialogVisible = true">添加店铺成员</el-button>
    <el-table :data="Person" stripe style="width: 100%">
      <el-table-column align="center" prop="userId" label="用户id" ></el-table-column>
      <el-table-column align="center" prop="userName" label="姓名" ></el-table-column>
      <el-table-column align="center" prop="realName" label="昵称" ></el-table-column>
      <el-table-column align="center" prop="storeRoleName" label="角色" ></el-table-column>
      <el-table-column label="是否参与核销" align="center">
        <template slot-scope= "scope">
                <div v-if="scope.row.isCancel===1">是</div>
                <div v-if="scope.row.isCancel===0">否</div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="userPhone" label="手机号" ></el-table-column>
      <el-table-column align="center" prop="hfDesc" label="操作" >
             <template slot-scope= "scope">
                <el-button  type="text" size="small" align="center" @click="checkPersonDetail(scope.row)">查看</el-button>
              </template>
      </el-table-column>
    </el-table>
      </div>-->
    </div>

    <el-dialog width="50%" title="添加店铺" :visible.sync="drawer" center>
      <el-form
        style="width:25%;"
        :model="store"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="店铺名称" prop="hfName">
          <el-input v-model="store.hfName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺描述" prop="hfDesc">
          <el-input v-model="store.hfDesc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺状态" prop="hfStatus">
          <el-radio v-model="radioye" label="0" @change="status">未营业</el-radio>
          <el-radio v-model="radioye" label="1" @change="status">营业</el-radio>
        </el-form-item>
        <el-form-item label="店铺位置" prop="hfStatus">
          <el-input v-model="store.address"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button> -->
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </span>
    </el-dialog>

    <el-dialog title="编辑店铺" :visible.sync="editdrawer" :direction="direction" center>
      <div style="display:flex;">
        <el-form
          style="width:50%;"
          :model="editData"
          status-icon
          :rules="rules"
          ref="ruleForm1"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="店铺名称" prop="hfName">
            <el-input v-model="editData.hfName"></el-input>
          </el-form-item>
          <el-form-item label="店铺描述" prop="hfDesc">
            <el-input v-model="editData.hfDesc"></el-input>
          </el-form-item>
          <el-form-item label="店铺状态" prop="hfStatus">
            <el-radio v-model="radioye1" label="0" @change="status1">未营业</el-radio>
            <el-radio v-model="radioye1" label="1" @change="status1">营业</el-radio>
          </el-form-item>
          <el-form-item label="店铺位置" prop="hfStatus">
            <el-input v-model="editData.address"></el-input>
          </el-form-item>
          <el-form-item>
            <!-- <el-button type="primary" @click="submitedit('ruleForm')">提交</el-button> -->
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>
        </el-form>
        <el-upload
          style="margin-left:100px;"
          list-type="picture-card"
          ref="upload"
          action
          multiple
          :auto-upload="false"
          :file-list="fileList"
          :on-change="imgUpload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <!-- <div slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitedit('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- <el-drawer size="70%" title="编辑店铺" :visible.sync="editdrawer" :direction="direction">
      <div style="display:flex;">
        <el-form
          style="width:25%;"
          :model="editData"
          status-icon
          :rules="rules"
          ref="ruleForm1"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="店铺名称" prop="hfName">
            <el-input v-model="editData.hfName"></el-input>
          </el-form-item>
          <el-form-item label="店铺描述" prop="hfDesc">
            <el-input v-model="editData.hfDesc"></el-input>
          </el-form-item>
          <el-form-item label="店铺状态" prop="hfStatus">
            <el-radio v-model="radioye1" label="0" @change="status1">未营业</el-radio>
            <el-radio v-model="radioye1" label="1" @change="status1">营业</el-radio>
          </el-form-item>
          <el-form-item label="店铺位置" prop="hfStatus">
            <el-input v-model="editData.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitedit('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <el-upload
          style="margin-left:100px;"
          list-type="picture-card"
          ref="upload"
          action
          multiple
          :auto-upload="false"
          :file-list="fileList"
          :on-change="imgUpload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </div>
    </el-drawer>-->

    <el-dialog title="添加店铺成员" :visible.sync="dialogVisible" center>
      <el-table
        :data="userData"
        stripe
        height="250"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        ref="table"
        @row-click="currentChange"
      >
        <el-table-column type="selection" align="center" label="选择" width="50"></el-table-column>
        <el-table-column align="center" prop="nickName" label="用户名"></el-table-column>
        <el-table-column align="center" prop="phone" label="手机号"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <el-drawer :visible.sync="draweruser" :with-header="false">
      <template>
        <div style="margin-top:100px;margin-left:30px;">
          <div>
            <span style="font-size:13px;margin-right:12px;">是否参与核销</span>
            <el-radio v-model="radio" label="0" @change="changestatus">否</el-radio>
            <el-radio v-model="radio" label="1" @change="changestatus">是</el-radio>
          </div>
          <div style="margin-top:40px;">
            <span style="font-size:13px;">设置成员角色：</span>
            <el-select v-model="value" placeholder="请选择" @change="roleval">
              <el-option
                v-for="item in StoreRole"
                :key="item.roleName"
                :label="item.roleName"
                :value="item.roleName"
              ></el-option>
            </el-select>
          </div>
        </div>
      </template>
    </el-drawer>
    <!-- 店铺商品 -->
    <el-dialog title="店铺商品" :visible.sync="productVisible" width="30%">
      <el-table
        :data="list"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
        ref="table"
        @row-click="currentChange"
      >
        <el-table-column type="index" align="center" label="选择" width="50"></el-table-column>
        <el-table-column align="center" prop="productName" label="商品名称"></el-table-column>
        <el-table-column align="center" prop="productDesc" label="商品描述"></el-table-column>
        <el-table-column align="center" prop="categoryName" label="规格名称"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="productVisible = false" type="primary">关闭</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
      </span>
    </el-dialog>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import storeService from '@/service/store.js';
import userCenterService from '@/service/userCenter.js';
import constants from '@/store/constants.js';
import axios from 'axios';
import hfsearch from '../hf-eventsManage/hf-search';
export default {
  components: { hfsearch },
  data() {
    return {
      optionsStatus: [
        {
          id: '0',
          hfName: '未营业',
        },
        {
          id: '1',
          hfName: '营业',
        },
      ],
      fileList: [], // 图片
      currentPage: 1, // 初始页
      pagesize: 6, // 每页的数据
      productVisible: false,
      radioye1: '',
      radioye: '0',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      value: '',
      cancle: {
        stoneId: '',
        isCancel: '',
        userId: '',
      },
      radio: '0',
      draweruser: false,
      editid: '',
      editdrawer: false,
      selectDdata: [],
      storeId: '',
      persondata: {
        stoneId: '',
        ids: [],
      },
      Person: [],
      userData: [],
      dialogVisible: false,
      bossid: 1,
      rules: {
        hfName: [
          {
            required: true,
            message: '请输入店铺名称',
            trigger: 'blur',
          },
        ],
        hfDesc: [
          {
            required: true,
            message: '请输入店铺描述',
            trigger: 'blur',
          },
        ],
        address: [
          {
            required: true,
            message: '请输入店铺地址',
            trigger: 'blur',
          },
        ],
      },
      content: '',
      store: {
        hfName: '',
        hfDesc: '',
        hfStatus: 0,
        userId: '',
        address: '',
      },
      editData: {
        stoneId: '',
        hfName: '',
        hfDesc: '',
        hfStatus: '',
        userId: '',
        address: '',
      },
      drawer: false,
      direction: 'btt',
      storeData: [],
      StoreRole: [],
      roledata: {
        StoreRoleId: '',
        userId: '',
        storeId: '',
      },
      list: [],
    };
  },
  methods: {
    childClick(tableData) {
      if (tableData === -1) {
        this.getStore();
      } else {
        this.storeData = tableData;
      }
    },
    imgUpload(file) {
      let fileName = file.name;
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
      if (regex.test(fileName.toLowerCase())) {
        this.picUrl = URL.createObjectURL(file.raw);
        this.uploadFile(file);
      } else {
        this.$message.error('请选择图片文件');
      }
    },
    uploadFile(file) {
      let fd = new FormData();
      console.log(this.editid, file.raw);
      fd.append('file', file.raw);
      fd.append('stoneId', this.editid);
      axios.post('/api/api/product/stone/addStonePicture', fd).then((res) => {
        console.log(res);
      });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    gostoreproduct: function(id) {
      this.$router.push({
        path: '/hf-storeproduct',
        query: {
          id: id,
        },
      });
    },
    status1: function(e) {
      console.log(e);
      if (e === '0') {
        this.editData.hfStatus = 0;
      } else if (e === '1') {
        this.editData.hfStatus = 1;
      }
      console.log(this.editData);
    },
    status: function(e) {
      console.log(e);
      if (e === '0') {
        this.store.status = 0;
      } else if (e === '1') {
        this.store.status = 1;
      }
      console.log(this.store.status);
    },
    roleval: function(qqq) {
      console.log(qqq);
      for (var i = 0; i < this.StoreRole.length; i++) {
        if (this.StoreRole[i].roleName === qqq) {
          this.roledata.StoreRoleId = this.StoreRole[i].id;
        }
      }
      console.log(this.roledata);
      storeService.updateRole(this.roledata, (res) => {
        console.log(res);
        if (res.data.data === 0) {
          this.$message({
            message: '修改成功',
            type: 'success',
          });
          this.draweruser = false;
          this.checkPerson();
        } else {
          this.$message({
            message: '修改失败',
            type: 'error',
          });
        }
      });
    },
    getStoreRole: function() {
      storeService.getStoreRole(this.storeId, (res) => {
        console.log(res);
        this.StoreRole = res.data.data;
      });
    },
    changestatus: function(e) {
      console.log(e);
      this.cancle.isCancel = e;
      this.cancle.stoneId = this.persondata.stoneId;
      console.log(this.cancle);
      storeService.isCancel(this.cancle, (res) => {
        console.log(res);
        if (res.data.status === constants.SUCCESS_CODE) {
          this.$message({
            message: '修改成功',
            type: 'success',
          });
          this.draweruser = false;
          this.checkPerson();
        } else {
          this.$message({
            message: '修改失败',
            type: 'error',
          });
        }
      });
    },
    checkPersonDetail: function(row) {
      console.log(row);
      this.radio = row.isCancel;
      this.roledata.userId = row.userId;
      if (row.isCancel === 0) {
        this.radio = '0';
      } else {
        this.radio = '1';
      }
      this.roledata.storeId = this.storeId;
      this.cancle.userId = row.userId;
      this.draweruser = true;
      this.getStoreRole();
    },
    submitedit: function() {
      storeService.updataStore(this.editData, (res) => {
        console.log(res);
        if (res.data.status === constants.SUCCESS_CODE) {
          this.$message({
            message: '修改成功',
            type: 'success',
          });
          this.centerDialogVisible = false;
          this.editdrawer = false;
          this.getStore();
        } else {
          this.$message({
            message: '修改失败',
            type: 'error',
          });
        }
      });
    },
    edit: function(id) {
      console.log(id);
      this.editid = id;
      this.editData.stoneId = id;
      this.editdrawer = true;
      storeService.getStoreid(this.editid, (res) => {
        console.log(res);
        this.editData.hfName = res.data.data.hfName;
        console.log(this.editData.hfName);
        this.editData.hfDesc = res.data.data.hfDesc;
        this.editData.hfStatus = res.data.data.hfStatus;
        if (this.editData.hfStatus === 0) {
          this.radioye1 = '0';
        } else {
          this.radioye1 = '1';
        }
        this.editData.address = res.data.data.address;
      });
      console.log(this.editData);
    },
    handleSelectionChange(val) {
      console.log(val);
      this.selectDdata = val;
    },
    // eslint-disable-next-line no-empty-function
    currentChange: function(row) {
      console.log(row);
      // this.persondata.personid = row.id;
      this.$refs.table.toggleRowSelection(row);
    },
    getStoreId: function(row) {
      // console.log(row);
      this.storeId = row.id;
      this.persondata.stoneId = row.id;
      this.checkPerson();
    },
    submit: function() {
      if (this.selectDdata.length > 0) {
        for (var i = 0; i < this.selectDdata.length; i++) {
          this.persondata.ids.push(this.selectDdata[i].id);
        }
      }
      console.log(this.persondata);
      storeService.addPerson(this.persondata, (res) => {
        // console.log(res);
        if (res.data.status === constants.SUCCESS_CODE) {
          this.$message({
            message: '添加成功',
            type: 'success',
          });
          this.dialogVisible = false;
        } else {
          this.$message({
            message: '添加失败',
            type: 'error',
          });
        }
      });
    },
    chooseInstance(val) {
      if (val.length > 1) {
        this.$refs.table.clearSelection();
        this.$refs.table.toggleRowSelection(val.pop());
      }
    },
    checkPerson: function() {
      storeService.checkPerson(this.storeId, (res) => {
        console.log(res);
        this.Person = res.data.data;
      });
    },
    checkUser: function() {
      userCenterService.checkUser((res) => {
        // console.log(res.data.data);
        this.userData = res.data.data.list;
      });
    },
    getStore: function() {
      storeService.getStore({ bossid: this.bossid }, (res) => {
        console.log(res);
        this.storeData = res.data.data;
        this.storeId = this.storeData[0].id;
        this.persondata.stoneId = this.storeData[0].id;
        this.checkPerson();
      });
    },
    submitForm(formName) {
      console.log(this.store);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          storeService.addStore(this.store, (res) => {
            // console.log(res);
            this.$message({
              message: '添加成功',
              type: 'success',
            });
            this.getStore();
          });
          this.$refs[formName].resetFields();
          this.drawer = false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  // eslint-disable-next-line no-empty-function
  mounted() {
    var content = window.sessionStorage.getItem('userInfor');
    this.content = JSON.parse(content);
    this.store.userId = this.content.id;
    this.editData.userId = this.content.id;
    this.checkUser();
    this.getStore();
  },
};
</script>
<style scoped>
thead .el-table-column--selection .cell {
  display: none;
}
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row > td {
  background-color: #9fb6cd;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: hsl(210, 32%, 71%, 0.5);
}
.search-card {
  margin-bottom: 25px;
}
</style>
