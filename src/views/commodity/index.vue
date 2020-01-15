/* eslint-disable vue/no-dupe-keys */
<template>
  <div style="padding-top: 47px;padding-right: 26px;padding-left: 26px;background:#F0F1F6 ;">
    <div class="handle-box" style="background: #fff;overflow: auto;">
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;font-size: 15px;">
        <el-form :inline="true">
          <div
            style="display: flex;align-items: center;border-bottom: 1px solid #E5E5E5;font-size: 16px;color: #666666;"
          >
            <div
            @click="qihuanquanbu"
            class="shang"
              :class="qihuans=='0'?'active1':''"
              style="margin-left: 22px;text-align: center;;"
            >全部商品（{{queryGoods}}）</div>
            <div class="shang" @click="qihuanchus" :class="qihuans=='1'?'active1':''" style="margin-left: 80px;margin-right: 81px;">出售中（{{chushozhong}}）</div>
            <div class="shang" @click="qihuankuch" :class="qihuans=='2'?'active1':''" >库存（{{kuc}}）</div>
          </div>
          <div style="padding:25px 0 24px  44px;">
            <el-form-item style="margin-bottom:24px;margin-left: 5px;" label>
              <el-form-item style="margin-bottom:50px;" label>
                <div>物品名称</div>
              </el-form-item>
              <input
              v-model="inquire.goodsName"
                type="text"
                style="box-shadow:0px 2px 137px 1px rgba(107,107,107,0.11);
              width:257px;height:45px;border-radius:6px;outline: none;border:1px solid #EBEDF0;border-top:0.8px solid #EBEDF0;
              border-bottom:1.5px solid #EBEDF0; padding-left: 14px;"
                placeholder="请输入物品名称 "
              />
            </el-form-item>

            <el-form-item style="margin-bottom:24px;margin-left: 5px;" label>
              <el-form-item style="margin-bottom:50px;" label>
                <div style>物品分类</div>
              </el-form-item>
               <el-input v-model="inquire.productCategoryName" placeholder="请输入要查询的类目名称" autocomplete="off"></el-input>
            </el-form-item>
            <br />
            <div style="float: right;margin-right: 260px;">
              <el-button
                type="primary"
                @click="seeAbout"
                :loading="addLoading"
                class="chaxun"
                style="background: #A6A3FB;border: none;"
              >查询</el-button>
              <el-button
                class="chaxun"
                type="primary"
                @click="sou"
                :loading="addLoading"
                style="border:1px solid #EBEDF0;color: #666666; background: #fff;"
              >重置</el-button>
              <br />
              <el-button style="visibility: hidden;"></el-button>
            </div>
          </div>
        </el-form>
      </el-col>
    </div>
    <!--添加类目-->
    <el-dialog title="添加类目" :visible.sync="mu" :close-on-click-modal="false">
      <el-form :model="leimu" ref="leimuForm" :inline="true">
        <el-form-item label prop="category">
          <div style="display: flex;align-items: center;">
            <div style="width: 167px;font-weight: bold;">添加一级分类:</div>
            <el-input v-model="leimu.category" auto-complete="off" placeholder="输入一级分类名称"></el-input>

            <el-button type="primary" @click="addleimu" style="margin-left: 10px;">提交</el-button>
          </div>
        </el-form-item>
      </el-form>
      <div style="height: 1px;border-top:1px solid #000000;margin-bottom: 20px;"></div>
      <el-form :model="leimu" ref="leimuForm1" :inline="true">
        <el-form-item label prop="category">
          <div style="display: flex;align-items: center;">
            <div style="width: 140px;font-weight: bold;">添加二级分类:</div>
            <el-input v-model="leimu1.category" auto-complete="off" placeholder="输入二级分类名称"></el-input>
            <!-- <el-button type="primary" @click="addleimu" style="margin-left: 10px;">提交</el-button> -->
          </div>
        </el-form-item>
        <el-form-item label="选择对应的一级分类:" prop="category">
          <el-select v-model="values1" placeholder="请选择" @change="checkMulist1">
            <el-option
              v-for="(item, index) in leiMu"
              :key="index"
              :label="item.hfName"
              :value="item.hfName"
            ></el-option>
          </el-select>
          <el-button type="primary" @click="addleimu1" style="margin-left: 10px;">提交</el-button>
        </el-form-item>
      </el-form>

      <div style="height: 1px;border-top:1px solid #000000;margin-bottom: 20px;"></div>
      <el-form :model="leimu" label-width="80px" ref="leimuForm2" :inline="true">
        <el-form-item label prop="category" label-width="100">
          <div style="display: flex;align-items: center;">
            <div style="width: 140px;font-weight: bold;">添加三级分类:</div>
            <el-input v-model="leimu3.category" auto-complete="off" placeholder="输入三级分类名称"></el-input>
            <!-- <el-button type="primary" @click="addleimu" style="margin-left: 10px;">提交</el-button> -->
          </div>
        </el-form-item>
        <el-form-item label="选择对应的一级分类:" prop="category" label-width="100">
          <el-select v-model="values2" placeholder="请选择" @change="checkMulist2">
            <el-option
              v-for="(item, index) in leiMu"
              :key="index"
              :label="item.hfName"
              :value="item.hfName"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择对应的二级分类:" prop="category" label-width="100">
          <el-select v-model="values3" placeholder="请选择" @change="checkMulist3">
            <el-option
              v-for="(item, index) in lenmdata2"
              :key="index"
              :label="item.hfName"
              :value="item.hfName"
            ></el-option>
          </el-select>
          <el-button type="primary" @click="addleimu2" style="margin-left: 10px;">提交</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="orgFormVisible = false">取消</el-button>
      </div>
    </el-dialog>

    <div style="padding-top: 23px;background: #fff;margin-top: 18px;">
      <div style="margin-bottom:45px;">
        <!-- <el-button
          class="butttj"
          style="color: #fff;outline:none; border-radius:3px;float:right;margin-right: 40px;
          background: #fff;border:1px solid #EBEDF0;color: #666;"
          size="mini"
          round
        >批量下架</el-button>
        <el-button
          class="butttj"
          style="color: #fff;outline:none; border-radius:3px;float:right;margin-right: 12px;
         background: #fff;border:1px solid #EBEDF0;;color: #666;"
          size="mini"
          round
        >批量上架</el-button>-->
        <el-button
          class="butttj"
          style="color: #fff;outline:none; border-radius:3px;float:right;
          background: #fff;border: none;color: #666;border:1px solid #EBEDF0;"
          @click="deletegood"
          size="mini"
          round
        >批量删除</el-button>
        <el-button
          class="butttj"
          style="color: #fff;outline:none; border-radius:5px;float:right;
          background: #fff;border:1px solid #EBEDF0;color: #666;"
          @click="addMu"
          size="mini"
          round
        >批量分类</el-button>
        <router-link to="/product">
          <el-button
            class="butttj"
            style="color: #fff;outline:none; border-radius:5px;float:right;background: #A6A3FB;
          border: none;"
            size="mini"
            round
          >+ 添加商品</el-button>
        </router-link>
      </div>

      <br />
      <div style="margin-left: 20px;">
        已选4件商品
        <span style="margin-left: 20px;color: #FF318A;font-weight: bold;"></span>
      </div>
      <br />

      <el-table
        :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)"
        :current-page="currpage"
        :page-size="pagesize"
        :total="tableData.length"
        :header-cell-style="{background:'#F5F6FA',color:'#666666'}"
        size="mini"
        highlight-current-row
        border
        class="el-tb-edit"
        style="font-size: 16px;"
        ref="multipleTable"
        tooltip-effect="dark"
      >
        <el-table-column type="selection" label="序号" width="59px" align="center"></el-table-column>

        <el-table-column prop="id" label="商品编号" align="center"></el-table-column>

        <el-table-column prop="goodsDesc" label="商品描述" align="center"></el-table-column>

        <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <span
              class="el"
              @click="biangui(scope.row)"
              style="color:#A6A3FB;font-family:ms sans serif;cursor: pointer;"
            >编辑</span>
            <span
              class="el"
              @click="upFrame(scope.row)"
              style="margin-left: 16px;margin-right: 16px;color:#FFCE26;cursor: pointer;"
            >{{ scope.row.isDeleted==1?'下架':'上架'}}</span>
            <span
              class="el"
              style="color:#FF318A;cursor: pointer;"
              @click="deletesingle(index,scope.row)"
            >删除</span>
          </template>
        </el-table-column>
      </el-table>

      <div style="background: #fff;height: 100px;margin-top:46px ;" id="fen">
        <el-pagination
          style="bottom: 0;float: right;margin-right: 50px;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
          fixed
        ></el-pagination>
      </div>
    </div>

    <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form :inline="true" :model="addForm" label-width="80px" ref="addForm">
        <el-form-item label="商家昵称" prop="lastModifier">
          <el-input v-model="addForm.lastModifier" auto-complete="off"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="商品名称" prop="hfName">
          <el-input v-model="addForm.hfName" auto-complete="off"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="商品分类" prop="value">
          <el-select
            v-model="addForm.value"
            placeholder="请选择"
            @change="changeQuentitySubject(index)"
          >
            <el-option
              v-for="(item,index) in leiMu"
              :key="index"
              :label="item.hfName"
              :value="item.hfName"
            ></el-option>
          </el-select>
        </el-form-item>
        <br />
        <el-form-item label="id" prop="id">
          <el-input :disabled="true" v-model="addForm.id" auto-complete="off"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="商家id" prop="bossId">
          <el-input v-model="addForm.bossId" auto-complete="off"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="品牌id" prop="brandId">
          <el-input v-model="addForm.brandId" auto-complete="off"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="商品描述" prop="productDesc">
          <el-input
            v-model="addForm.productDesc"
            auto-complete="off"
            type="textarea"
            style="width:550px;"
            resize="none"
          ></el-input>
        </el-form-item>
        <br />
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取消</el-button>
        <el-button type="primary">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from '@/api/commodity_api.js'
