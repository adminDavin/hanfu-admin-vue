<template>
  <div>
    <el-button style="margin: 8px;" @click="addGoodsSpecificationList" type="primary">添加活动</el-button>
    <el-table :data="addActivities" style="width: 100%">
      <el-table-column prop="activityName" label="活动名称">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.activityName"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="activityType" label="活动类型">
        <template slot-scope="scope">
          <el-select v-model="scope.row.activityType" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.activityType"
              :label="item.activityDesc"
              :value="item.activityType"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="startTime" label="开始时间">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.startTime"
            type="datetime"
            placeholder="开始时间"
            align="right"
          ></el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="endTime" label="结束时间">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.endTime"
            type="datetime"
            placeholder="结束时间"
            align="right"
          ></el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="stopTime" label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click="addGcommodity(scope)" size="mini">保存</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import serviceEvents from '@/service/eventsManage.js';
export default {
  data() {
    return {
      addActivities: [],
      // 添加秒杀
      groupform: {
        activityName: '', // 活动名称
        activityType: '', // 活动类型
        startTime: '', // 开始时间
        endTime: '', // 结束时间
        timestamp: '2', // 当前时间
        token: '1',
        userId: '1',
        requestId: '2', // 随机数
      },
      options: [], // 下拉框
    };
  },
  created() {

    this.geteventType();
  },
  methods: {
    // 添加一行商品规格
    addGoodsSpecificationList() {
      let row = {
        activityName: '', // 活动名称
        activityType: '', // 活动类型
        startTime: '', // 开始时间
        endTime: '', // 结束时间
      };
      this.addActivities.push(row);
    },
    // 添加秒杀商品 value
    addGcommodity(scope) {
      this.groupform.activityName = scope.row.activityName;
      this.groupform.activityType = scope.row.activityType;
      this.groupform.startTime = scope.row.startTime;
      this.groupform.endTime = scope.row.endTime;
      // console.log('parathis.groupformms', this.groupform);
      console.log('保存');
      serviceEvents.ceateInsert(this.groupform, (res) => {
        console.log('秒杀商品', res);
        this.$message({
          showClose: true,
          message: '恭喜你，添加成功',
          type: 'success',
        });
        this.getselect();
      });

      console.log('scope', scope);
    },

    // 获取秒杀商品
    getselect() {
      serviceEvents.select((res) => {
        console.log('秒杀商品', res.data.data);
        this.tableData = res.data.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
