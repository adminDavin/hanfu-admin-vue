<template>
  <div style="width: 95%;height: 95%;background: #ffffff;margin-top: 40px;margin: 0 auto;">
    <div style="width: 100%;height: 500px;background: #ffffff;margin-top: 40px;">
      <div style="width: 100%;height: 40px;background: #ffffff;border-bottom: 1px solid #cccccc;">
        <span style="margin-left: 40px;">商家地址库</span>
      </div>
      <div
        class="butt"
        style="text-align: center;line-height: 50px;border-radius:10px;margin-top: 30px;color: #000000;border: 1px solid #cccccc;"
      >批量管理</div>
      <div
       class="butt"
        style="background:#A6A3FB;text-align: center;line-height: 50px;border-radius:10px;margin-top: 30px;margin-right: 20px;color: #ffffff;"
      >新建标签</div>

      <el-table :data="tableData" border style="width: 100%">
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
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
        style="float: right;margin-right:200px;margin-top: 20px;"
      ></el-pagination>
    </div>

    <div style="width: 100%;height: 600px;background: #ffffff;">
      <div style="width: 100%;height: 40px;background: #ffffff;border-bottom: 1px solid #cccccc;">
        <span style="margin-left: 30px;">支付方式</span>
      </div>
      <div style="width: 100%;height:120px;background:#ffffff;margin-top: 30px;">
        <img src="../img/11.png" style="margin-left: 80px;margin-top:30px;float: left;" />
        <div style="float: left;margin-left: 30px;margin-top:30px;font-size: 22px;">微信支付</div>
        <br />
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -90px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div>
      <div style="width: 100%;height:120px;background:#ffffff;margin-top: 30px;">
        <img src="../img/12.png" style="margin-left: 80px;margin-top:30px;float: left;" />
        <div style="float: left;margin-left: 30px;margin-top:30px;font-size: 22px;">微信支付</div>
        <br />
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -90px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div>
      <!-- <div style="width: 100%;height:120px;background:#ffffff;margin-top: 30px;">
        <img src="../img/13.png" style="margin-left: 80px;margin-top:30px;float: left;" />
        <div style="float: left;margin-left: 30px;margin-top:30px;font-size: 22px;">微信支付</div>
        <br />
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -90px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div> -->
      <!-- <div style="width: 100%;height:120px;background:#ffffff;margin-top: 30px;">
        <img src="../img/14.png" style="margin-left: 80px;margin-top:30px;float: left;" />
        <div style="float: left;margin-left: 30px;margin-top:30px;font-size: 22px;">微信支付</div>
        <br />
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -90px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div> -->
      <!-- <div style="width: 100%;height:120px;background:#ffffff;margin-bottom: 30px;">
        <img src="../img/yuezhifu.png" style="margin-left: 80px;margin-top:30px;float: left;" />
        <div style="float: left;margin-left: 30px;margin-top:30px;font-size: 22px;">余额支付</div>
        <br />
        <div
          style="float: left;margin-top:50px;font-size: 16px;margin-left: -90px;"
        >资金结算至店铺余额，结算时扣除0.0%交易手续费（微信收取）。（仅支持境内使用，支付宝内无法使用微信支付）</div>
      </div> -->
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
      tableData: [
      ]
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
.butt {
  float: right;
  width: 150px;
  /* height: 80px; */
}
</style>
