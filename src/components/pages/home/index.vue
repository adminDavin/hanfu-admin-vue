<<<<<<< HEAD
/* eslint-disable no-tabs */

<template>
  <el-container class="my-container">
    <el-aside width="200px">
      <el-col :span="12">
        <div class="my-h5">
          <h5 align="center">后台管理系统</h5>
        </div>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#3B3B53"
          text-color="#fff"
          router
        >
          <el-menu-item index="/">
            <i class="iconfont icon-home" style="font-size: 28px;"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/hf-product">
            <i class="iconfont icon-tongji"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="/hf-userCenter">
            <i class="el-icon-user"></i>
            <span slot="title">用户中心</span>
          </el-menu-item>
          <el-menu-item index="/set">
            <i class="iconfont icon-set"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>
        <el-container class="header-right">
          <el-container class="header-user-con">
            <el-dropdown trigger="click">
              <span>
                <i
                  class="el-icon-search"
                  style="margin-right: 10px;color: #CCCCCC;cursor: pointer;font-size: 30px;"
                ></i>
              </span>
              <span style="cursor: pointer;">
                <img src="../../img/8.png" />
              </span>
              <el-dropdown-menu slot="dropdown" style="width:300px;">
                <el-dropdown-item>
                  <img style="width: 40px;height: 40px;float: left;" src="../../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
=======
<template>
<<<<<<< HEAD
  <el-container class="my-container">
    <el-aside width="200px">
      <el-col :span="12">
        <div class="my-h5">
          <h5 align="center">后台管理系统</h5>
        </div>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#3B3B53"
          text-color="#fff"
          router
        >
          <el-menu-item index="/">
            <i class="iconfont icon-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/hf-product">
            <i class="iconfont icon-tongji"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="/hf-orderCenter">
            <i class="el-icon-tickets"></i>
            <span slot="title">订单中心</span>
          </el-menu-item>
          <el-menu-item index="/hf-userCenter">
            <i class="el-icon-user"></i>
            <span slot="title">用户中心</span>
          </el-menu-item>
          <el-menu-item index="/set">
            <i class="iconfont icon-set"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>
        <el-container class="header-right">
          <el-container class="header-user-con">
            <el-dropdown trigger="click">
              <span>
                <i
                  class="el-icon-search"
                  style="margin-right: 10px;color: #CCCCCC;cursor: pointer;font-size: 30px;"
                ></i>
              </span>
              <span style="cursor: pointer;">
                <img src="../../img/8.png" />
              </span>
              <el-dropdown-menu slot="dropdown" style="width:300px;">
                <el-dropdown-item>
                  <img style="width: 40px;height: 40px;float: left;" src="../../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
=======
<el-container class="my-container">
  <el-aside width="200px">
    <el-col :span="12">
      <div class="my-h5">
        <h5 align="center">后台管理系统</h5>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#3B3B53" text-color="#fff" router>
        <el-menu-item index="/">
          <i class="iconfont icon-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/hf-product">
          <i class="iconfont icon-tongji"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/hf-orderCenter">
          <i class="el-icon-tickets"></i>
          <span slot="title">订单中心</span>
        </el-menu-item>
        <el-menu-item index="/hf-userCenter">
          <i class="el-icon-user"></i>
          <span slot="title">用户中心</span>
        </el-menu-item>
        <el-menu-item index="/set">
          <i class="iconfont icon-set"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-aside>
  <el-container>
    <el-header>
      <el-container class="header-right">
        <el-container class="header-user-con">
          <el-dropdown trigger="click">
            <span>
              <i class="el-icon-search" style="margin-right: 10px;color: #CCCCCC;cursor: pointer;font-size: 30px;"></i>
            </span>
            <span style="cursor: pointer;">
              <img src="../../img/8.png" />
            </span>
            <el-dropdown-menu slot="dropdown" style="width:300px;">
              <el-dropdown-item>
                <img style="width: 40px;height: 40px;float: left;" src="../../img/6.jpg" />
                <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
>>>>>>> f1ea1922341dfba6b2106f6cce684c3901c7ec8f
>>>>>>> a20a074c67a7a62305455524cdbfffa3ed431b95
                <br />
                <el-dropdown-item>
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
                <br />
                <el-dropdown-item divided>
                  <img style="width: 40px;height: 40px;float: left;" src="../../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
                <br />
                <el-dropdown-item divided>
                  <img style="width: 40px;height: 40px;float: left;" src="../../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
                <br />
                <el-dropdown-item divided>
                  <img style="width: 40px;height: 40px;float: left;" src="../../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown class="user-name" trigger="click" style="margin-top:20px;">
              <span class="el-dropdown-link" style="float: left;">
                用户昵称
                <i class="el-icon-caret-bottom"></i>
              </span>
              <div class="block">
                <el-avatar :size="34" src="circleUrl"></el-avatar>
              </div>

              <el-dropdown-menu slot="dropdown" style="margin-left:-100px;">
                <el-dropdown-item>{{content.nickName}}</el-dropdown-item>
                <el-dropdown-item>手机号</el-dropdown-item>
                <el-dropdown-item>{{content.phone}}</el-dropdown-item>
                <el-dropdown-item command="loginout" @click.native="goUpdte()">账号设置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-container>
        </el-container>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      content: {}
    };
  },
  methods: {
    goUpdte: function() {
      this.$router.push("/update");
    },
    orderform() {
      this.$router.push("/orderform");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    var content = window.sessionStorage.getItem("userInfor");
    this.content = JSON.parse(content);
    console.log(this.content);
  }
};
</script>

<style lang="less" scoped>
.my-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  h5 {
    font-size: 18px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }

  .el-aside {
    background: #3b3b53;

    my-h5 {
      width: 200px;
      height: 36px;
    }

    .el-col {
      width: 100%;
    }
  }

  .el-menu {
    width: 100%;
    border-right: none;
    float: left;

    i {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      // color: rgba(255, 255, 255, 1);
      margin-right: 6px;
    }

    span {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      // color: rgba(255, 255, 255, 1);
    }
  }
}

// 头部
.el-header {
  position: relative;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 22px;

  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }

  .header-right {
    float: right;
    padding-right: 50px;
  }

  .header-user-con {
    // display: flex;
    height: 70px;
    align-items: center;
    line-height: 35px;
  }
}

.user-name {
  margin-left: 10px;
}

.block {
  float: right;
  margin-left: 10px;
  margin-bottom: 9px;
}

.el-dropdown-link {
  cursor: pointer;
}
</style>
