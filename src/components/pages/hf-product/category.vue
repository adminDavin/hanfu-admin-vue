<template>
  <div>
    <el-card class="search-card">
      <el-form style="padding-top:20px" label-width="100px" :inline="true" class="demo-form-inline">
        <el-form-item label="类目名称">
          <el-input v-model="inquire.name" placeholder="请输入物品名称"></el-input>
        </el-form-item>
        <el-form-item label="所属层级">
          <el-select v-model="inquire.level" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="float: right;">
          <el-button type="purple" @click="seeAbout">查询</el-button>
          <el-button @click="sou">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- <span>卡片名称</span> -->
        <el-button style="float: right;" @click="dialogVisible = true" type="purple">+添加类目</el-button>
      </div>

      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        :tree-props="{children: 'categories', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="id" label="类目ID" width="180"></el-table-column>
        <el-table-column prop="hfName" label="类目名称" width="180"></el-table-column>
        <el-table-column prop="level" label="所属层级" align="center">
          <template
            slot-scope="scope"
          >{{scope.row.level===1?'一级类目':scope.row.level===2?'二级类目':'三级类目'}}</template>
        </el-table-column>
        <el-table-column prop="date" label="创建时间" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column fixed="right" width="120" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClicks(scope.row)" type="text" size="small">编辑</el-button>
            <el-button
              @click="deletesingle(index,scope.row)"
              class="ff3"
              type="text"
              size="small"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <div style="width: 100%;height: 100%;background:#ffffff;">
      <div style="margin-top: 20px">
        <div class="block" style="float: right;margin-right:100px;">
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
                  <div v-if="controlCatalogue=='2'">
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
                    <!-- <el-upload
                      ref="upload"
                      class="upload-poster"
                      accept=".jpg, .jpeg, .png, .gif, .bmp, .JPG, .JPEG, .GIF, .BMP"
                      action
                      list-type="picture-card"
                      :on-change="imgPreview"
                      :auto-upload="false"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>-->
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
            </el-tabs>
          </el-dialog>
        </div>
      </div>
    </div>

    <el-dialog
      title="修改类目"
      :visible.sync="drawer"
      direction="btt"
      :before-close="handleClose"
      width="50%"
    >
      <el-table :data="details" border highlight-current-row ref="multipleTable">
        <el-table-column prop="goodsId" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="hfName" label="类目名称">
          <template slot-scope="scope">
            <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.hfName"></el-input>
            <span v-show="!show">{{scope.row.hfName}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="创建时间">
          <template slot-scope="scope">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" width="100" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="show =true">编辑</el-button>
            <el-button @click="modification(scope.row)" type="text" size="small">提交</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- ---------------------------------------图片--------------------------------------------- -->
      <el-upload
        list-type="picture-card"
        ref="upload"
        action
        multiple
        :auto-upload="false"
        :limit="20"
        :file-list="fileList"
        :on-change="imgUpload"
        on-error="error"
      >
        <el-button size="mini" type="primary">点击上传</el-button>
        <!-- <div slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import api from '@/service/category.js';
import servicegoods from '@/service/goods.js';
import axios from 'axios';
export default {
  data() {
    return {
      inquire: {
        name: '', // 商品名称
        level: '', // 类目名称
      },
      details: [], // 类目
      fileList: [], // 图片
      show: false,
      drawer: false,
      // 判断一级目录选择的东西控制2 3 目录显示隐藏
      controlCatalogue: '0',
      // 添加一级目录 绑定的参数
      form: {
        levelId: '0', // 类目级别, 顶层类目的类目级别是0, 紧跟顶层类目的类目级别是1,
        parentCategoryId: '-1', // 上级类目id, 如果顶级类目, 上级类目ID, 设置为-1
        requestId: '123', // 请求id, 发起请求的随机数, 用来判断请求是否重复, 一般使用UUID
        timestamp: '11', // 发起请求的当前时间, 时间格式:20181023T081324Z
        token: '123', // 登录成功后返回的token
        userId: '1', // 登录的用户id
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
        userId: '1', // 登录的用户id
      },
      // 添加三级目录 绑定的参数
      form2: {
        levelId: '2', // 类目级别, 顶层类目的类目级别是0, 紧跟顶层类目的类目级别是1,
        levelId1: '', // 类目级别, 顶层类目的类目级别是0, 紧跟顶层类目的类目级别是1,
        parentCategoryId: '', // 上级类目id, 如果顶级类目, 上级类目ID, 设置为-1
        requestId: '111', // 请求id, 发起请求的随机数, 用来判断请求是否重复, 一般使用UUID
        timestamp: '1111', // 发起请求的当前时间, 时间格式:20181023T081324Z
        token: '123', // 登录成功后返回的token
        userId: '1', // 登录的用户id
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
          label: '一级目录',
        },
        {
          value: '1',
          label: '二级目录',
        },
        {
          value: '2',
          label: '三级目录',
        },
      ],
      radio: '1',
      dialogVisible: false,
      input: '',
      value1: '',
      index: '',
      tableData: [],
    };
  },
  created() {
    this.categorys();
    this.huoqsuoy();
  },
  methods: {
    handleClose(done) {
      this.fileList = [];
      // this.$confirm('确认关闭？')
      //   .then((_) => {
      done();
      // });
    },
    // ----------------------------------------------图片-----------------------------------------

    imgUpload(file) {
      let fileName = file.name;
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
      if (regex.test(fileName.toLowerCase())) {
        this.picUrl = URL.createObjectURL(file.raw);
        this.uploadFile(file);
      } else {
        this.$message.error('请选择图片文件');
      }
    },
    uploadFile(file) {
      let fd = new FormData();
      fd.append('fileInfo', file.raw);
      fd.append('catrgoryId', this.details[0].id);
      axios.post('/api/api/product/product/updateCategory', fd).then((res) => {
        // this.acquire();
      });
    },
    // // 文件列表移除文件时的钩子
    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    //   var num = file.url.replace(/[^0-9]/ig, '');
    //   console.log('num', num);
    //   serviceProduct.deleteProductPictrue(num, this.productId, (res) => {
    //     console.log('删除成功');
    //   });
    // },
    // --------------------------------------------------上---------------------------------------
    sou: function() {
      this.inquire.name = '';
      this.inquire.level = '';
      this.huoqsuoy();
    },
    seeAbout() {
      if (this.inquire.level === '0') {
        console.log('0');
        return;
      }
      console.log(this.inquire);
      api.getCategoryByInfo(this.inquire, (res) => {
        this.tableData = res.data.data;
        console.log(res);
      });
    },
    // 删除单个商品
    deletesingle: function(index, row) {
      // console.log(row)
      this.$confirm('确认删除吗？', '提示', {}).then(async () => {
        api.deleteCategory(row.id).then((res) => {
          this.huoqsuoy();
          this.tableData.splice(index, 1);
          // this.quGoods()
        });
      });
    },
    onSubmit() {
      console.log('submit!');
    },
    // 一级 下拉触发事件
    categshijan(e) {
      this.controlCatalogue = e;
    },
    // 二级 下拉触发事件
    twocategshijan(e) {
      this.form1.parentCategoryId = e;
      this.$http
        .get('/api/api/product/product/category?parentCategoryId=' + e)
        .then((res) => {
          this.tiwoCatalogues = res.data.data;
          // console.log('类目', this.onecatalogues)
        });
    },
    // 三级 下拉触发事件
    threecategshijan(e) {
      console.log(e);
      this.form2.parentCategoryId = e;
      this.$http
        .get('/api/api/product/product/category?parentCategoryId=' + e)
        .then((res) => {
          this.tiwoCatalogues = res.data.data;
          // console.log('类目', this.onecatalogues)
        });
    },
    // 重置
    reset() {
      this.value1 = '';
      this.input = '';
    },
    // 添加类目
    change() {
      if (this.controlCatalogue === '0') {
        this.time();
        this.form.requestId = Date.now();
        api.typeAddCategory(this.form, this.category, (res) => {
          this.dialogVisible = true;
          this.huoqsuoy();
          this.$message({
            showClose: true,
            message: '恭喜你，添加一级分类成功',
            type: 'success',
          });
        });
      } else if (this.controlCatalogue === '1') {
        this.time();
        this.form1.requestId = Date.now();
        api.typeAddCategory(this.form1, this.category, (res) => {
          this.dialogVisible = true;
          this.huoqsuoy();
          this.$message({
            showClose: true,
            message: '恭喜你，添加二级分类成功',
            type: 'success',
          });
        });
      } else if (this.controlCatalogue === '2') {
        this.time();
        this.form2.requestId = Date.now();
        api.typeAddCategory(this.form2, this.category, (res) => {
          this.dialogVisible = true;
          this.huoqsuoy();
          this.$message({
            showClose: true,
            message: '恭喜你，添加三级分类成功',
            type: 'success',
          });
        });
      } else {
        this.$message('选择分类有错误');
      }
    },
    // 获取一级类目
    categorys() {
      this.$http.get('/api/api/product/product/category').then((res) => {
        this.onecatalogues = res.data.data;
        // console.log('类目', this.onecatalogues)
      });
    },
    // 获取所有类目
    huoqsuoy() {
      api.getCatagery((res) => {
        console.log('类目', res);
        this.tableData = res.data.data;
      });

      // this.$http
      //   .get('/api/api/product/product/findAllCategory')
      //   .then((res) => {
      //     this.tableData = res.data.data;
      //     // console.log('类目', this.onecatalogues)
      //   });
      // // ['catch'](function (error) {
      // //   alert(error);
      // // });
    },
    handleClick(row) {
      console.log(row);
    },

    handleClicks(row) {
      console.log(row);
      this.details = [];
      this.drawer = true;
      this.details.push(row);
      if (row.fileId !== null) {
        servicegoods.getFileFileId(row.fileId, (res) => {
          this.fileList.push({ url: res.config.url });
        });
      }
    },

    modification(row) {
      console.log(row);
      let userId = JSON.parse(window.sessionStorage.userInfor);
      api.updateCategory(row, userId.id, (res) => {
        console.log('类目', res);
        // this.tableData = res.data.data;
        this.$message({
          message: '提交成功',
          type: 'success',
        });
      });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    time() {
      var myDate = new Date();

      // 获取当前年
      var year = myDate.getFullYear();

      // 获取当前月
      var month = myDate.getMonth() + 1;
      // 获取当前日
      var date = myDate.getDate();
      var h = myDate.getHours(); // 获取当前小时数(0-23)
      var m = myDate.getMinutes(); // 获取当前分钟数(0-59)
      var s = myDate.getSeconds();
      // 获取当前时间
      var now = year + '-' + month + '-' + date + ' ' + h + ':' + m + ':' + s;
      this.form.timestamp = now;
      this.form1.timestamp = now;
      this.form2.timestamp = now;
      // console.log(this.timestamp)
    },
  },
};
</script>

<style scoped lang="less">
.el-select {
  margin-bottom: 15px;
}
.search-card {
  // margin: 0 5px 5px 5px;
  margin-bottom: 25px;
}
// .el-button {
//   padding: 12px 46px;
// }
.el-button[data-v-19959a27] {
  padding: 0;
}
</style>
