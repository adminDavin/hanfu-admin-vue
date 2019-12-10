<template>
  <div class="div">
   <div style="width: 100%;height: 200px ;">
     <div style="font-size: 22px;margin-left: 30px;margin-top: 60px;">概况</div><br>
     <div style="width: 100%;height: 200px;display: flex;justify-content: space-between;">
       <div style="width: 24%;height: 200px ;margin-left: 30px;">
       <img src="../img/21.png" style="width: 100%;height: 200px;">
          <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本日新增会员</div>
          <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">2468 人</div>
          <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">同比增长：13.8% <span>↑</span></div>
       </div>
       <div style="width: 24%;height: 200px;background:pink;">
         <img src="../img/22.png" style="width: 100%;height: 200px;">
            <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本日新增会员</div>
            <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">2468 人</div>
            <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">同比增长：13.8% <span>↑</span></div>
       </div>
       <div style="width: 24%;height: 200px;background: mediumpurple;">
         <img src="../img/cc.png" style="width: 100%;height: 200px;">
            <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本日新增会员</div>
            <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">2468 人</div>
            <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">同比增长：13.8% <span>↓</span></div>
       </div>
       <div style="width: 23%;height: 200px;background: paleturquoise;margin-right:30px;">
         <img src="../img/22.png" style="width: 100%;height: 200px;">
            <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本日新增会员</div>
            <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">2468 人</div>
            <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">同比增长：13.8% <span>↑</span></div>
       </div>
     </div>

      <div style="width: 100%;height: 300px;background:#F0F1F6;margin-top: 15px;display: flex;justify-content: space-between;">
        <div style="width:33%;height: 300px;background:#ffffff;margin-left: 30px; ">
          <div style="width: 100%;height: 50px;line-height: 50px;font-size: 14px;border-bottom: 1px solid #cccccc; ">转化率统计</div><br>
          <div style="width: 100%;height: 250px;" id="main"></div>
        </div>
        <div style="width:39%;height: 300px;background:#ffffff;">
          <div style="width: 100%;height: 50px;boder-bottom:1px solid #cccccc;line-height: 50px;border-bottom: 1px solid #cccccc;font-size: 14px;">客户访问量</div><br>
           <div style="width: 100%;height: 250px;" id="main1"></div>
        </div>
        <div style="width:23%;height:520px;background:#ffffff;margin-right: 30px; ">
          <div style="width: 100%;height: 50px;line-height: 50px;border-bottom: 1px solid #cccccc;">地域消费情况</div>
          <div style="width: 100%;height: 800px;">
             <img src="../img/16.png" style="width: 100%;height:200px;margin: 0 auto;margin-left: 30px;">
             <img src="../img/33.png" style="z-index: 9999;margin-left: 200px;margin-top: -130px;position: absolute;">
             <img src="../img/44.png" style="z-index: 9999;margin-left: 300px;margin-top: -120px;position: absolute;">
             <img src="../img/55.png" style="z-index: 9999;margin-left: 250px;margin-top: -100px;position: absolute;">
             <img src="../img/66.png" style="z-index: 9999;margin-left: 200px;margin-top: -80px;position: absolute;">
             <img src="../img/66.png" style="z-index: 9999;margin-left:140px;margin-top: -120px;position: absolute;">
             <img src="../img/66.png" style="z-index: 9999;margin-left: 300px;margin-top: -80px;position: absolute;">
             <div style="width: 100%;height: 30px;background: #ffffff;">
               <div style="width: 50%;height: 30px;float: left">
                 <img src="../img/33.png" style="display:block;margin-left: 60px;float: left;margin-top: 8px; ">
                  <div style="float: left;margin-top:4px;margin-left: 20px;">上海</div>
               </div>
               <div style="width: 50%;height: 30px ;float: left;">
                  <div style="float: right;margin-right: 40px;">￥29，192</div>
               </div>
             </div>
             <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
               <div style="width: 50%;height: 30px;float: left">
                 <img src="../img/44.png" style="display:block;margin-left: 60px;float: left;margin-top: 8px; ">
                  <div style="float: left;margin-top:4px;margin-left: 20px;">浙江</div>
               </div>
               <div style="width: 50%;height: 30px ;float: left;">
                  <div style="float: right;margin-right: 40px;">￥29，192</div>
               </div>
             </div>
             <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
               <div style="width: 50%;height: 30px;float: left">
                 <img src="../img/55.png" style="display:block;margin-left: 60px;float: left;margin-top: 8px; ">
                  <div style="float: left;margin-top:4px;margin-left: 20px;">江苏</div>
               </div>
               <div style="width: 50%;height: 30px ;float: left;">
                  <div style="float: right;margin-right: 40px;">￥29，192</div>
               </div>
             </div>
             <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
               <div style="width: 50%;height: 30px;float: left">
                 <img src="../img/66.png" style="display:block;margin-left: 60px;float: left;margin-top: 8px; ">
                  <div style="float: left;margin-top:4px;margin-left: 20px;">北京</div>
               </div>
               <div style="width: 50%;height: 30px ;float: left;">
                  <div style="float: right;margin-right: 40px;">￥29，192</div>
               </div>
             </div>
             <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
               <div style="width: 50%;height: 30px;float: left">
                 <img src="../img/33.png" style="display:block;margin-left: 60px;float: left;margin-top: 8px; ">
                  <div style="float: left;margin-top:4px;margin-left: 20px;">广东</div>
               </div>
               <div style="width: 50%;height: 30px ;float: left;">
                  <div style="float: right;margin-right: 40px;">￥29，192</div>
               </div>
             </div>
             <div style="width: 100%;height: 30px;background: #ffffff;margin-top: 10px;">
               <div style="width: 50%;height: 30px;float: left">
                 <img src="../img/33.png" style="display:block;margin-left: 60px;float: left;margin-top: 8px; ">
                  <div style="float: left;margin-top:4px;margin-left: 20px;">深圳</div>
               </div>
               <div style="width: 50%;height: 30px ;float: left;">
                  <div style="float: right;margin-right: 40px;">￥29，192</div>
               </div>
             </div>
          </div>

        </div>
      </div>


  <div style="width: 100%;background: #F0F1F6;display: flex;justify-content: space-between;margin-top: 30px;">
    <div style="width: 72.8%;height: 800px;background:#ffffff;margin-left: 30px;">
      <div style="width: 100%;height: 50px;border-bottom: 1px solid #cccccc;">
       <div style="margin-left: 20px;line-height: 50px;"> 转化率统计</div>
       <div style="width: 100%;height: 700px;" id="main2">

       </div>

      </div>

    </div>
    <div style="width: 23%;height: 220px;background:#ffffff;margin-top:250px;margin-right: 29px; ">
      <div style="width: 100%;height: 50px;border-bottom: 1px solid #cccccc;line-height: 50px;">各品类占比</div>
      <div style="width: 100%;height: 300px;display: flex;justify-content:space-between;">
      <div style="width: 30%;height: 150px;background:#ffffff;" id="main3">

        <!-- <div style="margin-left:60px;margin-top: -100px;">上衣<br><span style="font-weight: bold;font-size: 24px;">22%</span></div> -->
      </div>
      <div style="width: 30%;height: 150px;" id="main4">
        <!-- <div style="margin-left:60px;margin-top: -100px;">裤子<br><span style="font-weight: bold;font-size: 24px;">22%</span></div> -->
      </div>
      <div style="width: 30%;height: 150px;" id="main5">


        <!-- <div style="margin-left: 60px;margin-top: -100px;">外套<br><span style="font-weight: bold;font-size: 24px;">22%</span></div> -->
      </div>

      </div>
      <div style="width: 100%;height: 200px ;margin-top: -100px;">
        <div style="width: 100%;height: 50px;border-bottom: 1px solid #cccccc;background: #ffffff;">
          <div style="float:left;line-height: 50px;margin-left: 20px;background: #ffffff;"><span>销量排行</span></div>
          <div style="float:right;line-height: 50px;margin-right: 20px;"><span>查看更多</span></div>
          <div style="width: 100%;height:250px;background:#ffffff;display: flex;">
            <div style="width: 100%;height: 45px;display: flex;margin-top: 20px;">
              <div style="width: 33.3%;height: 45px;text-align: center;line-height: 45px;">排名</div>
              <div style="width: 33.3%;height: 45px;text-align: center;line-height: 45px;">品名</div>
              <div style="width: 33.3%;height: 45px;text-align: center;line-height: 45px;">销量</div>
            </div>
          </div>

          <div style="width: 100%;height:100px;background:#ffffff;display: flex;margin-top: -160px;">
            <div style="width: 100%;height: 45px; display: flex;">
              <div style="width: 33.3%;height: 45px;text-align: center;line-height: 45px;">1</div>
              <div style="width: 33.3%;height: 45px;text-align: center;line-height: 45px;">商品品牌</div>
              <div style="width: 33.3%;height: 45px;text-align: center;line-height: 45px;">2323</div>
            </div>
          </div>
           <div style="width: 100%;height:40px;background:#ffffff;display: flex;margin-top: -40px;">
             <div style="width: 100%;height: 45px;display: flex;">
               <div style="width: 33.3%;height: 45px;text-align: center;line-height: 45px;">1</div>
               <div style="width: 33.3%;height: 45px;text-align: center;line-height: 45px;">商品品牌</div>
               <div style="width: 33.3%;height: 45px;text-align: center;line-height: 45px;">2323</div>
             </div>
           </div>



        </div>

      </div>

    </div>

  </div>
 <div style="width: 98%;height: 300px;background:#ffffff;margin-left: 25px;margin-top:300px;margin-top:20px;">
  <div style="width: 100%;height: 50px; ">
    <div style="float: left;font-size: 24px;line-height: 50px;margin-left: 25px;">财务</div>
    <div style="float: right;margin-right: 50px;line-height: 50px;"><i class=""></i>日历</div>
