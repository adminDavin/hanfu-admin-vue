<template>
 <div class="div">
 <div class="header">
  <div style="margin-left:40px;line-height:60px;color: #666666;">订单查询</div>
 </div>

 <div class="demo-input-suffix" style="margin-left: 300px;">
   <div style="font-size: 20px;float: left;margin-top:30px; color: #666666">订单搜索</div>
   <el-input
     placeholder="请输入订单号"
     v-model="searchVal" style="width: 200px;margin-top:23px;margin-left: 30px;" @keyup.enter.native="onEnterSearch()">
   </el-input><br>
<div style="font-size: 20px;float: left;margin-top:30px;color: #666666">下单时间</div>
  <div class="block">
    <el-date-picker

      type="date"
      placeholder="开始日期" style="width: 200px;margin-top:23px;margin-left: 30px;">
    </el-date-picker >

      <span style="margin-left: 10px;">至</span>
      <el-date-picker

        type="date"
        placeholder="结束日期" style="width: 200px;margin-top:23px;margin-left:10px;">
      </el-date-picker >
         <br/>
        <div style="font-size: 20px;float: left;margin-top:30px;color: #666666">评价方式</div>
        <el-input
         placeholder="请输入名称"
         style="width: 200px;margin-top:23px;margin-left: 30px;">
        </el-input>
        <br/>
        <div style="font-size: 20px;float: left;margin-top:30px;color: #666666;margin-left: 320px;margin-top: -35px;">评价星级</div>
       <!-- <el-input
          placeholder="请输入名称"

          v-model="input1" style="width: 200px;margin-top:-42px;margin-left:420px;display: block;">
        </el-input> -->
             <el-select v-model="value" placeholder="请选择"  style="width: 200px;margin-top:-42px;margin-left:420px;display: block;">
               <el-option
                 v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value" >
               </el-option>
             </el-select>

   <br/>




            <div style="width: 150px;height: 40px;background: #A3A0FB;text-align: center;line-height:40px;margin-top: 30px;color: #ffffff;border-radius: 5px;cursor: pointer;margin-left: 110px;">筛选</div>
             <div style="width: 150px;height: 40px;background: #ffffff;text-align: center;line-height:40px;margin-top: -40px;color:#A3A0FB;border-radius: 5px;cursor: pointer;margin-left:300px;border: 1px solid #A3A0FB;">导出</div>
              <div style="margin-top: -30px;"><a href="" style="color: #A3A0FB;margin-left:500px;">查看筛选条件</a></div>

  </div>



 </div><br><br><br><br>


               <div class="footer">



                  <el-table
                     :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)"
                     :current-page="currpage"
                     :page-size="pagesize"
                     :total="tableData.length"

                     style="width: 100%;"
                     max-height="100%">

                     <el-table-column
                       prop="name"
                       label="商品描述"
                       width="200" align="center">
                     </el-table-column>
                     <el-table-column
                       prop="province"
                       label="评价内容"
                       width="200" align="center">
                     </el-table-column>
                     <el-table-column
                       prop="city"
                       label="描述相符"
                       width="200" align="center">
                     </el-table-column>
                     <el-table-column
                       prop="address"
                       label="服务态度"
                       width="250" align="center">
                     </el-table-column>
                     <el-table-column
                       prop="zips"
                       label="物流服务"
                       width="200" align="center" style="color:orangered;">
                     </el-table-column>
                     <el-table-column
                       prop="zip"
                       label="评价时间"
                       width="200" align="center">
                     </el-table-column>
                     <el-table-column
                       prop="zip"
                       label="买家"
                       width="200" align="center">
                     </el-table-column>

                     <el-table-column
                       fixed="right"
                       label="操作"
                       width="300" align="center">
                       <template slot-scope="scope"  >

                         <el-button
                           @click.native.prevent="detail(scope.$index, tableData)"
                           type="text" id="yincang"
                           size="small" style="color: #A3A0FB;  ">
                           回复
                         </el-button>
                       </template>
                     </el-table-column>
                   </el-table>
                     <div class="block" style="float: right;margin-right:35px;">

                        <el-pagination
                          @size-change="handleSizeChange"
                          @current-change="handleCurrentChange"
                          :page-size="100"
                          layout="prev, pager, next, jumper"
                          :total="1000">
                        </el-pagination>
                      </div>
               </div>
 </div>



</template>
<script>
  import api from '@/apis/order-api.js';
  import Axios from "axios";
  export default {
    data() {
      return {
        show:true,
        pagesize:8,
        currpage:1,
        search:{
          id:"1"
        },
          tableData: [{
                  date: '2016-05-03',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                },
                {
                  date: '2016-05-02',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                },{
                  date: '2016-05-04',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                }, {
                  date: '2016-05-08',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                },{
                  date: '2016-05-06',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                }, {
                  date: '2016-05-07',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333,
                  zips:"已发货"
                }],
                 options: [{
                  value: '选项1',
                  label: '<el-rate v-model="value" show-text></el-rate>',
                },],
                value: '',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        searchVal:"",
        query:""
      };
    },methods:{
            //搜索订单编号
           onEnterSearch(e,searchVal){
           api.query(this.search).then(res=>{
           console.log(res.data)
           if(res.data.status==20){
             console.log("搜索成功")
           }else{
             console.log("搜索失败")
           }
           console.log("search: "+ this.searchVal);
           })
           }
          ,
          //查看订单详情
          detail(){
            api.orderDetail(this.detail).then(res=>{
            console.log(res.data)
            })
          },
          //查看订单状态





          send(){

          },
              deleteRow(index, rows) {
              rows.splice(index, 1);
            },
              handleSizeChange(val) {
              console.log(`每页 ${val} 条`);
              this.pagesize=val
              },
              handleCurrentChange(val) {
              console.log(`当前页: ${val}`);
              this.currpage=val
              }


    }
  };
</script>
<style scoped="scoped">
.footer{
  width: 100%;
  height:600px;
  background: #ffffff;
  margin: 0 auto;
  bottom: 0;
}
.div{
  width: 95%;
  height: 45%;
  background:#ffffff;
  margin: 0 auto;
  margin-top:60px;
}
.header{
  width: 100%;
  height:60px;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}
</style>
