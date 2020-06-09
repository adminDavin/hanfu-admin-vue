<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="部门管理" name="first">
        <el-card class="box-card">
          <div class="text item">用户管理</div>
        </el-card>
      </el-tab-pane>
      <!-- ---------------------------------------------------------------------------------------------------------------- -->
      <el-tab-pane label="成员管理" name="second">
        <el-card class="box-card">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="当前部门">
              <el-select v-model="formInline.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="当前成员">
              <el-select v-model="formInline.region1" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="当前角色">
              <el-select @change="determine2" v-model="formInline.rId" placeholder="请选择">
                <el-option
                  v-for="item in roleList"
                  :key="item.id"
                  :label="item.roleName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button @click="centerDialogVisible = true" type="primary">添加角色</el-button>
              <!-- <router-link to="/about">About</router-link> -->
            </el-form-item>
          </el-form>

          <el-row :gutter="20">
            <el-col :span="2">
              <h5 style="margin-block-end:0;margin-block-start:0; ">商品管理</h5>
            </el-col>
            <el-col :span="16">
              <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
              >全选</el-checkbox>
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox
                  v-for="(item,i) in cities"
                  :label="item.id"
                  :key="item.id"
                  @change="((val,$event)=>changePort(val,$event,item.id))"
                  class="ckbox-border"
                >
                  <!-- {{item.c_operation_port_name}} -->
                  <p
                    @click.prevent="lookChoice(item,i)"
                    :class="activeI==i?'active':''"
                    style="line-height:10px;"
                  >{{item.hfModel}}</p>
                </el-checkbox>
                <!-- <el-checkbox  @change="handleCheckedCitiesChange3(city.id)"
                border v-for="city in cities" :label="city.id"
                :key="city.id">{{city.hfModel}}</el-checkbox>-->
              </el-checkbox-group>
            </el-col>
          </el-row>
          <!-- 模块下的权限 -->
          <el-row :gutter="20">
            <el-col :span="2">
              <h5 style="margin-block-end:0;margin-block-start:0; ">商品管理</h5>
            </el-col>
            <el-col :span="16">
              <el-checkbox
                :indeterminate="isIndeterminate2"
                v-model="checkAll2"
                @change="handleCheckAllChange2"
              >全选</el-checkbox>
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
                <el-checkbox
                  class="ckbox-border"
                  v-for="city in cities2"
                  :label="city.id"
                  :key="city.id"
                  @change="((val,$event)=>changePort2(val,$event,city.id))"
                >
                  <p style="line-height:10px;">{{city.jurisdictionName}}</p>
                </el-checkbox>
              </el-checkbox-group>
            </el-col>
          </el-row>
          <!-- <el-button style="display:block;margin:0 auto" type="primary" plain>保存</el-button> -->
        </el-card>
      </el-tab-pane>
      <!-- ------------弹窗--------------- -->
      <el-dialog title="添加角色" :visible.sync="centerDialogVisible" width="30%" center>
        <el-form  ref="form" :model="form" label-width="80px">
          <el-form-item label="角色名称">
            <el-input v-model="form.roleName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.roleCode" placeholder="请选则">
               <el-option
                v-for="(item,i) in RoleCodeList"
                :key="i"
                :label="item.email"
                :value="item.email"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addRoles">保 存</el-button>
        </span>
      </el-dialog>

      <!-- -------------------------------------------------------------------------------------------------------------- -->
      <el-tab-pane label="客服管理" name="third">
        <el-card class="box-card">
          <div class="text item">角色管理</div>
        </el-card>
      </el-tab-pane>
      <!-- -------------------------------------------------------------------------------------------------------------------- -->
      <el-tab-pane label="数据库管理" name="fourth">
        <el-card class="box-card">
          <div class="text item">定时任务补偿</div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from '@/store';
