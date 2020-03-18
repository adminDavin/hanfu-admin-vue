<template>
  <div>
    <span style="margin-left:20px;font-size:14px;color:#666;margin-right:10px;">订单类型</span>
    <el-select
      @change="getlistByType"
      v-model="orderTypeValue"
      style="margin-bottom: 30px;"
      filterable
      placeholder="请选择"
    >
      <el-option
        v-for="item in orderType"
        :key="item.orderDesc"
        :label="item.orderDesc"
        :value="item.orderDesc"
      ></el-option>
    </el-select>
    <el-tabs type="border-card" @tab-click="getStatus">
      <el-tab-pane :label="item.hfName" v-for="item  in statusData" :key="item.hfName">
        <el-table :data="orderData" stripe style="width: 100%">
          <el-table-column
            align="center"
            prop="orderCode"
            label="订单号"
            :show-overflow-tooltip="true"
            width="180"
          ></el-table-column>
          <el-table-column align="center" prop="orderType" label="订单类型"></el-table-column>
          <el-table-column align="center" prop="paymentName" label="支付方式"></el-table-column>
          <el-table-column align="center" prop="amount" label="支付金额"></el-table-column>
          <el-table-column align="center" prop="modifyTime" label="修改时间" width="180"></el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button @click="checkDetail(scope.row)" type="text" size="small">修改订单状态</el-button>
              <el-button @click="goDetail(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-drawer :visible.sync="drawer">
      <span style="margin-left:20px;font-size:14px;color:#666;">修改订单状态</span>
      <el-select
        v-model="updata.value"
        @change="updateStatus"
        placeholder="请选择"
        style="margin-left:20px;"
      >
        <el-option
          v-for="item in statusData"
          :key="item.hfName"
          :label="item.hfName"
          :value="item.hfName"
        ></el-option>
      </el-select>
    </el-drawer>
  </div>
</template>

<script>
import orderCenterService from "@/service/orderCenter.js";
export default {
  data() {
    return {
      type: {
        orderType: "",
        orderStatus: ""
      },
      orderTypeValue: "",
      orderType: [],
      id: "",
      value: "",
      updata: {
        targetOrderStatus: "",
        id: "",
        orderCode: "",
        originOrderStatus: ""
      },
      optionvalue: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      drawer: false,
      dialogVisible: false,
      userId: "",
      imageUrl: "",
      pictureVisible: false,
      addUserForm: {
        name: "杨莹",
        phone: "15022209253"
      },
      statusData: [],
      addUserVisible: false,
      orderData: []
    };
  },
  methods: {
    getlistByType: function(tab) {
      // console.log(1);
      // console.log( this.orderTypeValue)
      for (var i = 0; i < this.orderType.length; i++) {
        if (this.orderType[i].orderDesc === this.orderTypeValue) {
          this.type.orderType = this.orderType[i].orderType;
          // console.log(this.type);
          orderCenterService.getOrderByType(this.type, res => {
            console.log(res);
            this.orderData = res.data.data;
          });
        }
      }
    },
    getOrderByType: function() {
      orderCenterService.getOrderType(res => {
        console.log(res);
        this.orderType = res.data.data;
      });
    },
    getOrderType: function() {
      orderCenterService.getOrderType(res => {
        console.log(res);
        this.orderType = res.data.data;
        this.type.orderStatus = res.data.data[0].hfDesc;
      });
    },
    updateStatus: function(aaa) {
      console.log(aaa);
      for (var i = 0; i < this.statusData.length; i++) {
        if (this.statusData[i].hfName === aaa) {
          this.updata.targetOrderStatus = this.statusData[i].hfDesc;
          orderCenterService.upDataOrderStatus(this.updata, res => {
            console.log(this.updata, res);
            if (res.data.status == 200) {
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.drawer = false;
            } else {
              this.$message.error("修改失败");
            }
            return false;
          });
        }
      }
    },
    getStatus: function(tab, event) {
      console.log(tab.label);

      for (var i = 0; i < this.statusData.length; i++) {
        if (this.statusData[i].hfName === tab.label) {
          console.log(this.statusData[i].hfDesc);
          this.type.orderStatus = this.statusData[i].hfDesc;
          console.log(this.type.orderStatus);
          orderCenterService.checkOrder(this.statusData[i].hfDesc, res => {
            console.log(res);
            this.orderData = res.data.data;
            // console.log(this.statusData[i].hfDesc);
            return false;
          });
        }
      }
      this.orderData = [];
    },
    getStatus1: function(tab, event) {
      orderCenterService.checkOrder(this.statusData[0].hfDesc, res => {
        console.log(res);
        this.orderData = res.data.data;
      });
    },
    addUser: function() {
      this.addUserVisible = true;
    },
    handleChange(file, fileList) {
      console.log(file);
      userCenterService.uploadPicture(file, this.userId, res => {
        console.log(res);
      });
    },
    addUserSubmit: function() {
      userCenterService.addUser(this.addUserForm, res => {
        console.log(res);
        if (res.data.data === "该用户已经存在") {
          this.$message.error("该用户已经存在");
        } else {
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.addUserVisible = false;
          this.checkUser();
        }
      });
    },
    checkUser: function() {
      orderCenterService.checkStatus(res => {
        console.log(res.data.data);
        this.statusData = res.data.data;
        this.getStatus1();
        this.getOrderType();
      });
    },
    upload: function(row, id) {
      this.userId = row.id;
      this.pictureVisible = true;
      console.log(row);
    },
    checkDetail: function(row) {
      this.drawer = true;
      this.updata.id = row.id;
      this.updata.originOrderStatus = row.orderStatus;
      this.updata.orderCode = row.orderCode;
      console.log(row);
    },
    goDetail: function(row) {
      this.id = row.id;
      this.$router.push({
        path: "/orderDetail",
        query: {
          id: row.id
        }
      });
    }
  },
  mounted() {
    this.checkUser();
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