<div style="width: 100%;height: 200px ;">
     <div style="width: 100%;height: 200px;display: flex;justify-content: space-between;">
       <div style="width: 24%;height: 200px ;margin-left: 30px;">
       <img src="../img/21.png" style="width: 100%;height: 200px;">
          <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本日销售额（元）</div>
          <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">35664.00 </div>
          <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">同比增长：13.8% <span>↑</span></div>
       </div>
       <div style="width: 24%;height: 200px;background:pink;">
         <img src="../img/22.png" style="width: 100%;height: 200px;">
            <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本周销售额（元）</div>
            <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">35664.00</div>
            <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">同比增长：13.8% <span>↑</span></div>
       </div>
       <div style="width: 24%;height: 200px;background: mediumpurple;">
         <img src="../img/cc.png" style="width: 100%;height: 200px;">
            <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本月销售额（元）</div>
            <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">35664.00</div>
            <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">同比增长：13.8% <span>↓</span></div>
       </div>
       <div style="width: 23%;height: 200px;background: paleturquoise;margin-right:30px;">
         <img src="../img/22.png" style="width: 100%;height: 200px;">
            <div style="margin-top: -150px;margin-left: 30px;color: #ffffff;">本季度销售额（元）</div>
            <div style="margin-left: 40px;font-size: 22px;color: #ffffff;margin-top: 15px;">35664.00</div>
            <div style="margin-top: 15px;margin-left: 30px;font-size: 12px;color: #ffffff;">同比增长：13.8% <span>↑</span></div>
       </div>
     </div>
     </div>
  </div>

 </div>
 <div style="width: 97%;height: 500px ;margin: 0 auto;display: flex;justify-content: space-between; ;margin-top: 30px; ">
   <div style="width:60%;height:500px;  ">
     <div style="width: 100%;height: 50px;border-bottom: 1px solid #cccccc; line-height: 50px;">收入趋势</div>
     <div style="width: 100%;height: 450px;" id="ok"></div>
   </div>
   <div style="width:37%;height:500px; ">
     <div style="width: 100%;height: 50px;border-bottom: 1px solid #cccccc; line-height: 50px;">实时交易情况</div><br>
     <div style="width: 100%;height: 450px;" id="plus">

     </div>
   </div>

 </div>
   </div>


  </div>

