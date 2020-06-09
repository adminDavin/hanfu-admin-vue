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
            <el-form-item prop="mobile">
              <el-input
                v-model="loginForm.authKey"
                placeholder="请输入手机号"
                style="width:284px;margin-right:10px"
              ></el-input>
            </el-form-item>
            <el-form-item style="width:300px; text-align:left;" prop="code">
              <el-input
                v-model="loginForm.code"
                placeholder="请输入验证码"
                style="width:100px;margin-right:10px"
              ></el-input>
              <el-button @click="Sendlogin()">发送验证码</el-button>
            </el-form-item>

          <template>
            <el-radio style="float: left;" v-model="radio" label="1">记住密码</el-radio>
            <el-link style="float: right;" type="danger">忘记密码</el-link>
          </template>

            <el-form-item>
              <el-button @click="login()" type="info" style="width:284px;">登 录</el-button>
            </el-form-item>
          </el-form>

        </div>
        <div class="div-img">
           <router-link to='/code'><img src="../../assets/images/ico.png" alt=""></router-link>
          </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import store from '@/store';
export default {
  data () {
    // 定义一个校验函数
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号不合法'));
      }
      callback();
    };
    return {
      //  记住密码 单选框
      radio: '1',
      squareUrl: '',
      // 表单数据对象
      loginForm: {
        authKey: '18830709006',
        authType: '2',
        code: '',
      },
      // 表单校验规则对象
      loginRules: {
        authKey: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'change' },
        ],
        passwd: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 4, message: '验证码长度4位', trigger: 'blur' },
        ],
      },
    };
  },
  created () {
    // console.log(this.$refs.loginForm)
  },
  methods: {
    // 登录
    login () {
      // 调用 validate 对整体表进行校验
      this.$refs.loginForm.validate(async (valid) => {
        console.log(this.loginRules.authKey);
        if (valid) {
          try {
            // eslint-disable-next-line no-unused-vars
            await this.$http.get(`/api/api/user/user/login?authKey=${this.loginForm.authKey}&authType=${this.loginForm.authType}&passwd=${this.loginForm.code}`)
              .then((res) => {
                if (res.data.data === '1') {
                  let data = { token: 'a1b2c3d4e4fg' };
                  store.setUser(data);
                  this.$router.push('/');
                }
              });
          } catch (e) {
            // 进行错误提示即可
            this.$message.error('手机号或验证码错误1');
          }
        }
      });
    },
    // 发送验证码
    Sendlogin () {
      // 调用 validate 对整体表进行校验
      this.$refs.loginForm.validate(async (valid) => {
        console.log(1);
        if (valid) {
          console.log(valid);
          try {
            // eslint-disable-next-line no-unused-vars
            // await this.$http.post('/api/api/user/user/code?phone=' + this.loginForm.authKey).then((res) => {
            //   this.loginForm.code = res.data.data;
            // });
            // this.$router.push('/')
          } catch (e) {
            // 进行错误提示即可
            this.$message.error('手机号或验证码错误1');
            console.log(e);
          }
        }
      });
    },
  },
};
</script>

<style scoped lang='less'>
.container {
  padding: 0;
  margin: 0;
  background: url(../../assets/images/bj.png) no-repeat center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .th-card {
    position: relative;
    background: url(../../assets/images/bj2.png) no-repeat center / cover;
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
