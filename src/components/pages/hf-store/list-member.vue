<template>
  <div>
    <el-button
      type="primary"
      style="margin-bottom:10px;background:#ff0099;border-color:#ff0099;"
      @click="dialogVisible = true"
    >添加店铺成员</el-button>
    <el-table :data="Person" stripe style="width: 100%">
      <el-table-column align="center" prop="userId" label="用户id"></el-table-column>
      <el-table-column align="center" prop="userName" label="姓名"></el-table-column>
      <el-table-column align="center" prop="realName" label="昵称"></el-table-column>
      <el-table-column align="center" prop="storeRoleName" label="角色"></el-table-column>
      <el-table-column label="是否参与核销" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.isCancel===1">是</div>
          <div v-if="scope.row.isCancel===0">否</div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="userPhone" label="手机号"></el-table-column>
      <el-table-column align="center" prop="hfDesc" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            align="center"
            @click="checkPersonDetail(scope.row)"
          >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加店铺成员弹窗 -->
    <el-dialog :visible.sync="dialogVisible">
      <el-table
        :data="userData"
        stripe
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
  </div>
</template>

<script>
import storeService from '@/service/store.js';
import userCenterService from '@/service/userCenter.js';
import constants from '@/store/constants.js';
export default {
  props: {
    stoneId: {
      type: String,
      default: '1',
    },
  },
  data() {
    return {
      dialogVisible: false,
      draweruser: false,
      Person: [],
      userData: [],
      StoreRole: [],
      value: '',
      radio: '0',
      roledata: {
        StoreRoleId: '',
        userId: '',
        storeId: '',
      },
      cancle: {
        stoneId: '',
        isCancel: '',
        userId: '',
      },
    };
  },
  mounted() {
    this.checkUser();
    this.checkPerson();
  },
  methods: {
    checkPerson: function() {
      console.log(this.stoneId);
      let stoneId = this.stoneId;
      storeService.checkPerson(stoneId, (res) => {
        console.log(res);
        this.Person = res.data.data;
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
    checkUser: function() {
      userCenterService.checkUser((res) => {
        // console.log(res.data.data);
        this.userData = res.data.data.list;
      });
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
    getStoreRole: function() {
      storeService.getStoreRole(this.storeId, (res) => {
        console.log(res);
        this.StoreRole = res.data.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
