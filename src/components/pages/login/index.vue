
<template>
  <div class="container">
    <!-- 卡片 element-ui 组件 -->
    <div class="container1">
      <el-card class="th-card">
        <div class="block">
          <el-avatar shape="square" :size="100" :src="squareUrl"></el-avatar>
          <p>后台名称</p>
          <p>商家后台管理系统</p>
        </div>
      </el-card>
      <el-card class="my-card">
        <div class="form">
          <div style="margin:40px 0">
            <h1 style="margin:0">欢 迎 登 陆</h1>
            <p style="margin:4px 0">Welcome back</p>
          </div>
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-form-item prop="authKey">
                  <el-input
                    v-model="loginForm.authKey"
                    placeholder="请输入手机号"
                    style="width:284px;margin-right:10px"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-form-item style="width:300px; text-align:left;" prop="code">
                  <el-input
                    v-model="loginForm.code"
                    placeholder="请输入验证码"
                    style="width:100px;margin-right:10px"
                  ></el-input>
                  <el-button :disabled="disabled" @click="Sendlogin()">{{btntxt}}</el-button>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row style="margin-bottom:10px">
              <el-col :span="8">
                <el-radio v-model="loginForm.type" label="boss">商家管理身份</el-radio>
              </el-col>
              <el-col :span="8">
                <el-radio v-model="loginForm.type" label="stone">店铺管理身</el-radio>
              </el-col>
              <el-col :span="8">
                <el-radio v-model="loginForm.type" label="warehouse">仓库管理身</el-radio>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-form-item>
                  <el-button @click="login()" type="info" style="width:284px;">登 录</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="div-img">
          <router-link to="/code">
            <img src="~@/assets/images/ico.png" alt />
          </router-link>
        </div>
      </el-card>
    </div>

    <el-dialog title :visible.sync="dialogFormVisible">
      <el-card shadow="never" class="box-card">
        <div slot="header" class="clearfix">
          <span v-if="dataList.identity=='boss'">管理员</span>
          <span v-if="dataList.identity=='stone'">选择店铺</span>
          <span v-if="dataList.identity=='warehouse'">选择仓库</span>
        </div>

        <el-form :model="dataList">
          <!-- boss -->
          <el-form-item v-if="dataList.identity=='boss'" label>
            <el-select v-model="form.merId" placeholder="请选择boss">
              <el-option
                v-for="item in dataList.List"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 店铺 -->
          <el-form-item v-if="dataList.identity=='stone'" label>
            <el-select v-model="form.merId" placeholder="请选择店铺">
              <el-option
                v-for="item in dataList.List"
                :key="item.id"
                :label="item.hfName"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 仓库 -->
          <el-form-item v-if="dataList.identity=='warehouse'" label>
            <el-select v-model="form.merId" placeholder="请选择仓库">
              <el-option
                v-for="item in dataList.List"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="determine()" type="info" style="width:284px;">确 定</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store';
