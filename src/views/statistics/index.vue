<template>
  <div class="div">
    <div style="width: 100%;height: 200px ;">
      <div style="font-size: 22px;margin-left: 30px;margin-top: 60px;">概况</div>
      <br />
      <div style="width: 100%;height: 200px;display: flex;justify-content: space-between;">
        <div style="width: 24%;height: 200px ;margin-left: 30px;">
          <img src="../img/21.png" style="width: 100%;height: 200px;" />
          <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本日新增会员</div>
          <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">2468 人</div>
          <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">
            同比增长：13.8%
            <span>↑</span>
          </div>
        </div>
        <div style="width: 24%;height: 200px;background:pink;">
          <img src="../img/22.png" style="width: 100%;height: 200px;" />
          <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本日新增会员</div>
          <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">2468 人</div>
          <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">
            同比增长：13.8%
            <span>↑</span>
          </div>
        </div>
        <div style="width: 24%;height: 200px;background: mediumpurple;">
          <img src="../img/cc.png" style="width: 100%;height: 200px;" />
          <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本日新增会员</div>
          <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">2468 人</div>
          <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">
            同比增长：13.8%
            <span>↑</span>
          </div>
        </div>
        <div style="width: 23%;height: 200px;background: paleturquoise;margin-right:30px;">
          <img src="../img/22.png" style="width: 100%;height: 200px;" />
          <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本日新增会员</div>
          <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">2468 人</div>
          <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">
            同比增长：13.8%
            <span>↑</span>
          </div>
        </div>
      </div>

      <div
        style="width: 100%;height: 300px;background:#F0F1F6;margin-top: 15px;display: flex;justify-content: space-between;"
      >
        <div style="width:33%;height: 300px;background:#ffffff;margin-left: 30px; ">
          <div
            style="width: 100%;height: 50px;line-height: 50px;border-bottom: 1px solid #cccccc;font-size: 14px;margin-left: 20px; "
          >转化率统计</div>
          <br />
          <div style="width: 100%;height: 250px;" id="main"></div>
        </div>
        <div style="width:38%;height: 300px;background:#ffffff;">
          <div
            style="width: 100%;height: 50px;boder-bottom:1px solid #cccccc;line-height: 50px;border-bottom: 1px solid #cccccc;font-size: 14px;margin-left: 20px;"
          >客户访问量</div>
          <br />
          <div style="width: 100%;height: 250px;" id="main1"></div>
        </div>
        <div style="width:23%;height:520px;background:#ffffff;margin-right: 30px; ">
          <div
            style="width: 100%;height: 50px;line-height: 50px;border-bottom: 1px solid #cccccc;margin-left: 20px;"
          >地域消费情况</div>
          <div style="width: 100%;height: 800px;">
            <img
              src="../img/16.png"
              style="width: 100%;height:200px;margin: 0 auto;margin-left: 30px;"
            />
            <img
              src="../img/33.png"
              style="z-index: 9999;margin-left: 200px;margin-top: -130px;position: absolute;"
            />
            <img
              src="../img/44.png"
              style="z-index: 9999;margin-left: 300px;margin-top: -120px;position: absolute;"
            />
            <img
              src="../img/55.png"
              style="z-index: 9999;margin-left: 250px;margin-top: -100px;position: absolute;"
            />
            <img
              src="../img/66.png"
              style="z-index: 9999;margin-left: 200px;margin-top: -80px;position: absolute;"
            />
            <img
              src="../img/66.png"
              style="z-index: 9999;margin-left:140px;margin-top: -120px;position: absolute;"
            />
            <img
              src="../img/66.png"
              style="z-index: 9999;margin-left: 300px;margin-top: -80px;position: absolute;"
            />
            <div style="width: 100%;height: 30px;background: #ffffff;">
              <div style="width: 50%;height: 30px;float: left">
                <img
                  src="../img/33.png"
                  style="display:block;margin-left: 60px;float: left;margin-top: 8px; "
                />
                <div style="float: left;margin-top:4px;margin-left: 20px;">上海</div>
              </div>
              <div style="width: 50%;height: 30px ;float: left;">
                <div style="float: right;margin-right: 40px;">￥29，192</div>
              </div>
            </div>
            <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
              <div style="width: 50%;height: 30px;float: left">
                <img
                  src="../img/44.png"
                  style="display:block;margin-left: 60px;float: left;margin-top: 8px; "
                />
                <div style="float: left;margin-top:4px;margin-left: 20px;">上海</div>
              </div>
              <div style="width: 50%;height: 30px ;float: left;">
                <div style="float: right;margin-right: 40px;">￥29，192</div>
              </div>
            </div>
            <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
              <div style="width: 50%;height: 30px;float: left">
                <img
                  src="../img/55.png"
                  style="display:block;margin-left: 60px;float: left;margin-top: 8px; "
                />
                <div style="float: left;margin-top:4px;margin-left: 20px;">上海</div>
              </div>
              <div style="width: 50%;height: 30px ;float: left;">
                <div style="float: right;margin-right: 40px;">￥29，192</div>
              </div>
            </div>
            <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
              <div style="width: 50%;height: 30px;float: left">
                <img
                  src="../img/66.png"
                  style="display:block;margin-left: 60px;float: left;margin-top: 8px; "
                />
                <div style="float: left;margin-top:4px;margin-left: 20px;">上海</div>
              </div>
              <div style="width: 50%;height: 30px ;float: left;">
                <div style="float: right;margin-right: 40px;">￥29，192</div>
              </div>
            </div>
            <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
              <div style="width: 50%;height: 30px;float: left">
                <img
                  src="../img/33.png"
                  style="display:block;margin-left: 60px;float: left;margin-top: 8px; "
                />
                <div style="float: left;margin-top:4px;margin-left: 20px;">上海</div>
              </div>
              <div style="width: 50%;height: 30px ;float: left;">
                <div style="float: right;margin-right: 40px;">￥29，192</div>
              </div>
            </div>
            <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
              <div style="width: 50%;height: 30px;float: left">
                <img
                  src="../img/33.png"
                  style="display:block;margin-left: 60px;float: left;margin-top: 8px; "
                />
                <div style="float: left;margin-top:4px;margin-left: 20px;">上海</div>
              </div>
              <div style="width: 50%;height: 30px ;float: left;">
                <div style="float: right;margin-right: 40px;">￥29，192</div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div>{{'列表内容 ' + o }}</div>
      </el-card> -->

    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data: () => {
    return {}
  },
  methods: {
    admins () {
      var myChart1 = echarts.init(document.getElementById('main1'))
      var option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        color: ['#A3A0FB', '#55D8FE', '#28F29A'],
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      }
      myChart1.setOption(option)
    },
    admin () {
      var myChart = echarts.init(document.getElementById('main'))
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          // eslint-disable-next-line standard/array-bracket-even-spacing
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            color: ['#A3A0FB', '#55D8FE', '#FF8373', '#FFDA83'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 500, name: '直接访问' },
              { value: 500, name: '邮件营销' },
              { value: 500, name: '联盟广告' },
              { value: 500, name: '视频广告' }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.admin()
    this.admins()
    this.admins()
  }
}
</script>

<style scoped="scoped">
body {
  width: 100%;
  height: 100%;
  background: #f0f1f6;
}
div {
  cursor: pointer;
  position: relative;
}
.el-card {
  margin-left: 32px;
  margin-top:15px ;
  width: 1340px;
}
</style>