</template>

<script>
  import echarts from 'echarts'
  export default{
    data:()=>{
     return{

     }
    },methods:{
      add4(){
        var myChart = echarts.init(document.getElementById('plus'));
        var  option = {
            title: {
                text: '对数轴示例',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            legend: {
                left: 'left',
                data: ['2的指数', '3的指数']
            },
            xAxis: {
                type: 'category',
                name: 'x',
                splitLine: {show: false},
                data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'log',
                name: 'y'
            },
            series: [
                {
                    name: '3的指数',
                    type: 'line',
                    data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
                },
                {
                    name: '2的指数',
                    type: 'line',
                    data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
                },
                {
                    name: '1/2的指数',
                    type: 'line',
                    data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
                }
            ]
        };
       myChart.setOption(option);
        window.onresize = function () {
               myChart.resize();
           }
      },
      add3(){
        var myChart = echarts.init(document.getElementById('ok'));
       function randomData() {
           now = new Date(+now + oneDay);
           value = value + Math.random() * 21 - 10;
           return {
               name: now.toString(),
               value: [
                   [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                   Math.round(value)
               ]
           }
       }

       var data = [];
       var now = +new Date(1997, 9, 3);
       var oneDay = 24 * 3600 * 1000;
       var value = Math.random() * 1000;
       for (var i = 0; i < 1000; i++) {
           data.push(randomData());
       }

       var option = {
           title: {
               // text: '动态数据 + 时间坐标轴'
           },
           tooltip: {
               trigger: 'axis',
               formatter: function (params) {
                   params = params[0];
                   var date = new Date(params.name);
                   return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
               },
               axisPointer: {
                   animation: false
               }
           },
           xAxis: {
               type: 'time',
               splitLine: {
                   show: false
               }
           },
           yAxis: {
               type: 'value',
               boundaryGap: [0, '100%'],
               splitLine: {
                   show: false
               }
           },
           series: [{
               name: '模拟数据',
               type: 'line',
               showSymbol: false,
               hoverAnimation: false,
               data: data
           }]
       };

       setInterval(function () {

           for (var i = 0; i < 5; i++) {
               data.shift();
               data.push(randomData());
           }

           myChart.setOption({
               series: [{
                   data: data
               }]
           });
       }, 1000);
       myChart.setOption(option);
       window.onresize = function () {
              myChart.resize();
          }

      },
      add2(){
        var myChart = echarts.init(document.getElementById('main5'));
        var option={
        tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              x: 'left',
              // data:['直接访问','邮件营销','联盟广告','视频广告' ]
          },
          series: [
              {
                  name:'访问来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  color:['#FBD437', '#F0F2F5', '#F0F2F5','#F0F2F5'],
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
                  data:[
                      {value:500},
                      {value:500 },
                      {value:500 },
                      {value:500},

                  ]
              }
          ]
                 }
                 myChart.setOption(option);
                 window.onresize = function () {
                        myChart.resize();
                    }
      },
      add1(){
        var myChart = echarts.init(document.getElementById('main4'));
        var option={
        tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              x: 'left',
              // data:['直接访问','邮件营销','联盟广告','视频广告' ]
          },
          series: [
              {
                  name:'访问来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  color:['#25EAA3', '#F0F2F5', '#F0F2F5','#F0F2F5'],
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
                  data:[
                      {value:500},
                      {value:500 },
                      {value:500 },
                      {value:500},

                  ]
              }
          ]
                 }
                 myChart.setOption(option);
                 window.onresize = function () {
                        myChart.resize();
                    }

      },
      add(){
         var myChart = echarts.init(document.getElementById('main3'));
         var option={
         tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
           },
           legend: {
               orient: 'vertical',
               x: 'left',
               // data:['直接访问','邮件营销','联盟广告','视频广告' ]
           },
           series: [
               {
                   name:'访问来源',
                   type:'pie',
                   radius: ['50%', '70%'],
                   avoidLabelOverlap: false,
                   color:['#3AA1FF', '#F0F2F5', '#F0F2F5','#F0F2F5'],
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
                   data:[
                       {value:500},
                       {value:500 },
                       {value:500 },
                       {value:500},

                   ]
               }
           ]
                  }
                  myChart.setOption(option);
                  window.onresize = function () {
                         myChart.resize();
                     }


      },

      admin_s(){
         var myChart3 = echarts.init(document.getElementById('main2'));
         var option3 = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color:['#A3A1FB'],
            xAxis : [
                {
                    type : 'category',
                    data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[150, 100, 200, 334, 390, 330,500]
                }
            ],

        };
       myChart3.setOption(option3);
      },
      admins(){
           var myChart1 = echarts.init(document.getElementById('main1'));
           var option={
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
                 xAxis: {type: 'category'},
                 color:['#A3A0FB', '#55D8FE', '#28F29A'],
                 yAxis: {},
                 series: [
                     {type: 'bar'},
                     {type: 'bar'},
                     {type: 'bar'}
                 ]
           }
              myChart1.setOption(option);
              window.onresize = function () {
                     myChart.resize();
                 }
      }
      ,
       admin(){
           var myChart = echarts.init(document.getElementById('main'));
           var option={
  tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告' ]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            color:['#A3A0FB', '#55D8FE', '#FF8373','#FFDA83'],
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
            data:[
                {value:500, name:'直接访问'},
                {value:500, name:'邮件营销'},
                {value:500, name:'联盟广告'},
                {value:500, name:'视频广告'},

            ]
        }
    ]
           }
           myChart.setOption(option);
           window.onresize = function () {
                  myChart.resize();
              }
       }




    },

    mounted(){
       this.admin()
       this.admins()
       this.admin_s()
       this.add()
       this.add1()
       this.add2()
       this.add3()
       this.add4()
    }
  }
</script>

<style scoped="scoped">
  body{
    width: 100%;
    height: 100%;
     background:  #F0F1F6;
  }
  div{
    cursor: pointer;
  }
</style>
