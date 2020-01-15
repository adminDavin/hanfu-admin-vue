
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品基本信息</span>
      </div>
      <el-container>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="280px"
          class="demo-ruleForm"
        >
          <el-form-item label="商品标题" prop="goodName">
            <el-input style="width:100%" v-model="ruleForm.hfName "></el-input>
          </el-form-item>
          <!-- <el-form-item style="width:100%" label="商品编号" prop="goodName">
            <el-input style="width:40%" v-model="ruleForm.goodName"></el-input>
          </el-form-item>-->
          <el-form-item style="width:100%" label="商品属性" prop="inventory">
            <!-- <el-input style="width:40%" v-model="ruleForm.inventory"></el-input>
            <span>件</span>
            <span style="margin: 6px;width:40%">商品属性</span>-->
            <el-select style="width:30%" v-model="ruleForm1.member" placeholder="请选择商品属性">
              <el-option label="会员" value="1"></el-option>
              <el-option label="非会员" value="0"></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="提货方式" prop="goodsDesc ">
            <el-radio @change="change" style="margin-left: 50px;" v-model="radiol" label="3">快递</el-radio>
            <el-radio @change="change" v-model="radiol" label="4">自取</el-radio>
          </el-form-item>-->
          <!-- <el-form-item v-if="radiol == 4" label="核销员" prop="region">
            <el-select @change="pullverifier" v-model="ruleForm.verifier" placeholder="请输入核销员姓名">
              <el-option
                v-for="(item, index) in verifier"
                :key="index"
                :label="item.realName"
                :value="item.realName"
                style="height: 45px;"
              ></el-option>
            </el-select>
          </el-form-item>-->
          <!-- <el-form-item v-if="radiol == 3" label="核销员" prop="region">
            <el-select @change="pullverifier" v-model="ruleForm.verifier" placeholder="请输入核销员姓名">
              <el-option
                v-for="item in verifier"
                :key="item.id"
                :label="item.realName"
                :value="item.id"
                style="height: 45px;"
              ></el-option>
            </el-select>
          </el-form-item>-->
          <!-- <el-form-item label="快递运费" prop="region"> -->
          <!-- <el-form-item v-if="radiol == 3" label="运费模板" prop="region">
            <el-select v-model="ruleForm.yunfen" placeholder="请选择运费模板">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>-->
          <!-- </el-form-item> -->
          <el-form-item label="商品类目" prop="categoryId">
            <el-select
              @change="twocategshijan"
              style="width:33.3%"
              v-model="ruleForm.categoryId1"
              placeholder="请选择一级类目"
            >
              <el-option
                v-for="item in leiMu"
                :key="item.id"
                :label="item.hfName"
                :value="item.id"
                style="height: 45px;"
              ></el-option>
            </el-select>
            <el-select
              @change="threecategshijan"
              style="width:33.3%"
              v-model="ruleForm.region"
              placeholder="请选择二级类目"
            >
              <el-option
                v-for="(item, index) in erjimulu"
                :key="index"
                :label="item.hfName"
                :value="item.id"
                style="height: 45px;"
              ></el-option>
            </el-select>
            <el-select
              @change="threecateg"
              style="width:33.3%"
              v-model="ruleForm.freight"
              placeholder="请选择三级类目"
            >
              <el-option
                v-for="(item, index) in tiwoCatalogues"
                :key="index"
                :label="item.hfName"
                :value="item.id"
                style="height: 45px;"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="width:60%" label="商品描述" prop="name">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 6}"
              placeholder="请输入商品描述"
              v-model="ruleForm.productDesc"
            ></el-input>
          </el-form-item>

          <div class="reduceForm">
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
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="ruleForm.fileInfo " alt />
              </el-dialog>
            </el-upload>
          </div>
          <el-form-item label prop="brandId">
            <el-button style="width:25%; margin-left: 5px;" type="primary" @click="NewGoods">+新建商品</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="commoditytable" border>
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="规格名称">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.tab2"></el-input>
              <span v-show="!scope.row.show">{{scope.row.tab2}}</span>
            </template>
          </el-table-column>
          <el-table-column label="默认值">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.tab3"></el-input>
              <span v-show="!scope.row.show">{{scope.row.tab3}}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column label="规格名称">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.tab4"></el-input>
              <span v-show="!scope.row.show">{{scope.row.tab4}}</span>
            </template>
          </el-table-column>-->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="scope.row.show =true">编辑</el-button>
              <el-button @click="save(scope)">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-container>
    </el-card>
    <!-- ---------------------------------------------------------------------------------------------------------------------------------------------------- -->
    <el-card class="box-card">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="280px"
        class="demo-ruleForm"
      >
        <el-form-item label="物品描述" prop="goodsDesc ">
          <el-input style="width:100%" v-model="ruleForm1.goodsDesc  "></el-input>
        </el-form-item>
        <el-form-item style="width:100%" label="物品名称" prop="goodName ">
          <el-input style="width:50%" v-model="ruleForm1.goodName  "></el-input>
        </el-form-item>
        <el-form-item label="提货方式" prop="goodsDesc ">
          <el-radio @change="change" style="margin-left: 50px;" v-model="radiol" label="3">快递</el-radio>
          <el-radio @change="change" v-model="radiol" label="4">自取</el-radio>
        </el-form-item>
        <el-form-item v-if="radiol == 4" label="核销员" prop="region">
          <el-select @change="pullverifier" v-model="ruleForm.verifier" placeholder="请输入核销员姓名">
            <el-option
              v-for="(item, index) in verifier"
              :key="index"
              :label="item.realName"
              :value="item.realName"
              style="height: 45px;"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="radiol == 3" label="核销员" prop="region">
          <el-select @change="pullverifier" v-model="ruleForm.verifier" placeholder="请输入核销员姓名">
            <el-option
              v-for="item in verifier"
              :key="item.id"
              :label="item.realName"
              :value="item.id"
              style="height: 45px;"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="快递运费" prop="region"> -->
        <el-form-item v-if="radiol == 3" label="运费模板" prop="region">
          <el-select v-model="ruleForm.yunfen" placeholder="请选择运费模板">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <div class="reduceForm">
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
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="ruleForm.fileInfo " alt />
            </el-dialog>
          </el-upload>
        </div>
        <el-form-item label prop="brandId">
          <el-button style="width:25%; margin-left: 5px;" type="primary" @click="submitForm">+新建物品</el-button>
          <el-button type="success" style="color: #fff;" @click="dialogTableVisible = true">添加物品规格值</el-button>
        </el-form-item>
      </el-form>
      <!-- <el-button  id@click="dialogFormVisible = true" class="add-button">根据下方物品ID设置价格按钮</el-button> -->

      <el-table :data="tabledatas" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="ID">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.id"></el-input>
            <!-- <span v-show="!scope.row.show">{{scope.row}}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="物品名称">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.goodName"></el-input>
            <!-- <span v-show="!show">{{scope.row.goodName}}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="价格">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.sellPrice"></el-input>
            <!-- <span v-show="!show">{{scope.row.sellPrice}}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="划线价">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.linePrice"></el-input>
            <!-- <span v-show="!show">{{scope.row.linePrice}}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="库存">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.quantity"></el-input>
            <!-- <span v-show="!show">{{scope.row.quantity}}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <!-- <el-button @click="show =true">编辑</el-button> -->
            <el-button @click="submitPrice(scope)">提交价格</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 弹窗 -->
      <el-dialog title="添加规格值" :visible.sync="dialogTableVisible">
          <el-table :data="tabledatas1" border>
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="商品规格ID">
              <template slot-scope="scope">
                <span v-show="!scope.row.show">{{scope.row.id}}</span>
              </template>
            </el-table-column>
            <el-table-column label="规格名称">
              <template slot-scope="scope">
                <span v-show="!scope.row.show">{{scope.row.hfName}}</span>
              </template>
            </el-table-column>
            <el-table-column label="规格值">
              <template slot-scope="scope">
                <el-input placeholder="请输入内容" v-model="scope.row.specValue"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                <el-button @click="additionSpec(scope)">添加</el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-dialog>
    </el-card>
    <div class="button">
      <!-- <el-button @click="submitForm" type="primary">保存</el-button> -->
    </div>
  </div>
