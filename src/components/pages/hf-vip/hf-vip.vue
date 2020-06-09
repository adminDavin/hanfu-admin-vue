<template>
  <div>
    <el-tabs>
      <el-tab-pane label="会员列表">
        <el-card class="search-card">
          <hfsearch @parentByClick="childClick" :options="options" labeltype="手机号" labelName="会员名"></hfsearch>
        </el-card>

        <el-card class="box-card">
          <div style="margin-right:120px;">
            <el-button type="primary" style="float:right;" @click="draweradd = true">添加会员</el-button>
          </div>
          <el-table :data="manage" stripe style="width: 100%">
            <el-table-column prop="name" align="center" label="会员名"></el-table-column>
            <el-table-column prop="phone" align="center" label="手机号"></el-table-column>
            <el-table-column prop="levelName" align="center" label="会员等级"></el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
                <el-button type="text" @click="deletevip(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-tab-pane>

      <el-tab-pane label="特权管理">
        <el-card class="box-card">
          <div >
            <div style="width:100%;">
              <div style="overflow:hidden;margin-bottom:30px;margin-right:120px;float:right;">
                <el-button type="primary" @click="drawer=true">添加等级</el-button>
              </div>
              <el-table :data="levellist" stripe style @row-click="finddesnum">
                <el-table-column prop="levelName" align="center" label="等级名称"></el-table-column>
                <!-- <el-table-column prop="levelName" align="center" label="等级排序"></el-table-column> -->
                <el-table-column prop="levelDescribe" align="center" label="等级描述"></el-table-column>
                <el-table-column align="center" label="操作">
                  <template slot-scope="scope">
                    <!-- <el-button type="text" @click="addmiao(scope.row)">添加等级描述</el-button> -->
                    <el-button
                      @click="editlevel(scope.row)"
                      type="text"
                      size="small"
                      align="center"
                    >修改</el-button>
                     <el-button
                      @click="privilege(scope.row)"
                      type="text"
                      size="small"
                      align="center"
                    >查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <!-- <div style="margin-left:20px;">
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
            </div> -->
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>

    <!-- <el-drawer size="50%" title="添加特权" :visible.sync="desdrawer" :direction="direction">
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
        <el-form-item label="有效期开始时间" prop="startTime">
          <el-date-picker
            @change="uptime1"
            v-model="ruleForm3.startTime"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="有效期结束时间" prop="expireTime">
          <el-date-picker
            @change="uptime2"
            v-model="ruleForm3.expireTime"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm3('ruleForm3')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-drawer> -->

    <el-dialog width="33%" title="添加等级" :visible.sync="drawer" center>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="等级名称" prop="name">
          <el-input style="width:300px;" v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="等级描述" prop="name">
          <el-input style="width:300px;" v-model="ruleForm.levelDescribe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-select v-model="ruleForm.level" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button> -->
        </el-form-item>
      </el-form>
       <span slot="footer" class="dialog-footer">
        <el-button @click="drawer = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">保 存</el-button>
      </span>
    </el-dialog>

    <el-dialog width="50%" title="添加会员" :visible.sync="draweradd" center>
      <el-form
        :model="ruleForm1"
        status-icon
        :rules="rules1"
        ref="ruleForm1"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="等级名称" prop="levelName" style="margin-top:10px;">
          <el-select v-model="ruleForm1.levelName" placeholder="请选择" @change="getchang">
            <el-option
              v-for="item in levellist"
              :key="item.id"
              :label="item.levelName"
              :value="item.levelName"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm1('ruleForm1')">提交</el-button> -->
        </el-form-item>
      </el-form>

      <el-table
        :data="userData"
        stripe
        height="250"
        style="width: 100%;margin-top:30px;"
        @selection-change="handleSelectionChange"
        ref="table"
        @row-click="currentChange"
      >
        <el-table-column type="selection" align="center" label="选择" width="50"></el-table-column>
        <el-table-column align="center" prop="realName" label="用户名"></el-table-column>
        <el-table-column align="center" prop="phone" label="手机号"></el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button @click="draweradd = false">取 消</el-button>
        <el-button type="primary" @click="submitForm1('ruleForm1')">提 交</el-button>
      </span>
    </el-dialog>


    <el-dialog width="33%" title="修改等级1" :visible.sync="leveledit" center>
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="等级名称" prop="name">
          <el-input style="width:300px;" v-model="ruleForm2.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="等级描述" prop="levelDescribe">
          <el-input style="width:300px;" v-model="ruleForm2.levelDescribe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" style="background:#A3A0FB;" @click="submitForm2('ruleForm2')">提交</el-button> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="leveledit = false">取 消</el-button>
        <el-button type="primary" @click="submitForm2('ruleForm2')">提 交</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import userCenterService from '@/service/userCenter.js';
