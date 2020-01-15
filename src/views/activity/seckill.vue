
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>秒杀商品</span>
      </div>
      <el-form style="margin-left: 168px;" ref="form" :model="groupform" label-width="80px">
        <el-form-item label="添加商品">
          <el-input
            style="width:300px"
            prop="goodsId"
            v-model="groupform.goodsId"
            placeholder="请输入商品ID"
          ></el-input>
          <el-button type="primary" style="margin-left:10px" @click="onSubmit">立即创建</el-button>
        </el-form-item>

        <!-- ------------------------------------------------- -->
        <el-dialog title="搜索商品" :visible.sync="dialogTableVisible">
          <div class="grid-content bg-purple">
            <!-- 商品标签 -->
            <span class="place" style="margin: 20px 30px">商品标签</span>
            <el-input v-model="commodityName" placeholder="请输入商品名称" style="width:150px"></el-input>
            <!-- 商品ID -->
            <span class="place" style="margin: 20px 30px">商品ID</span>
            <el-input v-model="commodityId" placeholder="请输入商品ID" style="width:150px"></el-input>
            <!-- 按钮 -->
            <el-button
              size="medium"
              style="background-color:#a6a3fb; color:#fff;margin-left:30px"
            >查询</el-button>
            <el-button size="medium">重置</el-button>
          </div>
          <el-checkbox v-model="checked">已选4人</el-checkbox>
          <span style="color:#ff2e88; margin-left:20px">清空</span>
          <el-row class="btn">
            <el-button
              size="medium"
              style="background-color:#a6a3fb; color:#fff"
              @click="tianjian"
            >+添加商品</el-button>
          </el-row>
          <el-table
            :data="ppl"
            tooltip-effect="dark"
            style="width: 100%"
            :select-all="dianji(selection)"
            ref="multipleTable"
            @selection-change="handleSelectionChange"
          >
            <el-table-column checked type="selection"></el-table-column>
            <el-table-column label="商品ID">
              <template slot-scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column label="商品描述">
              <!-- <template slot-scope="scope">{{ scope.row.hfGoods.goodsDesc }}</template> -->
            </el-table-column>
          </el-table>
          <div style="margin-top:10px;text-align: right; ">
            <el-pagination background layout="prev, pager, next, jumper" :total="1000"></el-pagination>
          </div>
        </el-dialog>
        <!-- ---------------------------------------------------- -->
        <el-form-item label="秒杀时间">
          <el-date-picker
            v-model="groupform.startTime"
            type="datetime"
            placeholder="开始时间"
            align="right"
          ></el-date-picker>

          <el-date-picker
            v-model="groupform.stopTime"
            type="datetime"
            placeholder="结束时间"
            align="right"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="商品金额">
          <el-col :span="7">
            <el-input style="width:300px" v-model="groupform.price" placeholder="请输入金额"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品数量">
          <el-col :span="7">
            <el-input style="width:300px" v-model="groupform.repertory" placeholder="请输入商品数量"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addGcommodity">添加</el-button>
          <el-button  @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-row type="flex">
        <el-col :span="12">
          已选中 {{multipleSelection.length}} 件
          <el-button @click="toggleSelection()">取消选择</el-button>
        </el-col>
        <el-col :span="12" class="row-bg">
          <el-button @click="shanchu">批量删除</el-button>
          <el-button>批量下架</el-button>
        </el-col>
      </el-row>
      <el-table
        ref="multipleTable"
        :data="ppl"
        tooltip-effect="dark"
        style="width: 100%"
        :select-all="dianji(selection)"
        @selection-change="handleSelectionChange"
      >
        <el-table-column checked type="selection" width="55"></el-table-column>
        <el-table-column label="商品ID" width="120">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="商品描述" width="120">
          <!-- <template slot-scope="scope">{{ scope.row.hfGoods.goodsDesc }}</template> -->
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间"></el-table-column>
        <el-table-column prop="stopTime" label="结束时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="price" label="剩余数量" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="compile(scope.row)" type="primary" size="mini">编辑</el-button>
            <el-button
              @click="upFrame(scope.row)"
              type="warning"
              size="mini"
            >{{ scope.row.isDeleted==1?'下架':'上架'}}</el-button>
            <el-button @click="deletesingle(scope.row)" type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block row-bg">
        <!-- <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>-->
      </div>
    </el-card>
    <!-- _________________________________________________________________________________________________________________________________________________编辑 -->
    <el-dialog title :visible.sync="dialogFormVisible">
      <div class="block" style="margin-bottom: 10px;">
        <span class="demonstration">秒杀时间</span>
        <el-date-picker style=" margin-left: 14px;" v-model="formcompile.startTime" type="datetime" placeholder="开始时间"></el-date-picker>
        <el-date-picker v-model="formcompile.stopTime" type="datetime" placeholder="结束时间"></el-date-picker>
      </div>
      <el-form ref="form" :model="formcompile" label-width="80px">
        <el-form-item label="商品金额">
          <el-input v-model="formcompile.price"></el-input>
        </el-form-item>
        <el-form-item label="商品数量">
          <el-input v-model="formcompile.repertory"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from '@/api/orderform_api.js'
