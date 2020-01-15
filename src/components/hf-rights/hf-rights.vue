<template>
 <div class="div">
 <div class="header">
  <div style="margin-left:40px;line-height:60px;color: #666666;" @click="ding()">订单查询</div>
 </div>

 <div class="demo-input-suffix" style="margin-left: 300px;">
   <div style="font-size: 20px;float: left;margin-top:30px; color: #666666" >订单搜索</div>
   <el-input
     placeholder="请输入订单号"
     style="width: 200px;margin-top:23px;margin-left: 30px;">
   </el-input><br>
<div style="font-size: 20px;float: left;margin-top:30px;color: #666666">下单时间</div>
  <div class="block">
    <el-date-picker

      type="date"
      placeholder="开始日期" style="width: 200px;margin-top:23px;margin-left: 30px;" v-model="screen.creatTime">
    </el-date-picker >

      <span style="margin-left: 10px;">至</span>
      <el-date-picker

        type="date"
        placeholder="结束日期" style="width: 200px;margin-top:23px;margin-left:10px;" v-model="screen.creatTime">
      </el-date-picker >
         <br/>
        <div style="font-size: 20px;float: left;margin-top:30px;color: #666666">商品名称</div>
        <el-input
         placeholder="请输入名称"
         style="width: 200px;margin-top:23px;margin-left: 30px;">
        </el-input>
        <br/>
        <div style="font-size: 20px;float: left;margin-top:30px;color: #666666;margin-left: 320px;margin-top: -35px;">付款方式</div>
   <el-select  v-model="value1" placeholder="请选择"  style="width: 200px;margin-top:-42px;margin-left:420px;display: block;">
               <el-option
                 v-for="item in options1"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value"
                 >
               </el-option>
             </el-select>
   <br/>
        <div style="font-size: 20px;float: left;margin-top:30px;color: #666666">订单状态</div>
       <el-select @change="status()" v-model="value" placeholder="请选择"  style="width: 200px;margin-top:23px;margin-left: 30px;">
         <el-option
           v-for="item in statu_s"
           :key="item.hfName"
           :label="item.hfName"
           :value="item.hfName"
           >
         </el-option>
       </el-select>
        <br/>
        <div style="font-size: 20px;float: left;margin-top:30px;color: #666666;margin-left: 320px;margin-top: -35px;">订单来源</div>
             <el-select v-model="value2" placeholder="请选择"  style="width: 200px;margin-top:-42px;margin-left:420px;display: block;">
               <el-option
                 v-for="item in options2"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
               </el-option>
             </el-select>
            <div style="width: 150px;height: 40px;background: #A3A0FB;text-align: center;line-height:40px;margin-top: 30px;color: #ffffff;border-radius: 5px;margin-left: 110px;cursor: pointer;" @click="shaixuan()">筛选</div>
             <div style="width: 150px;height: 40px;background: #ffffff;text-align: center;line-height:40px;margin-top: -40px;color:#A3A0FB;border-radius: 5px;cursor: pointer;margin-left:300px;border: 1px solid #A3A0FB;">导出</div>
              <div style="margin-top: -30px;"><a href="" style="color: #A3A0FB;margin-left:500px;">查看筛选条件</a></div>
                <div style="margin-top: -33px;"><el-button type="primary" @click="chuangjian()">创建订单</el-button></div>
                <!-- <div style="margin-left:650px;margin-top: -35px;"><el-button type="primary" @click="xiugai()">修改订单</el-button></div> -->
  </div>



 </div><br><br><br><br>


               <div class="footer">

               <div style="margin-left: 70px;padding-top: 20px;">
                  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

 <el-tab-pane label="全部" name="first">
                       <el-table
                         :data="arr.slice((currpage-1)*pagesize,currpage*pagesize)"
                         :current-page="currpage"
                         :page-size="pagesize"
                         :total="arr.length"
                         style="width: 100%;"
                         max-height="100%">
                         <el-table-column
                           fixed
                           prop="ordersId"
                           label="订单号"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="hfDesc"
                           label="商品描述"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="purchasePrice"
                           label="单价/数量"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="userName"
                           label="买家/收货人"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="logisticsCompany"
                           label="快递"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="amount"
                           label="实收金额(元)"
                           width="250" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="orderDetailStatus"
                           label="订单状态"
                           width="200" align="center" style="color:orangered;">
                         </el-table-column>
                         <el-table-column
                           fixed="right"
                           label="操作"
                           width="300" align="center">
                           <template slot-scope="scope"  >
                             <el-button
                               @click="detail(scope.row)"
                               type="text" id="yincang"
                               size="small" style="color: #A3A0FB;  ">
                               订单详情
                             </el-button>
                             <el-button
                               @click="xiugai(scope)"
                               type="text" id="yincang"
                               size="small" style="color:hotpink;  ">
                              修改订单
                             </el-button>
                           </template>
                         </el-table-column>
                       </el-table>
                         <div class="block" style="float: right;margin-right:35px;">

                            <el-pagination style="bottom: 0;"
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :page-size="100"
                              layout="prev, pager, next, jumper"
                              :total="1000"
                              fixed>
                            </el-pagination>
                          </div>

                     </el-tab-pane>




                     <el-tab-pane label="待商家处理" name="six">
 <el-table
                         :data="arr.slice((currpage-1)*pagesize,currpage*pagesize)"
                         :current-page="currpage"
                         :page-size="pagesize"
                         :total="arr.length"
                         style="width: 100%;"
                         max-height="100%">
                         <el-table-column
                           fixed
                           prop="ordersId"
                           label="订单号"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="hfDesc"
                           label="商品描述"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="purchasePrice"
                           label="单价/数量"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="userName"
                           label="买家/收货人"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="logisticsCompany"
                           label="快递"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="amount"
                           label="实收金额(元)"
                           width="250" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="orderDetailStatus"
                           label="订单状态"
                           width="200" align="center" style="color:orangered;">
                         </el-table-column>
                         <el-table-column
                           fixed="right"
                           label="操作"
                           width="300" align="center">
                           <template slot-scope="scope"  >
                             <el-button
                                 @click="detail(scope.row)"
                               type="text" id="yincang"
                               size="small" style="color: #A3A0FB;  ">
                               订单详情
                             </el-button>
                           </template>
                         </el-table-column>
                       </el-table>
                         <div class="block" style="float: right;margin-right:35px;">

                            <el-pagination style="bottom: 0;"
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :page-size="100"
                              layout="prev, pager, next, jumper"
                              :total="1000"
                              fixed>
                            </el-pagination>
                          </div>
                     </el-tab-pane>

                     <el-tab-pane label="待买家处理" name="seven">
 <el-table
                         :data="arr.slice((currpage-1)*pagesize,currpage*pagesize)"
                         :current-page="currpage"
                         :page-size="pagesize"
                         :total="arr.length"
                         style="width: 100%;"
                         max-height="100%">
                         <el-table-column
                           fixed
                           prop="ordersId"
                           label="订单号"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="hfDesc"
                           label="商品描述"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="purchasePrice"
                           label="单价/数量"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="userName"
                           label="买家/收货人"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="logisticsCompany"
                           label="快递"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="amount"
                           label="实收金额(元)"
                           width="250" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="orderDetailStatus"
                           label="订单状态"
                           width="200" align="center" style="color:orangered;">
                         </el-table-column>
                         <el-table-column
                           fixed="right"
                           label="操作"
                           width="300" align="center">
                           <template slot-scope="scope"  >
                             <el-button
                               @click="detail()"
                               type="text" id="yincang"
                               size="small" style="color: #A3A0FB;  ">
                               退款
                             </el-button>
                           </template>
                         </el-table-column>
                       </el-table>
                         <div class="block" style="float: right;margin-right:35px;">

                            <el-pagination style="bottom: 0;"
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :page-size="100"
                              layout="prev, pager, next, jumper"
                              :total="1000"
                              fixed>
                            </el-pagination>
                          </div>
                     </el-tab-pane>
                     <el-tab-pane label="客服介入" name="eight">
 <el-table
                         :data="arr.slice((currpage-1)*pagesize,currpage*pagesize)"
                         :current-page="currpage"
                         :page-size="pagesize"
                         :total="arr.length"
                         style="width: 100%;"
                         max-height="100%">
                         <el-table-column
                           fixed
                           prop="ordersId"
                           label="订单号"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="hfDesc"
                           label="商品描述"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="purchasePrice"
                           label="单价/数量"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="userName"
                           label="买家/收货人"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="logisticsCompany"
                           label="快递"
                           width="200" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="amount"
                           label="实收金额(元)"
                           width="250" align="center">
                         </el-table-column>
                         <el-table-column
                           prop="orderDetailStatus"
                           label="订单状态"
                           width="200" align="center" style="color:orangered;">
                         </el-table-column>
                         <el-table-column
                           fixed="right"
                           label="操作"
                           width="300" align="center">
                           <template slot-scope="scope"  >
                             <el-button
                                @click="detail(scope.row)"
                               type="text" id="yincang"
                               size="small" style="color: #A3A0FB;  ">
                                退款处理中
                             </el-button>
                           </template>
                         </el-table-column>
                       </el-table>
                         <div class="block" style="float: right;margin-right:35px;">

                            <el-pagination style="bottom: 0;"
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :page-size="100"
                              layout="prev, pager, next, jumper"
                              :total="1000"
                              fixed>
                            </el-pagination>
                          </div>
                     </el-tab-pane>
                   </el-tabs>

               </div>


               </div>

        <!-- 创建订单 -->
        <el-dialog
        title="创建订单" align="left"
        :visible.sync="dialogVisible1"
        width="70%"
        :before-close="handleClose">
        支付金额 : <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.amount"></el-input><br><br>
        创建时间 :
        <el-date-picker
          v-model="Adds.createTime"
          type="date"
          placeholder="选择日期" >
        </el-date-picker><br><br>
        配送方式 : <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.distribution"></el-input><br><br>
        物品Id : <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.googsId"></el-input><br><br>
        订单描述 :<br /> <el-input
        type="textarea"
        :rows="3" style="width:25%; "
        placeholder="请输入内容"
        v-model="Adds.hfDesc">
        </el-input><br><br>
        支付附言 :<br /> <el-input
        type="textarea"
        :rows="3" style="width:25%;"
        placeholder="请输入内容"
        v-model="Adds.hfMemo">
        </el-input><br><br>
        备注:<br /> <el-input
        type="textarea"
        :rows="3" style="width:25%; "
        placeholder="请输入内容"
        v-model="Adds.hfRemark">
        </el-input><br><br>
        税金: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.hfTax"></el-input><br><br>
        订单详情Id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.id" ></el-input><br><br>
        物流公司: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.logisticsCompany"></el-input><br><br>
        物流名称: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.logisticsOrderName"></el-input><br><br>
        物流订单号: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.logisticsOrdersId "></el-input><br><br>
        订单详情Id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.orderDetailId "></el-input><br><br>
        订单详情状况: <el-input placeholder="请输入内容" style="width: 20%;"v-model="Adds.orderDetailStatus "></el-input><br><br>

        订单类型: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.orderType"></el-input><br><br>
        订单id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.ordersId"></el-input><br><br>
        支付方式名称: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.payMethodName"></el-input><br><br>
        支付方式类型: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.payMethodType"></el-input><br><br>

        支付状态: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.payStatus"></el-input><br><br>
        购买价格: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.purchasePrice"></el-input><br><br>
        购买数量: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.purchaseQuantity"></el-input><br><br>
        仓库id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.respId"></el-input><br><br>
        用户地址id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.userAddressId"></el-input><br><br>
        用户id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.userId"></el-input><br><br>

        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="Add()">确 定</el-button>
        </span>
        </el-dialog>


        <el-dialog
        title="创建订单" align="left"
        :visible.sync="dialogVisible2"
        width="70%"
        :before-close="handleClose">
        支付金额 : <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.amount"></el-input><br><br>
        创建时间 :
        <el-date-picker
          v-model="Adds.createTime"
          type="date"
          placeholder="选择日期" >
        </el-date-picker><br><br>
        配送方式 : <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.distribution"></el-input><br><br>
        物品Id : <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.googsId"></el-input><br><br>
        订单描述 :<br /> <el-input
        type="textarea"
        :rows="3" style="width:25%; "
        placeholder="请输入内容"
        v-model="Adds.hfDesc">
        </el-input><br><br>
        支付附言 :<br /> <el-input
        type="textarea"
        :rows="3" style="width:25%;"
        placeholder="请输入内容"
        v-model="Adds.hfMemo">
        </el-input><br><br>
        备注:<br /> <el-input
        type="textarea"
        :rows="3" style="width:25%; "
        placeholder="请输入内容"
        v-model="Adds.hfRemark">
        </el-input><br><br>
        税金: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.hfTax"></el-input><br><br>
        订单详情Id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.id" ></el-input><br><br>
        物流公司: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.logisticsCompany"></el-input><br><br>
        物流名称: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.logisticsOrderName"></el-input><br><br>
        物流订单号: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.logisticsOrdersId "></el-input><br><br>
        订单详情Id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.orderDetailId "></el-input><br><br>
        订单详情状况: <el-input placeholder="请输入内容" style="width: 20%;"v-model="Adds.orderDetailStatus "></el-input><br><br>

        订单类型: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.orderType"></el-input><br><br>
        订单id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.ordersId"></el-input><br><br>
        支付方式名称: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.payMethodName"></el-input><br><br>
        支付方式类型: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.payMethodType"></el-input><br><br>

        支付状态: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.payStatus"></el-input><br><br>
        购买价格: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.purchasePrice"></el-input><br><br>
        购买数量: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.purchaseQuantity"></el-input><br><br>
        仓库id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.respId"></el-input><br><br>
        用户地址id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.userAddressId"></el-input><br><br>
        用户id: <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.userId"></el-input><br><br>

        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="Add_s()">确 定</el-button>
        </span>
        </el-dialog>





        <el-dialog
        title="订单详情"
        :visible.sync="dialogVisible"
        width="70%"
        :before-close="handleClose">
        <div style="width: 100%;height: 100%;">
        <div style="width: 100%;height: 40px;border-bottom: 1px solid #CCCCCC;">
          全部订单  >  订单详情
        </div>
        <div style="margin-top:50px;margin-left: 50px;">订单号:{{Detail.id}}</div>
        <div style="color:#A3A0FB;font-size:30px;margin-left: 60px;margin-top: 70px;">已支付</div>
        <el-progress :text-inside="true" :stroke-width="30" :percentage="50" status="exception" style="margin-top: 20px;"></el-progress>

        <div>
        <img src="../img/6.jpg" style="width:10%;height:120px;margin-top: 70px;">
        </div>
        <div style="margin-left: 200px;margin-top: -70px;">太平鸟男装 双色连帽卫衣男士...<span style="margin-left: 100px;">￥377.00 × 1</span></div>
        <div>
        <img src="../img/6.jpg" style="width:10%;height:120px;margin-top: 90px;">
        </div>
        <div style="margin-left: 200px;margin-top: -70px;">太平鸟男装 双色连帽卫衣男士...<span style="margin-left: 100px;">￥377.00 × 1</span></div>
        </div>
        <div style="margin-top: 100px;font-size: 20px;font-weight: bold;margin-left: 30px;">收货信息</div>
        <div style="margin-left: 30px;margin-top:20px;">姓名:1111</div>
        <div style="margin-left: 30px;margin-top:20px;">联系电话:15615656151</div>
        <div style="margin-left: 30px;margin-top:20px;">收货地址:天津市西青区智慧山南塔308</div>

         <div style="margin-top: 100px;font-size: 20px;font-weight: bold;margin-left: 30px;">支付方式及送货时间</div>
         <div style="margin-left: 30px;margin-top:20px;">支付方式:在线支付</div>
         <div style="margin-left: 30px;margin-top:20px;">送货时间:不限送货时间</div>
         <div style="margin-left: 30px;margin-top:20px;">送达时间:预计五天内送达</div>



        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>



 </div>



