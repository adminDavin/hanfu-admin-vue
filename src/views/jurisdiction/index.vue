/* eslint-disable no-undef */
<template>
  <div>
    <el-card class="box-card">
      <div class="header">
        <el-button @click="centerDialogVisible = true" style="background: #a3a0fb;">
          <i class="el-icon-plus"></i>添加
        </el-button>
        <el-button size="medium" plain>批量管理</el-button>
        <div style="float: right;">
          <el-input size="medium" v-model="input" placeholder="请输入内容"></el-input>
          <el-button style="background: #a3a0fb;">
            <i class="el-icon-search"></i>查询
          </el-button>
        </div>
        <!-- <el-button style="float: right; padding: 3px 0" >操作按钮</el-button> -->
      </div>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="日期">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" style="color: rgba(255, 183, 70, 1);">设置权限</el-button>
            <el-button type="text" style="color: rgba(166, 163, 251, 1);">编辑</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
              style="color: rgba(255, 49, 138, 1);"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog :visible.sync="centerDialogVisible" width="48%" center>
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >选择所有权限</el-checkbox>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">数据统计</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="保存图片"></el-checkbox>
            <el-checkbox label="查看图片"></el-checkbox>
            <el-checkbox label="修改"></el-checkbox>
            <el-checkbox label="删除"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">权限管理</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="保存图片"></el-checkbox>
            <el-checkbox label="查看图片"></el-checkbox>
            <el-checkbox label="修改"></el-checkbox>
            <el-checkbox label="删除"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">订单管理</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="查询添加"></el-checkbox>
            <el-checkbox label="设置权限"></el-checkbox>
            <el-checkbox label="编辑"></el-checkbox>
            <el-checkbox label="删除"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">商品管理</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="查询"></el-checkbox>
            <el-checkbox label="添加"></el-checkbox>
            <el-checkbox label="编辑"></el-checkbox>
            <el-checkbox label="上架"></el-checkbox>
            <el-checkbox label="下架"></el-checkbox>
            <el-checkbox label="删除"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">订单管理</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="编辑"></el-checkbox>
            <el-checkbox label="查询"></el-checkbox>
            <el-checkbox label="导出"></el-checkbox>
            <el-checkbox label="查看"></el-checkbox>
            <el-checkbox label="发货"></el-checkbox>
            <el-checkbox label="退款"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>

        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">活动</el-checkbox>
          </template>
          <el-checkbox-group accordion v-model="checkList">
            <el-checkbox v-model="checked">隐藏秒杀</el-checkbox>
            <el-checkbox v-model="checked">隐藏拼团</el-checkbox>
            <el-checkbox-group v-model="checkList">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  {{dropDown}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="秒杀">秒杀</el-dropdown-item>
                  <el-dropdown-item command="拼团">拼团</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-checkbox label="修改"></el-checkbox>
              <el-checkbox label="添加"></el-checkbox>
              <el-checkbox label="编辑"></el-checkbox>
              <el-checkbox label="下架"></el-checkbox>
              <el-checkbox label="删除"></el-checkbox>
            </el-checkbox-group>
          </el-checkbox-group>
        </el-collapse-item>

        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">类目管理</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="查询"></el-checkbox>
            <el-checkbox label="添加"></el-checkbox>
            <el-checkbox label="编辑"></el-checkbox>
            <el-checkbox label="删除"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">用户管理</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="数据"></el-checkbox>
            <el-checkbox label="筛选"></el-checkbox>
            <el-checkbox label="添加用户"></el-checkbox>
            <el-checkbox label="编辑"></el-checkbox>
            <el-checkbox label="添加标签"></el-checkbox>
            <el-checkbox label="联系客户"></el-checkbox>
            <el-checkbox label="余额"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">会员管理</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="编辑
            "></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">核销管理</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="查询"></el-checkbox>
            <el-checkbox label="编辑"></el-checkbox>
            <el-checkbox label="记录"></el-checkbox>
            <el-checkbox label="清楚记录"></el-checkbox>
            <el-checkbox label="删除"></el-checkbox>
            <el-checkbox label="核销额"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">消息</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="查看"></el-checkbox>
            <el-checkbox label="编辑"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">资产</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="明细"></el-checkbox>
            <el-checkbox label="记录"></el-checkbox>
            <el-checkbox label="提现"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">优惠券</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="查询"></el-checkbox>
            <el-checkbox label="新建"></el-checkbox>
            <el-checkbox label="上架"></el-checkbox>
            <el-checkbox label="修改"></el-checkbox>
            <el-checkbox label="删除"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-checkbox v-model="checked">设置</el-checkbox>
          </template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="隐藏"></el-checkbox>
            <el-checkbox label="新建"></el-checkbox>
            <el-checkbox label="上架"></el-checkbox>
            <el-checkbox label="修改"></el-checkbox>
            <el-checkbox label="删除"></el-checkbox>
            <el-checkbox label="设置支付方式"></el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
      </el-collapse>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 下拉菜单
      dropDown: '秒杀',
      // 多选
      checkList: [],
      // 单多选
      checked: '',
      //  弹框里的多选
      checkAll: false, // 弹窗全选绑定
      checkedCities: ['上海', '北京'], //
      // cities: cityOptions,
      isIndeterminate: true, // 是否全选
      // // 弹窗控制显示隐藏
      centerDialogVisible: false,
      input: '',
      // 表格数据
      tableData: [
        // {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // },
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    // 全选
    handleCheckAllChange (val) {
      // eslint-disable-next-line no-undef
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    // 全选
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
      console.log(checkedCount > 0 && checkedCount < this.cities.length)
    },
    // 表格
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleCommand (command) {
      this.dropDown = command
    }
  }
}
</script>

<style  lang="less">
.el-input {
  width: 200px;
  margin-right: 26px;
}
</style>
