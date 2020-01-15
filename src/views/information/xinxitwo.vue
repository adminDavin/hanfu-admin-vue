<template>
  <div>
    <el-card class="box-card" style="height:600px">
      <el-tabs :tab-position="tabPosition" style="position: relative;">
        <el-tab-pane label="所有消息   10">
            <el-tabs type="card" :tab-position="tabPosition">
                <el-tab-pane>
                    <span slot="label" style="display: flex;align-items: center;">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        <span style="margin-left:10px">官方助手</span>
                    </span>
                    <div>
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">官方助手</span>
                        </span>
                        <span class="time">2019-11-11</span>
                        <hr>
                        <span style="padding:10px">
                            唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀
                        </span>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label" style="display: flex;align-items: center;">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        <span style="margin-left:10px">官方助手</span>
                    </span>
                    <div>
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">官方助手</span>
                        </span>
                        <span class="time">2019-11-11</span>
                        <hr>
                        <span style="padding:10px">
                            哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去
                        </span>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="系统消息   5">
            <el-tabs type="card" :tab-position="tabPosition">
                <el-tab-pane>
                    <span slot="label" style="display: flex;align-items: center;">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        <span style="margin-left:10px">系统助手</span>
                    </span>
                    <div>
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">系统助手</span>
                        </span>
                        <span class="time">2019-11-11</span>
                        <hr>
                        <span style="padding:10px">
                            唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀
                        </span>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label" style="display: flex;align-items: center;">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        <span style="margin-left:10px">系统助手</span>
                    </span>
                    <div>
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">系统助手</span>
                        </span>
                        <span class="time">2019-11-11</span>
                        <hr>
                        <span style="padding:10px">
                            哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去
                        </span>
                    </div>
                </el-tab-pane>
            </el-tabs></el-tab-pane>
        <el-tab-pane label="询问消息   2">
            <el-tabs type="card" :tab-position="tabPosition">
                <el-tab-pane>
                    <span slot="label" style="display: flex;align-items: center;">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        <span style="margin-left:10px">询问助手</span>
                    </span>
                    <div @click="hrefthere">
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">询问助手</span>
                        </span>
                        <span class="time">2019-11-11</span>
                        <hr>
                        <span style="padding:10px">
                            唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀
                        </span>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label" style="display: flex;align-items: center;">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        <span style="margin-left:10px">询问助手</span>
                    </span>
                    <div>
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">询问助手</span>
                        </span>
                        <span class="time">2019-11-11</span>
                        <hr>
                        <span style="padding:10px">
                            哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去
                        </span>
                    </div>
                </el-tab-pane>
            </el-tabs></el-tab-pane>
        <el-tab-pane label="订单消息   50">
            <el-tabs type="card" :tab-position="tabPosition">
                <el-tab-pane>
                    <span slot="label" style="display: flex;align-items: center;">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        <span style="margin-left:10px">订单助手</span>
                    </span>
                    <div @click="hreffour">
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">订单助手</span>
                        </span>
                        <span class="time">2019-11-11</span>
                        <hr>
                        <span style="padding:10px">
                            唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀妈呀唉呀
                        </span>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label" style="display: flex;align-items: center;">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        <span style="margin-left:10px">订单助手</span>
                    </span>
                    <div  @click="hreffour">
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">订单助手</span>
                        </span>
                        <span class="time">2019-11-11</span>
                        <hr>
                        <span style="padding:10px">
                            哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去哎呀我去
                        </span>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-tab-pane>
      </el-tabs>
      <!-- <div class="position">
        <div class="box">
          <span class="line"></span>
          <span>系统消息</span>
        </div>
        <div class="box">
          <span class="line" style="background-color: #467bd7;"></span>
          <span>询问消息</span>
        </div>
        <div class="box">
          <span class="line" style="background-color: #c1699c;"></span>
          <span>订单消息</span>
        </div>
      </div> -->
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      tabPosition: 'left',
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    hrefthere () {
      this.$router.push('/xinxithere')
    },
    hreffour () {
      this.$router.push('/xinxifour')
    }

  },
  mounted () {}
}
</script>

<style scoped lang="less">
.time {
  position: absolute;
  top: 10px;
  right: 0;
}
.position {
  position: absolute;
  top: 300px;
  left: 244px;
  .box {
    display: flex;
    align-items: center;
    margin-top: 30px;
    .line {
      display: inline-block;
      width: 5px;
      height: 20px;
      margin-right: 20px;
      background-color: #a899e6;
    }
  }
}
</style>
