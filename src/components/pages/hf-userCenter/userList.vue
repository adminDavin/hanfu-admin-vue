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
    <!-- 上传头像 -->
    <el-dialog title="上传头像" :limit="1" :visible.sync="pictureVisible" width="30%">
      <el-upload
        :auto-upload="false"
        class="avatar-uploader"
        action
        :limit="1"
        :on-change="handleChange"
      >
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="imageUrl" alt />
      </el-dialog>
      <span slot="footer" class="dialog-footer">
        <el-button @click="pictureVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户列表</span>
        <!-- <el-button size="mini" style="float: right;" type="primary" @click="addUser()">添加用户</el-button> -->
      </div>
      <el-table :data="userData" stripe style="width: 100%">
        <el-table-column prop="nickName" label="姓名" width="180" align="center"></el-table-column>
        <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
        <el-table-column prop="phone" label="邀请码" align="center"></el-table-column>
        <el-table-column prop="phone" label="拥有的邀请码" align="center"></el-table-column>
        <el-table-column label="头像" align="center">
          <template slot-scope="scope">
            <img
              src="http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20200105/c5162a9d6f484ce3b8ff464b27f8865f.jpeg"
              min-width="70"
              height="70"
            />
            <div>
              <el-button size="small" type="primary" @click="upload(scope.row)">上传头像</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="createDate" label="创建日期" width="180" align="center"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="deleteUser(scope.row)" type="text" size="small" align="center">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import userCenterService from "@/service/userCenter.js";
export default {
  data() {
    return {
      dialogVisible: false,
      userId: "",
      imageUrl: "",
      pictureVisible: false,
      addUserForm: {
        name: "杨莹",
        phone: "15022209253"
      },
      userData: [],
      addUserVisible: false,
      tableData: [
        {
          createDate: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    addUser: function() {
      this.addUserVisible = true;
    },
    handleChange(file, fileList) {
      console.log(file);
      userCenterService.uploadPicture(file, this.userId, res => {
        console.log(res);
      });
    },
    addUserSubmit: function() {
      userCenterService.addUser(this.addUserForm, res => {
        console.log(res);
        if (res.data.data === "该用户已经存在") {
          this.$message.error("该用户已经存在");
        } else {
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.addUserVisible = false;
          this.checkUser();
        }
      });
    },
    checkUser: function() {
      userCenterService.checkUser(res => {
        console.log(res.data.data);
        this.userData = res.data.data;
      });
    },
    upload: function(row, id) {
      this.userId = row.id;
      this.pictureVisible = true;
      console.log(row);
    },
    deleteUser: function(row) {
      console.log(row);
      userCenterService.deleteUser(row.id, res => {
        if (res.data.data === "删除成功") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.checkUser();
        } else {
          this.$message.error("删除失败");
        }
      });
    }
  },
  mounted() {
    this.checkUser();
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

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