import constants from '@/store/constants.js';
import vip from '@/service/vip.js';
import hfsearch from '../hf-eventsManage/hf-search';
export default {
  components: { hfsearch },
  data() {
    return {
      options: [
        {
          value: '1',
          label: '一级',
        },
        {
          value: '2',
          label: '二级',
        },
        {
          value: '3',
          label: '三级',
        },
      ],
      miaodata: [],
      desdrawer: false,
      rtl: 'rtl',
      userData: [],
      manage: [],
      leveledit: false,
      content: '',
      value: '',
      draweradd: false,
      levellist: [],
      rules1: {
        levelName: [
          {
            required: true,
            message: '请选择等级',
            trigger: 'blur',
          },
        ],
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入等级名称',
            trigger: 'blur',
          },
        ],
        levelDescribe: [
          {
            required: true,
            message: '请输入等级描述',
            trigger: 'blur',
          },
        ],
      },
      rules2: {
        name: [
          {
            required: true,
            message: '请输入等级名称',
            trigger: 'blur',
          },
        ],
        levelDescribe: [
          {
            required: true,
            message: '请输入等级描述',
            trigger: 'blur',
          },
        ],
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
      ruleForm: {
        levelDescribe: '',
        name: '',
        level: '',
      },
      ruleForm2: {
        levelDescribe: '',
        name: '',
        id: '',
      },
      ruleForm1: {
        levelName: '',
        levelId: '',
        userId: [],
      },
      ruleForm3: {
        expireTime: '',
        startTime: '',
        prerogative: '',
        levelDescribe: '',
        levelId: '',
      },
      drawer: false,
      direction: 'btt',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      activeName: 'second',
      selectDdata: [],
    };
  },
  methods: {
    privilege() {
      this.$router.push({path: '/hf-privilege', query: {}});
    },
    childClick(tableData) {
      if (tableData === -1) {
        this.findvip();
      } else {
        this.manage = tableData;
      }
    },
    getchang: function(val) {
      console.log(val);
      this.ruleForm1.levelName = val;
      console.log(this.ruleForm1);
    },
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
    addmiao: function(row) {
      this.desdrawer = true;
      this.ruleForm3.id = row.id;
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
    currentChange: function(row) {
      console.log(row);
      // this.persondata.personid = row.id;
      this.$refs.table.toggleRowSelection(row);
    },
    handleSelectionChange(val) {
      console.log(val);
      this.selectDdata = val;
      console.log(this.ruleForm1);
    },
    checkUser: function() {
      userCenterService.checkUser((res) => {
        console.log(res.data.data);
        this.userData = res.data.data.list;
      });
    },
    editlevel: function(row) {
      console.log(row);
      this.leveledit = true;
      this.ruleForm2.id = row.id;
      this.ruleForm2.name = row.levelName;
    },
    deletevip: function(row) {
      console.log(row);
      vip.deletevip(row.id, (res) => {
        console.log(res);
        if (res.data.status === constants.SUCCESS_CODE) {
          this.$message({
            message: '删除成功',
            type: 'success',
          });
          // this.draweradd = false;
          this.findvip();
        } else {
          this.$message({
            message: '删除失败',
            type: 'error',
          });
        }
      });
    },
    findvip: function() {
      vip.findvip((res) => {
        console.log(res);
        this.manage = res.data.data;
        // this.levellist = res.data.data;
      });
    },
    getlevel: function() {
      vip.checkLevel((res) => {
        console.log(res);
        this.levellist = res.data.data;
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
    submitForm1(ruleForm1) {
      console.log(this.ruleForm1);
      this.$refs[ruleForm1].validate((valid) => {
        if (valid) {
          if (this.selectDdata.length > 0) {
            for (var i = 0; i < this.selectDdata.length; i++) {
              this.ruleForm1.userId.push(this.selectDdata[i].id);
            }
          }
          if (this.selectDdata.length === 0) {
            this.$message({
              message: '请选择用户',
              type: 'error',
            });
            return;
          }
          console.log(this.ruleForm1);
          console.log(this.levellist);
          // eslint-disable-next-line no-redeclare
          for (var j = 0; j < this.levellist.length; j++) {
            if (this.levellist[j].levelName === this.ruleForm1.levelName) {
              this.ruleForm1.levelId = this.levellist[j].id;
            }
          }
          console.log(this.ruleForm1);
          vip.addvip(this.ruleForm1, (res) => {
            console.log(res);
            // eslint-disable-next-line no-magic-numbers
            if (res.data.status === 200) {
              this.$message({
                message: '添加成功',
                type: 'success',
              });
              this.draweradd = false;
              this.findvip();
              this.$refs.ruleForm1.resetFields();
              // this.checkLevel();
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
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          vip.addLevel(this.ruleForm, (res) => {
            console.log(res);
            // eslint-disable-next-line no-magic-numbers
            if (res.data.status === 200) {
              this.$message({
                message: '添加成功',
                type: 'success',
              });
              this.drawer = false;
              this.checkLevel();
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
    submitForm2(ruleForm2) {
      this.$refs[ruleForm2].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm2);
          vip.editLevel(this.ruleForm2, (res) => {
            console.log(res);
            // eslint-disable-next-line no-magic-numbers
            if (res.data.status === 200) {
              this.$message({
                message: '修改成功',
                type: 'success',
              });
              this.leveledit = false;
              this.checkLevel();
            } else {
              this.$message({
                message: '修改失败',
                type: 'error',
              });
            }
          });
        }
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {
    this.checkLevel();
    this.checkUser();
    var content = window.sessionStorage.getItem('userInfor');
    this.content = JSON.parse(content);
    this.findvip();
  },
};
</script>
<style scoped>
.el-button--primary.is-plain.sub2 {
  color: #4194f6;
  background: none;
  border-color: #4194f6;
}
.el-button--primary.is-plain.sub2:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}
</style>
