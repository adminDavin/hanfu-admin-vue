<template>
  <!-- 全部订单页面 -->
  <div style="width:100%;height:100%">
    <div class="div" style="height: 100%;">
      <div class="header">
        <div style="margin-left:22px;line-height:42px;color: #666666;font-size:16px">订单查询</div>
      </div>
      <div class="demo-input-suffix" style="margin-left: 196px;">
        <div style="font-size: 16px;float: left;margin-top:67px; color: #666666">订单搜索</div>
        <el-input
          placeholder="请输入订单号"
          style="width: 186px;margin-top:57px;margin-left: 40px;"
          v-model="search.orderId"
        ></el-input>
        <br />

        <div class="block">

          <br />
          <div style="font-size: 16px;float: left;margin-top:30px;color: #666666">商品名称</div>
          <el-input
            placeholder="请输入名称"
            style="width: 186px;margin-top:23px;margin-left: 40px;"
            v-model="search.hfName"
          ></el-input>
          <br />
          <div
            style="font-size: 16px;float: left;margin-top:30px;color: #666666;margin-left: 330px;margin-top: -35px;"
          >付款方式</div>
          <el-select
            v-model="search.payMethodType"
            placeholder="请选择"
            style="width: 186px;margin-top:-42px;margin-left:420px;display: block;"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
          <br style="height:0" />
          <div style="font-size: 16px;float: left;margin-top:8px;color: #666666">订单状态</div>
          <el-select
            @change="status()"
            v-model="search.orderDetailStatus"
            placeholder="请选择"
            style="width: 186px;margin-top:2px;margin-left: 40px;"
          >
            <el-option
              v-for="item in statu_s"
              :key="item.hfName"
              :label="item.hfName"
              :value="item.hfName"
            ></el-option>
          </el-select>
          <br />
          <div
            style="font-size: 16px;float: left;margin-top:30px;color: #666666;margin-left: 330px;margin-top: -35px;"
          >订单来源</div>
          <el-select
            v-model="search.id"
            placeholder="请选择"
            style="width: 186px;margin-top:-42px;margin-left:420px;display: block;"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <div class="dis" @click="shaixuan()">筛选</div>
          <div class="screen" @click="reset()">重置筛选条件</div>
        </div>
      </div>
    </div>
    <div class="div" style="margin-top:30px;margin-bottom:53px">
      <div class="footer">
        <div style="margin-left: 34px;padding-top: 20px;">
          <el-tabs
            v-model="activeName"
            type="card"
            @tab-click="handleClick"
            style="margin-left:34px"
          >
            <el-tab-pane label="全部" name="first">
              <el-table
                class="table"
                :data="cerit.slice((currpage-1)*pagesize,currpage*pagesize)"
                :current-page="currpage"
                :page-size="pagesize"
                :total="arr.length"
                style="width: 100%;"
                max-height="100%"
              >
                <el-table-column prop="ordersId" label="订单号" width="200" align="center"></el-table-column>
                <el-table-column prop="hfDesc" label="商品描述" width="200" align="center"></el-table-column>
                <el-table-column prop="purchasePrice" label="单价/数量" width="200" align="center"></el-table-column>
                <el-table-column prop="userName" label="买家/收货人" width="200" align="center"></el-table-column>
                <el-table-column prop="logisticsCompany" label="快递" width="200" align="center"></el-table-column>
                <el-table-column prop="amount" label="实收金额(元)" width="250" align="center"></el-table-column>
                <el-table-column
                  prop="orderDetailStatus"
                  label="订单状态"
                  width="200"
                  align="center"
                  style="color:orangered;"
                ></el-table-column>
                <el-table-column label="操作" width="300" align="center">
                  <template slot-scope="scope">
                    <el-button
                      @click="tetail(scope.row)"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color: #A3A0FB;  "
                    >订单详情</el-button>
                    <!-- <el-button
                      @click="xiugai(scope)"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color:hotpink;  "
                    >修改订单</el-button> -->
                  </template>
                </el-table-column>
              </el-table>
              <div
                class="block"
                style="float: right;margin-right:35px;margin-top:29px;
                                              margin-bottom:29px"
              >
                <el-pagination
                  style="bottom: 0;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="订金待付" name="second">
              <el-table
                class="table"
                :data="mon.slice((currpage-1)*pagesize,currpage*pagesize)"
                :current-page="currpage"
                :page-size="pagesize"
                :total="arr.length"
                style="width: 100%;"
                max-height="100%"
              >
                <el-table-column prop="ordersId" label="订单号" width="200" align="center"></el-table-column>
                <el-table-column prop="hfDesc" label="商品描述" width="200" align="center"></el-table-column>
                <el-table-column prop="purchasePrice" label="单价/数量" width="200" align="center"></el-table-column>
                <el-table-column prop="userName" label="买家/收货人" width="200" align="center"></el-table-column>
                <el-table-column prop="logisticsCompany" label="快递" width="200" align="center"></el-table-column>
                <el-table-column prop="amount" label="实收金额(元)" width="250" align="center"></el-table-column>
                <el-table-column
                  prop="orderDetailStatus"
                  label="订单状态"
                  width="200"
                  align="center"
                  style="color:orangered;"
                ></el-table-column>
                <el-table-column label="操作" width="300" align="center">
                  <template slot-scope="scope">
                    <el-button
                      @click="tetail(scope.row)"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color: #A3A0FB;  "
                    >订单详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="block" style="float: right;margin-right:35px;">
                <el-pagination
                  style="bottom: 0;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="three">
              <el-table
                class="table"
                :data="sta.slice((currpage-1)*pagesize,currpage*pagesize)"
                :current-page="currpage"
                :page-size="pagesize"
                :total="arr.length"
                style="width: 100%;"
                max-height="100%"
              >
                <el-table-column prop="ordersId" label="订单号" width="200" align="center"></el-table-column>
                <el-table-column prop="hfDesc" label="商品描述" width="200" align="center"></el-table-column>
                <el-table-column prop="purchasePrice" label="单价/数量" width="200" align="center"></el-table-column>
                <el-table-column prop="userName" label="买家/收货人" width="200" align="center"></el-table-column>
                <el-table-column prop="logisticsCompany" label="快递" width="200" align="center"></el-table-column>
                <el-table-column prop="amount" label="实收金额(元)" width="250" align="center"></el-table-column>
                <el-table-column
                  prop="orderDetailStatus"
                  label="订单状态"
                  width="200"
                  align="center"
                  style="color:orangered;"
                ></el-table-column>
                <el-table-column label="操作" width="300" align="center">
                  <template >
                    <el-button
                      @click="tetail(scope.row)"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color: #A3A0FB;  "
                    >订单详情</el-button>
                    <el-button
                      @click="tetail()"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color:hotpink;  "
                    >发货</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="block" style="float: right;margin-right:35px;">
                <el-pagination
                  style="bottom: 0;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已发货" name="for">
              <el-table
                class="table"
                :data="ship.slice((currpage-1)*pagesize,currpage*pagesize)"
                :current-page="currpage"
                :page-size="pagesize"
                :total="arr.length"
                style="width: 100%;"
                max-height="100%"
              >
                <el-table-column prop="ordersId" label="订单号" width="200" align="center"></el-table-column>
                <el-table-column prop="hfDesc" label="商品描述" width="200" align="center"></el-table-column>
                <el-table-column prop="purchasePrice" label="单价/数量" width="200" align="center"></el-table-column>
                <el-table-column prop="userName" label="买家/收货人" width="200" align="center"></el-table-column>
                <el-table-column prop="logisticsCompany" label="快递" width="200" align="center"></el-table-column>
                <el-table-column prop="amount" label="实收金额(元)" width="250" align="center"></el-table-column>
                <el-table-column
                  prop="orderDetailStatus"
                  label="订单状态"
                  width="200"
                  align="center"
                  style="color:orangered;"
                ></el-table-column>
                <el-table-column label="操作" width="300" align="center">
                  <template slot-scope="scope">
                    <el-button
                      @click="tetail(scope.row)"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color: #A3A0FB;  "
                    >订单详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="block" style="float: right;margin-right:35px;">
                <el-pagination
                  style="bottom: 0;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待评价" name="five">
              <el-table
                class="table"
                :data="eva.slice((currpage-1)*pagesize,currpage*pagesize)"
                :current-page="currpage"
                :page-size="pagesize"
                :total="arr.length"
                style="width: 100%;"
                max-height="100%"
              >
                <el-table-column prop="ordersId" label="订单号" width="200" align="center"></el-table-column>
                <el-table-column prop="hfDesc" label="商品描述" width="200" align="center"></el-table-column>
                <el-table-column prop="purchasePrice" label="单价/数量" width="200" align="center"></el-table-column>
                <el-table-column prop="userName" label="买家/收货人" width="200" align="center"></el-table-column>
                <el-table-column prop="logisticsCompany" label="快递" width="200" align="center"></el-table-column>
                <el-table-column prop="amount" label="实收金额(元)" width="250" align="center"></el-table-column>
                <el-table-column
                  prop="orderDetailStatus"
                  label="订单状态"
                  width="200"
                  align="center"
                  style="color:orangered;"
                ></el-table-column>
                <el-table-column label="操作" width="300" align="center">
                  <template slot-scope="scope">
                    <el-button
                      @click="tetail(scope.row)"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color: #A3A0FB;  "
                    >订单详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="block" style="float: right;margin-right:35px;">
                <el-pagination
                  style="bottom: 0;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="six">
              <el-table
                class="table"
                :data="don.slice((currpage-1)*pagesize,currpage*pagesize)"
                :current-page="currpage"
                :page-size="pagesize"
                :total="arr.length"
                style="width: 100%;"
                max-height="100%"
              >
                <el-table-column prop="ordersId" label="订单号" width="200" align="center"></el-table-column>
                <el-table-column prop="hfDesc" label="商品描述" width="200" align="center"></el-table-column>
                <el-table-column prop="purchasePrice" label="单价/数量" width="200" align="center"></el-table-column>
                <el-table-column prop="userName" label="买家/收货人" width="200" align="center"></el-table-column>
                <el-table-column prop="logisticsCompany" label="快递" width="200" align="center"></el-table-column>
                <el-table-column prop="amount" label="实收金额(元)" width="250" align="center"></el-table-column>
                <el-table-column
                  prop="orderDetailStatus"
                  label="订单状态"
                  width="200"
                  align="center"
                  style="color:orangered;"
                ></el-table-column>
                <el-table-column label="操作" width="300" align="center">
                  <template slot-scope="scope">
                    <el-button
                      @click="tetail(scope.row)"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color: #A3A0FB;  "
                    >订单详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="block" style="float: right;margin-right:35px;">
                <el-pagination
                  style="bottom: 0;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="退款中" name="seven">
              <el-table
                class="table"
                :data=" ref.slice((currpage-1)*pagesize,currpage*pagesize)"
                :current-page="currpage"
                :page-size="pagesize"
                :total="arr.length"
                style="width: 100%;"
                max-height="100%"
              >
                <el-table-column prop="ordersId" label="订单号" width="200" align="center"></el-table-column>
                <el-table-column prop="hfDesc" label="商品描述" width="200" align="center"></el-table-column>
                <el-table-column prop="purchasePrice" label="单价/数量" width="200" align="center"></el-table-column>
                <el-table-column prop="userName" label="买家/收货人" width="200" align="center"></el-table-column>
                <el-table-column prop="logisticsCompany" label="快递" width="200" align="center"></el-table-column>
                <el-table-column prop="amount" label="实收金额(元)" width="250" align="center"></el-table-column>
                <el-table-column
                  prop="orderDetailStatus"
                  label="订单状态"
                  width="200"
                  align="center"
                  style="color:orangered;"
                ></el-table-column>
                <el-table-column label="操作" width="300" align="center">
                  <template>
                    <el-button
                      @click="tetail()"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color: #A3A0FB;  "
                    >退款</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="block" style="float: right;margin-right:35px;">
                <el-pagination
                  style="bottom: 0;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="二次申退" name="eight">
              <el-table
                class="table"
                :data="sec.slice((currpage-1)*pagesize,currpage*pagesize)"
                :current-page="currpage"
                :page-size="pagesize"
                :total="arr.length"
                style="width: 100%;"
                max-height="100%"
              >
                <el-table-column prop="ordersId" label="订单号" width="200" align="center"></el-table-column>
                <el-table-column prop="hfDesc" label="商品描述" width="200" align="center"></el-table-column>
                <el-table-column prop="purchasePrice" label="单价/数量" width="200" align="center"></el-table-column>
                <el-table-column prop="userName" label="买家/收货人" width="200" align="center"></el-table-column>
                <el-table-column prop="logisticsCompany" label="快递" width="200" align="center"></el-table-column>
                <el-table-column prop="amount" label="实收金额(元)" width="250" align="center"></el-table-column>
                <el-table-column
                  prop="orderDetailStatus"
                  label="订单状态"
                  width="200"
                  align="center"
                  style="color:orangered;"
                ></el-table-column>
                <el-table-column label="操作" width="300" align="center">
                  <template slot-scope="scope">
                    <el-button
                      @click="tetail(scope.row)"
                      type="text"
                      id="yincang"
                      size="small"
                      style="color: #A3A0FB;  "
                    >订单详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div
                class="block"
                style="float: right;margin-right:31px;margin-top:46px;margin-bottom:27px"
              >
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!-- 创建订单 -->
      <el-dialog
        title="创建订单"
        align="left"
        :visible.sync="dialogVisible1"
        width="70%"
        :before-close="handleClose"
      >
        支付金额 :
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.amount"></el-input>
        <br />
        <br />创建时间 :
        <el-date-picker v-model="Adds.createTime" type="date" placeholder="选择日期"></el-date-picker>
        <br />
        <br />配送方式 :
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.distribution"></el-input>
        <br />
        <br />物品Id :
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.googsId"></el-input>
        <br />
        <br />订单描述 :
        <br />
        <el-input
          type="textarea"
          :rows="3"
          style="width:25%; "
          placeholder="请输入内容"
          v-model="Adds.hfDesc"
        ></el-input>
        <br />
        <br />支付附言 :
        <br />
        <el-input
          type="textarea"
          :rows="3"
          style="width:25%;"
          placeholder="请输入内容"
          v-model="Adds.hfMemo"
        ></el-input>
        <br />
        <br />备注:
        <br />
        <el-input
          type="textarea"
          :rows="3"
          style="width:25%; "
          placeholder="请输入内容"
          v-model="Adds.hfRemark"
        ></el-input>
        <br />
        <br />税金:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.hfTax"></el-input>
        <br />
        <br />订单详情Id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.id"></el-input>
        <br />
        <br />物流公司:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.logisticsCompany"></el-input>
        <br />
        <br />物流名称:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.logisticsOrderName"></el-input>
        <br />
        <br />物流订单号:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.logisticsOrdersId "></el-input>
        <br />
        <br />订单详情Id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.orderDetailId "></el-input>
        <br />
        <br />订单详情状况:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.orderDetailStatus "></el-input>
        <br />
        <br />订单类型:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.orderType"></el-input>
        <br />
        <br />订单id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.ordersId"></el-input>
        <br />
        <br />支付方式名称:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.payMethodName"></el-input>
        <br />
        <br />支付方式类型:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.payMethodType"></el-input>
        <br />
        <br />支付状态:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.payStatus"></el-input>
        <br />
        <br />购买价格:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.purchasePrice"></el-input>
        <br />
        <br />购买数量:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.purchaseQuantity"></el-input>
        <br />
        <br />仓库id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.respId"></el-input>
        <br />
        <br />用户地址id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.userAddressId"></el-input>
        <br />
        <br />用户id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Adds.userId"></el-input>
        <br />
        <br />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="Add()">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="创建订单"
        align="left"
        :visible.sync="dialogVisible2"
        width="70%"
        :before-close="handleClose"
      >
        支付金额 :
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.amount"></el-input>
        <br />
        <br />创建时间 :
        <el-date-picker v-model="Add_ss.createTime" type="date" placeholder="选择日期"></el-date-picker>
        <br />
        <br />配送方式 :
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.distribution"></el-input>
        <br />
        <br />物品Id :
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.googsId"></el-input>
        <br />
        <br />订单描述 :
        <br />
        <el-input
          type="textarea"
          :rows="3"
          style="width:25%; "
          placeholder="请输入内容"
          v-model="Add_ss.hfDesc"
        ></el-input>
        <br />
        <br />支付附言 :
        <br />
        <el-input
          type="textarea"
          :rows="3"
          style="width:25%;"
          placeholder="请输入内容"
          v-model="Add_ss.hfMemo"
        ></el-input>
        <br />
        <br />备注:
        <br />
        <el-input
          type="textarea"
          :rows="3"
          style="width:25%; "
          placeholder="请输入内容"
          v-model="Add_ss.hfRemark"
        ></el-input>
        <br />
        <br />税金:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.hfTax"></el-input>
        <br />
        <br />订单详情Id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.id"></el-input>
        <br />
        <br />物流公司:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.logisticsCompany"></el-input>
        <br />
        <br />物流名称:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.logisticsOrderName"></el-input>
        <br />
        <br />物流订单号:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.logisticsOrdersId "></el-input>
        <br />
        <br />订单详情Id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.orderDetailId "></el-input>
        <br />
        <br />订单详情状况:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.orderDetailStatus "></el-input>
        <br />
        <br />订单类型:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.orderType"></el-input>
        <br />
        <br />订单id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.ordersId"></el-input>
        <br />
        <br />支付方式名称:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.payMethodName"></el-input>
        <br />
        <br />支付方式类型:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.payMethodType"></el-input>
        <br />
        <br />支付状态:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.payStatus"></el-input>
        <br />
        <br />购买价格:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.purchasePrice"></el-input>
        <br />
        <br />购买数量:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.purchaseQuantity"></el-input>
        <br />
        <br />仓库id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.respId"></el-input>
        <br />
        <br />用户地址id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.userAddressId"></el-input>
        <br />
        <br />用户id:
        <el-input placeholder="请输入内容" style="width: 20%;" v-model="Add_ss.userId"></el-input>
        <br />
        <br />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="Add_s()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import FileSaver from 'file-saver'
