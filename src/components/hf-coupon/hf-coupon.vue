<template>
  <div style="width: 95%;height: 95%;background: #ffffff;margin: 0 auto;margin-top: 30px;">
  <div style="width: 100%;height: 20%;background: #ffffff;"><br>
     <div style="width: 100%;height: 50px;font-size:24px;border-bottom: 1px solid #ffffff;"><span style="display: block;margin-left: 20px;">优惠券</span></div>
     <div style="margin-left: 100px;margin-top: 40px;">活动形式<el-input v-model="input" placeholder="请输入名称" style="width: 15%;margin-left: 30px;">
     </el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;券类型<el-select v-model="value" placeholder="全部" style="margin-left: 50px;width: 15%;">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value" >
    </el-option>

  </el-select>

         <div style="width:140px;height: 40px;background: #A6A3FB; text-align: center;line-height:40px;color: #ffffff;margin-left: 1000px;margin-top: -40px;">查询</div>
         <div style="width:140px;height: 40px;background: #ffffff; text-align: center;line-height:40px;color: #000000;margin-left: 1200px;margin-top: -40px;">重置</div>





  </div>

  </div>
  <div style="width: 100%;height: 100%;background:#ffffff;margin-top: 30px;">

    <div style="float: right;"> <i class="el-icon-search
    " style="float: right;position: absolute;margin-top:42px;margin-left: 10px;"></i><input type="text" placeholder="搜索" style="height:45px;margin-right: 40px;margin-top: 25px;text-indent:30px;"></div>
         <div style="width:140px;height:50px;background: red;float: right;text-align: center;line-height: 50px;margin-right:40px;margin-top: 25px;background: #ffffff;">批量删除</div>
      <div style="width:140px;height:50px;background: red;float: right;text-align: center;line-height: 50px;margin-right:50px;color: #ffffff;margin-top: 25px;background: #A6A3FB;" @click="dialogVisible = true">新建优惠券</div><br>
  <div style="width: 100%;height:20%; ;margin-top: 100px;">
    <div style="width:16.6%;height:100%;;float: left;">
      <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
      <div style="float: right;margin-right:40px; margin-top: 30px; ">
        <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
    </div>
          <div style="width:16.6%;height:100%;float: left;">
   <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
   <div style="float: right;margin-right: 40px; margin-top: 30px; ">
              <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
          </div>
          <div style="width:16.6%;height:100%;float: left;">
      <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
      <div style="float: right;margin-right: 40px; margin-top: 30px; ">
              <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
          </div>
          <div style="width:16.6%;height:100%;float: left;">
            <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
            <div style="float: right;margin-right: 40px; margin-top: 30px; ">
              <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
          </div>
          <div style="width:16.6%;height:100%;float: left;">
         <img src="../img/15.png" style="width:85%;height:140px;margin-left:30px;">
            <div style="float: right;margin-right: 40px; margin-top: 30px; ">
              <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
          </div>
          <div style="width:16.6%;height:100%;float: left;">
            <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
            <div style="float: right;margin-right: 40px; margin-top: 30px; ">
              <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
          </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
         <div style="width:16.6%;height:100%;float: left;">
           <img src="../img/15.png" style="width: 85%;height:140px;margin-left:30px;">
           <div style="float: right;margin-right: 40px; margin-top: 30px; ">
             <span style="color: #A6A3FB;"> 上架 </span > &nbsp;<span style="color: #FFCE26;"> 修改 </span> &nbsp;<span style="color: #FF318A;"> 删除 </span></div>
         </div>
       <el-dialog
         title="新建优惠券"
         :visible.sync="dialogVisible"
         width="30%"
         :before-close="handleClose">
        <div style="margin-left:100px;">优惠券名称<el-input v-model="input" placeholder="请输入优惠券名称" style="width:50%;margin-left: 30px;"></el-input></div><br>
<div style="margin-left:100px;">优惠券面额<el-input v-model="input" placeholder="请输入优惠券名称" style="width:50%;margin-left: 30px;"></el-input><span style="margin-left: 10px;">元</span></div><br>
<div style="margin-left:100px;">满减条件<span style="margin-left: 40px;">满</span><el-input   v-model="input" placeholder="请输入优惠券名称" style="width:50%;margin-left: 10px;"></el-input><span style="margin-left: 10px;">元可用</span></div>
 <br>
<div style="width: 280px;height: 50px; margin: 0 auto;">
    <el-radio-group v-model="radio">
      <el-radio :label="3">领取之日</el-radio>
      <el-radio :label="6">固定截止日期</el-radio>

    </el-radio-group>
</div>
 <div style="margin-left:100px;">
   <div class="block">
    <span class="demonstration">到期时间</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期" style="margin-left: 60px;">
    </el-date-picker>
  </div>
 </div><br>
   <el-checkbox v-model="checked" style="margin-left:25px;">自定义优惠券</el-checkbox>
   <div style="color: #A3A0FB;margin-left:120px;font-size:18px;margin-top:10px;">上传优惠券</div>
         <span slot="footer" class="dialog-footer">
           <div style="width: 300px;height: 80px; ;margin: 0 auto;">
             <el-button @click="dialogVisible = false" style="float: left;width: 130px;">取 消</el-button>
             <el-button type="primary" @click="dialogVisible = false" style="float: right;width: 130px;">保存</el-button>

           </div>

         </span>
       </el-dialog>
  </div>

  </div>
<el-pagination
  background
  layout="prev, pager, next"
  :total="1000" style="margin-top: -300px;float: right;">
</el-pagination>
          </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
         checked: true,
          radio: 3,
          dialogVisible: false,
          input: '',
          options: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                }, {
                  value: '选项3',
                  label: '蚵仔煎'
                }, {
                  value: '选项4',
                  label: '龙须面'
                }, {
                  value: '选项5',
                  label: '北京烤鸭'
                }],
                value: ''
      }
    },methods:{

    }
  }
</script>

<style>
  body{
    width: 100%;
    height: 100%;
    background: #cccccc;

  }
  div{
    cursor: pointer;
  }
</style>
