<template>
  <div style="width: 99%;height: 100%;margin:auto">
    <div style="width: 100%;height: 528px;background: #ffffff;margin-top: 22px;border-radius:4px">
      <div style="width: 100%;height: 42px;background: #ffffff;border-bottom: 1px solid #cccccc;line-height:42px;font-size:16px">
        <span style="margin-left: 22px;">商家地址库</span>
      </div>
      <div
        style="float:right;width: 118px;height: 36px ;text-align: center;line-height: 36px;border-radius:10px;margin-top: 30px;color: #000000;border: 1px solid #cccccc;margin-right:31px"
      >批量管理</div>
      <div
        style="float:right;width: 118px;height: 36px;background:#A6A3FB;text-align: center;line-height: 36px;border-radius:10px;margin-top: 30px;margin-right: 12px;color: #ffffff;"
      >新建标签</div>
      <el-table :data="tableData" border="" style="width: 100%">
        <el-table-column fixed prop="date" label="日期" align="center" width="200"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center" width="200"></el-table-column>
        <el-table-column prop="province" label="省份" align="center" width="200"></el-table-column>
        <el-table-column prop="city" label="市区" align="center" width="200"></el-table-column>
        <el-table-column prop="address" label="地址" align="center" width="230"></el-table-column>
        <el-table-column prop="zip" label="邮编" align="center" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
                 <div class="block" style="float: right;margin-right:31px;margin-top:72px">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000"
                    ></el-pagination>
                </div>
    </div>
    <div style="width: 100%;height: 784px;background: #ffffff;margin-top:30px;border-radius:4px;margin-bottom:20px;">
      <div style="width: 100%;height: 41px;background: #ffffff;border-bottom: 1px solid #cccccc;line-height:41px">
        <span style="margin-left: 22px;font-size:16px">支付方式</span>
      </div>
      <div style="width: 97%;height:128px;background:rgba(245,246,250,1);margin: 25px auto 0;">
        <img src="" style="padding-left:30px;bpx-sizing:border-box;margin-top:32px;width:64px;height:64px;border-radius:4px;float:left">
        <div style="float: left;margin-left: 34px;margin-top:30px;font-size: 20px;">微信支付</div>
        <br>
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -80px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div>
       <div style="width: 97%;height:128px;background:rgba(245,246,250,1);margin: 25px auto 0;">
        <img src="" style="padding-left:30px;bpx-sizing:border-box;margin-top:32px;width:64px;height:64px;border-radius:4px;float:left">
        <div style="float: left;margin-left: 34px;margin-top:30px;font-size: 20px;">微信支付</div>
        <br>
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -80px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div>
       <div style="width: 97%;height:128px;background:rgba(245,246,250,1);margin: 13px auto 0;">
        <img src="" style="padding-left:30px;bpx-sizing:border-box;margin-top:32px;width:64px;height:64px;border-radius:4px;float:left">
        <div style="float: left;margin-left: 34px;margin-top:30px;font-size: 20px;">微信支付</div>
        <br>
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -80px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div>
       <div style="width: 97%;height:128px;background:rgba(245,246,250,1);margin: 13px auto 0;">
        <img src="" style="padding-left:30px;bpx-sizing:border-box;margin-top:32px;width:64px;height:64px;border-radius:4px;float:left">
        <div style="float: left;margin-left: 34px;margin-top:30px;font-size: 20px;">微信支付</div>
        <br>
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -80px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div>
       <div style="width: 97%;height:128px;background:rgba(245,246,250,1);margin: 13px auto 0;">
        <img src="" style="padding-left:30px;bpx-sizing:border-box;margin-top:32px;width:64px;height:64px;border-radius:4px;float:left">
        <div style="float: left;margin-left: 34px;margin-top:30px;font-size: 20px;">微信支付</div>
        <br>
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -80px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
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
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    handleClick (row) {
      console.log(row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background: #cccccc;
}
</style>
