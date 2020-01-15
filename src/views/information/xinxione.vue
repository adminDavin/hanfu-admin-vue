<template>
  <div>
    <el-container>
      <el-aside width="300px" class="bj">
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
      <el-main class="bj">
        <el-card class="box-card" style="height:99.5%">
          <div slot="header" class="clearfix">
            <i class="el-icon-s-custom"></i>
            <span>订单消息</span>
          </div>
          <div class="text item">
            <el-card class="box-card" shadow="never">
              <div slot="header" class="clearfix">
                <span>订单通知</span>
                <el-button style="float: right; padding: 3px 0" type="text">2019-11-12</el-button>
              </div>
              <div class="text item">
                <el-row :gutter="24">
                  <el-col :span="4">
                    <div class="grid-content bg-purple">订单号</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">22222222222</div>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="4">
                    <div class="grid-content bg-purple">用户名：</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">C.vo</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">产品：</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="4">
                    <div class="grid-content bg-purple">电话：</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">22222222222</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">码数：</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">XXXL</div>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="4">
                    <div class="grid-content bg-purple">地址：</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">天津市西青区智慧山南塔308</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">状态</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">未处理</div>
                  </el-col>
                </el-row>
              </div>
              <el-row>
                <el-button style="float: right" type="info" plain @click="hreftwo">立即处理</el-button>
              </el-row>
            </el-card>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    hreftwo () {
      this.$router.push('/xinxitwo')
    }
  }
}
</script>

<style lang="less" scoped>
.el-scrollbar__wrap {
  overflow-x: hidden;
}
// .bj {
//   background-color: #fff;
// }
</style>
