<template>
  <div>
    <el-container>
      <el-aside width="300px">
        <el-card class="box-card" style="height:1000px" shadow="never">
          <div class="text item">
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="demo-basic--circle">
                  <div class="block">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                  </div>
                  <div class="block" v-for="size in sizeList" :key="size">
                    <el-avatar :size="size" :src="circleUrl"></el-avatar>
                  </div>
                </div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content bg-purple-light">
                  商家昵称
                  <br />状态：在线
                </div>
              </el-col>
            </el-row>
            <el-input
              prefix-icon="el-icon-search"
              style="
              width:260px;
              height:40px
              "
            ></el-input>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="消息处理" name="first">
                <el-row :gutter="10">
                  <el-col :span="6">
                    <div class="demo-basic--circle">
                      <div class="block">
                        <el-avatar :size="50" :src="circleUrl"></el-avatar>
                      </div>
                      <div class="block" v-for="size in sizeList" :key="size">
                        <el-avatar :size="size" :src="circleUrl"></el-avatar>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="18">
                    <div class="grid-content bg-purple-light">
                      订单消息
                      <br />消息内容消息内容……
                    </div>
                  </el-col>
                </el-row>

                <el-row :gutter="10">
                  <el-col :span="6">
                    <div class="demo-basic--circle">
                      <div class="block">
                        <el-avatar :size="50" :src="circleUrl"></el-avatar>
                      </div>
                      <div class="block" v-for="size in sizeList" :key="size">
                        <el-avatar :size="size" :src="circleUrl"></el-avatar>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="18">
                    <div class="grid-content bg-purple-light">
                      订单消息
                      <br />消息内容消息内容……
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="好友列表" name="second">配置管理</el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </el-aside>
      <el-main>
        <el-card class="box-card" style="height:99.5%">
          <div slot="header" class="clearfix">
            <i class="el-icon-s-custom"></i>
            <span>订单消息</span>
          </div>
        </el-card>
        <!-- <view-router></view-router> -->
      </el-main>
      <el-aside width="300px" class="bj">
        <el-card class="box-card" style="height:1000px" shadow="never">
          <div class="text item">

            <el-tabs v-model="activeNameOne" @tab-click="handleClick">
              <el-tab-pane label="宝贝链接" name="one">
                <el-row :gutter="10">
                  <el-col :span="6">
                    <div class="demo-basic--circle">
                      <div class="block">
                        <!-- <el-avatar :size="50" :src="circleUrl"></el-avatar> -->
                        <img src="../../assets/images/bj.png" style="width:50px">
                      </div>
                      <!-- <div class="block" v-for="size in sizeList" :key="size">
                        <el-avatar :size="size" :src="circleUrl"></el-avatar>
                      </div> -->
                    </div>
                  </el-col>
                  <el-col :span="18">
                    <div class="grid-content bg-purple-light">
                      太平鸟男装 双色连帽……
                      <br />￥377.00
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="交易记录" name="two">配置管理</el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      activeNameOne: 'one'
    }
  }
}
</script>

<style>
</style>