import qs from 'qs'
export default {
  name: 'aa',
  components: {},
  props: {},
  data () {
    return {
      // 编辑绑定的值
      formcompile: {
        goodsId: '', // 商品id
        id: '', // 秒杀表id
        price: '', // 团购价格
        repertory: '', // 库存
        startTime: '', // 秒杀开始时间
        stopTime: ''// 秒杀结束时间
      },
      dialogFormVisible: false,
      value1: '',
      value2: '',
      selection: [],
      multipleTable: [], // 存放选中值的数组
      checked: '',
      ppl: [],
      shan: [],
      form1: {
        goodsId: ''
      },
      groupform: {
        goodsId: '', // 商品id
        // number: '', // 成团人数
        price: '', // 团购价格
        repertory: '', // 库存
        startTime: '', // 团购开始时间
        stopTime: '' // 团购结束时间
      },
      currentPage3: 5,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        currentPage3: 5
      },
      tian: {
        goodsId: '2',
        price: '2',
        repertory: '2',
        startTime: '2',
        stopTime: '2'
      },
      sangchu: [], // 批量删除
      commodityName: '',
      commodityId: '',
      table: [
        {
          date: '2016-05-02',
          name: '王小虎'
        },
        {
          date: '2016-05-04',
          name: '王小虎'
        },
        {
          date: '2016-05-01',
          name: '王小虎'
        },
        {
          date: '2016-05-03',
          name: '王小虎'
        }
      ],
      // 点击添加商品出现弹窗
      dialogTableVisible: false,
      tableData: [
        {
          ID: Date.now(),
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isselect: true
        },
        {
          ID: Date.now(),
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isselect: false
        },
        {
          ID: Date.now(),
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isselect: false
        },
        {
          ID: Date.now(),
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isselect: false
        }
      ],
      multipleSelection: [],
      options: [
        {
          value: '选项2',
          label: '12小时'
        }
      ],
      value: '选项1',
      numbers: [1, 2, 3, 4],
      number: '1'
    }
  },
  methods: {
    reset () {
      // eslint-disable-next-line no-unused-expressions
      this.groupform.goodsId = '',
      this.groupform.number = '',
      this.groupform.price = '',
      this.groupform.repertory = '',
      this.groupform.startTime = '',
      this.groupform.stopTime = ''
    },
    // 提交
    confirm () {
      this.dialogFormVisible = false
      api
        .update(this.formcompile)
        .then(res => {
          this.pplp()
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // 编辑按钮
    compile (row) {
      console.log(row)
      this.dialogFormVisible = true
      this.formcompile.goodsId = row.goodsId
      this.formcompile.id = row.id
      this.formcompile.price = row.price
      this.formcompile.repertory = row.repertory
      // this.formcompile.startTime = row.startTime
      // this.formcompile.stopTime = row.stopTime
      // console.log(this.formcompile)
    },
    upFrame (row) {
      if (row.isDeleted === 1) {
        this.$http
          .get('/jietu/kill/updateIsDeleted', {
            params: {
              isDeleted: 0,
              seckillId: row.id
            },
            paramsSerializer: params => {
              return qs.stringify(params, { indices: false })
            }
          })
          .then(res => {
            this.pplp()
            this.$message({
              showClose: true,
              message: '恭喜你，下架成功',
              type: 'success'
            })
          })
          .catch(error => {
            this.$message(error + '下架失败')
          })
      } else {
        this.$http
          .get('/jietu/kill/updateIsDeleted', {
            params: {
              isDeleted: 1,
              seckillId: row.id
            },
            paramsSerializer: params => {
              return qs.stringify(params, { indices: false })
            }
          })
          .then(res => {
            this.pplp()
            this.$message({
              showClose: true,
              message: '恭喜你，上架成功',
              type: 'success'
            })
          })
          .catch(error => {
            this.$message(error + '上架失败')
          })
      }
    },
    // 单个删除
    deletesingle (row) {
      console.log(row.id)
      this.$http
        .get('/jietu/kill/delete', {
          params: {
            id: row.id
          },
          paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
          }
        })
        .then(response => {
          this.pplp()
          this.$message({
            showClose: true,
            message: '恭喜你，删除成功',
            type: 'success'
          })
        })
        .catch(() => {
          this.$message('删除失败')
        })
    },
    // 添加秒杀商品
    addGcommodity () {
      let params = this.groupform
      console.log(params)
      this.$http
        .post('/jietu/kill/insert', params, {
          transformRequest: [
            function (data) {
              var str = ''
              for (var key in data) {
                str +=
                  encodeURIComponent(key) +
                  '=' +
                  encodeURIComponent(data[key]) +
                  '&'
              }
              return str
            }
          ]
        })
        .then(response => {
          this.reset()
          this.pplp()
          this.$message({
            showClose: true,
            message: '恭喜你，添加成功',
            type: 'success'
          })
        })
    },
    handleSelectionChange (val) {
      // console.log(1112112312)
      this.multipleTable = val //  this.multipleTable 选中的值
      console.log(val)
    },
    dianji (selection) {
      // console.log(selection)
    },
    async tiang () {
      await this.$http.post('/jietu/group/insert', {
        ...this.tian
      })
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    onSubmit () {
      this.dialogTableVisible = true
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },

    // 添加
    async tianjian () {
      for (var i = 0; i < this.multipleTable.length; i++) {
        this.groupform.goodsId = this.multipleTable[i].id
        console.log(this.multipleTable[i])
        this.dialogTableVisible = false
      }
    },
    // 批量删除
    async shanchu () {
      for (let i = 0; i < this.multipleTable.length; i++) {
        this.sangchu.push(this.multipleTable[i].id)
      }
      console.log({ params: this.sangchu })
      this.$http
        .get('/jietu/kill/deleteMulti', {
          params: {
            id: this.sangchu
          },
          paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 搜索
    async shousuo () {
      const data = await this.$http.get(
        `/jietu/kill/seek?goodsId=${this.form1.goodsId}`
      )
      console.log(data.data.data)
    },
    // 获取全都团购商品
    async pplp () {
      const data = await this.$http.get('/jietu/kill/select')
      // console.log(data.data)
      this.ppl = data.data
    }
  },
  computed: {},
  watch: {},
  created () {
    this.pplp()
    // this.shan()
  }
}
</script>

<style lang='less' scoped>
.row-bg {
  text-align: right;
}
.btn {
  display: inline-block;
  // text-align: right;
  margin: 20px 30px 0 440px;
}
</style>
