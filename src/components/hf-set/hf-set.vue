<template>
  <div style="width: 95%;height: 95%;background: #ffffff;margin-top: 40px;margin: 0 auto;">
   <div style="width: 100%;height:50px;border-bottom: 1px solid #cccccc;margin-top: 40px;">
     <span style="display: block;padding-top:15px;margin-left: 30px;">店铺信息</span></div>
     <div style="margin-left: 100px;margin-top: 60px;">店铺名称：<span style="margin-left:20px;">店铺名称</span> <span style="color: #A3A0FB;">修改</span></div>
     <div style="margin-left: 100px;margin-top: 30px;">店铺编号：<span style="margin-left:20px;">4564813</span> <span style="color: #A3A0FB;">修改</span></div>
       <div style="margin-left: 100px;margin-top: 30px;">店铺创建日期：<span style="margin-left:20px;">2019-10-15</span> <span>15:20:30</span></div>
        <div style="margin-left: 100px;margin-top: 30px;">主营类目：<span style="margin-left:20px;">服饰</span>  </div>
        <div style="margin-left: 100px;margin-top: 60px;">店铺LOGO：

         <el-upload
           action="#"
           list-type="picture-card"
           :auto-upload="false" style="margin-left: 100px;margin-top:-60px;">
             <i slot="default" class="el-icon-plus"></i>
             <div slot="file" slot-scope="{file}">
               <img
                 class="el-upload-list__item-thumbnail"
                 :src="file.url" alt=""
               >
               <span class="el-upload-list__item-actions">
                 <span
                   class="el-upload-list__item-preview"
                   @click="handlePictureCardPreview(file)"
                 >
                   <i class="el-icon-zoom-in"></i>
                 </span>
                 <span
                   v-if="!disabled"
                   class="el-upload-list__item-delete"
                   @click="handleDownload(file)"
                 >
                   <i class="el-icon-download"></i>
                 </span>
                 <span
                   v-if="!disabled"
                   class="el-upload-list__item-delete"
                   @click="handleRemove(file)"
                 >
                   <i class="el-icon-delete"></i>
                 </span>
               </span>
             </div>
         </el-upload>
         <el-dialog :visible.sync="dialogVisible">
           <img width="90%"  :src="dialogImageUrl" alt="">
         </el-dialog>

         </div>
          <div style="margin-left: 100px;margin-top: 30px;">店铺介绍：


           </div>
            <textarea name="" id="" cols="50" rows="10" style="margin-left: 200px;margin-top: -20px;"></textarea>
          <div style="margin-left: 100px;margin-top: 30px;">店铺联系方式：15321564121  <span style="color: #A3A0FB;">修改</span>


           </div>
           <div style="width: 100%;height: 500px;background: #ffffff;margin-top: 40px;">
             <div style="width: 100%;height: 40px;background: #ffffff;border-bottom: 1px solid #cccccc;"><span style="margin-left: 40px;">商家地址库</span></div>
             <div style="float:right;width: 150px;height: 50px ;text-align: center;line-height: 50px;border-radius:10px;margin-top: 30px;color: #000000;border: 1px solid #cccccc;">批量管理</div>
             <div style="float:right;width: 150px;height: 50px;background:#A6A3FB;text-align: center;line-height: 50px;border-radius:10px;margin-top: 30px;margin-right: 20px;color: #ffffff;">新建标签</div>

               <el-table
                 :data="tableData"
                 border
                 style="width: 100%">
                 <el-table-column
                   fixed
                   prop="date"
                   label="日期" align="center"
                   width="200">
                 </el-table-column>
                 <el-table-column
                   prop="name"
                   label="姓名" align="center"
                   width="200">
                 </el-table-column>
                 <el-table-column
                   prop="province"
                   label="省份" align="center"
                   width="200">
                 </el-table-column>
                 <el-table-column
                   prop="city"
                   label="市区" align="center"
                   width="200">
                 </el-table-column>
                 <el-table-column
                   prop="address"
                   label="地址" align="center"
                   width="230">
                 </el-table-column>
                 <el-table-column
                   prop="zip"
                   label="邮编" align="center"
                   width="200">
                 </el-table-column>
                 <el-table-column
                   fixed="right"
                   label="操作" align="center"
                   width="200">
                   <template slot-scope="scope">
                     <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                     <el-button type="text" size="small">删除</el-button>
                   </template>
                 </el-table-column>
               </el-table>
<el-pagination
  background
  layout="prev, pager, next" style="float: right;"
  :total="1000">
