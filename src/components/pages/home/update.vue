<template>
  <div>
    <el-form
      ref="guiform"
      :model="use"
      status-icon
      style="width:500px;"
      :rules="rule"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="nickName">
        <el-input type="name" v-model="use.nickName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="pass">
        <el-input v-model="use.phone" autocomplete="off" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="邀请码" prop="invitationCode">
        <el-input v-model="use.invitationCode" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updatePerson">提交</el-button>
        <el-button @click="resetForm('guiform')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import userCenterService from '@/service/userCenter.js';
export default {
  data() {
    return {
      rule: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
      },
      use: {
        invitationCode: '',
        phone: '',
        userId: '',
        nickName: '',
      },
      ruleForm: {
        nickName: '',
      },
    };
  },
  methods: {
    updatePerson: function() {
      this.$refs.guiform.validate((valid) => {
        console.log(this.use);
        userCenterService.updatePerson(this.use, (res) => {
          console.log(res);
          if (res.data.data === 1) {
            this.$message({
              message: '更新成功',
              type: 'success',
            });
            //  this.$refs[guiform].resetFields();
          }
        });
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(guiform) {
      this.$refs[guiform].resetFields();
    },
  },
  mounted() {
    var content = window.sessionStorage.getItem('userInfor');
    this.content = JSON.parse(content);
    this.use.userId = this.content.id;
    this.use.phone = this.content.phone;
    console.log(this.content);
  },
};
</script>
