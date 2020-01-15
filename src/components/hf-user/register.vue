<template>
  <div>
    <div class="login">
      <div class="login2">系 统 注 册</div>
      <div>
      <input type="text" placeholder="账号" v-model="regi_ster.authType" />
      <span id="div">请输入账号</span>
      <input type="text" placeholder="密码" v-model="regi_ster.passwd" />
      <span id="div">请输入密码</span>
      </div>
      <div class="btn" @click="register()">注册</div>

    </div>
  </div>
</template>

<style>
  span{
    font-size:8px;
    margin-left:40px;
    margin-top: 5px;
    /* display: block; */
    display: none;
  }
  .btn {
    width: 80%;
    height: 30px;
    background: #20A0FF;
    margin: 0 auto;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    color: #ffffff;
    margin-top: 30px;
    cursor: pointer;
    border-radius: 5px;
  }

  .login {
    width: 400px;
    height: 250px;
    border: 1px solid #cccccc;
    margin: 0 auto;
    margin-top: 230px;
  }

  .login2 {
    margin-left: 150px;
    margin-top: 30px;
    font-weight: bold;
  }

  input {
    width: 80%;
    height: 30px;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
    text-indent: 5px;
    color:black;
  }
</style>

<script>
import axios from 'axios';
import api from '@/apis/user-api.js';
import {
  mapGetters
} from 'vuex';
export default {
  name: 'testIndex',
  data(){
    return {
      regi_ster: {
        authType: "",
        passwd: ""
      }
    }
  },
  methods: {

   register() {
       api.register(this.regi_ster).then(res => {
         console.log(res)
            if(this.authType==""&&this.passwd==""){
            }else {
              this.$router.push("/hf-user/login")
            }
         });
       }
   },
  computed: {
    ...mapGetters(['taxno', 'username'])
  },
  init() {

  }
}
</script>
