<template>
  <div style="width:95%;height: 95%;margin: 0 auto;background: #ffffff;margin-top:25px;">
  <div style="width: 100%;height:60px;background: #ffffff;border-bottom: 1px solid #cccccc;"><span style="margin-left: 20px;margin-top: 30px;display: block;line-height: 60px;">账户提现</span></div>
  <div style="width: 100%;height:200px; ">
    <div style="width:30%;height: 60px ;height: 120px;margin-left: 60px;margin-top: 60px;border-left:2px solid #A6A3FB;border-top:2px dashed #cccccc;border-bottom: 2px dashed #cccccc;border-right: 2px dashed #cccccc;float: left;">

    <span style="margin-left: 100px;display: block;padding-top: 30px;">可用余额   (元)</span>
     <span style="margin-left:110px;font-size: 40px;color: #A6A3FB;margin-top:10px;display: block;font-weight: bold;">0.00</span>
      </div>

      <div style="width:30%;height: 60px ;height: 120px;margin-left: 60px;margin-top: 60px;border-left:2px solid #BCA42F;border-top:2px dashed #cccccc;border-bottom: 2px dashed #cccccc;border-right: 2px dashed #cccccc;float: left;">

      <span style="margin-left: 100px;display: block;padding-top: 30px;">可用余额   (元)</span>
       <span style="margin-left:110px;font-size:40px;color: #BCA42F;margin-top:10px;display: block;font-weight: bold;">0.00</span>

        </div>

  </div>

<div style="width: 40%;height:300px; margin: 0 auto;margin-top:100px;">
     <span style="color: #FF318A;font-size: 24px;">*</span><span style="font-size: 20px;">提现金额</span><el-input v-model="input" placeholder="请输入内容" style="width: 40%;margin-left: 30px;"></el-input>
        <div style="margin: 0 auto;margin-left:120px;margin-top: 10px;">提现费用：2元/笔</div><br>
 <span style="color: #FF318A;font-size: 24px;">*</span><span style="font-size: 20px;">提现到</span>
 <el-select v-model="value" placeholder="银行卡 / 支付宝 / 微信" style="margin-left: 45px;width: 40%;">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select><br><br>
    <span style="color: #FF318A;font-size: 24px;">*</span><span style="font-size: 20px;">密码</span><el-input v-model="input" placeholder="请输入内容" style="width:40%;margin-left: 70px;"></el-input><br><br>
    <span style="color: #FF318A;font-size: 24px;">*</span><span style="font-size: 20px;">提现到账  <div style="display: inline-block;margin-left:20px;font-size: 26px;color: #A6A3FB;">0.00</div>   元</span>
    <div style="width: 160px;height: 50px;background: #A6A3FB;color: #ffffff;text-align: center;line-height: 50px;border-radius: 10px;margin-left: 160px;margin-top: 50px;">提现</div>

</div>

  <div style="width: 500px;height: 300px; ;margin-top:100px;margin-left:50px;">
    <div style="font-size: 26px;color: #999999;">提现规则</div>
     <div style="margin-top: 30px;margin-left: 15px;color: #999999;">1.提现规则提现规则提现规则提现规则提现规则</div>
     <div style="margin-top: 10px;margin-left: 15px;color: #999999;">2.提现规则提现规则提现规则提现规则提现规则</div>
     <div style="margin-top: 10px;margin-left: 15px;color: #999999;" >3.提现规则提现规则提现规则提现规则提现规则</div>
     <div style="margin-top: 10px;margin-left: 15px;color: #999999;">4.提现规则提现规则提现规则提现规则提现规则</div>
     <div style="margin-top: 10px;margin-left: 15px;color: #999999;">5.提现规则提现规则提现规则提现规则提现规则</div>
     <div style="margin-top: 10px;margin-left: 15px;color: #999999;">6.提现规则提现规则提现规则提现规则提现规则</div>
  </div>


  </div>
</template>

<script>
    export default {
      data() {
        return {
          input:"",
          options: [{
            value: '选项1',
            label: '支付宝'
          }, {
            value: '选项2',
            label: '微信'
          }, {
            value: '选项3',
            label: '银行卡'
          }],
          value: ''
        }
      }
    }
</script>

<style>
  body{
    width: 100%;
    height: 100%;
    background: #F0F1F6;
  }
</style>
