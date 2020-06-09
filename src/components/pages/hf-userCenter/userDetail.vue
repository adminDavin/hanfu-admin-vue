<template>
<div class="wrapper">
    <div style="background: #99a9bf;">用户详情</div>
     <el-form style="width:500px;margin-top:60px;margin-left:20%;"  :model="userdata" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
        label="姓名:"
        prop="nickName"
    >
        <el-input   :disabled="true" v-model.number="userdata.nickName" autocomplete="off"></el-input>
    </el-form-item>
      <el-form-item
        label="手机号:"
        prop="phone"
    >
        <el-input   :disabled="true" v-model.number="userdata.phone" autocomplete="off"></el-input>
    </el-form-item>
      <el-form-item
        label="邀请码:"
        prop="invitationCode"
    >
        <el-input   :disabled="true" v-model.number="userdata.invitationCode" autocomplete="off"></el-input>
    </el-form-item>
      <el-form-item
        label="拥有的邀请码:"
        prop="ownInvitationCode"
    >
        <el-input   :disabled="true" v-model.number="userdata.ownInvitationCode" autocomplete="off"></el-input>
    </el-form-item>
</el-form>
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import userCenterService from '@/service/userCenter.js';

export default {
  name: 'store',
  data() {
    return {
      id: '',
      collapse: false,
      userdata: {},
    };
  },
  methods: {
    getDetail: function() {
      userCenterService.getUserDetails(this.id, (res) => {
        console.log(res);
        this.userdata = res.data.data;
      });
    },
  },
  // eslint-disable-next-line no-empty-function
  mounted() {
    this.id = this.$route.query.id;
    this.getDetail();
  },
};
</script>

