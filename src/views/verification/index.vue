<template>
  <div>
    <!-- 搜索 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- <span>搜索</span> -->
      </div>
      <div class="grid-content bg-purple" style="text-align:center">
        <!-- 时间 -->
        <span class="demonstration" style="margin-right:20px">时间查询</span>
        <span class="block" style="margin-bottom: 10px;">
        <el-date-picker style=" margin-left: 14px;" v-model="formshijian.createData" value-format="yyyy-MM-dd HH:mm:ss"  type="datetime"  placeholder="开始时间"></el-date-picker>
        <el-date-picker v-model="formshijian.createData1" type="datetime" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="结束时间"></el-date-picker>
      </span>
        <!-- 地区 -->
        <span class="place">请选择地区</span>
        <el-input v-model="formshijian.site" placeholder="请输入内容" style="width:150px"></el-input>
      </div>
      <!-- 按钮 -->
      <el-row class="btn">
        <el-button size="medium" style="background-color:#a6a3fb; color:#fff" @click="ppl">查询</el-button>
        <el-button size="medium">重置</el-button>
      </el-row>
    </el-card>

    <!-- 内容 -->
    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <el-row class="btn">
          <!-- 删除按钮 -->
          <el-button size="medium" @click="shanchu">批量删除</el-button>
        </el-row>
        <!-- 点击弹框添加 -->
        <!-- <el-dialog title="添加核销员" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="核销员名称" :label-width="formLabelWidth">
              <el-input
                v-model="form.id"
                autocomplete="off"
                placeholder="请输入核销员名称"
                style="width:300px"
              ></el-input>
            </el-form-item>
            <el-form-item label="核 销 地 点" :label-width="formLabelWidth">
              <el-input
                v-model="form.name1"
                autocomplete="off"
                placeholder="请输入核销地点"
                style="width:300px"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer" style="text-align: center;">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="dialogFormVisible = false"
              style="margin-left: 50px;background-color:#a6a3fb; color:#fff;border:0"
            >保 存</el-button>
          </div>
        </el-dialog>-->
        <!-- /点击弹框添加 -->
      </div>

      <!-- 列表 -->
      <el-checkbox>已选4人</el-checkbox>
      <span style="color:#ff2e88; margin-left:20px">清空</span>
      <el-table
        @selection-change="handleSelectionChange"
        ref="multipleTable"
        :data="checked"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="realName" label="核销员"></el-table-column>
        <el-table-column prop="money" label="核销额"></el-table-column>
        <el-table-column prop="presentMoney" label="本次核销额"></el-table-column>
        <el-table-column prop="site" label="地址" show-overflow-tooltip></el-table-column>
        <el-table-column prop="createDate" label="创建时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <!-- <el-button type="text" style="color:#a6a3fb" @click="compile(see)" this.data>编辑</el-button -->
            <el-button type="text" style="color:#fad177" @click="record(scope.row.id)">记录</el-button>
            <el-button type="text" style="color:#ff2e88" @click="deletes(scope.row.id)">清除记录</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- --------------------------------------------------------------- -->
      <!-- <el-dialog title="编辑核销员" :visible.sync="dialogFormVisible">
        <el-form :model="seeform">
          <el-form-item label="核 销 物 品" :label-width="formLabelWidth">
            <el-select v-model="seeform" placeholder="请选择">
              <el-option v-for="(item,i) in options" :key="i" :label="item.label"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="核销员名称" :label-width="formLabelWidth">
            <el-input
              v-model="seeform.RealName"
              autocomplete="off"
              placeholder="请输入核销员名称"
              style="width:300px"
            ></el-input>
          </el-form-item>
          <el-form-item label="核 销 地 点" :label-width="formLabelWidth">
            <el-input
              v-model="seeform.site"
              autocomplete="off"
              placeholder="请输入核销地点"
              style="width:300px"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center;">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button
            type="primary"
            @click="save"
            style="margin-left: 50px;background-color:#a6a3fb; color:#fff;border:0"
          >保 存</el-button>
        </div>
      </el-dialog>-->
      <!-- --------------------------------------------------------------- -->
      <!-- 点击弹框添加 -->
      <el-dialog title="核销记录" :visible.sync="dialogTableVisible">
        <el-table :data="rec" style="width: 100%">
          <el-table-column prop="amount" label="核销金额"></el-table-column>
          <el-table-column prop="createDate" label="核销时间"></el-table-column>
        </el-table>
      </el-dialog>
      <!-- /点击弹框添加 -->
      <div class="sum">合计：5000.00元</div>
      <!-- 分页 -->
      <!-- <div style="margin-top:10px;text-align: right; ">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>-->
    </el-card>
  </div>