//   import XLSX from "xlsx";
import api from '../../apis/order-api.js'
// import Axios from 'axios'
export default {
  data () {
    return {
      arr: [],
      cerit: [],
      sta: [],
      mon: [],
      ship: [],
      eva: [],
      don: [],
      ref: [],
      sec: [],
      isactives: false,
      activeName: 'first',
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      textarea: '',
      statu_s: [],
      show: true,
      pagesize: 8,
      currpage: 1,
      Detail: {},
      add_s: [],
      search: {
        orderld: this.orderld,
        hfName: this.hfName,
        orderDetailStatus: this.orderDetailStatus,
        payMethodType: this.payMethodType
      },

      Adds: {
        // 弄在这里
        amount: this.amount,
        // createTime:123,
        username: this.username,
        distribution: 123,
        googsId: 123,
        hfDesc: this.hfDesc,
        hfMemo: 123,
        hfRemark: 123,
        hfTax: 123,
        id: 123,
        logisticsCompany: this.logisticsCompany,
        logisticsOrderName: 123,
        logisticsOrdersId: 123,
        orderDetailId: 123,
        orderDetailStatus: this.orderDetailStatus,
        orderType: 123,
        ordersId: this.ordersId,
        payMethodName: 123,
        payMethodType: 123,
        payStatus: 123,
        purchasePrice: this.purchasePrice,
        purchaseQuantity: this.purchaseQuantity,
        respId: 123,
        userAddressId: 123,
        userId: 1
      },
      ID: {
        id: 1
      },
      Add_ss: {
        amount: 111,
        // createTime:123,
        username: '',
        distribution: 123,
        googsId: 123,
        hfDesc: 123,
        hfMemo: 123,
        hfRemark: 123,
        hfTax: 123,
        id: 16,
        logisticsCompany: 123,
        logisticsOrderName: 123,
        logisticsOrdersId: 123,
        orderDetailId: 123,
        orderDetailStatus: 123,
        orderType: 123,
        ordersId: '',
        payMethodName: 123,
        payMethodType: 123,
        payStatus: 123,
        purchasePrice: 123,
        purchaseQuantity: 123,
        respId: 123,
        userAddressId: 123,
        userId: 1
      },
      tableData: [],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      options2: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],

      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      value1: '',
      value2: '',

      searchVal: '',
      query: '',

      screen: {
        // creatTime:"1",

        orderId: 1,
        hfName: '1',
        orderDetailStatus: '1',
        payMethodType: '0'
      },
      zhuangtaia: {
        id: 11,
        orderId: 1
      },
      // Search:{
      //    ordersId:""
      // },
      add: {
        amount: 1,
        createTime: '1',
        distribution: '1',
        googsId: '1',
        hfDesc: '1',
        hfRemark: '1',
        hfTax: '1',
        id: '1',
        logisticsCompany: '1',
        logisticsOrderName: '1',
        logisticsOrdersId: '1',
        orderDetailStatus: '1',
        orderType: '1',
        ordersId: '1',
        payMethodName: '1',
        payStatus: '1',
        purchasePrice: '1',
        purchaseQuantity: '1',
        respId: '1',
        userAddressId: '1',
        userId: '1'
      }
    }
  },
  created () {
    this.zhanshi()
    this.status()
    // this.Add()
    this.zhuangtai()
    this.money()
    this.shipped()
    this.evaluate()
    this.done()
    this.refund()
    this.second()
  },
  methods: {
    // 修改订单状态
    // zhuangtai(){
    //
    // }
    // ,
    // ----------------------------------------------
    // 筛选搜索
    // shaixuan () {
    //   console.log(this.search)
    //   api.queryorder(this.search).then(res => {
    //     console.log(res.data.data)
    //     this.arr = res.data.data
    //     // this.zhanshi()
    //   })
    // },
    shaixuan () {
      this.$http
        .get('/qui/order/queryOrder')
        .then(res => {
          this.tableData = res.data.data
          console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          alert(error)
        })
    },
    // -----------------------------------------
    // 导出
    elxs () {
      let time = new Date()
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      let name = year + '' + month + '' + day
      // eslint-disable-next-line no-undef
      var wb = XLSX.utils.table_to_book(document.querySelector('.table'))
      // eslint-disable-next-line no-undef
      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: 'application/octet-stream' }),
          name + '.xlsx'
        )
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    },
    reset () {
      this.search = ''
      this.options2 = ''
    },
    // 导出
    chakan () {
      console.log('asdas')
    },

    // 列表展示页
    zhanshi () {
      api.query().then(res => {
        console.log(res.data.data)
        this.arr = res.data.data
      })
    },
    // 确定创建订单
    Add () {
      api.creat(this.Adds).then(res => {
        console.log(this.Adds)
        console.log(res.data.status === 200)
        if (res.data.status === 200) {
          // sessionStorage.setItem("Adds",this.Adds)
          this.arr.push({
            ordersId: this.Adds.ordersId, // 订单Id
            hfDesc: this.Adds.hfDesc, // 商品描述
            purchaseQuantity: this.Adds.purchaseQuantity, // 购买数量
            logisticsCompany: this.Adds.logisticsCompany, // 物流公司名字
            purchasePrice: this.Adds.purchasePrice, // 购买价格
            username: this.Adds.username, // 用户名
            amount: this.Adds.amount, // 支付金额
            orderDetailStatus: this.Adds.orderDetailStatus // 订单详情状况
          })
          // console.log(this.)
          this.$message({
            message: '创建订单成功',
            type: 'success'
          })
          this.zhanshi()
          this.dialogVisible1 = false
        } else {
          this.$message({
            message: '创建订单失败',
            type: 'success'
          })
          this.dialogVisible1 = false
        }
      })
      // this.dialogVisible1=false
    },
    handleClick (tab, event) {},
    // 创建订单
    chuangjian () {
      this.dialogVisible1 = true
    },
    // 查看订单详情
    tetail (scope) {
      console.log(123)
      const ID = scope.id
      console.log(ID)
      this.$router.push({
        path: '/tetail',
        query: { id: ID }
      })

      console.log(scope.id)

      this.dialogVisible = true
      api.orderDetail(scope.id).then(res => {
        console.log(res.data.data)
        this.Detail = res.data.data[0]
      })
    },
    // --------------------------------------------------------------------------------------
    async zhuangtai () {
      const data = await this.$http.get('/qui/order/query')
      console.log(data.data.data)
      this.cerit = data.data.data
    },
    // 待发货
    async status () {
      const data = await this.$http.get('/qui/order/queryOrder')
      console.log(data.data.data)
      this.sta = data.data.data
    },
    // 定金待付
    async money () {
      const data = await this.$http.get('/qui/order/queryOrder')
      console.log(data.data.data)
      this.mon = data.data.data
    },
    // 已发货
    async shipped () {
      const data = await this.$http.get('/qui/order/queryOrder')
      console.log(data.data.data)
      this.ship = data.data.data
    },
    // 待评价
    async evaluate () {
      const data = await this.$http.get('/qui/order/queryOrder')
      console.log(data.data.data)
      this.eva = data.data.data
    },
    // 已完成
    async done () {
      const data = await this.$http.get('/qui/order/queryOrder')
      console.log(data.data.data)
      this.don = data.data.data
    },
    // 退款中
    async refund () {
      const data = await this.$http.get('/qui/order/queryOrder')
      console.log(data.data.data)
      this.ref = data.data.data
    },
    // 二次申退
    async second () {
      const data = await this.$http.get('/qui/order/queryOrder')
      console.log(data.data.data)
      this.sec = data.data.data
    },
    // ------------------------------------------------------------------------------------------
    // 修改订单
    xiugai (row) {
      console.log(row)
      this.dialogVisible2 = true
      // this.Add_ss.id=row.row.id
      this.Add_ss.ordersId = row.id
    },
    Add_s () {
      api.update(this.Add_ss).then(res => {
        console.log(res.data)
        if (res.data.status === 200) {
          this.arr.push({
            ordersId: this.Add_ss.ordersId,
            id: this.Add_ss.id,
            hfDesc: this.Add_ss.hfDesc,
            purchaseQuantity: this.Add_ss.purchaseQuantity,
            logisticsCompany: this.Add_ss.logisticsCompany,
            purchasePrice: this.Add_ss.purchasePrice,
            username: this.Add_ss.username,
            amount: this.Add_ss.amount,
            orderDetailStatus: this.Add_ss.orderDetailStatus
          })
          this.$message({
            message: '修改订单成功',
            type: 'success'
          })
          // this.zhanshi()
          this.dialogVisible2 = true
        }
      })
    },

    //              handleClose(done) {
    //
    //             },
    //
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currpage = val
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
<style>
.el-tabs__item.is-top.is-active {
  /* border:1px solid #A3A0FB; */
  color: #a3a0fb;
  box-sizing: border-box;
}
.el-pager li.active {
  background: #a3a0fb;
  color: white !important;
}
.el-pager li {
  width: 35px !important;
  height: 35px !important;
  line-height: 35px !important;
  margin-right: 5px !important;
  border: 1px solid #e5e5e5;
}
.el-pagination button,
.el-pagination__jump {
  height: 35px !important;
  line-height: 35px !important;
}
</style>
<style scoped="scoped" lang="less">
.div {
  width: 99%;
  background: #ffffff;
  margin: 0 auto;
  margin-top: 22px;
  border-radius: 4px;
}
.dis {
  width: 118px;
  height: 36px;
  background: #a3a0fb;
  text-align: center;
  line-height: 36px;
  margin-top: 30px;
  color: #ffffff;
  border-radius: 5px;
  margin-left: 104px;
}
.disdaoc {
  width: 118px;
  height: 36px;
  background: #ffffff;
  text-align: center;
  line-height: 36px;
  margin-top: -36px;
  color: #a3a0fb;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 262px;
  border: 1px solid #a3a0fb;
}

div {
  cursor: pointer;
}
.footer {
  width: 100%;
  background: #ffffff;
  margin: 0 auto;
  bottom: 0;
}

.header {
  width: 100%;
  height: 42px;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}

// 筛选
.screen {
  margin-top: -30px;
  color: #a3a0fb;
  margin-left: 420px;
}
</style>