</template>

<script>
import api from '@/api/commodity_api.js'
// import { log } from 'util'
export default {
  data () {
    return {
      dialogTableVisible: false,
      fileList: [],
      tianjiayanse: '', // 添加颜色
      tianjiachicun: '', // 添加尺寸
      tiwoCatalogues: [], // 三级目录
      erjimulu: [], // 二级目录
      input: '颜色', // 颜色框 绑定的值
      measure: '尺寸', // 尺寸
      // 添加规格
      AddSize: '',
      // 添加颜色
      AddColor: '',
      // 核销员绑定的值
      verifier: [],
      // 图片上传控件里的
      disabled: false,
      dialogImageUrl: '',
      dialogVisible: false,
      // 其他信息
      radio: 1, // 单选按钮
      radiol: '3', // 单选按钮运费部分
      // 多选择框 添加规格图片
      checked: true,
      checked2: true,
      // 多选择框
      checked3: true,
      // 标签
      modelTags: [], // s码
      // 时间日期表单
      form: {
        date1: ''
      },
      leiMu: {},
      // 添加商品
      ruleForm: {
        freight: '',
        categoryId1: '', // 商品所属的类目双向绑定的*
        yunfen: '',
        categoryId: '', // 商品所属的类目id*
        hfName: '', // 商品名称 *
        id: '', // *
        specName: '', // 规格名称*
        requestId: '112123123', // 发起请求的随机数, 用来判断请求是否重复 0 *
        lastModifier: '1', // 商家名称*
        productDesc: '', // 产品描述*
        productId: '', // 商品id
        token: '11238', // *
        userId: '12', // 用户id*
        // cancelId: '2', // 核销员Id
        fileInfo: [] // 图片路径
      },
      // 添加商品规格
      specification: {
        specValue: '', // 默认值
        productId: '',
        hfName: '', // 规格名称
        requestId: '',
        timestamp: '',
        token: '',
        userId: ''
      },
      // 添加物品规格值
      specGoods: {
        goodsId: '55',
        requestId: '111',
        specValue: '',
        timestamp: '111',
        token: '11',
        userId: '11'
      },
      // 添加物品
      ruleForm1: {
        sellPrice: '', // 价格
        quantity: '', // 库存量
        productId: '13', // 商品id*
        categoryId: '', // 商品所属的类目id*
        cancelId: '', // 核销Id *
        claim: '', // 是否自提 *
        // member: '', // 是否为会员商品 *
        frames: '0', // 上下架*
        goodName: '', // 物品名称*
        goodsDesc: '', // 物品描述*
        // productDesc: '', // 商品描述
        requestId: '123123123', // 请求id, 发起请求的随机数, 用来判断请求是否重
        token: '11238', // 登录成功后返回的token
        userId: '12', // 用户id
        fileInfo1: []
      },

      // 设置价格
      specificationForm: {
        linePrice: '', // 划线价
        quantity: '', // 物品数量
        respDesc: '111', // 库存描述
        // bossId: '1',
        hfGoodsId: '', // 物品ID
        sellPrice: '', // 物品价格
        // productSpecId: '', // 商品规格ID
        requestId: '111', // 发起请求的随机数, 用来判断请求是否重复
        // timestamp: '12231231', // 当前时间
        token: '11238',
        timestamp: '11',
        userId: '12', // 用户id
        username: '12' // 店家名称, 登录修改的用户名称
        // specValue: ['1.1'] // 标签 颜色 // 规格
      },
      value: '',
      // 添加规格
      specificationForm1: {
        specValue: [] // 标签 颜色 // 规格
      },
      // 添加规格
      specificationForm2: {
        specValue: [] // 标签 颜色 // 规格
      },
      ruleForm2: {
        name: '',
        region: '',
        region1: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },

      tabledatas: [
        { tab1: '111', tab2: '2222' },
        { tab1: 'aaa', tab2: 'bbb' }
      ],
      tabledatas1: [
        { tab1: '111', tab2: '2222' },
        { tab1: 'aaa', tab2: 'bbb' }
      ],
      // show: false,
      // 表单数据
      tableData: [
        {
          seen: false,
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          seen: false,
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          seen: false,
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          seen: false,
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        }
        // {
        //   id: '12987122',
        //   name: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   shopId: '10333'
        // }
      ],
      // 顶部表单验证
      rules: {
        hfName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getcategory()
    this.getcoommo()
    this.verifier1()
    this.scope()
    let lists = [
      // { tab1: '1', tab2: '颜色', tab3: '红色' }
      { tab1: '1', tab2: '颜色', tab3: '红色' }
    ]
    lists.forEach(element => {
      element['show'] = false
    })
    this.commoditytable = lists
    this.change()
  },
  methods: {
    // 提交价格
    submitPrice (scope) {
      this.specificationForm.quantity = scope.row.quantity
      this.specificationForm.sellPrice = scope.row.sellPrice
      this.specificationForm.hfGoodsId = scope.row.id
      this.specificationForm.linePrice = scope.row.linePrice
      api.setPrice(this.specificationForm).then(res => {
        this.getcoommo()
      })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 添加物品规格值
    additionSpec (scope) {
      console.log(scope)
      // this.specGoods.goodsId = scope.row.id
      this.specGoods.specValue = scope.row.specValue
      api.additionSpecs(this.specGoods)
        .then(res => {

        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    save (scope) {
      scope.row.show = false
      this.specification.hfName = scope.row.tab2
      this.specification.specValue = scope.row.tab3
      api
        .addSpecify(this.specification)
        .then(res => {
          scope.row.tab3 = ''
          scope.row.tab2 = ''
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    loseFcous (index, row) {
      debugger
      row.seen = false
    },
    cellClick (row, column) {
      debugger
      row.seen = true
    },

    // 设置商品价格
    SetThePrice () {
      this.specificationForm.requestId = Date.now()
      // this.specificationForm.hfGoodsId = this.ruleForm1.productId
      api
        .setPrice(this.specificationForm)
        .then(res => {
          this.dialogFormVisible = false
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    addition () {
      // this.formSpec.specValue = this.$refs.specValue.value + ''
      // this.formSpec.specSize = this.$refs.specSize.value + ''
      // this.tableSpec.push(this.formSpec)
      // this.value1 = ''
      // this.value2 = ''
    },
    handleEdit (e) {
      console.log(e)
    },
    // 获取规格
    huq () {
      this.$http
        .get('/cat/product/category')
        .then(res => {
          this.threecategs = res.data.data
          // console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 添加商品 ruleForm1
    NewGoods () {
      console.log(this.ruleForm.specName)
      this.$confirm('确认提交吗？', '提示', {}).then(() => {
        console.log(this.ruleForm1)
        // 拷贝
        this.ruleForm.requestId = Date.now()
        let param = this.ruleForm
        api
          .tianjianwup(param)
          .then(res => {
            this.ruleForm1.productId = res.data.data.id
            this.specification.productId = res.data.data.id
            api.specifies(res.data.data.id).then(res => {
              console.log('获取规格ID', res)
              this.tabledatas1 = res.data.data
            })
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    clickdelete2 () {
      this.specificationForm2.specValue = ''
    },
    clickdelete () {
      this.ruleForm1.specValue = ''
    },
    onRemove (file) {},
    imgPreview (file) {
      let fileName = file.name
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/
      if (regex.test(fileName.toLowerCase())) {
        this.ruleForm.fileInfo.push(URL.createObjectURL(file.raw))
        this.ruleForm1.fileInfo1.push(URL.createObjectURL(file.raw))
        console.log(file.raw)
        console.log(this.ruleForm.fileInfo)
        // this.uploadFile(file)
      } else {
        this.$message.error('请选择图片文件')
      }
    },
    scope (scope) {
      console.log(scope)
    },
    change (label) {
      console.log(label)
      console.log(11111111)
      this.ruleForm1.claim = this.radiol
    },
    // 获取核销员
    async verifier1 () {
      api
        .verifier()
        .then(res => {
          console.log(res)
          this.verifier = res.data.data.list
          console.log(this.verifier)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // 获取物品列表
    async getcoommo () {
      api
        .getProductList(1)
        .then(res => {
          this.tabledatas = res.data.data
          console.log(this.tabledatas)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // 添加图片

    // 添加颜色事件
    submit () {
      // console.log(this.AddColor)
      this.ruleForm1.specValue.push(this.AddColor)
      this.tianjiayanse = this.AddColor
      // this.AddColor = ''
    },
    // 添加尺寸事件
    submit1 () {
      // console.log(this.AddColor)
      this.ruleForm.specName.push(this.AddSize)
      this.tianjiachicun = this.AddSize
      this.AddSize = ''
    },
    // 图片列表移除图片时的钩子
    handleRemove (file, fileList) {
      // console.log(file, fileList)
    },
    success (err, file, fileList) {
      console.log(err)
    },
    // 图片上传前事件
    handleBeforeUpload (file) {
      console.log(22222)
      this.file = file // 需要传给后台的file文件
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const _base64 = reader.result
        this.imgUrl = _base64 // 将_base64赋值给图片的src，实现图片预览
      }
      return false // 阻止图片继续上传，使得form表单提交时统一上传
    },
    // // 点击图片列表中的放大
    handlePictureCardPreview (file) {
      console.log(1111111)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // handleDownload (file) {
    //   console.log(file)
    // },
    // 标签点击按钮
    handleClose (tag) {
      this.ruleForm1.specValue.splice(this.ruleForm1.specValue.indexOf(tag))
    },
    // 标签点击按钮
    handleClose1 (tag) {
      this.specificationForm2.specValue.splice(
        this.specificationForm2.specValue.indexOf(tag)
      )
    },
    // 获取类目
    async getcategory () {
      api
        .category()
        .then(res => {
          this.leiMu = res.data.data
          // this.leimu.levelId = res.data.length
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // 二级 下拉触发事件
    twocategshijan (e) {
      // console.log(e)
      this.ruleForm.categoryId = e
      this.ruleForm1.categoryId = e
      this.$http
        .get('/cat/product/category?parentCategoryId=' + e)
        .then(res => {
          this.erjimulu = res.data.data
          // console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 三级 下拉触发事件 threecateg
    threecategshijan (e) {
      this.ruleForm.categoryId = e
      this.ruleForm1.categoryId = e
      // console.log(e)
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
    threecateg (e) {
      this.ruleForm.categoryId = e
      this.ruleForm1.categoryId = e
      // console.log(e)
      this.$http
        .get('/cat/product/category?parentCategoryId=' + e)
        .then(res => {
          this.threecategs = res.data.data
          // console.log('类目', this.onecatalogues)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    // 下拉 事件 核销员
    pullverifier (e) {
      // console.log(e)
      this.ruleForm1.cancelId = e
    },
    // 添加物品
    async submitForm () {
      // this.ruleForm1.specValue.push(this.specificationForm2.specValue)
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            console.log(this.ruleForm)
            // 拷贝
            this.ruleForm.requestId = Date.now()
            let param = this.ruleForm1
            api.addProduct(param).then(res => {
              // this.$router.push({ name: 'commodity' })
              this.$message({
                message: '恭喜你，添加成功',
                type: 'success'
              })
            })
          })
        }
      })
    },
    conver: function (s) {
      return s < 10 ? '0' + s : s
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

      var now = year + '-' + month + '-' + date + ' ' + h + ':' + m + ':' + s
      this.ruleForm.timestamp = now
      // 发起请求的随机数, 用来判断请求是否重复
      this.ruleForm.requestId = Date.now()
      // console.log(this.timestamp)

      // specificationForm里的随机数和时间
      this.specificationForm.timestamp = now
    },
    // 添加批量按钮
    resetForm (formName) {
      //  清空form表单
      this.$refs[formName].resetFields()
    },
    changeNum (row) {
      this.editable[row] = true
      this.$set(this.editable, row, true)
    }
  },
  mounted () {}
}
</script>

<style scoped lang="less">
.clearfix:after {
  clear: both;
}
.el-container {
  margin: 25px;
  margin-top: 47px;
  background-color: #fff;
  .basic {
    // width: 1576px;
    // height: 42px;
    background-color: #4565;

    //  border-bottom:  1px solid #E5E5E5;
  }
  .demo-ruleForm {
    width: 920px;
  }
}
.el-form {
  margin: 40px;
}
.kaipi {
  width: 676px;
  height: 100%;
  margin-left: 300px;
  border: 1px solid rgba(46, 45, 45, 0.09);
  padding-left: 30px;
  .el-tag {
    margin-bottom: 10px;
  }
  .el-checkbox {
    margin-left: 8px;
  }
}
// s码部分
.model {
  width: 676px;
  height: 170px;
  margin-left: 300px;
  border: 1px solid rgba(46, 45, 45, 0.09);
  padding-left: 30px;
  .el-checkbox {
    margin-left: 8px;
  }
}
// 所以按钮文字颜色
.el-button {
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(163, 160, 251, 1);
}
// 删除型号文字颜色
.sc-delete {
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 49, 138, 1);
  float: right;
  padding: 8px;
}
// 添加按钮样式
.add-button {
  width: 708px;
  height: 39px;
  margin-left: 300px;
  margin-top: 10px;
  margin-bottom: 26px;
}

// 表单部分
.el-table {
  width: 710px;
  height: 100%;
  // margin-left: 300px;
  border: 1px solid rgba(46, 45, 45, 0.09);
}
.reduceForm {
  margin: 30px;
  margin-left: 300px;
}

//最下3个卡片
.the-card {
  width: 100%;
  height: 100%;
  margin: 30px 0;
  .el-form {
    margin-left: 300px;
  }
  .liji {
    margin-right: 10px;
  }
  .div-botton {
    margin: 4px;
  }
}
.button {
  width: 100%;
  text-align: center;
}
.box-card {
  height: 100%;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
