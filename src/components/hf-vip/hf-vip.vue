
<template>
  <div style="width: 95%;height: 90%;background:#ffffff;margin: 0 auto;margin-top:60px;">
  <div style="width: 100%;height:500px; ">
  <div style="width: 100%;height: 50px;border-bottom: 1px solid #cccccc;">
  <span style="margin-left: 30px;line-height:50px;">会员管理</span>
  <div style="float: right;line-height: 50px;margin-right: 60px;color: #A3A0FB;">今日取消：300</div>
  <div style="float: right;line-height: 50px;margin-right: 60px;color: #A3A0FB;">兴趣人群：300</div>
  <div style="float: right;line-height: 50px;margin-right: 60px; color: #A3A0FB;">今日新增：300</div>
  <div style="float: right;line-height: 50px;margin-right: 60px;color: #A3A0FB;">用户总量：300</div>
  </div>
  <div class="block" style="margin-left: 200px;margin-top: 60px;">
    <span class="demonstration">注册时间</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      style="margin-left: 100px;"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>

 <div class="block" style="margin-top:30px;">
    <span class="demonstration" style="margin-left: 200px;">成为会员时间</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      style="margin-left: 68px;"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>

  </div>
 <div class="block" style="margin-top:30px;margin-left: 200px;">
 <div>关键词<el-input v-model="input" placeholder="请输入退款编号" style="width:20%;margin-left: 120px;"></el-input>    <span style="margin-left: 10px;">客户身份</span>  <el-select v-model="value" placeholder="请选择" style="margin-left: 20px;">

    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <span style="margin-left: 10px;">性别</span>  <el-select v-model="value" placeholder="请选择" style="margin-left: 20px;">

     <el-option
       v-for="item in options"
       :key="item.value"
       :label="item.label"
       :value="item.value">
     </el-option>
   </el-select>
  </div>



  <div style="margin-top: 20px;">购买次数<el-input v-model="input" placeholder="请输入内容" style="width: 15%;margin-left: 105px;"></el-input>
  <span style="margin-left: 10px;">至</span><el-input v-model="input" placeholder="请输入内容" style="width: 15%;margin-left:20px;"></el-input>
  <span style="margin-left: 10px;">单价</span><el-input v-model="input" placeholder="请输入内容" style="width: 15%;margin-left:20px;"></el-input>
  <span style="margin-left: 10px;">至</span><el-input v-model="input" placeholder="请输入内容" style="width: 15%;margin-left:20px;"></el-input>
</div>
  </div>

     <div style="width:22%;height: 60px;margin: 0 auto;margin-top: 30px;">
         <div style="float: left;width:50%;height:60px;text-align: center;line-height: 60px;background: #A3A0FB;border-radius: 5px;color: #ffffff;haixuan" @click="shaixuan()">筛选</div>
         <div style="float: left;width: 50%;height:60px;text-align: center;line-height: 60px;color: #A3A0FB;">重置筛选条件</div>
     </div>

     <div style="width: 100%;height:100%;background:#ffffff;">
         <div style="width:8%;height:40px;text-align: center;line-height: 40px;background: #ffffff;color: #cccccc;border-radius: 5px;float:right;margin-right: 40px;margin-top: 50px;border: 1px solid #cccccc;">批量管理</div>
       <div style="width:8%;height:40px;text-align: center;line-height: 40px;background: #A6A3FB;color: #ffffff;border-radius: 5px;float: right;margin-right: 20px;margin-top: 50px;" @click="dialogVisible=true">+ 添加会员</div>

           <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%;text-align: center;"

              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="120" style="text-align: center;">
              </el-table-column>
             <el-table-column
               label="序号" align='center'
               width="160">
               <template slot-scope="scope">{{ scope.row.id }}</template>
             </el-table-column>
             <el-table-column
               label="昵称" align='center'
               width="160">
               <template slot-scope="scope">{{ scope.row.name }}</template>
             </el-table-column>
              <el-table-column
                label="性别" align='center'
                width="160">
                <template slot-scope="scope">{{ scope.row.sex }}</template>
              </el-table-column>

              <el-table-column
                prop="name" align='center'
                label="所在地"
                width="160">
                 <template slot-scope="scope">{{ scope.row.address }}</template>
              </el-table-column>
              <el-table-column
                prop="address"  width="160"
                label="等级" align='center'
                show-overflow-tooltip>
                <template slot-scope="scope">{{ scope.row.dengji }}</template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="关注时间" align='center' width="160"
                show-overflow-tooltip>
                <template slot-scope="scope">{{ scope.row.timeout }}</template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="成交" align='center' width="160"
                show-overflow-tooltip>
                <template slot-scope="scope">{{ scope.row.chengjiao }}</template>
              </el-table-column>
               <el-table-column
                    fixed="right"
                    label="操作" align="center"
                    width="300">
                    <template slot-scope="scope">
                      <el-button
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="text"
                        size="small" style="font-size: 18px;color: #A6A3FB;">
                        设置权益卡
                      </el-button>
                      <el-button
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="text"
                        size="small " style="font-size: 18px;color: #FFCE26;">
                        添加标签
                      </el-button>
                      <el-button
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="text"
                        size="small" style="font-size: 18px;color: #FF318A;">
                        联系客户
                      </el-button>
                    </template>
                  </el-table-column>
            </el-table>
            <div style="margin-top: 20px">

            </div>
            <el-dialog
              title="会员管理"
              :visible.sync="dialogVisible"
              width="35%"
              :before-close="handleClose">
                 <div style="margin-left:70px;">客户身份</div>
                   <el-radio-group v-model="radio" style="margin-left: 150px;margin-top: -45px;">
                     <el-radio :label="3">会员</el-radio>
                     <el-radio :label="6">非会员</el-radio>
                   </el-radio-group>
                  <div style="float: right;margin-top: -35px;margin-right:215px;">标签
                  <el-select v-model="value" placeholder="请选择" style="width:80%;margin-left: 15px;">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
               </div>
               <div style="margin-left:70px;">手机号<el-input v-model="input" maxlength="11" placeholder="请输入手机号" style="width:25%;margin-left: 20px;"></el-input></div>
                 <div class="block" style="margin-left:350px;margin-top: -40px; ">
                     <span class="demonstration">生日</span>
                     <el-date-picker
                       v-model="value1"
                       type="date"
                       placeholder="选择日期" style="width:58%;margin-left: 15px;">
                     </el-date-picker>
                   </div><br>
                   <div style="margin-left:70px;">姓名<el-input v-model="input" maxlength="11" placeholder="请输入手机号" style="width:25%;margin-left:35px;"></el-input></div>
                     <div class="block" style="margin-left:350px;margin-top: -40px; ">
                         <span class="demonstration">地域</span>
                        <el-select v-model="value" placeholder="请选择" style="width:58%;margin-left: 15px;">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                       </div>
                           <div style="margin-left:70px;margin-top: 30px;">性别</div>
                       <el-radio-group v-model="radio" style="margin-left: 150px;margin-top: -45px;">
                         <el-radio :label="3">男</el-radio>
                         <el-radio :label="6">女</el-radio>
                       </el-radio-group>
                       <div style="margin-left:70px;">备注</div>
                       <textarea name="" id="" cols="30" rows="10" style="margin-left: 100px;"></textarea>
              <span slot="footer" class="dialog-footer">
                        <div style="width: 45%;height: 60px; margin: 0 auto;">
                            <el-button style="width:45%;float: left;" @click="dialogVisible = false">取 消</el-button>
                             <el-button style="width: 45%;float: right;" type="primary" @click="dialogVisible = false">确 定</el-button>
                        </div>

              </span>
            </el-dialog>

     </div>





