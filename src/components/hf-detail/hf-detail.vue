<template>
  <div style="width: 95%;height: 95%;background: #ffffff;margin: 0 auto;margin-top: 30px;">
   <div class="header" style="border-bottom: 1px solid #CCCCCC;background:#ffffff;">
    <div style="margin-left: 30px;color: #666666;font-weight: bold;"> 全部订单 > 订单详情</div>
    <div style="margin-left: 60px;margin-top: 60px;">订单号：1521554132152</div>
    <div style="color: #A6A3FB;font-size: 24px;margin-left:90px;">{{arr.orderDetailStatus}}</div>
    <div style="width:60%;height: 30px;margin-left: 80px;border-radius:15px;float: left;margin-top: 20px;">
     <div style="width:20%;height: 30px;background: #A6A3FB;float: left;border-radius:15px;text-align: center;"><span style="display: block;margin-top:-8px;color: #ffffff;">下单</span></div>
     <div style="width:20%;height: 30px;background: #A6A3FB;float: left;border-radius:15px;text-align: center;border-left:0px solid #cccccc;"><span style="display: block;margin-top:-8px;color: #ffffff;">付款</span></div>
     <div style="width:20%;height: 30px;background: #cccccc;float: left;border-radius:15px;text-align: center;"><span style="display: block;margin-top:-8px;color: #ffffff;">配货</span></div>
     <div style="width:20%;height: 30px;background:#cccccc;float: left;border-radius:15px;text-align: center;"><span style="display: block;margin-top:-8px;color: #ffffff;">出库</span></div>
     <div style="width:20%;height: 30px;background:#cccccc;float: left;border-radius:15px;text-align: center;"><span style="display: block;margin-top:-8px;color: #ffffff;">交易成功</span></div>
    <div style="width:100%;height: 40px;margin-top:40px;">
      <div style="width: 20%;height: 30px;text-align: center;float: left;">2019-11-14  13:32</div>
      <div style="width: 20%;height: 30px;text-align: center;float: left;">2019-11-14  13:32</div>

     </div>

      <div style="width: 100%;height: 150px;margin-top: 60px;">
       <img src="../img/6.jpg" style="width:100px;height:100px;float: left; ">
       <div style="float: left;margin-left:40px;margin-top: 30px;">太平鸟男装 双色连帽卫衣乐事...</div>
       <div style="float: left;margin-left:80px;margin-top: 30px;">￥377.00×1</div>

      </div>
      <div style="width: 100%;height: 150px;margin-top: 10px;">
       <img src="../img/6.jpg" style="width:100px;height:100px;float: left; ">
       <div style="float: left;margin-left:40px;margin-top: 30px;">太平鸟男装 双色连帽卫衣乐事...</div>
       <div style="float: left;margin-left:80px;margin-top: 30px;">￥377.00×1</div>

      </div>
      <div style="font-weight: bold;font-size: 20px;">收货信息</div>
      <div style="font-weight: bold;font-size: 14px;color: #666666;">姓名:C.vo</div>
      <div style="font-weight: bold;font-size: 14px;color: #666666;line-height:15px;">联系电话: 15688108250</div>
      <div style="font-weight: bold;font-size: 14px;color: #666666;">收货地址: 天津市 西青区 智慧山南塔380室</div>

      <div style="font-weight: bold;font-size: 20px;margin-top: 60px;">支付方式及送货时间</div>
      <div style="font-weight: bold;font-size: 14px;color: #666666;">支付方式: 在线支付</div>
      <div style="font-weight: bold;font-size: 14px;color: #666666;line-height:15px;">送货时间: 不限送货时间</div>
      <div style="font-weight: bold;font-size: 14px;color: #666666;">送达时间: 预计五天内送达</div>

     </div>



   </div>


  </div>
</template>

<script>
  import api from '@/apis/order-api.js';
  import orderDetail from '../../apis/order-api.js'
  export default{
    data:()=>{
      return{
        arr:[]
          // id:this.$route.query.id
      }
    },methods:{


    },
    created(){

      console.log(this.$route.query.id)
      const ID = this.$route.query.id
      api.orderDetail(ID).then((res)=>{
        console.log(res.data.data[0])
        this.arr=res.data.data[0]
      })
    }
  }
</script>

<style>
  .header{
    width: 100%;
    height: 50px;
    line-height: 50px;

  }
  body{
    width: 100%;
    height: 100%;

  }
</style>
