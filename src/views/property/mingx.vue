<template>
  <div style="width: 95%;height: 100%;background: #ffffff;margin: 0 auto;margin-top: 30px;">
    <div style="width: 100%;height: 300px; ">
      <div class="shangleft1" style>
        <img src="../img/aa.png" style="width: 100%;height: 210px;" />
        <div class="ziti" style="z-index: 99999;">今日销售额</div>
        <div class="ziti2" style="z-index: 99999;">26484.00元</div>
        <div class="ziti3" style="z-index: 99999;">同比增长:13.8% ⬆</div>
      </div>
      <div class="shangleft2" style>
        <img src="../img/bb.png" style="width: 100%;height: 210px;" />
        <div class="ziti" style="z-index: 99999;">本周销售额</div>
        <div class="ziti2" style="z-index: 99999;">26484.00元</div>
        <div class="ziti3" style="z-index: 99999;">同比增长:13.8% ⬆</div>
      </div>

      <div class="shangleft3" style>
        <img src="../img/cc.png" style="width: 100%;height: 210px;" />
        <div class="ziti" style="z-index: 99999;">本月销售额</div>
        <div class="ziti2" style="z-index: 99999;;">26484.00元</div>
        <div class="ziti3" style="z-index: 99999;">同比增长:13.8% ⬇</div>
      </div>

      <div class="shangleft4" style>
        <img src="../img/aa.png" style="width: 100%;height: 210px;" />
        <div class="ziti" style="z-index: 99999;">本季度销售额</div>
        <div class="ziti2" style="z-index: 99999;">39456861.00元</div>
        <div class="ziti3" style="z-index: 99999;">同比增长:13.8% ⬆</div>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="">
      <el-tab-pane label="交易明细" name="first">
        <el-table :data="tableData" height="100%" border style="width: 100%">
          <el-table-column prop="date" label="订单号" align="center" width="300"></el-table-column>
          <el-table-column prop="name" label="买家昵称" align="center" width="300"></el-table-column>
          <el-table-column prop="desc" width="350" align="center" label="商品描述"></el-table-column>
          <el-table-column prop="laiyuan" label="订单来源" align="center" width="300"></el-table-column>
          <el-table-column prop="date" label="订单日期" align="center" width="300"></el-table-column>
          <el-table-column
            prop="jine"
            style="color: #A3A0FB;"
            label="订单金额"
            align="center"
            width="400"
          ></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="提现记录" name="second">
        <el-table :data="tableData" height="100%" border style="width: 100%">
          <el-table-column prop="liushui" label="流水号" align="center" width="400"></el-table-column>
          <el-table-column prop="dates" label="发起日期" align="center" width="400"></el-table-column>
          <el-table-column prop="zhanghu" width="350" align="center" label="账户"></el-table-column>
          <el-table-column prop="tixian" label="提现金额" align="center" width="400"></el-table-column>
          <el-table-column prop="caozuo" label="操作" align="center" width="400"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-pagination background layout="prev, pager, next" :total="1000" style="float: right;"></el-pagination>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeName: 'first',
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '太平鸟男装 双色连帽卫衣乐事联名撞色胶印...',
          laiyuan: '西青区',
          jine: '+377.00',
          liushui: '511231231',
          dates: '2019-10-20 12:26:13',
          zhanghu: '支付宝',
          tixian: '￥377.00',
          caozuo: '已到账'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang='less' scoped>
body {
  width: 100%;
  height: 100%;
  background: #cccccc;
}
.shangleft1 {
  width: 23%;
  height: 240px;
  float: left;
  margin-left: 34px;
  margin-top: 40px;
}
.shangleft2 {
  width: 23%;
  height: 240px;
  float: left;
  margin-left: 10px;
  margin-top: 60px;
}
.shangleft3 {
  width: 23%;
  height: 240px;
  float: left;
  margin-top: 60px;
  margin-left: 40px;
}
.shangleft4 {
  width: 23%;
  height: 240px;
  float: left;
  margin-top: 40px;
}
.ziti {
  margin-left: 60px;
  font-size: 20px;
  color: #ffffff;
  margin-top: -160px;
}
.ziti2 {
  margin-left: 60px;
  font-size: 25px;
  color: #ffffff;
  margin-top: 10px;
}
.ziti3 {
  margin-left: 60px;
  font-size: 14px;
  color: #ffffff;
  margin-top: 20px;
}
</style>
