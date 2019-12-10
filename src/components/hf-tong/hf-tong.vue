<template>
<!--  <div>
<div>
    <div class="register-wrapper" style="margin-top: 50px;">
      <div id="register">
        <p class="title">注册</p>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="demo-ruleForm"
        >
          <el-form-item prop="tel">
            <el-input v-model="ruleForm2.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="smscode" class="code" style='margin-top: 20px;'>
            <el-input v-model="ruleForm2.smscode" placeholder="验证码" ></el-input>
            <el-button type="primary" :disabled='isDisabled' @click="sendCode" style="margin-top:30px;">{{buttonText}}</el-button>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">注册</el-button>
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
  </div> -->
   <el-row type="flex" justify="center">
          <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
              <el-form-item label="用户名" prop="name">
                  <el-input v-model="user.name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                  <el-input v-model="user.pass" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
              </el-form-item>
          </el-form>
      </el-row>

</template>

<script>
   export default {
          methods: {
              login () {
                  this.$refs.loginForm.validate((valid) => {
                      if (valid) {
                          if (this.user.name === 'admin' && this.user.pass === '123') {
                              this.$notify({
                                  type: 'success',
                                  message: '欢迎你,' + this.user.name + '!',
                                  duration: 3000
                              })
                              this.$router.replace('/')
                          } else {
                              this.$message({
                                  type: 'error',
                                  message: '用户名或密码错误',
                                  showClose: true
                              })
                          }
                      }
                      else {
                          return false
                      }
                  })
              }
          },
          data () {
              return {
                  user: {},
                  rules: {
                      name: [
                          {required: true, message: '用户名不能为空', trigger: 'blur'}
                      ],
                      pass: [
                          {required: true, message: '密码不能为空', trigger: 'blur'}
                      ]
                  }
              }
          }
      }

// export default {
//   name: "Register",
//   data() {
//     // <!--验证手机号是否合法-->
//     let checkTel = (rule, value, callback) => {
//       if (value === '') {
//         callback(new Error('请输入手机号码'))
//       } else if (!this.checkMobile(value)) {
//         callback(new Error('手机号码不合法'))
//       } else {
//         callback()
//       }
//     }
//     //  <!--验证码是否为空-->
//     let checkSmscode = (rule, value, callback) => {
//       if (value === '') {
//         callback(new Error('请输入手机验证码'))
//       } else {
//         callback()
//       }
//     }
//     // <!--验证密码-->
//     let validatePass = (rule, value, callback) => {
//       if (value === "") {
//         callback(new Error("请输入密码"))
//       } else {
//         if (this.ruleForm2.checkPass !== "") {
//           this.$refs.ruleForm2.validateField("checkPass");
//         }
//         callback()
//       }
//     }
//     // <!--二次验证密码-->
//     let validatePass2 = (rule, value, callback) => {
//       if (value === "") {
//         callback(new Error("请再次输入密码"));
//       } else if (value !== this.ruleForm2.pass) {
//         callback(new Error("两次输入密码不一致!"));
//       } else {
//         callback();
//       }
//     };
//     return {
//       times:60,
//       ruleForm2: {
//         pass: "",
//         checkPass: "",
//         tel: "",
//         smscode: ""
//       },
//       rules2: {
//         pass: [{ validator: validatePass, trigger: 'change' }],
//         checkPass: [{ validator: validatePass2, trigger: 'change' }],
//         tel: [{ validator: checkTel, trigger: 'change' }],
//         smscode: [{ validator: checkSmscode, trigger: 'change' }],
//       },
//       buttonText: '发送验证码',
//       isDisabled: false, // 是否禁止点击发送验证码按钮
//       flag: true,
//       yzm:"发送验证码",
//       // a:false,
//       // b:true
//     }
//   },
//   methods: {
//     // <!--发送验证码-->
//     sendCode () {
//       let tel = this.ruleForm2.tel
//       if (this.checkMobile(tel)) {
//         console.log(tel)
//         let time = 60
//         this.buttonText = '已发送'
//         this.isDisabled = true
//         if (this.flag) {
//           this.flag = false;
//           let timer = setInterval(() => {
//             time--;
//             this.buttonText = time + ' 秒'
//             if (time === 0) {
//               clearInterval(timer);
//               this.buttonText = '重新获取'
//               this.isDisabled = false
//               this.flag = true;
//             }
//           }, 1000)
//         }
//       }
//     },
//
//     // <!--提交注册-->
//     submitForm(formName) {
//       this.$refs[formName].validate(valid => {
//         if (valid) {
//           setTimeout(() => {
//             alert('注册成功')
//           }, 400);
//         } else {
//           console.log("error submit!!");
//           return false;
//         }
//       })
//     },
//     // <!--进入登录页-->
//     gotoLogin() {
//       this.$router.push({
//         path: "/login"
//       });
//     },
//     // 验证手机号
//     checkMobile(str) {
//       console.log(str)
//       let re = /^1\d{10}$/
//       if (re.test(str)) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// };
</script>

<style>
  <style scoped>
  .loading-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #aedff8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .register-wrapper img {
    position: absolute;
    z-index: 1;
  }
  .register-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  #register {
    max-width: 340px;
    margin: 60px auto;
    background: #fff;
    padding: 20px 40px;
    border-radius: 10px;
    position: relative;
    z-index: 9;
  }
  .title {
    font-size: 26px;
    line-height: 50px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
  }
  .el-form-item {
    text-align: center;
  }
  .login {
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
    color: #1ab2ff;
    cursor: pointer;
    text-align: left;
    text-indent: 8px;
    width: 160px;
  }
  .login:hover {
    color: #2c2fd6;
  }
  .code >>> .el-form-item__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .code button {
    margin-left: 20px;
    width: 140px;
    text-align: center;
  }
  .el-button--primary:focus {
    background: #409EFF;
    border-color: #409EFF;
    color: #fff;
  }
  </style>
</style>
