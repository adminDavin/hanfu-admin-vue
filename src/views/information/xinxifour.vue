<template>
  <div>
    <el-card class="box-card">
      <el-tabs :tab-position="tabPosition">
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
                        <hr>
                        <div style="background-color: #ccc;margin-top: 20px;">订单号：123456789</div>
                        <div style="padding:20px">
                            <h1 style="color:#a3a4f7;margin-bottom:50px">已支付</h1>
                            <el-steps :active="2" align-center>
                                <el-step title="下单" description="2019-11-14  13:32"></el-step>
                                <el-step title="付款" description="2019-11-14  13:32"></el-step>
                                <el-step title="配货" description=""></el-step>
                                <el-step title="出库" description=""></el-step>
                                <el-step title="交易成功" description=""></el-step>
                            </el-steps>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div>
                            <p>收货信息</p>
                            <p>姓 名：C.vo</p>
                            <p>联系电话：15616589</p>
                            <p>收货地址：天津市 西青区 智慧山南塔380室</p>
                        </div>
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
                        <hr>
                        <div style="background-color: #ccc;margin-top: 20px;">订单号：94151123</div>
                        <div style="padding:20px">
                            <h1 style="color:#a3a4f7;margin-bottom:50px">已支付</h1>
                            <el-steps :active="2" align-center>
                                <el-step title="下单" description="2019-11-14  13:32"></el-step>
                                <el-step title="付款" description="2019-11-14  13:32"></el-step>
                                <el-step title="配货" description=""></el-step>
                                <el-step title="出库" description=""></el-step>
                                <el-step title="交易成功" description=""></el-step>
                            </el-steps>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div>
                            <p>收货信息</p>
                            <p>姓 名：C.vo</p>
                            <p>联系电话：15616589</p>
                            <p>收货地址：天津市 西青区 智慧山南塔380室</p>
                        </div>
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
                        <hr>
                        <div style="background-color: #ccc;margin-top: 20px;">订单号：435738475</div>
                        <div style="padding:20px">
                            <h1 style="color:#a3a4f7;margin-bottom:50px">已支付</h1>
                            <el-steps :active="2" align-center>
                                <el-step title="下单" description="2019-11-14  13:32"></el-step>
                                <el-step title="付款" description="2019-11-14  13:32"></el-step>
                                <el-step title="配货" description=""></el-step>
                                <el-step title="出库" description=""></el-step>
                                <el-step title="交易成功" description=""></el-step>
                            </el-steps>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div>
                            <p>收货信息</p>
                            <p>姓 名：C.vo</p>
                            <p>联系电话：15616589</p>
                            <p>收货地址：天津市 西青区 智慧山南塔380室</p>
                        </div>
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
                        <hr>
                        <div style="background-color: #ccc;margin-top: 20px;">订单号：876542123</div>
                        <div style="padding:20px">
                            <h1 style="color:#a3a4f7;margin-bottom:50px">已支付</h1>
                            <el-steps :active="2" align-center>
                                <el-step title="下单" description="2019-11-14  13:32"></el-step>
                                <el-step title="付款" description="2019-11-14  13:32"></el-step>
                                <el-step title="配货" description=""></el-step>
                                <el-step title="出库" description=""></el-step>
                                <el-step title="交易成功" description=""></el-step>
                            </el-steps>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div>
                            <p>收货信息</p>
                            <p>姓 名：C.vo</p>
                            <p>联系电话：15616589</p>
                            <p>收货地址：天津市 西青区 智慧山南塔380室</p>
                        </div>
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
                    <div>
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">询问助手</span>
                        </span>
                        <hr>
                        <div style="background-color: #ccc;margin-top: 20px;">订单号：*/74848</div>
                        <div style="padding:20px">
                            <h1 style="color:#a3a4f7;margin-bottom:50px">已支付</h1>
                            <el-steps :active="2" align-center>
                                <el-step title="下单" description="2019-11-14  13:32"></el-step>
                                <el-step title="付款" description="2019-11-14  13:32"></el-step>
                                <el-step title="配货" description=""></el-step>
                                <el-step title="出库" description=""></el-step>
                                <el-step title="交易成功" description=""></el-step>
                            </el-steps>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div>
                            <p>收货信息</p>
                            <p>姓 名：C.vo</p>
                            <p>联系电话：15616589</p>
                            <p>收货地址：天津市 西青区 智慧山南塔380室</p>
                        </div>
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
                        <hr>
                        <div style="background-color: #ccc;margin-top: 20px;">订单号：6+598489</div>
                        <div style="padding:20px">
                            <h1 style="color:#a3a4f7;margin-bottom:50px">已支付</h1>
                            <el-steps :active="2" align-center>
                                <el-step title="下单" description="2019-11-14  13:32"></el-step>
                                <el-step title="付款" description="2019-11-14  13:32"></el-step>
                                <el-step title="配货" description=""></el-step>
                                <el-step title="出库" description=""></el-step>
                                <el-step title="交易成功" description=""></el-step>
                            </el-steps>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div>
                            <p>收货信息</p>
                            <p>姓 名：C.vo</p>
                            <p>联系电话：15616589</p>
                            <p>收货地址：天津市 西青区 智慧山南塔380室</p>
                        </div>
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
                    <div>
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">订单助手</span>
                        </span>
                        <hr>
                        <div style="background-color: #ccc;margin-top: 20px;">订单号：02003.45</div>
                        <div style="padding:20px">
                            <h1 style="color:#a3a4f7;margin-bottom:50px">已支付</h1>
                            <el-steps :active="2" align-center>
                                <el-step title="下单" description="2019-11-14  13:32"></el-step>
                                <el-step title="付款" description="2019-11-14  13:32"></el-step>
                                <el-step title="配货" description=""></el-step>
                                <el-step title="出库" description=""></el-step>
                                <el-step title="交易成功" description=""></el-step>
                            </el-steps>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div>
                            <p>收货信息</p>
                            <p>姓 名：C.vo</p>
                            <p>联系电话：15616589</p>
                            <p>收货地址：天津市 西青区 智慧山南塔380室</p>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label" style="display: flex;align-items: center;">
                        <el-avatar :size="30" :src="circleUrl"></el-avatar>
                        <span style="margin-left:10px">订单助手</span>
                    </span>
                    <div>
                        <span slot="label" style="display: flex;align-items: center;">
                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                            <span style="margin-left:10px">订单助手</span>
                        </span>
                        <hr>
                        <div style="background-color: #ccc;margin-top: 20px;">订单号：52213123</div>
                        <div style="padding:20px">
                            <h1 style="color:#a3a4f7;margin-bottom:50px">已支付</h1>
                            <el-steps :active="2" align-center>
                                <el-step title="下单" description="2019-11-14  13:32"></el-step>
                                <el-step title="付款" description="2019-11-14  13:32"></el-step>
                                <el-step title="配货" description=""></el-step>
                                <el-step title="出库" description=""></el-step>
                                <el-step title="交易成功" description=""></el-step>
                            </el-steps>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div style="padding: 20px;border-bottom: 1px solid #bbb;">
                            <img
                                src="../../assets/images/bj.png"
                                style="width:100px;vertical-align: middle">
                            <span style="margin:0 100px 0 30px ">太平鸟男装 双色连帽卫衣乐事...</span>
                            <span>￥377.00 x 1</span>
                        </div>
                        <div>
                            <p>收货信息</p>
                            <p>姓 名：C.vo</p>
                            <p>联系电话：15616589</p>
                            <p>收货地址：天津市 西青区 智慧山南塔380室</p>
                        </div>
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
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    };
  },
  computed: {},
  watch: {},
  created () {},
  methods: {},
  mounted () {},
};
</script>

<style scoped lang="less">
.time {

  position: absolute;
  top: 10px;
  right: 0;
}
.position {
  position: fixed;
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