</template>

<script>
import api from '@/api/verification_api.js'
import qs from 'qs'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      shanchus: [], // 批量删除id
      multipleTable: [], // 存放选中值的数组
      rec: '',
      // 列表上的双绑定
      checked: [],
      formshijian: {
        createData: '', // 开始时间
        createData1: '', // 结束时间
        site: ''
      },
      startTime: '', // 开始时间
      endTime: '', // 结束时间
      input: '',
      dialogFormVisible: false,
      dialogTableVisible: false,
      open: false,
      see: [],
      tian: [],
      options: [],
      seeform: {
        RealName: '',
        site: '',
        UserId: '11',
        cancel2: '1'
      },
      shan: [],
      form: {
        name: '',
        name1: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '200px'
    }
  },
  computed: {},
  watch: {},
  created () {
    this.seek()
  },
  methods: {
    // 核销员详情
    async record (id) {
      this.dialogTableVisible = true
      const data = await this.$http.get(
        '/ver/cancel/selectCancelRecord?cancelId=' + id
      )
      // console.log('核销员详情', data)
      this.rec = data.data.data.list
      // console.log('this.rec', this.rec)
    },
    // 删除
    async deletes (id) {
      await this.$http
        .get('/ver/cancel/deleteCancel?id=' + id)
        .then(res => {
          console.log(res)
          this.seek()
          console.log('成功')
          // console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 获取核销员
    async seek () {
      await this.$http
        .get('/ver/cancel/selectCancel')
        .then(res => {
          console.log(res)
          this.checked = res.data.data.list
          // console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 批量删除
    async shanchu () {
      for (let i = 0; i < this.multipleTable.length; i++) {
        this.shanchus.push(this.multipleTable[i].id)
      }
      this.$http
        .get('/ver/cancel/deleteCancel', {
          params: {
            id: this.shanchus
          },
          paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
          }
        })
        .then(response => {
          this.seek()
          this.shanchus = []
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleSelectionChange (val) {
      // console.log(1112112312)
      this.multipleTable = val //  this.multipleTable 选中的值
      console.log(val)
    },
    // 查询
    async ppl () {
      api.login(this.formshijian)
        .then(res => {
          // console.log('成功')
          this.checked = res.data.data.list
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    },
    // compile (see) {
    //   this.dialogFormVisible = true
    //   // console.log(see)
    //   // var index = '',
    //   for (let i = 0; i <= see.length - 1; i++) {
    //     console.log(i)
    //     this.seeform.RealName = see[i].realName
    //     this.seeform.site = see[i].site
    //   }
    // },
    // async record () {
    //   const data = await this.$http.get('/ver/cancel/selectCancel')
    //   console.log(data.data.data)
    //   this.rec = data.data.data
    // },
    async area () {
      const data = await this.$http.get('/ver/cancel/selectRegion')
      console.log(data.data.data)
      this.are = data.data.data
    },
    async time () {
      const data = await this.$http.get('/ver/cancel/selectDate')

      console.log(data.data.data)
      this.ti = data.data.data
    },
    async tianjia () {
      const data = await this.$http.get('/ver/updateCancelUser')

      console.log(data.data)
      this.tian = data.data
    }
  },

  mounted () {}
}
</script>

<style scoped lang="less">
.place {
  margin-left: 50px;
  margin-right: 20px;
}
.btn {
  text-align: right;
  margin: 20px 30px 0 0;
}
.sum {
  margin-top: 10px;
  margin-left: 150px;
  color: #ff2e88;
}
</style>
