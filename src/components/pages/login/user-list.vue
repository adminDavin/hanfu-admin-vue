<template>
  <div class="p20">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- <el-tab-pane label="我的账户" name="first"></el-tab-pane> -->

      <el-tab-pane label="账户列表" name="second">
        <el-card class="box-card">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="accountCode" label="手机号"></el-table-column>
            <el-table-column prop="accountRole" label="账号类型">
              <template slot-scope="scope">
                <div>{{scope.row.accountRole=='Super Admin'?'超管账号':'普通账号'}}</div>
              </template>
            </el-table-column>
            <el-table-column prop="accountType" label="类型"></el-table-column>
            <el-table-column prop="isDeleted" label="状态">
              <template slot-scope="scope">
                <div>{{scope.row.isDeleted=='2'?'在线':'离线'}}</div>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  :disabled="scope.row.isDeleted=='0'"
                  type="text"
                  @click="handleEdit(scope.$index, scope.row)"
                >下线</el-button>
                <el-button size="mini" type="text" @click="binding(scope.$index, scope.row)">绑定</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-tab-pane>

      <el-tab-pane label="新增子账户" name="third">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>新增子账户信息</span>
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- <el-form-item label="用户昵称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>-->
            <!-- <el-form-item label="密码" prop="pass">
              <el-input v-model="ruleForm.pass"></el-input>
            </el-form-item>-->
            <el-form-item label="手机号" prop="authKey">
              <el-input v-model="ruleForm.authKey"></el-input>
            </el-form-item>
            <el-form-item label="账户属性" prop="type">
              <el-radio-group v-model="ruleForm.type">
                <el-radio v-model="ruleForm.type" label="boss">超级管理</el-radio>
                <el-radio v-model="ruleForm.type" label="stone">店铺管理员</el-radio>
                <el-radio v-model="ruleForm.type" label="warehouse">仓库管理</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-tab-pane>
    </el-tabs>

    <el-dialog title="绑定" :visible.sync="centerDialogVisible" width="30%" center>
      <el-table
        ref="multipleTable"
        :data="tablelist"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <!-- <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column> -->
        <el-table-column prop="roleName" label="名称" width="120"></el-table-column>
        <el-table-column prop="roleType" label="类型" show-overflow-tooltip></el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="preserve">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store';
import api from '@/service/hf-auth-api.js';
import juris from '@/service/jurisdiction.js';
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号不合法'));
      }
      callback();
    };
    return {
      centerDialogVisible: false,
      tablelist: [],
      BSid: '',
      type: '',
      formInline: {
        id: '',
        roleId: [],
      },
      ruleForm: {
        name: '',
        pass: '',
        authKey: '',
        delivery: false,

        LastUser: '', // 添加人id
        authType: '2', // 鉴权方式, 1:用户登录, 2:手机号登录
        type: 'warehouse',
        BSid: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        type: [
          { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        authKey: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { validator: checkMobile, trigger: 'change' },
        ],
      },
      activeName: 'second',
      tableData: [],
    };
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
      this.formInline.roleId = [];
      for (var i = 0;i < val.length;i++) {
        this.formInline.roleId.push(val[i].id);
      }
      console.log(this.formInline.roleId);
    },
    binding(index, row) {
      console.log(row);
      this.centerDialogVisible = true;
      this.formInline.id = row.id;
    },
    preserve () {
      juris.addUserRole(this.formInline, (res) => {
        this.centerDialogVisible = false;
        this.$message({
          message: '绑定成功',
          type: 'success',
        });
      });
    },
    // 获取角色
    determine() {
      let id = store.getUser().accountId;
      juris.selectAccountRole(id, (res) => {
        console.log('角色', res);
        this.tablelist = res.data.data;
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
      api.deleteAccount(row, (res) => {
        this.$message({
          message: '下线成功',
          type: 'success',
        });
        this.selectAccount();
      });
    },
    takestore() {
      let data = store.getUser();
      this.ruleForm.BSid = data.BSid;
      this.ruleForm.LastUser = data.id;
    },
    selectAccount() {
      api.selectAccount((res) => {
        console.log(res);
        this.tableData = res.data.data;
      });
    },
    submitForm(formName) {
      console.log(this.ruleForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.addSup(this.ruleForm, (res) => {
            console.log(res);
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  created() {
    this.takestore();
    this.selectAccount();
    this.determine();
  },
};
</script>

<style lang="less" scoped>
.p20 {
  padding: 20px;
}
</style>
