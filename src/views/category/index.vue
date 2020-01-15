<template>
  <div style="width:95%;height: 95%;background: #ffffff;margin:0 auto;margin-top: 40px;">
    <div style="width: 100%;height: 200px;background:#ffffff;">
      <div style="width: 100%;height: 50px;border-bottom: 1px solid #cccccc;">
        <span style="display: block;padding-top:10px;margin-left: 15px;font-size: 20px;">类目管理</span>
      </div>
      <div style="margin-left:80px;margin-top:50px;">
        <span style="font-size: 20px;">类目名称</span>
        <el-input v-model="input" placeholder="请输入内容" style="width:15%;margin-left: 20px;"></el-input>
        <span style="margin-left: 100px;font-size:20px;">类目创建时间</span>

        <el-date-picker
          v-model="value1"
          type="daterange"
          style="margin-left: 30px;"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>

        <div
          @click="reset"
          style="float: right;width: 140px;height: 50px;border:1px solid #cccccc;text-align: center;line-height: 50px;color: #ffffff;border-radius: 5px;color:black;margin-right:100px;"
        >重置</div>
        <!-- <div
          style="float: right;width: 140px;height: 50px;background:#A6A3FB;text-align: center;line-height: 50px;color: #ffffff;border-radius: 5px;margin-right:100px;"
        >查询</div>-->
      </div>
    </div>
    <div style="width: 100%;height: 100%;background:#ffffff;">
      <!-- <div
        style="float: right;width: 140px;height: 50px;border:1px solid #cccccc;text-align: center;line-height: 50px;color: #ffffff;border-radius: 5px;color:black;margin-right:100px;margin-top: 40px;"
      >批量管理</div>-->
      <div
        style="float: right;width: 140px;height: 50px;background:#A6A3FB;text-align: center;line-height: 50px;color: #ffffff;border-radius: 5px;margin-right:100px;margin-top: 40px;"
        @click="dialogVisible = true"
      >+添加类目</div>
      <br />
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="hfName" label="类目名称" align="center">
          <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
        </el-table-column>
        <el-table-column prop="nameSuperior" label="所属父级名称" align="center">
          <template slot-scope="scope">{{scope.row.nameSuperior}}</template>
        </el-table-column>
        <el-table-column prop="name" label="所属层级" align="center">
          <template slot-scope="scope">{{scope.row.levelId===0?'一级类目':scope.row.levelId===1?'二级类目':'三级类目'}}</template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
          width="200"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="text"
              size="small"
              style="font-size:18px;"
            >编辑</el-button>
            <el-button  @click="deletesingle(index,scope.row)"  type="text" size="small" style="color: hotpink;font-size:18px;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <div class="block" style="float: right;margin-right:100px;">
          <el-pagination :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
          <el-dialog title="新建类目" :visible.sync="dialogVisible" width="40%">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="新建单个类目" name="first">
                <span slot="label">
                  <el-radio v-model="radio" label="1">新建单个类目</el-radio>
                </span>
                <div style="margin-left: 100px;">
                  <div>
                    选择填加目录
                    <el-select
                      @change="categshijan"
                      v-model="form.levelId"
                      placeholder="请选择"
                      style="margin-left: 38px;"
                    >
                      <el-option
                        change="categshijan"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div v-if="controlCatalogue!=='0'">
                    所属一级目录
                    <el-select
                      @change="twocategshijan"
                      v-model="form1.levelId1"
                      placeholder="请选择一级目录"
                      style="margin-left: 38px;"
                    >
                      <el-option
                        v-for="item in onecatalogues"
                        :key="item.id"
                        :label="item.hfName"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </div>
                  <div v-if="controlCatalogue=='3'">
                    所属二级目录
                    <el-select
                      @change="threecategshijan"
                      v-model="form2.levelId1"
                      placeholder="请选择二级目录"
                      style="margin-left: 38px;"
                    >
                      <el-option
                        v-for="item in tiwoCatalogues"
                        :key="item.id"
                        :label="item.hfName"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </div>
                  <div>
                    新建类目名称
                    <el-input
                      v-model="category"
                      placeholder="请输入类目名称"
                      style="width:40%;margin-left:40px;"
                    ></el-input>
                  </div>
                  <br />
                  <div>
                    <el-upload
                      ref="upload"
                      class="upload-poster"
                      accept=".jpg, .jpeg, .png, .gif, .bmp, .JPG, .JPEG, .GIF, .BMP"
                      action
                      list-type="picture-card"
                      :on-remove="onRemove"
                      :on-change="imgPreview"
                      :auto-upload="false"
                    >
                      <i class="el-icon-plus"></i>
                      <!-- <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="fileInfo" alt />
                      </el-dialog>-->
                    </el-upload>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <div style="width: 300px;height: 80px ;margin: 0 auto;">
                      <el-button @click="dialogVisible = false" style="float: left;width:140px;">取 消</el-button>
                      <el-button
                        type="primary"
                        @click="change"
                        style="float: right;width:140px;background: #A6A3FB;"
                      >确 定</el-button>
                    </div>
                  </span>
                </div>
              </el-tab-pane>

              <!-- <el-tab-pane label="新建多个类目" name="second">
                <span slot="label">
                  <el-radio v-model="form.levelId" label="2">新建多个类目</el-radio>
                </span>
                <el-form :inline="true" :model="form" class="demo-form-inline">
                  <el-form-item label="三级类目名称">
                    <el-input v-model="form.levelId" placeholder="请输入类目名称"></el-input>
                  </el-form-item>
                  <el-form-item label="所属二级类目">
                    <el-select v-model="form.levelId" placeholder="请选择二级类目">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item label="二级类目名称">
                    <el-input v-model="form.levelId" placeholder="请输入类目名称"></el-input>
                  </el-form-item>
                  <el-form-item label="所属一级类目">
                    <el-select v-model="form.levelId" placeholder="请选择一级类目">
                      <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="一级类目名称">
                    <el-input v-model="form.levelId" placeholder="请输入类目名称"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                  </el-form-item>
                </el-form>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-tab-pane>-->
            </el-tabs>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/category_api.js'
