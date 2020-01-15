<template>
  <!-- 评价管理 -->
  <div style="width:100%;height:100%">
    <div class="div" style="  height: 100%;">
      <div class="header">
        <div style="margin-left:22px;line-height:42px;color: #666666;font-size:16px">订单查询</div>
      </div>
      <div class="demo-input-suffix" style="margin-left: 197px;">
        <div style="font-size: 16px;float: left;margin-top:43px; color: #666666">订单搜索</div>
        <el-input
          placeholder="请输入订单号"
          v-model="searchVal"
          style="width: 186px;margin-top:33px;margin-left: 40px;"
          @keyup.enter.native="onEnterSearch()"
        ></el-input>
        <br />
        <div style="font-size: 16px;float: left;margin-top:38px;color: #666666">下单时间</div>
        <div class="block">
          <el-date-picker
            type="date"
            placeholder="开始日期"
            style="width: 186px;margin-top:28px;margin-left: 40px;"
          ></el-date-picker>
          <span style="margin-left: 13px;">至</span>
          <el-date-picker
            type="date"
            placeholder="结束日期"
            style="width: 186px;margin-top:28px;margin-left:13px;"
          ></el-date-picker>
          <el-button style="margin-left:12px">今</el-button>
          <el-button>昨</el-button>
          <el-button>近7天</el-button>
          <el-button>近30天</el-button>
          <br />
          <div style="font-size: 16px;float: left;margin-top:38px;color: #666666">评价方式</div>
          <el-input placeholder="请输入名称" style="width: 186px;margin-top:28px;margin-left: 40px;"></el-input>
          <br />
          <div
            style="font-size: 16px;float: left;margin-top:44px;color: #666666;margin-left: 330px;margin-top: -33px;"
          >评价星级</div>
          <!-- <el-input
          placeholder="请输入名称"

          v-model="input1" style="width: 200px;margin-top:-42px;margin-left:420px;display: block;">
          </el-input>-->
          <el-select
            v-model="value"
            placeholder="请选择"
            style="width: 186px;margin-top:-42px;margin-left:433px;display: block;"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <br />
          <div class="dis" @click="shaixuan()">筛选</div>
          <div class="disdaoc" @click="elxs()">导出</div>
          <div class="screen" @click="reset()">重置筛选条件</div>
        </div>
      </div>
    </div>
    <div class="div" style="margin-bottom:20px;">
      <div class="footer">
        <el-table
          :data="sen.slice((currpage-1)*pagesize,currpage*pagesize)"
          :current-page="currpage"
          :page-size="pagesize"
          :total="tableData.length"
          style="width: 100%;font-size:12px;"
          max-height="100%"
        >
          <el-table-column prop="name" label="商品描述" width="200" align="center"></el-table-column>
          <el-table-column prop="province" label="评价内容" width="200" align="center"></el-table-column>
          <el-table-column prop="city" label="描述相符" width="200" align="center"></el-table-column>
          <el-table-column prop="address" label="服务态度" width="250" align="center"></el-table-column>
          <el-table-column
            prop="zips"
            label="物流服务"
            width="200"
            align="center"
            style="color:orangered;"
          ></el-table-column>
          <el-table-column prop="zip" label="评价时间" width="200" align="center"></el-table-column>
          <el-table-column prop="zip" label="买家" width="200" align="center"></el-table-column>
          <el-table-column label="操作" width="300" align="center">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="detail(scope.$index, tableData)"
                type="text"
                id="yincang"
                size="small"
                style="color: #A3A0FB;  "
              >回复</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div
          class="block"
          style="float: right;margin-right:35px;margin-top:29px;margin-bottom:29px;"
        >
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/apis/order-api.js'
export default {
  data () {
    return {
      show: true,
      pagesize: 8,
      currpage: 1,
      man: [],
      sen: [],

      search: {
        id: '1'
      },
      tableData: [],
      options: [
        {
          value: '选项1',
          label: '<el-rate v-model="value" show-text></el-rate>'
        }
      ],
      value: '',
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
      query: ''
    }
  },
  created () {
    console.log(1111111)
    this.send()
    this.manage()
  },
  methods: {
    // 搜索订单编号
    onEnterSearch (e, searchVal) {
      api.query(this.search).then(res => {
        console.log(res.data)
        if (res.data.status === 20) {
          console.log('搜索成功')
        } else {
          console.log('搜索失败')
        }
        console.log('search: ' + this.searchVal)
      })
    },
    // 查看订单详情
    detail () {
      api.orderDetail(this.detail).then(res => {
        console.log(res.data)
      })
    },
    // 查看订单状态
    // ------------------------------------------------------------------

    async manage () {
      const data = await this.$http.get('/log/order/print')
      console.log(data.data.data)
      this.man = data.data.data
    },
    async send () {
      const data = await this.$http.get('/log/order/query')
      console.log(data.data.data)
      this.sen = data.data.data
    },
    // ---------------------------------------------
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
    }
  }
}
</script>
<style>
</style>

<style scoped="scoped">
.footer {
  width: 100%;
  background: #ffffff;
  margin: 0 auto;
  bottom: 0;
  overflow: hidden;
}
.dis {
  width: 118px;
  height: 36px;
  background: #a3a0fb;
  text-align: center;
  line-height: 36px;
  margin-top: 19px;
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
.div {
  width: 99%;
  background: #ffffff;
  margin: 0 auto;
  margin-top: 22px;
  border-radius: 4px;
}
div {
  cursor: pointer;
}
.header {
  width: 100%;
  height: 42px;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}
.screen {
  margin-top: -30px;
  color: #a3a0fb;
  margin-left: 420px;
}
</style>