</template>
<script>
  import api from '@/apis/order-api.js';
  import Axios from "axios";
  export default {
    data() {
      return {
        arr:[],
        activeName: 'first',
        dialogVisible:false,
        dialogVisible1:false,
        dialogVisible2:false,
        textarea:"",
        statu_s:[],
        show:true,
        pagesize:8,
        currpage:1,
        Detail:{},
        add_s:[],
        search:{
          id:"1"
        },

           Adds:{
           amount:111,
           // createTime:123,
           username:"",
           distribution:123,
           googsId:123,
           hfDesc :123,
           hfMemo :123,
           hfRemark :123,
           hfTax :123,
           id :123,
           logisticsCompany :123,
           logisticsOrderName :123,
           logisticsOrdersId :123,
           orderDetailId :123,
           orderDetailStatus:123,
           orderType :123,
           ordersId :123,
           payMethodName :123,
           payMethodType :123,
           payStatus :123,
           purchasePrice :123,
           purchaseQuantity :123,
           respId :123,
           userAddressId :123,
           userId :1
        },
          tableData: [

                ],
                 options: [{
                  value: '选项',
                  label: '黄金糕'
                },],
                options1: [{
                value1: '选项1',
                label: '雪糕'
                },],
                options2: [{
                value2: '选项1',
                label: '冰淇淋'
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
        query:"",

        screen:{

        // creatTime:"1",

        orderId:1,
        hfName:"1",
        orderDetailStatus:"1",
        payMethodType:"0",
        },
          zhuangtaia:{
            id:11,
            orderId:1
          },
        add:{
        amount:1,
        createTime:"1",
        distribution:"1",
        googsId:"1",
        hfDesc:"1",
        hfRemark :"1",
        hfTax:"1",
        id:"1",
        logisticsCompany :"1",
        logisticsOrderName:"1",
        logisticsOrdersId:"1",
        orderDetailStatus:"1",
        orderType:"1",
        ordersId :"1",
        payMethodName:"1",
        payStatus :"1",
        purchasePrice :"1",
        purchaseQuantity :"1",
        respId :"1",
        userAddressId:"1",
        userId:"1"
        }
      };
    },
    created(){
    this.zhanshi()
    // this.status()
    // this.Add()
    // this.zhuangtai()
    },
    methods:{

              //修改订单状态
               // zhuangtai(){
               //
               // }
               // ,
            //搜索订单编号
            status(){
              api.getstatus().then(res=>{
                this.statu_s=res.data.data
                console.log(res)
                 api.updatestatus(this.zhuangtaia,this.statu_s,this.Adds).then(res=>{
                   console.log(res)
                    if(res.data.status==200){
                       this.arr.push({
                        hfName:this.Adds.orderDetailStatus
                       })
                          this.$message({
                           message: '状态修改成功',
                           type: 'success',
                           });

                    }else{
                      this.$message({
                       message: '状态修改失败',
                       type: 'success',
                       });
                    }
                 })

              })
            }
            ,
           shaixuan:function(){
             console.log("sadasda")
//           api.queryorder().then(res=>{
//           console.log(res)
//           })

           }
             ,
            //导出


             //列表展示页
             zhanshi(){
               api.query().then(res=>{
                 console.log(res.data.data)
                 this.arr=res.data.data
               })
             }
             ,
             //确定创建订单
             Add(){
              api.create(this.Adds).then(res=>{
                // console.log(res.data.status==200)
                if(res.data.status==200){
                  sessionStorage.setItem("Adds",this.Adds)
                 this.arr.push({
                   ordersId :this.Adds.ordersId,
                   hfDesc:this.Adds.hfDesc,
                   purchaseQuantity:this.Adds.purchaseQuantity,
                   logisticsCompany:this.Adds.logisticsCompany,
                   purchasePrice:this.Adds.purchasePrice,
                   username:this.Adds.username,
                   amount:this.Adds.amount,
                   orderDetailStatus:this.Adds.orderDetailStatus
                 })
                 this.$message({
                  message: '创建订单成功',
                  type: 'success',
                  });
                 this.dialogVisible1=false

                }else{
                  this.$message({
                   message: '创建订单失败',
                   type: 'success',
                   });
                  this.dialogVisible1=false
                }

              })
              // this.dialogVisible1=false
             }
             ,
             handleClick(tab, event) {
                  console.log(tab, event);
                },
            //创建订单
             chuangjian(){
              this.dialogVisible1=true
             }
            ,
          //查看订单详情
          detail(scope){
            // console.log(scope.id)
            // this.dialogVisible=true
            // api.orderDetail(scope.id).then(res=>{
            // console.log(res.data.data)
            // this.Detail=res.data.data[0]
            // })
            this.$router.push({
               path: '/hf-detail',
            })

          },
          //修改订单
           xiugai(row){
             console.log(row.row.id)
              this.dialogVisible2=true
              this.Adds.id=row.row.id
           },
           Add_s(){
             api.update(this.Adds).then(res=>{
              console.log(res.data)
              if(res.data.status==200){
                this.arr.push({
                  ordersId :this.Adds.ordersId,
                  hfDesc :this.Adds.hfDesc,
                  purchaseQuantity :this.Adds.purchaseQuantity,
                  logisticsCompany :this.Adds.logisticsCompany,
                  purchasePrice :this.Adds.purchasePrice,
                  username :this.Adds.username,
                  amount :this.Adds.amount,
                  orderDetailStatus :this.Adds.orderDetailStatus,
                })
                  this.$message({
                   message: '修改订单成功',
                   type: 'success',
                   });
                   this.dialogVisible2=true
                  }else{
                this.$message({
                 message: '修改订单失败',
                 type: 'success',
                 });
                 this.dialogVisible2=false
              }

             })

           },

//              handleClose(done) {
//
//             },

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
              },
               handleClose(done) {
                      this.$confirm('确认关闭？')
                        .then(_ => {
                          done();
                        })
                        .catch(_ => {});
                    }



    }
  };
</script>
<style scoped="scoped">
  div{
    cursor: pointer;
  }
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