export default {
  data () {
    return {
      // 判断一级目录选择的东西控制2 3 目录显示隐藏
      controlCatalogue: '0',
      // 添加一级目录 绑定的参数
      form: {
        levelId: '0', // 类目级别, 顶层类目的类目级别是0, 紧跟顶层类目的类目级别是1,
        parentCategoryId: '-1', // 上级类目id, 如果顶级类目, 上级类目ID, 设置为-1
        requestId: '123', // 请求id, 发起请求的随机数, 用来判断请求是否重复, 一般使用UUID
        timestamp: '11', // 发起请求的当前时间, 时间格式:20181023T081324Z
        token: '123', // 登录成功后返回的token
        userId: '1' // 登录的用户id
      },
      fileInfo: [], // 图片路径
      category: '', // 类目名称
      // 添加二级目录 绑定的参数
      form1: {
        levelId: '1', // 类目级别, 顶层类目的类目级别是0, 紧跟顶层类目的类目级别是1,
        levelId1: '', // 类目级别, 顶层类目的类目级别是0, 紧跟顶层类目的类目级别是1,
        parentCategoryId: '', // 上级类目id, 如果顶级类目, 上级类目ID, 设置为-1
        requestId: '111', // 请求id, 发起请求的随机数, 用来判断请求是否重复, 一般使用UUID
        timestamp: '1111', // 发起请求的当前时间, 时间格式:20181023T081324Z
        token: '123', // 登录成功后返回的token
        userId: '1' // 登录的用户id
      },
      // 添加三级目录 绑定的参数
      form2: {
        levelId: '2', // 类目级别, 顶层类目的类目级别是0, 紧跟顶层类目的类目级别是1,
        levelId1: '', // 类目级别, 顶层类目的类目级别是0, 紧跟顶层类目的类目级别是1,
        parentCategoryId: '', // 上级类目id, 如果顶级类目, 上级类目ID, 设置为-1
        requestId: '111', // 请求id, 发起请求的随机数, 用来判断请求是否重复, 一般使用UUID
        timestamp: '1111', // 发起请求的当前时间, 时间格式:20181023T081324Z
        token: '123', // 登录成功后返回的token
        userId: '1' // 登录的用户id
      },
      activeName: 'first',
      value: '',
      // 一级目录
      onecatalogues: [],
      // 二级目录
      tiwoCatalogues: [],
      options: [
        {
          value: '0',
          label: '一级目录'
        },
        {
          value: '1',
          label: '二级目录'
        },
        {
          value: '3',
          label: '三级目录'
        }
      ],
      radio: '1',
      dialogVisible: false,
      input: '',
      value1: '',
      index: '',
      tableData: []
    }
  },
  created () {
    this.categorys()
    this.huoqsuoy()
  },
  mounted () {},
  methods: {
    // 删除单个商品
    deletesingle: function (index, row) {
      // console.log(row)
      this.$confirm('确认删除吗？', '提示', {}).then(async () => {
        api
          .deleteCategory(row.id)
          .then(res => {
            this.huoqsuoy()
            this.tableData.splice(index, 1)
            // this.quGoods()
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    // 添加图里的
    onRemove (file) {},
    // 添加图里的
    imgPreview (file) {
      let fileName = file.name
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/
      if (regex.test(fileName.toLowerCase())) {
        this.fileInfo.push(URL.createObjectURL(file.raw))
        // console.log(file.raw)
        // console.log(this.ruleForm.fileInfo)
        // this.uploadFile(file)
      } else {
        this.$message.error('请选择图片文件')
      }
    },
    onSubmit () {
      console.log('submit!')
    },
    // 一级 下拉触发事件
    categshijan (e) {
      this.controlCatalogue = e
    },
    // 二级 下拉触发事件
    twocategshijan (e) {
      this.form1.parentCategoryId = e
      this.$http
        .get('/cat/product/category?parentCategoryId=' + e)
        .then(res => {
          this.tiwoCatalogues = res.data.data
          // console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 三级 下拉触发事件
    threecategshijan (e) {
      console.log(e)
      this.form2.parentCategoryId = e
      this.$http
        .get('/cat/product/category?parentCategoryId=' + e)
        .then(res => {
          this.tiwoCatalogues = res.data.data
          // console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 重置
    reset () {
      this.value1 = ''
      this.input = ''
    },
    // 添加类目
    change () {
      if (this.controlCatalogue === '0') {
        this.time()
        this.form.requestId = Date.now()
        api
          .typeAddCategory(this.form, this.category, this.fileInfo)
          .then(response => {
            this.$router.push({ name: 'category' })
            this.dialogVisible = true
            this.huoqsuoy()
            this.$message({
              showClose: true,
              message: '恭喜你，添加一级分类成功',
              type: 'success'
            })
          })
          .catch(error => {
            this.$message(error + '添加一级分类失败')
          })
      } else if (this.controlCatalogue === '1') {
        this.time()
        this.form1.requestId = Date.now()
        api
          .typeAddCategory(this.form1, this.category, this.fileInfo)
          .then(response => {
            this.$router.push({ name: 'category' })
            this.dialogVisible = true
            this.huoqsuoy()
            this.$message({
              showClose: true,
              message: '恭喜你，添加二级分类成功',
              type: 'success'
            })
          })
          .catch(error => {
            this.$message(error + '添加二级分类失败')
          })
      } else if (this.controlCatalogue === '3') {
        this.time()
        this.form2.requestId = Date.now()
        api
          .typeAddCategory(this.form2, this.category, this.fileInfo)
          .then(response => {
            this.$router.push({ name: 'category' })
            this.dialogVisible = true
            this.huoqsuoy()
            this.$message({
              showClose: true,
              message: '恭喜你，添加三级分类成功',
              type: 'success'
            })
          })
          .catch(error => {
            this.$message(error + '添加三级分类失败')
          })
      } else {
        this.$message('选择分类有错误')
      }
    },
    // 获取一级类目
    categorys () {
      this.$http
        .get('/cat/product/category')
        .then(res => {
          this.onecatalogues = res.data.data
          // console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 获取所有类目
    huoqsuoy () {
      this.$http
        .get('/cat/product/findAllCategory')
        .then(res => {
          this.tableData = res.data.data
          // console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          alert(error)
        })
    },
    handleClick (row) {
      console.log(row)
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
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    time () {
      var myDate = new Date()

      // 获取当前年
      var year = myDate.getFullYear()

      // 获取当前月
      var month = myDate.getMonth() + 1
      // 获取当前日
      var date = myDate.getDate()
      var h = myDate.getHours() // 获取当前小时数(0-23)
      var m = myDate.getMinutes() // 获取当前分钟数(0-59)
      var s = myDate.getSeconds()
      // 获取当前时间
      var now = year + '-' + month + '-' + date + ' ' + h + ':' + m + ':' + s
      this.form.timestamp = now
      this.form1.timestamp = now
      this.form2.timestamp = now
      // console.log(this.timestamp)
    }
  }
}
</script>

<style scoped lang="less">
.el-select {
  margin-bottom: 15px;
}
</style>