import constants from '@/store/constants.js';
import log from '@/service/login.js';
import axios from 'axios';
export default {
  data() {
    // 定义一个校验函数
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号不合法'));
      }
      callback();
    };
    const validateCode = (rule, value, callback) => {
      if (!/^[1-9]\d{3}$/.test(value)) {
        return callback(new Error('验证码长度4位数'));
      }
      callback();
    };
    return {

      dataList: '',
      form: {
        type: '',
        merId: '',
        userId: '',
      },
      dialogFormVisible: false,
      timer: '',
      disabled: false,
      time: 0,
      //  记住密码 单选框
      btntxt: '获取验证码',
      radio: 'boss',
      squareUrl: '',
      // 表单数据对象
      loginForm: {
        authKey: '17612219746',
        authType: '2',
        code: '',
        type: '',
      },
      // 表单校验规则对象
      loginRules: {
        authKey: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { validator: checkMobile, trigger: 'change' },
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: ['blur', 'change'],
          },
          { validator: validateCode, trigger: ['blur', 'change'] },
        ],
      },
    };
  },
  created() {
    this.dataList = store.getUser();
    console.log(this.dataList);
  },
  methods: {
    // 登录
    login() {
      // 调用 validate 对整体表进行校验
      this.$refs.loginForm.validate(async (valid) => {
        console.log(this.loginRules.authKey);
        if (valid) {
          log.login(this.loginForm, (res) => {
            // var re = res.headers.token;
            console.log(res);
            console.log(res.data.data.token);
            if (res.data.data === '验证码不正确') {
              this.$message.error('验证码输入错误');
            }
            // console.log(re);
            if (res.data.status === constants.SUCCESS_CODE) {
              this.dataList = res.data.data;
              let data = res.data.data;
              store.setUser(data);
              window.sessionStorage.setItem(
                'userInfor',
                JSON.stringify(res.data.data),
              );
              // localStorage.setItem()
              this.dialogFormVisible = true;
              // this.$router.push('/');
            } else {
              this.$message.error('手机号或验证码错误');
            }
          });
          // try {
          //   await this.$http
          //     .post(
          //       `/api/api/user/hf-auth/login?authKey=${this.loginForm.authKey}&authType=${this.loginForm.authType}&passwd=${this.loginForm.code}`,
          //     )
          //     .then((res) => {
          //       console.log(res);
          //       if (res.data.status === constants.SUCCESS_CODE) {
          //         let data = { token: 'a1b2c3d4e4fg' };
          //         store.setUser(data);
          //         window.sessionStorage.setItem(
          //           'userInfor',
          //           JSON.stringify(res.data.data),
          //         );
          //         // localStorage.setItem()
          //         this.$router.push('/');
          //       }
          //     });
          // } catch (e) {
          //   // 进行错误提示即可
          //   this.$message.error('手机号或验证码错误');
          // }
        }
      });
    },
    // 发送验证码
    Sendlogin() {
      // 调用 validate 对整体表进行校验
      // if (!/^1[3-9]\d{9}$/.test(value)) {
      //   return callback(new Error('手机号不合法'));
      // }
      console.log(this.loginForm.authKey === /^1[3-9]\d{9}$/);
      let patrn = /^1[3-9]\d{9}$/;
      if (patrn.exec(this.loginForm.authKey)) {
        // eslint-disable-next-line no-unused-vars
        let fd = new FormData();
        fd.append('phone', this.loginForm.authKey);
        fd.append('type', 'login');

        axios
          .post('/api/api/user/user/code', fd)
          .then((res) => {
            this.loginForm.code = res.data.data;
            this.time = 60;
            this.disabled = true;
            this.validateBtn();
          });
        // this.$router.push('/');
      } else {
        return false;
      }
    },
    validateBtn() {
      // 倒计时
      let time = 60;
      this.timer = setInterval(() => {
        console.log(1);
        if (time === 0) {
          clearInterval(this.timer);
          this.disabled = false;
          this.btntxt = '获取验证码';
        } else {
          this.btntxt = time + '秒后重试';
          this.disabled = true;
          time--;
        }
        // eslint-disable-next-line no-magic-numbers
      }, 1000);
    },
    determine() {
      this.form.type = this.dataList.identity;
      this.form.userId = this.dataList.id;
      log.token(this.form, (res) => {
        console.log(res);
        let data = store.getUser();
        data.token = res.data.data.token;
        data.modelCode = res.data.data.model;
        store.setUser(data);
        this.$router.push('/');
      });
    },
  },
  destroyed() {
    if (this.timer) {
      // 如果定时器在运行则关闭
      clearInterval(this.timer);
    }
  },
};
</script>

<style scoped lang='less'>
.el-col-offset-6 {
  margin-left: 0;
}
.container {
  padding: 0;
  margin: 0;
  background: url(~@/assets/images/bj.png) no-repeat center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .th-card {
    position: relative;
    background: url(~@/assets/images/bj2.png) no-repeat center / cover;
    width: 800px;
    height: 700px;
    .block {
      text-align: center;
      height: 150px;
      width: 150px;
      position: absolute;
      left: 0;
      right: 0;
      top: -260px;
      bottom: 0;
      margin: auto;
      p {
        width: 160px;
        height: 34px;
        font-size: 20px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .my-card {
    position: relative;
    width: 800px;
    height: 700px;
    .form {
      width: 400px;
      height: 400px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      text-align: center;
    }
    img {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
    }
  }
  .container1 {
    display: flex;
    width: 1600px;
    height: 700px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .div-img {
    width: 70px;
    height: 70px;
    margin-left: 30px;
    position: absolute;
    right: 25px;
    bottom: 25px;
    img {
      width: 55px;
      height: 55px;
    }
  }
}
</style>