import juris from '@/service/jurisdiction.js';
export default {
  name: '',
  data() {
    return {
      RoleCodeList: '',
      form: {
        roleName: '',
        roleCode: '',
        userId: '',
        accountId: '',
      },
      centerDialogVisible: false,
      activeI: '', // 控制多选文字点击颜色
      Selected: [],
      Selected2: [],
      roleList: [], // 角色列表
      activeName: 'second',
      checkAll: false,
      checkedCities: [],
      cityOptions: '',
      cities: '',
      isIndeterminate: true,
      checkAll2: false,
      checkedCities2: [],
      cityOptions2: '',
      cities2: '',
      isIndeterminate2: true,
      formInline: {
        region: '',
        region1: '',
        rId: '',
      },
    };
  },
  created() {
    this.determine();
    this.findAdminHasModel();
    this.selectRoleCode();
  },
  methods: {
    selectRoleCode () {
      juris.selectRoleCode((res) => {
        let data = res.data.data;
        this.RoleCodeList = data.map((item) => ({email: item}));
        console.log('this.RoleCodeList', this.RoleCodeList);
      });
    },
    // 添加角色 accountId
    addRoles () {
      this.form.userId = store.getUser().id;
      this.form.accountId = store.getUser().accountId;
      juris.addRole(this.form, (res) => {
        console.log(res);
        this.centerDialogVisible = false;
      });
      this.determine();
    },
    determine2() {
      let params = {
        id: store.getUser().accountId,
        rId: this.formInline.rId,
      };
      juris.findAdminHasModel(params, (res) => {
        console.log('角色下已选择模块', res.data.data);
        let data = res.data.data;
        this.checkedCities = [];
        for (var i = 0; i < data.length; i++) {
          this.checkedCities.push(data[i].id);
          // console.log(data[i].id);
        }
      });
    },
    determine() {
      let id = store.getUser().accountId;
      juris.selectAccountRole(id, (res) => {
        console.log('角色', res);
        this.roleList = res.data.data;
      });
    },
    findAdminHasModel() {
      let id = store.getUser().accountId;
      juris.findAdminHasModel({ id: id }, (res) => {
        console.log('模块', res);
        this.cities = res.data.data;
        this.cityOptions = res.data.data;
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCheckAllChange(val) {
      console.log(val);

      if (val) {
        let data = this.cityOptions;
        for (var i = 0; i < data.length; i++) {
          this.Selected.push(data[i].id);
          // console.log(data[i].id);
        }
      }
      this.checkedCities = val ? this.Selected : [];
      this.isIndeterminate = false;
    },
    // 点击复选框执行
    changePort(val, $event, id) {
      console.log('changePort', val, $event, id);
      if (val) {
        let selected = {
          modelId: id,
          id: store.getUser().accountId,
          rId: this.formInline.rId,
          roleId: this.formInline.rId, // 绑定模块
        };
        juris.roleAddModel(selected, (res) => {
          console.log('绑定模块', res);
          this.$message({
            showClose: true,
            message: '绑定模块成功',
            type: 'success',
          });
          let data = res.data.data;
          this.checkedCities2 = [];
          for (var i = 0; i < data.length; i++) {
            this.checkedCities2.push(data[i].id);
            // console.log(data[i].id);
          }
        });
      } else {
        let params = {
          modelId: id,
          roleId: this.formInline.rId,
        };
        juris.roleDeleteModel(params, (res) => {
          console.log('取消模块', res);
          this.$message({
            showClose: true,
            message: '模块已取消',
            type: 'warning',
          });
        });
      }
    },
    // 多选点击文字执行
    lookChoice(item, i) {
      console.log(item, i);
      this.activeI = i;
      let params = {
        modelId: item.id,
        id: store.getUser().accountId,
      };
      juris.findAdminHasJusInModel(params, (res) => {
        console.log('模块下权限', res);
        this.cities2 = res.data.data;
        this.cityOptions2 = res.data.data;
      });
      if (this.formInline.rId !== '') {
        let selected = {
          modelId: item.id,
          id: store.getUser().accountId,
          rId: this.formInline.rId,
        };
        juris.findAdminHasJusInModel(selected, (res) => {
          console.log('模块下选中的权限', res);
          let data = res.data.data;
          this.checkedCities2 = [];
          for (var i = 0; i < data.length; i++) {
            this.checkedCities2.push(data[i].id);
            // console.log(data[i].id);
          }
        });
      }
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    // 点击复选框执行
    changePort2(val, $event, id) {
      console.log('changePort2', val, $event, id);
      if (val) {
        let selected = {
          JurisdictionIds: id,
          roleId: this.formInline.rId, // 绑定模块
        };
        juris.roleAddJurisdiction(selected, (res) => {
          console.log('绑定模块下的小模块', res);
          this.$message({
            showClose: true,
            message: '绑定模块成功',
            type: 'success',
          });
        });
      } else {
        let params = {
          JurisdictionIds: id,
          roleId: this.formInline.rId,
        };
        juris.roleDeleteJurisdiction(params, (res) => {
          console.log('取消模块', res);
          this.$message({
            showClose: true,
            message: '模块已取消',
            type: 'warning',
          });
        });
      }
    },
    handleCheckAllChange2(val) {
      if (val) {
        this.Selected2 = [];
        let data = this.cityOptions2;
        for (var i = 0; i < data.length; i++) {
          this.Selected2.push(data[i].id);
          // console.log(data[i].id);
        }
      }
      this.checkedCities2 = val ? this.Selected2 : [];
      this.isIndeterminate2 = false;
    },

    handleCheckedCitiesChange2(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll2 = checkedCount === this.cities2.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities2.length;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.is-bordered {
  margin-left: 0 !important;
  margin-bottom: 40px;
}
.active {
  color: rgb(0, 255, 0);
}
.el-checkbox.is-bordered {
  padding: 0px 10px 0px 10px;
  height: 50px;
}
</style>