</div>

  </div>
</template>

<script>
   export default {
      data() {
        return {
          radio:2,
           dialogVisible: false,
          input:"",
          value:"",
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

          pickerOptions: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
          value1: '',
          value2: '',
            tableData: [{
                     id:1,
                    date: '2016-05-03',
                    name: '王小虎',
                    sex:"男",
                    address: '天津市西青区',
                    dengji:"铂金会员",
                    timeout:"2019-11-26    14:12",
                    chengjiao:"订单 0 单   金额 0 元"
                  }, {
                    id:2,
                    date: '2016-05-02',
                    name: '王小虎',
                    sex:"男",
                    address: '天津市西青区',
                    dengji:"铂金会员",
                    timeout:"2019-11-26    14:12",
                    chengjiao:"订单 0 单 金额 0 元"
                  }, {
                    id:3,
                    date: '2016-05-04',
                    name: '王小虎',
                    sex:"男",
                      address: '天津市西青区',
                    dengji:"铂金会员",
                    timeout:"2019-11-26    14:12",
                    chengjiao:"订单 0 单 金额 0 元"
                  }, {
                    id:4,
                    date: '2016-05-01',
                    name: '王小虎',
                    sex:"男",
                     address: '天津市西青区',
                    dengji:"铂金会员",
                    timeout:"2019-11-26    14:12",
                    chengjiao:"订单 0 单 金额 0 元"
                  }, {
                    id:5,
                    date: '2016-05-08',
                    name: '王小虎',
                    sex:"男",
                     address: '天津市西青区',
                    dengji:"铂金会员",
                    timeout:"2019-11-26    14:12",
                    chengjiao:"订单 0 单 金额 0 元"
                  }, {
                    id:6,
                    date: '2016-05-06',
                    name: '王小虎',
                    sex:"男",
                     address: '天津市西青区',
                    dengji:"铂金会员",
                    timeout:"2019-11-26    14:12",
                    chengjiao:"订单 0 单 金额 0 元"
                  }, {
                    id:7,
                    date: '2016-05-07',
                    name: '王小虎',
                    sex:"男",
                      address: '天津市西青区',
                    dengji:"铂金会员",
                    timeout:"2019-11-26   14:12",
                    chengjiao:"订单 0 单 金额 0 元"
                  }],
                   multipleSelection: []
        };
      },methods:{

        handleSelectionChange(val) {
                this.multipleSelection = val;
              },
              shaixuan(){
                console.log("asdadsa")
              }
      }
    };
</script>

<style>
  body{
    width:100%;
    height: 100%;
    background: #cccccc;
  }
  div{
    cursor: pointer;
  }
</style>
