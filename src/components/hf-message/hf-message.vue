<template>
  <div style="width: 95%;height: 90%;background:#ffffff;margin:  0 auto;" class="div">
    <div style="width: 25%;height:100%;background:#ffffff;float: left;margin-top: 50px;">

      <img src="../img/6.jpg" style="width: 80px;height: 80px;border-radius: 50%;margin-left:20px;margin-top: 20px;">
      <div style="margin-left: 120px;margin-top: -60px;">商家昵称</div>
      <div style="margin-left: 120px;">状态：在线</div>
        <div style="width: 80%;height: 25px;margin: 0 auto ;margin-top:40px;">
          <i class="el-icon-search" style=" z-index: 99999;position: absolute;margin-left:10px;margin-top:5px;"></i>
          <input type="text" style="width: 100%;height: 20px;margin: 0 auto;border-radius:15px;outline: none;text-indent:25px;">
          </div>

            <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-top:40px; ">
              <el-tab-pane label="用户管理" name="first" style="margin-left: 60px;">
                  <div><img src="../img/6.jpg" style="width: 60px;height: 60px;"></div>
                    <div style="margin-left:80px;margin-top: -60px;">订单消息</div>
                    <div style="margin-left: 80px;">消息内容消息内容...</div><br><br>
                     <div><img src="../img/6.jpg" style="width: 60px;height: 60px;"></div>
                       <div style="margin-left:80px;margin-top: -60px;">订单消息</div>
                       <div style="margin-left: 80px;">消息内容消息内容...</div><br><br>
                         <div><img src="../img/6.jpg" style="width: 60px;height: 60px;"></div>
                           <div style="margin-left:80px;margin-top: -60px;">订单消息</div>
                           <div style="margin-left: 80px;">消息内容消息内容...</div><br><br>

              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second" style="margin-left: 60px;">
                <div><img src="../img/6.jpg" style="width: 60px;height: 60px;"></div>
                  <div style="margin-left:80px;margin-top: -60px;">订单消息</div>
                  <div style="margin-left: 80px;">消息内容消息内容...</div><br><br>
                   <div><img src="../img/6.jpg" style="width: 60px;height: 60px;"></div>
                     <div style="margin-left:80px;margin-top: -60px;">订单消息</div>
                     <div style="margin-left: 80px;">消息内容消息内容...</div><br><br>
                       <div><img src="../img/6.jpg" style="width: 60px;height: 60px;"></div>
                         <div style="margin-left:80px;margin-top: -60px;">订单消息</div>
                         <div style="margin-left: 80px;">消息内容消息内容...</div><br><br>

              </el-tab-pane>

            </el-tabs>
    </div>
      <div style="width: 70%;height: 100%;float: right;background: #ffffff;margin-top: 50px;">
      <div style="width: 100%;height:100px;border-bottom: 1px solid #cccccc;">
        <img src="../img/6.jpg" style="width: 80px;height: 80px;border-radius: 50%;margin-left:20px;float: left;">
           <span style="float: left;margin-top:30px;margin-left: 15px;">订单消息</span>
      </div>
       <div style="width:500px;height: 340px;border: 1px solid #cccccc;margin-top: 60px;">
         <div style="margin-left: 20px;margin-top: 20px;font-size: 24px;">订单通知</div>
         <div style="margin-left:20px;margin-top: 20px; ">订单号：45648464564</div>
         <div style="margin-left:20px;margin-top: 20px;float: left;">用户名：C.vo  </div>
         <div style="float: left;margin-top: 20px;margin-left:180px">产品：</div>
         <div style="margin-left:20px;margin-top: 20px; visibility: hidden;">订单号：45648464564</div>
         <div style="margin-left:20px;margin-top: 20px;float: left;">电话：26123  </div>
         <div style="float: left;margin-top: 20px;margin-left:180px">码数：XS</div>
         <div style="margin-left:20px;margin-top: 20px; visibility: hidden;">订单号：45648464564</div>
         <div style="margin-left:20px;margin-top: 20px;float: left;">地址：天津市西青区智慧山南塔308  </div>
         <div style="float: left;margin-top: 20px;margin-left:20px">状态：未处理</div>
         <div style="width: 150px;height:50px;background: #A6A3FB;float: right;border-radius:5px;margin-top: 30px;margin-right: 15px;"><span style="text-align: center;display: block;margin-top:15px;color: #ffffff;">立即处理</span></div>
       </div>
      </div>



  </div>
</template>

<script>

  export default {
      data() {
        return {
          activeName: 'second'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    };
</script>

<style>
 
  .div{
    width: 95%;height: 90%;background:red;margin:  0 auto;
  }
  body{
    width: 100%;
    height: 100%;
    background:#cccccc;
  }

</style>
