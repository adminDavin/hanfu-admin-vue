<template>
<div class="container">
   <div class="div">
   <div class="left">

    <div class="a">
      <img src="../img/6.jpg">
      <div class="hou">后 台 名 称</div>
      <div class="shang">商 家 后 台 管 理 系 统</div>
    </div>
   </div>
   <div class="left1">
   </div>
   <div class="left2">
   </div>

   </div>

   <div class="div2">

    <div class="login">欢 迎 登 录</div>
    <div class="we">welcome back !</div>
    <div class="in">
   <input type="text" class="input" v-model="formLogin.loginName" placeholder="用户名" />
   <input type="text" class="input" v-model="formLogin.password" placeholder="密码" />
   <input type="checkbox" class="ji" v-model="formLogin.remember" /><span>记住密码</span>
   <div style="float: right; margin-top: -20px;"><a href="https://www.baidu.com">忘记密码?</a></div>
   <div class="denglu" style="cursor: pointer;" @click="login">登 录</div>

<!-- <div class="buttonItem">
        <input v-model="vercode" type="text" placeholder="输入验证码">
        <div class="red sendCode" @click="sendMessage">{{btnText}}</div>
    </div> -->



       <!--   <div class="input-group" style="width: 300px;margin-top: 80px;height: 50px;background: green;">
						<span class="register-msg-btn" v-show="show" v-on:click="getCode" >发送验证码</span>
						<span class="register-msg-btn" v-show="!show">{{count}} s</span>

				</div> -->

    </div>
   <div>
     <img src="../img/3.png" style="float:right;margin-left:2000px;margin-right:100px;margin-top:245px;display: block;width: 60px;height:60px;cursor:pointer;">
   </div>
   </div>

</div>
</template>

<script>
import userApi from '@/apis/user-api';

export default {
  name: 'login',

  data() {
    return {

                vercode:'',
                btnDisabled:false,
                btnText:'获取验证码'
      ,


      formLogin: { //表单对象
        loginName: '123456789',
        password: '123',
        remember:"",
        loginType: '用户名',

      },
      errorInfo: {
        text: '登陆失败,请重试',
        isShowError: false //显示错误提示
      }

    }
  },
  mounted() {
    document.onkeydown = (event) => {
      var router = this.$route.path;
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 13 && this.$route.path == '/login') { // enter 键
        this.login();
      }
    };
  },
  methods: {

               sendMessage(){
                if(this.btnDisabled){
                    return;
                }
                this.getSecond(60);
            },
            //发送验证码
            getSecond(wait){
                let _this=this;
                let _wait = wait;
                if(wait == 0) {
                    this.btnDisabled=false;
                    this.btnText="获取验证码"
                    wait = _wait;
                } else {
                    this.btnDisabled=true;
                    this.btnText="验证码(" + wait + "s)"
                    wait--;
                    setTimeout(function() {
                            _this.getSecond(wait);
                        },
                        1000);
                }
            }

,

    login() {
      //调用后端登陆接口
      userApi.login(this.formLogin)
        .then((response) => {
          // console.log(this.formLogin)
          console.log('success:', response);
          if (response && response.data) {
            if (response.data.status == 200) {
              let data = response.data.data;
              localStorage.setItem('userId', data.userId);
              localStorage.setItem('token', data.token);
              this.$router.push("/product");
            } else {
              alert('登录错误');
            }
          } else {
            alert("登录异常");
          }

        })
        .catch((err) => {
          console.log('error:', err);
          this.errorInfo.isShowError = true;
          this.errorInfo.text = '系统接口异常';
        });
    }
  }
}
</script>

<style lang="scss">
 .buttonItem{
        margin:15px 10px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        border:1px solid #ddd;
        input{
            height: 45px;
            font-size: 1rem;
            padding-left:10px;
            border:0;
            outline: none;
        }
        .sendCode{
            border: 0;
            outline: none;
            background-color: #fff;
            cursor: pointer;
        }
    }

  .denglu{
    width: 100%;
    height:50px;
    background: #42425C;
    margin-top:80px;
    text-align: center;
    color: #ffffff;
    line-height: 50px;
  }
  .ji{
   width: 20px;
   height: 20px;
   margin-top: 30px;
   border-radius:50%;
  }
  a{

  }
  span{
    margin-left: 30px;
    margin-top: -25px;
    display: block;
  }
  .in{
    width:40%;
    height:40px;
    margin-top: 60px;
    margin: 0 auto;

  }
  .input{
    width:100%;
    height:40px;
    margin-top:40px;
    text-indent: 5px;
    border: none;
    outline: none;
    border-bottom: 1px solid #81818F;
  }
  .we{
    text-align: center;
    color:#81818F;
    margin-top:1px;
  }
  .login{
    text-align: center;
    font-size: 30px;
    margin-top: 160px;
  }
  .shang{
    color: #ffffff;
    text-align: center;
    font-size: 24px;
    margin-top:10px;
  }
  .hou{
    font-size:24px;
    margin-top: 30px;
    color: #ffffff;
    text-align: center;
  }
  img{
    width: 120px;
    height: 120px;
    margin: 0 auto;
    display: block;
    margin-top: 160px;
  }
  .a{
    color: #00D1B2;
    z-index: 9999;
  }
  .div2{
    width: 50%;
    height: 100%;
    background:#ffffff;
    float: left;
  }
  .right{
    width: 45%;
    height: 100%;
    float: right;

  }
  .div{
    width: 50%;
    height: 100%;
    float: left;

  }
    body{
      background:url(../img/1.png) no-repeat;
      background-size: 100%;
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
    }
    .container{
        width: 80%;
        height: 80%;
        margin: 0 auto;
        margin-top:70px;
        background:none;
        border: none;

  }
//   .left1{
//     width:100% ;
//     height: 30%;
//     background: url(../img/4.png) repeat-x;
//     float: left;
//
//   }
   .left{
      background: url(../img/7.png) no-repeat;
      width:100%;
      height:100%;
        background-size: 100%;
      // position:relative;
      float:left;
      // margin-left:20px;
   }

</style>