</el-pagination>

           </div>


           <div style="width: 100%;height: 600px;background: #ffffff;">
            <div style="width: 100%;height: 40px;background: #ffffff;border-bottom: 1px solid #cccccc;"><span style="margin-left: 30px;">支付方式</span></div>
             <div style="width: 100%;height:120px;background:#ffffff;margin-top: 30px;">
               <img src="../img/11.png" style="margin-left: 80px;margin-top:30px;float: left;">
              <div style="float: left;margin-left: 30px;margin-top:30px;font-size: 22px;">微信支付</div><br>
              <div style="float: left;margin-top:50px;font-size: 16px;margin-left: -90px;">资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>

             </div>
             <div style="width: 100%;height:120px;background:#ffffff;margin-top: 30px;">
               <img src="../img/12.png" style="margin-left: 80px;margin-top:30px;float: left;">
              <div style="float: left;margin-left: 30px;margin-top:30px;font-size: 22px;">微信支付</div><br>
              <div style="float: left;margin-top:50px;font-size: 16px;margin-left: -90px;">资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>

             </div>
             <div style="width: 100%;height:120px;background:#ffffff;margin-top: 30px;">
               <img src="../img/13.png" style="margin-left: 80px;margin-top:30px;float: left;">
              <div style="float: left;margin-left: 30px;margin-top:30px;font-size: 22px;">微信支付</div><br>
              <div style="float: left;margin-top:50px;font-size: 16px;margin-left: -90px;">资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>

             </div>
             <div style="width: 100%;height:120px;background:#ffffff;margin-top: 30px;">
               <img src="../img/14.png" style="margin-left: 80px;margin-top:30px;float: left;">
              <div style="float: left;margin-left: 30px;margin-top:30px;font-size: 22px;">微信支付</div><br>
              <div style="float: left;margin-top:50px;font-size: 16px;margin-left: -90px;">资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>

             </div>

             <div style="width: 100%;height: 500px;background: #ffffff;">
               <div style="width: 100%;height: 60px;background:#ffffff;border-bottom: 1px solid #cccccc;"><span style="margin-left: 40px;margin-top: 40px;line-height: 60px;font-size: 18px;">店铺广告</span></div>
               <div style="float:right;width: 150px;height: 50px ;text-align: center;line-height: 50px;border-radius:10px;margin-top: 30px;color: #000000;border: 1px solid #cccccc;">批量管理</div>
               <div style="float:right;width: 150px;height: 50px;background:#A6A3FB;text-align: center;line-height: 50px;border-radius:10px;margin-top: 30px;margin-right: 20px;color: #ffffff;">新建标签</div>
               <div style="margin-left: 60px;margin-top: 50px ;width: 90%;height: 500px;margin-top:150px;">
               <div style="font-size: 20px;">公告记录</div>
               <div style="font-size: 20px;margin-top: 15px;">2019-10-15  15：00</div>
               <div style="font-size:20px;margin-top: 15px;line-height:30px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
               <div style="font-size: 20px;margin-top: 50px;">公告记录</div>
               <div style="font-size: 20px;margin-top: 15px;">2019-10-15  15：00</div>
                 <div style="font-size:20px;margin-top: 15px;line-height:30px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>

               </div>
               <div style="float: right;margin-top: -370px;margin-right:20px;font-size: 20px;"><span style="color: #FF318A;">删除</span>         |           <span style="color: #A6A3FB;">编辑</span></div>
 <div style="float: right;margin-top: -90px;margin-right:20px;font-size: 20px;"><span style="color: #FF318A;">删除</span>         |           <span style="color: #A6A3FB;">编辑</span></div>

             </div>
  <div class="block">

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000" style="float: right;margin-right:200px;margin-top: 20px;">
    </el-pagination>
  </div>
           </div>

  </div>
</template>

<script>
  export default{
    data:()=>{
      return{
          currentPage3: 5,
          value: true,
          dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                tableData: [{
                          date: '2016-05-02',
                          name: '王小虎',
                          province: '上海',
                          city: '普陀区',
                          address: '上海市普陀区金沙江路 1518 弄',
                          zip: 200333
                        }, {
                          date: '2016-05-04',
                          name: '王小虎',
                          province: '上海',
                          city: '普陀区',
                          address: '上海市普陀区金沙江路 1517 弄',
                          zip: 200333
                        }, {
                          date: '2016-05-01',
                          name: '王小虎',
                          province: '上海',
                          city: '普陀区',
                          address: '上海市普陀区金沙江路 1519 弄',
                          zip: 200333
                        }, {
                          date: '2016-05-03',
                          name: '王小虎',
                          province: '上海',
                          city: '普陀区',
                          address: '上海市普陀区金沙江路 1516 弄',
                          zip: 200333
                        }]
      }
    },methods:{
             handleRemove(file) {
                    console.log(file);
                  },
                  handlePictureCardPreview(file) {
                    this.dialogImageUrl = file.url;
                    this.dialogVisible = true;
                  },
                  handleDownload(file) {
                    console.log(file);
                  },
                  handleClick(row) {
                          console.log(row);
                        },
                         handleSizeChange(val) {
                                console.log(`每页 ${val} 条`);
                              },
                              handleCurrentChange(val) {
                                console.log(`当前页: ${val}`);
                              }
    }
  }
</script>

<style>
  body{
    width: 100%;
    height: 100%;
    background: #cccccc;
  }
</style>
