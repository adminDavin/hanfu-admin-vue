<template>
  <div>
    <!-- 添加用户 -->
    <el-dialog title="添加用户" :visible.sync="addUserVisible" width="30%">
      <el-form label-width="80px" :model="addUserForm">
        <el-form-item label="用户名">
          <el-input v-model="addUserForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="addUserForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addUserVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUserSubmit()">确 定</el-button>
      </span>
    </el-dialog>
    <el-tabs v-model="activeName" @tab-click="select">
      <el-tab-pane label="基本信息" name="first">
        <el-card class="first-card" style="
         background:#fafafa;color:#666;">
          <div
            style="
         padding:10px;
         width:100%;align-items:center;flex-wrap:wrap;
        background:#fafafa;color:#666;font-size:12px;"
          >
            <div>商家姓名： {{jinben.bossName}}</div>
            <div style="margin-top:26px;">手机号： {{jinben.phone}}</div>
            <div style="margin-top:26px;">注册资本： {{jinben.registeredCapital}} 万</div>
            <div
              class="info"
              style="margin-top:26px;line-height:20px;"
            >经营范围： {{jinben.businessScope}}</div>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="店铺管理员列表" name="second">
        <el-card class="search-card">
          <hfsearch @parentByClick="childClick" labeltype="手机号" labelName="姓名"></hfsearch>
        </el-card>
        <el-card class="box-card">
          <el-table
            :data="Admindata.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            style="width: 100%"
          >
            <el-table-column prop="userId" label="id" width="180" align="center"></el-table-column>
            <el-table-column prop="userName" label="姓名" width="180" align="center"></el-table-column>
            <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
            <!-- <el-table-column prop="phone" label="邮箱" align="center"></el-table-column> -->
            <!-- <el-table-column prop="invitationCode" label="邀请码" align="center"></el-table-column>
            <el-table-column prop="ownInvitationCode" label="拥有的邀请码" align="center"></el-table-column>-->
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="godetail(scope.row.userId)"
                  type="text"
                  size="small"
                  align="center"
                >详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            style="float:right;"
            background
            layout="prev, pager, next"
            :total="userData.length"
            :page-size="pagesize"
          ></el-pagination>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="用户列表" name="third">
        <el-card class="search-card">
          <hfsearch @parentByClick="childClick2" identify="identify" labeltype="手机号" labelName="姓名"></hfsearch>
        </el-card>

        <el-card class="box-card">
          <el-table
            :data="userData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            style="width: 100%"
          >
              <el-table-column
      type="index"
      label="序号"
      >
    </el-table-column>
            <el-table-column prop="nickName" label="微信名称" width="180" align="center"></el-table-column>
            <el-table-column prop="realName" label="真实名称" width="180" align="center"></el-table-column>
            <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
            <!-- <el-table-column prop="phone" label="邮箱" align="center"></el-table-column> -->
            <el-table-column prop="invitationCode" label="邀请码" align="center"></el-table-column>
            <el-table-column prop="ownInvitationCode" label="拥有的邀请码" align="center"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="godetail(scope.row.id)"
                  type="text"
                  size="small"
                  align="center"
                >详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            style="float:right;"
            background
            layout="prev, pager, next"
            :total="userData.length"
            :page-size="pagesize"
          ></el-pagination>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import userCenterService from '@/service/userCenter.js';
import hfsearch from '../hf-eventsManage/hf-search';
export default {
  components: { hfsearch },
  data() {
    return {
      jinben: {},
      bossid: 1,
      message: '用户列表',
      activeName: 'first',
      currentPage: 1, // 初始页
      pagesize: 10, // 每页的数据
      dialogVisible: false,
      userId: '',
      imageUrl: '',
      pictureVisible: false,
      addUserForm: {
        name: '杨莹',
        phone: '15022209253',
      },
      userData: [],
      addUserVisible: false,
      tableData: [],
      Admindata: [],
    };
  },
  methods: {
    childClick(tableData) {
      if (tableData === -1) {
        this.checkAdmin();
      } else {
        this.Admindata = tableData;
      }
    },
    childClick2(tableData) {
      if (tableData === -1) {
        this.checkUser();
      } else {
        this.userData = tableData;
      }
    },
    bossinfor: function() {
      userCenterService.bossinfor(this.bossid, (res) => {
        console.log(res);
        this.jinben = res.data.data;
        // this.Admindata = res.data.data;
      });
    },
    checkAdmin: function(tab) {
      userCenterService.checkAdmin(this.bossid, (res) => {
        console.log(res);
        this.Admindata = res.data.data;
      });
    },
    // eslint-disable-next-line no-empty-function
    select: function(tab) {
      console.log(tab.label);
      this.message = tab.label;
    },
    godetail: function(row) {
      this.$router.push({
        path: '/userDetail',
        query: {
          id: row,
        },
      });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    addUser: function() {
      this.addUserVisible = true;
    },
    handleChange(file, fileList) {
      console.log(file);
      userCenterService.uploadPicture(file, this.userId, (res) => {
        console.log(res);
      });
    },
    addUserSubmit: function() {
      userCenterService.addUser(this.addUserForm, (res) => {
        console.log(res);
        if (res.data.data === '该用户已经存在') {
          this.$message.error('该用户已经存在');
        } else {
          this.$message({
            message: '添加成功',
            type: 'success',
          });
          this.addUserVisible = false;
          this.checkUser();
        }
      });
    },
    checkUser: function() {
      userCenterService.checkUser((res) => {
        console.log(res.data.data);
        this.userData = res.data.data.list;
      });
    },
    deleteUser: function(row) {
      console.log(row);
      this.$confirm('确认删除吗？', '提示', {}).then(() => {
        userCenterService.deleteUser(row.id, (res) => {
          if (res.data.data === '删除成功') {
            this.$message({
              message: '删除成功',
              type: 'success',
            });
            this.checkUser();
          } else {
            this.$message.error('删除失败');
          }
        });
      });
    },
  },
  mounted() {
    this.checkUser();
    this.checkAdmin();
    this.bossinfor();
  },
};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
