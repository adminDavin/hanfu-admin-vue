/* eslint-disable vue/no-unused-vars */
<template>
  <div>
    <div style="display:flex;">
      <div
        style="font-size:14px; width:45%;height:150px;background-size:100%;color:#fff;overflow:hidden;"
        class="leftxiao"
      >
        <div
          style="display:flex;align-items:center;flex-direction:column; margin-top:20px;width:155px;"
        >
          <div>今日收入金额（元）</div>
          <div style="margin-top:2px;">{{liulan.amountDay}}</div>
        </div>
        <div style="font-size:12px;display:flex;">
          <div
            style="margin-left:14px; display:flex;align-items:center;flex-direction:column; margin-top:15px;"
          >
            <div>支付订单数</div>
            <i style="font-size:13px;margin-top:2px;margin-bottom:2px;">{{liulan.orderCountsDay}}</i>
            <div style="font-size:10px;">昨日{{liulan.orderCountsYestday}}</div>
          </div>
          <div
            style="margin-left:14px;display:flex;align-items:center;flex-direction:column; margin-top:15px;"
          >
            <div>支付人数</div>
            <i style="font-size:13px;margin-top:2px;margin-bottom:2px;">{{liulan.browseCountsDay}}</i>
            <div style="font-size:10px;">昨日：{{liulan.paymentConutsYestday}}</div>
          </div>
          <div
            style="margin-left:14px;display:flex;align-items:center;flex-direction:column; margin-top:15px;"
          >
            <div>浏览量</div>
            <i style="font-size:13px;margin-top:2px;margin-bottom:2px;">{{liulan.browseCountsDay}}</i>
            <div style="font-size:10px;">昨日：{{liulan.browseCountsYestday}}</div>
          </div>
        </div>
      </div>
      <div
        style="font-size:14px;margin-left:16px; width:45%;height:150px;background-size:100%;color:#fff;overflow:hidden;"
        class="leftxiao1"
      >
        <div
          style="display:flex;align-items:center;flex-direction:column; margin-top:20px;width:155px;"
        >
          <div>本月收入金额（元）</div>
          <div style="margin-top:2px;">{{liulan.amountMouth}}</div>
        </div>
        <div style="font-size:12px;display:flex;">
          <div
            style="margin-left:14px; display:flex;align-items:center;flex-direction:column; margin-top:15px;"
          >
            <div>支付订单数</div>
            <i style="font-size:13px;margin-top:2px;margin-bottom:2px;">{{liulan.orderCountsDay}}</i>
            <div style="font-size:10px;">昨日{{liulan.orderConutsMouth}}</div>
          </div>
          <div
            style="margin-left:14px;display:flex;align-items:center;flex-direction:column; margin-top:15px;"
          >
            <div>支付人数</div>
            <i
              style="font-size:13px;margin-top:2px;margin-bottom:2px;"
            >{{liulan.paymentConutsMouth}}</i>
            <div style="font-size:10px;">昨日：{{liulan.paymentConutsYestday}}</div>
          </div>
          <div
            style="margin-left:14px;display:flex;align-items:center;flex-direction:column; margin-top:15px;"
          >
            <div>浏览量</div>
            <i style="font-size:13px;margin-top:2px;margin-bottom:2px;">{{liulan.browseCountsMouth}}</i>
            <div style="font-size:10px;">昨日：{{liulan.browseCountsYestday}}</div>
          </div>
        </div>
      </div>
    </div>
    <div style="display:flex;margin-top:30px;">
      <div class="hb-3-3" style="width:30%;">
        <div class="hb-3-title">
          <span class="hb-3-text">销量排行</span>
          <span class="hb-3-move">查看更多</span>
        </div>
        <div class="hb-4-title">
          <ul>
            <li>
              <span>排名</span>
              <span class="hb-p">品名</span>
              <span class="hb-x">销量</span>
            </li>
            <li v-for="(item,index) in pai" :key="index">
              <span>{{index+1}}</span>
              <span>{{item.productName}}</span>
              <span>{{item.salesCountAll}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div id="main1" style="margin-top: .99vw;width: 30%;height:260px;"></div>
      <div id="main2" style="margin-top: .99vw;width: 30%;height:300px;margin-left:20px;"></div>
    </div>
    <div style="display:flex;">
      <div style="width:50%;">
        <div>销售情况</div>
        <div id="main" style="width:100%;height:300px;"></div>
      </div>
      <div style="width:30%;">
        <div style="display:flex; justify-content:space-between;">
          <div>消息通知</div>
          <div>查看更多</div>
        </div>
        <div class="scroll-wrap" style="margin-top:20px;">
          <div class="scroll-content" :style="{ top }" @mouseenter="Stop()" @mouseleave="Up()">
            <p v-for="item in prizeList" :key="item.id">
              <a :href="item.src" style="color:#000;">{{item.name}}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import home from '@/service/home.js';
// eslint-disable-next-line no-unused-vars
import echarts from 'echarts';
export default {
  data() {
    return {
      year: [],
      browseCountForYeay: [],
      salesCountMonth: [],
      mouth: [],
      orderTypeStr: [],
      typeJson: [],
      pai: [],
      logList: [
        {
          message: 1,
        },
        {
          message: 1,
        },
        {
          message: 1,
        },
      ],
      liulan: {},
      bossId: 1,
      prizeList: [
        { name: '城轨采购网', src: 'http://www.railunique.com', id: 1 },
        {
          name: '天津地铁电子采购平台',
          src: 'http://www.railunique.com',
          id: 2,
        },
        { name: '南昌地铁', src: 'http://www.railunique.com', id: 3 },
        { name: '南昌地铁', src: 'http://www.railunique.com', id: 4 },
        { name: '兰州地铁招标信息', src: 'http://www.railunique.com', id: 5 },
        {
          name: '西安公共资源交易中心',
          src: 'http://www.railunique.com',
          id: 6,
        },
      ],
      activeIndex: 0,
      intnum: undefined,
    };
  },
  created() {
    this.ScrollUp();
  },
  computed: {
    top() {
      // eslint-disable-next-line no-magic-numbers
      return -this.activeIndex * 50 + 'px';
    },
  },
  // eslint-disable-next-line no-empty-function
  mounted() {
    this.getpai();
    this.getorder();
    this.getstoneproduct();
    // this.shous();
    this.xiao();
    this.ke();
  },
  methods: {
    ke() {
      home.ke(this.bossId, (res) => {
        console.log(res);
        this.year = res.data.data.year;
        this.browseCountForYeay = res.data.data.browseCountForYeay;
        this.zhu();
      });
    },
    xiao() {
      home.xiao(this.bossId, (res) => {
        // console.log(res);
        this.mouth = res.data.data.mouth;
        this.salesCountMonth = res.data.data.salesCountMonth;
        this.shous();
      });
    },
    getorder() {
      home.getorder(this.bossId, (res) => {
        // console.log(res);
        this.orderTypeStr = res.data.data;
        this.typeJson = res.data.data.js;
        this.bing();
      });
    },
    getpai() {
      home.getpai(this.bossId, (res) => {
        // console.log(res);
        this.pai = res.data.data;
      });
    },
    ScrollUp() {
      this.intnum = setInterval((_) => {
        if (this.activeIndex < this.prizeList.length) {
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
        // eslint-disable-next-line no-magic-numbers
      }, 1000);
    },
    Stop() {
      clearInterval(this.intnum);
    },
    Up() {
      this.ScrollUp();
    },

    getstoneproduct() {
      home.getstoneproduct(this.bossId, (res) => {
        // console.log(res);
        this.liulan = res.data.data;
      });
    },
    zhu: function() {
      var myChart = echarts.init(document.getElementById('main2'));
      var option = {
        title: {
          text: '客户访问量',
          subtext: '纯属虚构',
          left: 'center',
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        // this.year = res.data.data.year;
        // this.browseCountForYeay = res.data.data.browseCountForYeay;
        xAxis: [
          {
            type: 'category',
            data: this.year,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            // eslint-disable-next-line no-magic-numbers
            data: this.browseCountForYeay,
          },
        ],
      };

      myChart.setOption(option);
    },
    bing: function() {
      var myChart = echarts.init(document.getElementById('main1'));
      var option = {
        title: {
          text: '订单类型分布',
          subtext: '纯属虚构',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.orderTypeStr,
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.typeJson,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };

      myChart.setOption(option);
    },
    shous: function() {
      // eslint-disable-next-line no-unused-vars
      var myChart = echarts.init(document.getElementById('main'));
      // eslint-disable-next-line no-undef
      var option = {
        xAxis: {
          type: 'category',
          data: this.mouth,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            // eslint-disable-next-line no-magic-numbers
            data: this.salesCountMonth,
            type: 'line',
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style  scoped >
* {
  margin: 0;
  padding: 0;
}
.scroll-wrap {
  height: 150px;
  overflow: hidden;
}
.scroll-content {
  position: relative;
  transition: top 0.5s;
}
.scroll-content p {
  line-height: 50px;
}

ul,
li {
  list-style: none;
}
.hb-3-title {
  border-bottom: 1px solid #e5e5e5;
}
* {
  margin: 0;
  padding: 0;
}
.leftxiao {
  background: url(../img/21.png) no-repeat;
}
.leftxiao1 {
  background: url(../img/22.png) no-repeat;
}
a {
  text-decoration: none;
}
ul li {
  list-style-type: none;
}
.header-boss {
  display: flex;
  width: 100%;
  height: 1019px;
  flex: 1;
  align-items: center;
  overflow: hidden;
}
.header-boss-1 {
  width: 417px;
  height: 1019px;
}
/* // 左区块1区 */
.header-boss-1 .hb-1-1 {
  width: 417px;
  height: 209px;
  background-color: #fff;
}
.hb-1-title {
  width: 417px;
  height: 42px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  background-color: #fff;
}
.hb-1-text {
  width: 56px;
  height: 13px;
  display: block;
  font-size: 14px;
  color: #333333;
  margin: 17px 0 12px 18px;
  font-weight: bold;
}
.hb-1-contents {
  width: 100%;
  margin: 35px 139px 39px 44px;
}
.hb-1-contents .hb-1-content li {
  font-size: 14px;
  width: 100%;
  margin-bottom: 5px;
}
.hb-1-contents .hb-1-content li:hover {
  border-bottom: 1px solid #a8a8a8;
  color: #a3a0fb;
}
.hb-1-contents .hb-1-content .hb-1-hover {
  padding-bottom: 1px;
}
/*  左区块2区 */
.hb-2-2 {
  width: 100%;
  height: 260px;
  background: #fff;
  margin-top: 16px;
}
.hb-2-contents {
  width: 100%;
  margin: 49px 55px 58px 44px;
}
.hb-2-contents .hb-2-content li {
  font-size: 14px;
  width: 100%;
  margin-bottom: 14px;
}
.hb-2-contents .hb-2-content li:hover {
  border-bottom: 1px solid #a8a8a8;
  color: #a3a0fb;
}
.hb-2-contents .hb-2-content .hb-2-hover {
  padding-bottom: 1px;
}
/* // 左区块3区 */
.hb-3-3 {
  width: 417px;
  height: 491px;
  background: rgba(255, 255, 255, 1);
  margin-top: 19px;
}
.hb-3-3 .hb-3-title {
  width: 417px;
  height: 42px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  background-color: #fff;
}
.hb-3-3 .hb-3-title span {
  line-height: 42px;
  font-size: 14px;
  color: #333333;
}
.hb-3-3 .hb-3-title .hb-3-text {
  float: left;
  font-weight: bold;
  margin-left: 18px;
}
.hb-3-3 .hb-3-title .hb-3-move {
  float: right;
  margin-right: 18px;
  color: #a3a0fb;
}
.hb-4-title {
  width: 376px;
  height: 46px;
  margin: 0 auto;
}
.hb-4-title ul li {
  width: 100%;
  line-height: 46px;
}
.hb-4-title ul li span {
  font-size: 14px;
  color: #a4a7b0;
  float: left;
  display: flex;
  justify-content: center;
  width: 125px;
}
/* // 右区块 */
.header-boss-2 {
  width: 100%;
  height: 1019px;
  margin-left: 17px;
}
/* // 右区域数据1 */
.header-sj-box {
  width: 1148px;
  height: 209px;
  display: flex;
  justify-content: center;
}
.header-first {
  width: 438px;
  height: 209px;
  background: url(../img/21.png) no-repeat;
  background-size: 100% 209px;
}
.header-first-text {
  width: 100%;
  height: 54px;
  margin-top: 34px;
}
.header-first-money {
  display: block;
  width: 162px;
  line-height: 18px;
  font-size: 18px;
  color: #fff;
  margin-left: 22px;
}
.header-first-tu {
  width: 230px;
  height: 18px;
  margin-top: 18px;
}
.header-first-tu span {
  display: block;
  float: left;
  color: #fff;
  font-size: 22px;
}
.header-first-pay {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
}
.pay-one {
  width: 70px;
  height: 70px;
  font-size: 14px;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.pay-one-right {
  margin: 0 53px 0 53px;
}
.pay-one-left {
  margin-left: 22px;
}
.pay-one-s {
  width: 100%;
  line-height: 18px;
  font-size: 24px;
  margin-top: 7px;
}
.pay-one-s i {
  width: 25px;
  height: 18px;
  float: left;
  margin-left: 15px;
}
.pay-one-s span {
  display: block;
  width: 18px;
  height: 18px;
  margin-left: 10px;
  float: left;
  font-size: 20px;
}
.pay-one-day {
  width: 100%;
  height: 11px;
  font-size: 12px;
  margin-top: 7px;
}
.header-first-sj {
  width: 175px;
  font-size: 24px;
  float: left;
}
.header-second {
  width: 438px;
  height: 209px;
  background: url(../img/22.png) no-repeat;
  background-size: 100% 209px;
  margin: 0 23px 0 23px;
}
.header-menu {
  width: 226px;
  height: 209px;
  background-color: #fff;
}
.header-menu-title {
  width: 100%;
  height: 43px;
  border-bottom: 1px solid #e5e5e5;
}
.header-menu-title span {
  display: block;
  width: 56px;
  line-height: 43px;
  font-size: 14px;
  color: #333333;
  font-weight: 400;
  margin-left: 17px;
}
.header-menu-text {
  width: 100%;
  height: 165px;
}
.header-menu-text ul .header-menu-top {
  margin-top: 16px;
}
.header-menu-text ul {
  overflow: hidden;
}
.header-menu-text ul li {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 19px;
}
.header-menu-text ul li a {
  font-size: 14px;
  color: #333333;
}
.header-menu-text ul li .header-menu-left {
  margin-right: 20px;
}
/* // 右区域数据2 */
.header-sj-box2 {
  width: 1148px;
  height: 318px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
}
.header-third {
  width: 564px;
  height: 318px;
  background-color: #fff;
}
.header-third-title {
  width: 100%;
  line-height: 42px;
  border-bottom: 1px solid #e5e5e5;
}
.header-third-title span {
  display: block;
  width: 100%;
  line-height: 43px;
  font-size: 14px;
  color: #333333;
  font-weight: 400;
  margin-left: 17px;
}
.header-left {
  margin-left: 19px;
}
#main {
  width: 564px;
  height: 253px;
}
#main1 {
  width: 564px;
  height: 253px;
}
#main2 {
  width: 1099px;
  height: 275px;
}
/* // 右区域数据3 */
.header-sj-box3 {
  width: 1148px;
  height: 427px;
  background-color: #fff;
  margin-top: 16px;
}
.header-sj-title {
  width: 100%;
  height: 41px;
  border-bottom: 1px solid #e5e5e5;
}
.header-sj-title span {
  display: block;
  width: 70px;
  line-height: 43px;
  font-size: 14px;
  color: #333333;
  font-weight: 400;
  margin-left: 17px;
}
</style>
