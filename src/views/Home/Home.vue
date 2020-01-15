
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
          <el-menu-item index="/statistics">
            <i class="el-icon-document-copy"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
          <el-menu-item index="/category">
            <i class="iconfont icon-fenleiguanli"></i>
            <span slot="title">类目管理</span>
          </el-menu-item>
          <el-menu-item index="/commodity">
            <i class="iconfont icon-tongji"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-submenu index="/orderform">
            <template slot="title">
              <i class="iconfont icon-weibiaoti-"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/orderform">全部订单</el-menu-item>
              <!-- <el-menu-item index="/1">退款维权</el-menu-item> -->
              <!-- <el-menu-item index="/1">快速打单</el-menu-item> -->
              <!-- <el-menu-item index="/1">评价管理</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/regiment">
            <template slot="title">
              <i class="iconfont icon-huodong" style="font-size: 18px;"></i>
              <span>活动</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/seckill">秒杀商城</el-menu-item>
              <el-menu-item index="/regiment">拼团商城</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/jurisdiction">
            <i class="el-icon-document-copy"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/member">
            <i class="iconfont icon-huiyuan"></i>
            <span slot="title">会员设置</span>
          </el-menu-item>
          <el-menu-item index="/verification">
            <i class="iconfont icon-huiyuan"></i>
            <span slot="title">核销管理</span>
          </el-menu-item>
          <el-menu-item index="/1">
            <i class="iconfont icon-xiaoxi"></i>
            <span slot="title">消息</span>
          </el-menu-item>
          <el-submenu index="/mingx">
            <template slot="title">
              <i class="iconfont icon-zichan"></i>
              <span>资产</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/1">交易明细</el-menu-item>
              <!-- <el-menu-item index="/tixian">商家提现</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/1">
            <i class="iconfont icon-weibiaoti2fuzhi02"></i>
            <span slot="title">优惠卷</span>
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
                <img src="../img/8.png" />
              </span>
              <el-dropdown-menu slot="dropdown" style="width:300px;">
                <el-dropdown-item>
                  <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
                <br />
                <el-dropdown-item divided>
                  <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
                <br />
                <el-dropdown-item divided>
                  <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
                <br />
                <el-dropdown-item divided>
                  <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
                <br />
                <el-dropdown-item divided>
                  <img style="width: 40px;height: 40px;float: left;" src="../img/6.jpg" />
                  <div style="float:left;margin-top:-5px;margin-left: 10px;">用户的名字</div>
                  <br />
                  <div style="float: left;margin-left: 10px;margin-top: -20px;">请输入你要添加的内容</div>
                  <div style="float: right;margin-top: -40px;">明晚14:20</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown class="user-name" trigger="click">
              <span class="el-dropdown-link" style="float: left;">
                用户昵称
                <i class="el-icon-caret-bottom"></i>
              </span>
              <div class="block">
                <el-avatar :size="34" src="circleUrl"></el-avatar>
              </div>

              <el-dropdown-menu slot="dropdown" style="margin-left:-100px;">
                <a href="https://github.com/adminDavin" target="_blank">
                  <el-dropdown-item>用户昵称</el-dropdown-item>
                  <el-dropdown-item>13837774547</el-dropdown-item>
                </a>
                <a href="https://github.com/adminDavin/hanfu-admin-vue" target="_blank">
                  <el-dropdown-item divided>账号设置</el-dropdown-item>
                </a>
                <a href="https://github.com/adminDavin/hanfu-admin-vue" target="_blank">
                  <el-dropdown-item>反馈</el-dropdown-item>
                </a>
                <a href="https://github.com/adminDavin/hanfu-admin-vue" target="_blank">
                  <el-dropdown-item>官网</el-dropdown-item>
                </a>
                <el-dropdown-item command="loginout">切换账号</el-dropdown-item>
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
  name: 'home',
  methods: {
    orderform () {
      this.$router.push('/orderform')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped lang='less'>
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
