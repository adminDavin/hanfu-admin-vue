<template>
  <div style>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>权限管理>查看</span>
  </div>
     <div style="overflow:hidden;margin-bottom:30px;float:right;">
      <el-button type="primary" @click="desdrawer=true">添加特权</el-button>
    </div>
    <el-table :data="miaodata" stripe style>
      <el-table-column type="index" align="center" label="序号"></el-table-column>
      <el-table-column prop="prerogative" align="center" label="特权名称"></el-table-column>
      <el-table-column prop="levelDescribe" align="center" label="特权描述"></el-table-column>
      <el-table-column prop="startTime" align="center" width="180" label="开始时间"></el-table-column>
      <el-table-column prop="expireTime" align="center" width="180" label="结束时间"></el-table-column>
      <el-table-column prop="levelDescribe" align="center" label="状态">
        <template slot-scope="scope">
          <span v-if="scope.row.prerogativeState==-1">不生效</span>
          <span v-if="scope.row.prerogativeState==1">生效</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="deletevip(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</el-card>


    <el-dialog width="40%" title="添加特权" :visible.sync="desdrawer" center>
      <el-form
        :model="ruleForm3"
        status-icon
        :rules="rules3"
        ref="ruleForm3"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="特权名称" prop="prerogative">
          <el-input style="width:300px;" v-model="ruleForm3.prerogative" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特权描述" prop="levelDescribe">
          <el-input style="width:300px;" v-model="ruleForm3.levelDescribe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="startTime">
          <el-date-picker
            @change="uptime1"
            v-model="ruleForm3.startTime"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="expireTime">
          <el-date-picker
            @change="uptime2"
            v-model="ruleForm3.expireTime"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm3('ruleForm3')">提交</el-button> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="desdrawer = false">取 消</el-button>
        <el-button type="primary" @click="submitForm3('ruleForm3')">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import vip from '@/service/vip.js';
export default {
  data() {
    return {
      desdrawer: false,
      miaodata: [],
      ruleForm3: {
        expireTime: '',
        startTime: '',
        prerogative: '',
        levelDescribe: '',
        levelId: '',
      },
      rules3: {
        prerogative: [
          {
            required: true,
            message: '请输入特权名称',
            trigger: 'blur',
          },
        ],
        levelDescribe: [
          {
            required: true,
            message: '请输入特权描述',
            trigger: 'blur',
          },
        ],
        startTime: [
          {
            required: true,
            message: '请输入开始时间',
            trigger: 'blur',
          },
        ],
        expireTime: [
          {
            required: true,
            message: '请输入结束时间',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
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
      console.log(val);
      this.ruleForm3.startTime = this.formatDate(val);
    },
    uptime2: function(val) {
      console.log(val);
      this.ruleForm3.expireTime = this.formatDate(val);
    },
    finddesnum: function(aaa) {
      console.log(aaa);
      this.ruleForm3.levelId = aaa.id;
      vip.finddes(aaa.id, (res) => {
        console.log(res);
        this.miaodata = res.data.data;
      });
    },
    submitForm3(ruleForm3) {
      this.$refs[ruleForm3].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm3);
          vip.adddes(this.ruleForm3, (res) => {
            console.log(res);
            // eslint-disable-next-line no-magic-numbers
            if (res.data.status === 200) {
              this.$message({
                message: '添加成功',
                type: 'success',
              });
              this.desdrawer = false;
              vip.finddes(this.ruleForm3.levelId, (res) => {
                console.log(res);
                this.miaodata = res.data.data;
              });
            } else {
              this.$message({
                message: '添加失败',
                type: 'error',
              });
            }
          });
        }
      });
    },
    checkLevel: function() {
      vip.checkLevel((res) => {
        console.log(res);
        this.levellist = res.data.data;
        this.ruleForm3.levelId = this.levellist[0].id;
        vip.finddes(this.levellist[0].id, (res) => {
          console.log(res);
          this.miaodata = res.data.data;
        });
      });
    },
  },
  mounted() {
    this.checkLevel();
  },
};
</script>

<style lang="less" scoped>
.element.style {
  width: 0;
}
</style>
