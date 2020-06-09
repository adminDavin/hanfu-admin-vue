/* eslint-disable no-unused-vars */
<template>
<div>
         <el-card class="search-card">
    <div style="border-bottom: 1px solid #E5E5E5;padding-bottom:5px;">
         <span style=" padding: 0 10px 5px 10px;border-bottom: 2px solid  #A3A0FB;color:#A3A0FB;font-size:14px;">仓库管理</span>
    </div>
<div  @click="dialogFormVisible = true" style="color:#fff;font-size:14px; justify-content:center; background:#A6A3FB;border-radius: 4px;margin-top: 14px;font-size: 12px;float:right;    width: 89px;height: 28px;display:flex;align-items:center;">+添加仓库</div>
         <el-table
    :data="canglist"
    stripe
    style="width: 100%">
    <el-table-column
      prop="hfName"
      label="仓库名称"
       align="center"
     >
    </el-table-column>
    <el-table-column
      prop="hfRegion"
      label="仓库地址"
       align="center"
      >
    </el-table-column>
     <el-table-column
      prop="lastModifier"
      label="操作人"
       align="center"
      >
    </el-table-column>
    <el-table-column
      label="创建时间"
      align="center"
      >
      <template slot-scope="scope">
          <span>{{scope.row.createTime[0]+'-'+scope.row.createTime[1]+'-'+scope.row.createTime[2]+'   '+'   '+scope.row.createTime[3]+':'+scope.row.createTime[4]+':'+scope.row.createTime[5]}}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="更新时间"
      align="center"
    >
      <template slot-scope="scope">
          <span>{{scope.row.modifyTime[0]+'-'+scope.row.modifyTime[1]+'-'+scope.row.modifyTime[2]+'   '+'   '+scope.row.modifyTime[3]+':'+scope.row.createTime[4]+':'+scope.row.modifyTime[5]}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="操作"
      align="center"
    >
      <template slot-scope="scope">
          <span  @click="check(scope.row)" style="color:#FFCE26;">查看</span>
          <span  @click="edit(scope.row)" style="color:#A6A3FB;margin-left:10px;">编辑</span>
          <span @click="del(scope.row.id)" style="color:#FF318A;margin-left:10px;">删除</span>
      </template>
    </el-table-column>
  </el-table>
    </el-card>

<el-dialog title="添加仓库" :visible.sync="dialogFormVisible">
  <el-form :model="form"
         :rules="rules"
        ref="ruleForm"
          label-width="100px"
        class="demo-ruleForm">

    <el-form-item label="仓库名称" prop="hfName">
      <el-input  style="width:270px;" v-model="form.hfName" ></el-input>
    </el-form-item>
     <el-form-item label="仓库地址" prop="hfRegion">
      <el-input  style="width:270px;" v-model="form.hfRegion" ></el-input>
    </el-form-item>
     <el-form-item label="仓库描述" prop="hfDesc" style="margin-top:20px;">
          <el-input
            style="width:500px;"
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="form.hfDesc"
            maxlength="60"
            show-word-limit
          ></el-input>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer" style="text-align:center;">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit('ruleForm')">保存</el-button>
  </div>
</el-dialog>
<el-dialog title="编辑仓库" :visible.sync="dialogFormVisible1">
  <el-form :model="form1"
         :rules="rules"
        ref="ruleForm1"
          label-width="100px"
        class="demo-ruleForm">

    <el-form-item label="仓库名称" prop="hfName">
      <el-input  style="width:270px;" v-model="form1.hfName" ></el-input>
    </el-form-item>
     <el-form-item label="仓库地址" prop="hfRegion">
      <el-input  style="width:270px;" v-model="form1.hfRegion" ></el-input>
    </el-form-item>
     <el-form-item label="仓库描述" prop="hfDesc" style="margin-top:20px;">
          <el-input
            style="width:500px;"
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="form1.hfDesc"
            maxlength="60"
            show-word-limit
          ></el-input>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer" style="text-align:center;">
    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="submit1('ruleForm1')">保存</el-button>
  </div>
</el-dialog>
</div>

</template>
<script>
// eslint-disable-next-line no-unused-vars
import cang from '@/service/cang.js';
import constants from '@/store/constants.js';
export default {
  name: 'store',
  data() {
    return {
      dialogFormVisible1: false,
      boss: {
        bossId: 1,
      },
      canglist: [],
      rules: {

        hfName: [
          {
            required: true,
            message: '请输入仓库名称',
            trigger: 'blur',
          },
        ],
        hfDesc: [
          {
            required: true,
            message: '请输入仓库描述',
            trigger: 'blur',
          },
        ],
        hfRegion: [
          {
            required: true,
            message: '请输入仓库地址',
            trigger: 'blur',
          },
        ],
      },
      content: {},
      dialogFormVisible: false,
      form1: {
        hfDesc: '',
        bossId: 1,
        hfName: '',
        hfRegion: '',
        userId: '',
        username: '',
        id: '',
      },
      form: {
        hfDesc: '',
        bossId: 1,
        hfName: '',
        hfRegion: '',
        userId: '',
        username: '',
      },
      collapse: false,
    };
  },
  methods: {
    check: function(row) {
      this.$router.push({
        path: '/check?id=' + row.id,
      });
    },
    edit: function(row) {
      this.dialogFormVisible1 = true;
      console.log(row);
      this.form1 = row;
    },
    del: function(id) {
      cang.delcang(id, (res) => {
        if (res.data.status === constants.SUCCESS_CODE) {
          this.$message({
            message: '删除成功',
            type: 'success',
          });
          this.dialogFormVisible = false;
          this.checkcang();
        } else {
          this.$message({
            message: '删除失败',
            type: 'error',
          });
        }
      });
    },
    submit1: function (ruleForm1) {
      this.form1.userId = this.content.id;
      this.$refs[ruleForm1].validate((valid) => {
        if (valid) {
          console.log(this.form1);
          cang.editcang(this.form1, (res) => {
            if (res.data.status === constants.SUCCESS_CODE) {
              this.$message({
                message: '编辑成功',
                type: 'success',
              });
              this.dialogFormVisible1 = false;
              this.checkcang();
            } else {
              this.$message({
                message: '编辑失败',
                type: 'error',
              });
            }
          });
        }
      });
    },
    submit: function (ruleForm) {
      this.form.userId = this.content.id;
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          console.log(this.form);
          cang.addcang(this.form, (res) => {
            if (res.data.status === constants.SUCCESS_CODE) {
              this.$message({
                message: '添加成功',
                type: 'success',
              });
              this.dialogFormVisible = false;
              this.checkcang();
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
    checkcang: function () {
      console.log(this.boss);
      cang.checkcang(this.boss, (res) => {
        console.log(res);
        this.canglist = res.data.data;
      });
    },
  },
  mounted() {
    this.checkcang();
    var content = window.sessionStorage.getItem('userInfor');
    this.content = JSON.parse(content);
    console.log(this.content);
  },
};
</script>