import qs from 'qs'
export default {
  name: 'commodity',
  data () {
    return {
      chushozhong: '0', // 出售中总数
      kuc: '0', // 库存总数
      qihuans: '0',
      // 商品数量
      queryGoods: '0',
      checked: true,
      pagesize: 12,
      currpage: 1,
      options2: [
        {
          label: '江苏',
          cities: []
        },
        {
          label: '浙江',
          cities: []
        }
      ],
      // 查询绑定的值
      inquire: {
        goodsName: '', // 商品名称
        productCategoryName: '' // 类目名称
      },
      // props: {
      //   value: 'hfName',
      //   children: 'hfName'
      // },
      values3: '',
      lenmdata2: '',
      leiMuId1: '',
      values1: '',
      values2: '',
      leiMuId: '',
      leiMu: {},
      leimu: {
        category: '',
        parentCategoryId: '-1',
        levelId: '0',
        token: '11238',
        userId: '12', // 用户id
        requestId: '111221', // 发起请求的随机数, 用来判断请求是否重复
        timestamp: '2123132'
      },
      leimu1: {
        category: '',
        parentCategoryId: '-1',
        levelId: '1'
      },
      leimu2: {
        category: '',
        parentCategoryId: '-1',
        levelId: '1'
      },
      leimu3: {
        category: '',
        parentCategoryId: '-1',
        levelId: '2'
      },
      mu: false,
      addForm: {
        bossId: '1', // 商家id
        brandId: '', // 品牌id
        categoryId: '', // 类目
        id: '1', // 商品id
        hfName: '', // 商品名称
        lastModifier: '', // 商家昵称
        productDesc: '', // 产品描述 ''
        requestId: '', // 发起请求的随机数, 用来判断请求是否重复
        timestamp: '', // 当前时间
        token: '11238',
        userId: '12' // 用户id
      },
      index: 0,
      addFormVisible: false,
      // leiMu: '',
      value1: '',
      souhfName: '',
      tableData: [],
      // leiMuId: '',
      selectList: [],
      addLoading: false
    }
  },
  created () {
    this.getcoommo()
    this.getcategory()
    this.quGoods()
    this.quGoods1()
    this.quGoods2()
  },
  methods: {
    // 出售中
    qihuanchus () {
      this.qihuans = '1'
      this.$http
        .get('/api/goods/selectFrames?frames=1')
        .then(res => {
          this.tableData = res.data.data
        })
        .catch(error => {
          console.log(error)
          this.$message(error + '失败')
        })
    },
    // 查询
    seeAbout  () {
      api.queryList(this.inquire)
        .then(res => {
          this.tableData = res.data.data
        })
        .catch(error => {
          console.log(error)
          this.$message(error + '失败')
        })
    },
    // 库存切换
    qihuankuch () {
      this.qihuans = '2'
      this.$http
        .get('/api/goods/selectFrames?frames=0')
        .then(res => {
          this.tableData = res.data.data
        })
        .catch(error => {
          this.$message(error + '失败')
        })
    },
    // 全部切换
    qihuanquanbu () {
      this.qihuans = '0'
      this.getcoommo()
    },
    // 上下架
    upFrame (row) {
      console.log(row.frames)
      console.log(1111111)
      if (row.isDeleted === 1) {
        this.$http
          .get('/api/goods/racking', {
            params: {
              frames: 0,
              goodsId: row.id
            },
            paramsSerializer: params => {
              return qs.stringify(params, { indices: false })
            }
          })
          .then(res => {
            this.getcoommo()
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
          .get('/api/goods/racking', {
            params: {
              frames: 1,
              goodsId: row.id
            },
            paramsSerializer: params => {
              return qs.stringify(params, { indices: false })
            }
          })
          .then(res => {
            this.getcoommo()
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
    // 获取物品列表
    async getcoommo () {
      api
        .getProductList()
        .then(res => {
          this.tableData = res.data.data
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // 获取物品总数
    quGoods () {
      api
        .queryGoods()
        .then(res => {
          this.queryGoods = res.data.data
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // 获取物品库存总数
    quGoods1 () {
      this.$http
        .get('/api/goods/selectQ?frames=0')
        .then(res => {
          this.kuc = res.data.data
        })
    },
    // 获取出售中物品总数
    quGoods2 () {
      this.$http
        .get('/api/goods/selectQ?frames=1')
        .then(res => {
          this.chushozhong = res.data.data
        })
    },
    // 添加商品
    // async postcoommo () {
    //   this.$refs.addForm.validate(valid => {
    //     console.log(valid)
    //     if (valid) {
    //       this.$confirm('确认提交吗？', '提示', {}).then(() => {
    //         console.log(this.addForm)
    //         // 拷贝
    //         let param = Object.assign({}, this.addForm)
    //         api.addProduct(param).then(res => {
    //           console.log('ssss', res)
    //           this.addLoading = false
    //           this.listProduct()
    //           this.$message({
    //             message: '提交成功',
    //             type: 'success'
    //           })
    //           this.addForm.bossId = ''
    //           this.addForm.brandId = ''
    //           this.addForm.hfName = ''
    //           this.addForm.id = parseInt(this.addForm.id) + 1
    //           this.addForm.lastModifier = ''
    //           this.addForm.productDesc = ''
    //           this.addForm.requestId = ''
    //         })
    //       })
    //     }
    //   })
    // },
    // 获取类目
    async getcategory () {
      api
        .category()
        .then(res => {
          console.log(res)
          this.leiMu = res.data.data
          this.leimu.levelId = res.data.length
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // 删除单个商品
    deletesingle: function (index, row) {
      // console.log(row)
      this.$confirm('确认删除吗？', '提示', {}).then(async () => {
        api
          .deleteGood(row.id)
          .then(res => {
            console.log(res)
            this.tableData.splice(index, 1)
            // this.quGoods()
          })
          .catch(err => {
            console.log(err)
          })
      })
    },

    // 添加类目
    addleimu: function () {
      var _this = this
      _this.$refs.leimuForm.validate(valid => {
        if (valid) {
          _this.$confirm('确认提交吗？', '提示', {}).then(() => {
            _this.addLoading = true
            let param = Object.assign({}, _this.leimu)
            console.log(param)
            _this
              .$http({
                method: 'post',
                url: '/api/product/addCategory',
                params: param
              })
              .then(res => {
                _this.mu = false
                _this.addLoading = false
                console.log('添加类目', res)
                _this.$message({
                  message: '提交成功',
                  type: 'success'
                })

                _this.$refs['leimuForm'].resetFields()

                // this.getResult(1);
              })
          })
        }
      })
    },
    // 添加类目二级
    addleimu1: function () {
      console.log(13232)
      var _this = this
      _this.$refs.leimuForm1.validate(valid => {
        if (valid) {
          _this.$confirm('确认提交吗？', '提示', {}).then(() => {
            _this.addLoading = true
            let param = Object.assign({}, _this.leimu1)
            console.log(param)
            _this
              .$http({
                method: 'post',
                url: '/api/product/addCategory',
                params: param
              })
              .then(res => {
                _this.mu = false
                _this.addLoading = false
                console.log('添加类目', res)
                _this.$message({
                  message: '提交成功',
                  type: 'success'
                })

                _this.$refs['leimuForm'].resetFields()

                // this.getResult(1);
              })
          })
        }
      })
    },
    // 添加类目三级
    addleimu2: function () {
      console.log(13232)
      var _this = this
      _this.$refs.leimuForm1.validate(valid => {
        if (valid) {
          _this.$confirm('确认提交吗？', '提示', {}).then(() => {
            _this.addLoading = true
            let param = Object.assign({}, _this.leimu3)
            console.log(param)
            _this
              .$http({
                method: 'post',
                url: '/api/product/addCategory',
                params: param
              })
              .then(res => {
                _this.mu = false
                _this.addLoading = false
                console.log('添加类目', res)
                _this.$message({
                  message: '提交成功',
                  type: 'success'
                })

                _this.$refs['leimuForm'].resetFields()

                // this.getResult(1);
              })
          })
        }
      })
    },

    // 当前时间
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
      var now =
        year +
        '-' +
        this.conver(month) +
        '-' +
        this.conver(date) +
        ' ' +
        this.conver(h) +
        ':' +
        this.conver(m) +
        ':' +
        this.conver(s)
      this.addForm.timestamp = now
      this.addForm.requestId = now + 100
      // console.log(this.timestamp)
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currpage = val
    },

    addMu: function (row) {
      this.mu = true
    },
    // 编辑商品
    biangui: function (row) {
      var arr = JSON.stringify(row)
      this.$router.push({
        path: '/detail',
        query: {
          row: arr
        }
      })
    },

    selectChange: function (val) {
      this.selectList = val
    },
    // 批量删除商品
    deletegood: function (row) {
      let delarr = []
      const length = this.selectList.length
      for (let i = 0; i < length; i++) {
        delarr.push(this.selectList[i].id)
      }
      var _this = this
      this.$confirm('确认提交吗？', '提示', {}).then(() => {
        api.deleteProduct(delarr.toString()).then(response => {
          if (response.data.status === 200) {
            _this.listProduct()
          }
        })
      })
    },

    sou: function () {
      this.inquire.goodsName = ''
      this.inquire.productCategoryName = ''
    },
    // 查询类目
    checkType: function (val) {
      var _this = this
      api.category().then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            _this.leiMu = response.data.data
          }
        }
      })
    },
    changeQuentitySubject: function () {
      let obj = {}
      obj = this.leiMu.find(item => {
        // 这里的selectList就是上面遍历的数据源
        // 筛选出匹配数据
        if (item.hfName === this.addForm.value) {
          return item
        }
      })
      this.addForm.categoryId = obj.id
    },

    // 选择一级分类
    checkMulist2: function () {
      let obj = {}
      obj = this.leiMu.find(item => {
        // 这里的selectList就是上面遍历的数据源
        // 筛选出匹配数据
        if (item.hfName === this.values2) {
          return item
        }
      })

      this.leimu2.parentCategoryId = obj.id
      api.categoryTwo(this.leimu2.parentCategoryId).then(response => {
        this.lenmdata2 = response.data.data
        // if (response.status == 200) {
        //   if (response.data.status === 200) {

        //     _this.leiMu = response.data.data;
        //   }
        // }
      })
    },
    // 通过类目查询商品列表
    checkMulist: function () {
      let obj = {}
      obj = this.leiMu.find(item => {
        // 这里的selectList就是上面遍历的数据源
        // 筛选出匹配数据
        if (item.hfName === this.value1) {
          return item
        }
      })
      // leimu1: {
      //   values1: '',
      //   parentCategoryId: "-1",
      //   levelId: '1'
      // },
      this.leimu1.parentCategoryId = obj.id
      console.log(this.leiMuId)
    },
    // 选择一级分类
    checkMulist1: function () {
      let obj = {}
      obj = this.leiMu.find(item => {
        // 这里的selectList就是上面遍历的数据源
        // 筛选出匹配数据
        if (item.hfName === this.values1) {
          return item
        }
      })

      this.leimu1.parentCategoryId = obj.id
      // console.log(this.leiMuId1)
    },
    // 选择二级分类
    checkMulist3: function () {
      let obj = {}
      obj = this.lenmdata2.find(item => {
        // 这里的selectList就是上面遍历的数据源
        // 筛选出匹配数据
        console.log(this.values3)
        if (item.hfName === this.values3) {
          return item
        }
      })

      this.leimu3.parentCategoryId = obj.id
      // console.log(this.leimu3.parentCategoryId)
    },
    conver: function (s) {
      return s < 10 ? '0' + s : s
    }
  }
}
</script>

<style>
#fen .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #a6a3fb;
  color: #fff;
}
.active1 {
  color: #a3a0fb;
  border-bottom: 4px solid #a3a0fb;
}

.shang {
  padding: 14px 2px;
}

.el {
  font-size: 20px;
  color: #666666;
}

div {
  font-size: 16px;
}

/* #ewdwe:focus-within{
          outline:1px solid #A3A0FB;
      } */
input::-webkit-input-placeholder {
  color: #d5d5d5;
}

input::-moz-input-placeholder {
  color: #d5d5d5;
}

input::-ms-input-placeholder {
  color: #d5d5d5;
  font-size: 12px;
}
.butttj {
  width: 140px;
  height: 45px;
  font-size: 20px;
}
.chaxun {
  width: 130px;
  height: 48px;
}
</style>
