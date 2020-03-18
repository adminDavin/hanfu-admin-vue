
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
          label-width="180px"
          class="demo-ruleForm"
        >
          <el-form-item label="商品标题" prop="goodName">
            <el-input style="width:70%" v-model="ruleForm.hfName "></el-input>
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

          <el-form-item label="商品类目" prop="categoryId">
            <el-select
              @change="twocategshijan"
              style
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
              style
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
            <el-select @change="threecateg" style v-model="ruleForm.freight" placeholder="请选择三级类目">
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

          <el-form-item label prop="brandId">
            <el-button class="goods-button" type="primary" @click="NewGoods">+新建商品</el-button>
          </el-form-item>
        </el-form>
        <el-table class="goods-table" :data="commoditytable" border>
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="规格名称">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="!scope.row.show" v-model="scope.row.tab2"></el-input>
              <!-- <span v-show="scope.row.show">{{scope.row.tab2}}</span> -->
            </template>
          </el-table-column>
          <el-table-column label="默认值">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="!scope.row.show" v-model="scope.row.tab3"></el-input>
              <!-- <span v-show="scope.row.show">{{scope.row.tab3}}</span> -->
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini"
              @click="addGoodsSpecificationList()">添加一行</el-button>
              <el-button @click="save(scope)">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-container>

      <div class="reduceForm">
        <!-- 上传图片 -->
        <el-upload
          action="/api/api/product/product/addProductPictrue"
          :data="form"
          name="fileInfo"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
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
        <el-form-item style="width:100%" label="物品名称" prop="goodName ">
          <el-input style="width:50%" v-model="ruleForm1.goodName  "></el-input>
        </el-form-item>
        <el-form-item label="提货方式">
          <el-radio @change="change" style="margin-left: 50px;" v-model="radiol" label="0">快递</el-radio>
          <el-radio @change="change" v-model="radiol" label="1">自取</el-radio>
        </el-form-item>
        <el-form-item v-if="radiol == 1" label="核销员" prop="region">
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
        <el-form-item style="width:100%" label="物品描述" prop="goodsDesc">
          <el-input style="width:50%" v-model="ruleForm1.goodsDesc  "></el-input>
        </el-form-item>
        <el-form-item label prop="brandId">
          <el-button style="width:25%; margin-left: 5px;" type="primary" @click="submitForm">+新建物品</el-button>
          <!-- <el-button type="success" style="color: #fff;" @click="dialogTableVisible = true">添加物品规格值</el-button> -->
        </el-form-item>
        <el-upload
          action="/api/api/product/goods/addPicture"
          :data="form1"
          name="fileInfo1"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form>
      <!-- <el-button  id@click="dialogFormVisible = true" class="add-button">根据下方物品ID设置价格按钮</el-button> -->

      <el-table :data="tabledata" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="ID">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.id"></el-input>
            <!-- <span v-show="!scope.row.show">{{scope.row.id}}</span> -->
          </template>
        </el-table-column>
        <el-table-column v-for="(item,i) in cols" :key="i" :prop="item.prop" :label="item.label">
          <el-table-column v-if="conceal!==1" :render-header="renderHeader">
            <template slot-scope="scope">
              <input value @input="inputEvent($event)" @blur="Article(value,scope)" ref="abc" />
              <!-- <el-input placeholder="请输入内容" @blur="Article(scope)"
              v-model="itemRadio[i]">23123</el-input>-->
              <!-- <span v-show="!show" @click="ces(scope)">23123</span> -->
            </template>
          </el-table-column>
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
            <el-button
              v-model="handleAdd"
              type="text"
              circle
              plain
              icon="el-icon-plus"
              @click="handleAdd()"
            >添加一行</el-button>
            <!-- <el-button @click="show =true">编辑</el-button> -->
            <el-button type="text" style="color: rgb(24, 211, 71);" @click="submitPrice(scope)">提交</el-button>
            <!-- <el-button type="text" @click="particulars(scope)">详情</el-button> -->
            <el-button type="text" style="color: rgb(218, 18, 28);" @click="deletion(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="button">
      <!-- <el-button @click="submitForm" type="primary">保存</el-button> -->
    </div>
  </div>
</template>

<script>
import api from '@/api/commodity_api.js';
// import { log } from 'util'
export default {
  data () {
    return {
      // 添加物品规格 展示数据
      tabledata: [
        {
          createTime: '',
          hfName: '',
          modifyTime: '',
          specType: '',
          specValue: '',
        },
      ],
      conceal: '1',
      judgment: '0',
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
      radiol: '0', // 单选按钮运费部分
      // 多选择框 添加规格图片
      checked: true,
      checked2: true,
      // 多选择框
      checked3: true,
      // 标签
      modelTags: [], // s码
      // 时间日期表单
      form: {
        productId: '48',
      },
      form1: {
        goodsId: '39',
      },
      leiMu: {},
      // 添加商品
      ruleForm: {
        bossId: '1',
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
        fileInfo: '', // 图片路径
      },
      // 添加商品规格
      specification: {
        specValue: '', // 默认值
        productId: '48',
        hfName: '', // 规格名称
        requestId: '',
        timestamp: '',
        token: '',
        userId: '',
      },
      // 添加物品规格值
      specGoods: {
        productSpecId: '',
        goodsId: '43',
        requestId: '111',
        specValue: '',
        timestamp: '111',
        token: '11',
        userId: '11',
      },
      // 添加物品
      ruleForm1: {
        sellPrice: '', // 价格
        quantity: '', // 库存量
        productId: '1', // 商品id*
        categoryId: '', // 商品所属的类目id*
        cancelId: '', // 核销Id *
        claim: '', // 是否自提 *
        // member: '', // 是否为会员商品 *
        frames: '0', // 上下架*
        goodName: '', // 物品名称*
        goodsDesc: '', // 商品描述
        requestId: '123123123', // 请求id, 发起请求的随机数, 用来判断请求是否重
        token: '11238', // 登录成功后返回的token
        userId: '12', // 用户id
        fileInfo1: [],
      },

      // 设置价格
      specificationForm: {
        linePrice: '', // 划线价
        quantity: '', // 物品数量
        respDesc: '111', // 库存描述
        // bossId: '1',
        hfGoodsId: '43', // 物品ID
        sellPrice: '', // 物品价格
        // productSpecId: '', // 商品规格ID
        requestId: '111', // 发起请求的随机数, 用来判断请求是否重复
        // timestamp: '12231231', // 当前时间
        token: '11238',
        timestamp: '11',
        userId: '12', // 用户id
        username: '12', // 店家名称, 登录修改的用户名称
        // specValue: ['1.1'] // 标签 颜色 // 规格
      },
      value: '',
      // 添加规格
      specificationForm1: {
        specValue: [], // 标签 颜色 // 规格
      },
      // 添加规格
      specificationForm2: {
        specValue: [], // 标签 颜色 // 规格
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
        desc: '',
      },

      tabledatas: [],
      // 添加规格名称
      cols: [
        // { prop: 'date', label: '日期' }
        // { prop: 'name', label: '姓名' }
      ],
      show: false,
      // 表单数据
      // 顶部表单验证
      rules: {
        hfName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
      },
    };
  },
  created () {
    this.getcategory();
    this.verifier1();
    this.scope();
    this.test();
    let lists = [
      { tab1: '1', tab2: '颜色', tab3: '红色' },
    ];
    lists.forEach((element) => {
      element.show = false;
    });
    this.commoditytable = lists;
    this.change();
  },
  methods: {
    // 详情
    particulars (scope) {
      console.log(scope);
      this.goodsDesc = scope.row.goodsDesc;
      this.dialogTableVisible = true;
    },
    // 删除
    deletion (scope) {
      this.$confirm('确认删除吗？', '提示', {}).then(() => {
        api
          .deleteGood(scope.row.id)
          .then((res) => {
            this.$message({
              message: '删除成功',
              type: 'success',
            });
          });

      });
    },

    // 提交价格
    submitPrice (scope) {
      this.specificationForm.quantity = scope.row.quantity;
      this.specificationForm.sellPrice = scope.row.sellPrice;
      this.specificationForm.linePrice = scope.row.linePrice;
      api
        .setPrice(this.specificationForm)
        .then((res) => {
          this.$message({
            message: '价格提交成功',
            type: 'success',
          });
        });
    },
    // 添加商品规格
    save (scope) {
      if (this.judgment === '0') {
        this.$notify({
          title: '提醒',
          message: '请先加商品',
          duration: 0,
        });
        return;
      }
      scope.row.show = false;
      this.specification.hfName = scope.row.tab2;
      this.specification.specValue = scope.row.tab3;
      api
        .addSpecify(this.specification)
        .then((res) => {
          this.$message({
            message: '添加商品规格成功',
            type: 'success',
          });
          api.specifies(this.specification.productId).then((res) => {
            console.log('获取规格ID', res);
            this.tabledatas = res.data.data;
            console.log(res);
            for (var i = 0; i < res.data.data.length; i++) {
              this.cols.push({
                prop: 'specValue' + i,
                label: res.data.data[i].hfName,
              });
            }
          });
        });

    },
    // 输入事件
    inputEvent: function (e) {
      console.log(e.target.value); // 实时获取输入值
      this.specGoods.specValue = e.target.value;
      // console.log(index)// 获取点击输入框的索引
    },

    // 添加物品规格值
    Article (value, scope) {
      console.log(scope);
      // console.log(scope.column.test)
      // console.log('内容', this.$refs.abc[0].value)
      // console.log('内容2', value)
      console.log('2', this.tabledatas[scope.column.test].id);
      this.specGoods.productSpecId = this.tabledatas[scope.column.test].id;
      api
        .additionSpecs(this.specGoods)
        .then((res) => {
          console.log(res);
        });

    },
    renderHeader (h, { column, $index }) {
      column.test = $index;
      console.log('h', this.cols);
      console.log(column); // 这里打印下就知道新增属性成功
      // return (
      //   <span>竞猜对象信息</span>
      // )
    },
    // 添加一行物品规格值
    handleAdd () {
      let row = {
        createTime: '',
        hfName: '',
        modifyTime: '',
        specType: '',
        specValue: '',
      };
      this.tabledata.push(row);
    },
    // 添加一行商品规格
    addGoodsSpecificationList () {
      let row = { tab1: '', tab2: '', tab3: '' };
      this.commoditytable.push(row);
    },

    loseFcous (index, row) {

      row.seen = false;
    },
    cellClick (row, column) {
      row.seen = true;
    },

    addition () {
      // this.formSpec.specValue = this.$refs.specValue.value + ''
      // this.formSpec.specSize = this.$refs.specSize.value + ''
      // this.tableSpec.push(this.formSpec)
      // this.value1 = ''
      // this.value2 = ''
    },
    handleEdit (e) {
      console.log(e);
    },
    // 获取规格
    huq () {
      api
        .gainSpecifications()
        .then((res) => {
          this.threecategs = res.data.data;
          // console.log('类目', this.onecatalogues)
        })
        ['catch'](function (error) {
          // handle error
          console.log(error);
        });
    },
    // 添加商品 ruleForm1
    NewGoods () {
      console.log(this.ruleForm.specName);
      this.$confirm('确认提交吗？', '提示', {}).then(() => {
        console.log(this.ruleForm1);
        // 拷贝
        this.ruleForm.requestId = Date.now();
        let param = this.ruleForm;
        api
          .tianjianwup(param)
          .then((res) => {
            this.ruleForm1.productId = res.data.data.id;
            this.specification.productId = res.data.data.id;
            this.form.productId = res.data.data.id;
            console.log('返回商品ID', this.specification);

            this.$message({
              message: '恭喜你，添加成功',
              type: 'success',
            });
            this.judgment = '1';
          });

      });
    },
    clickdelete2 () {
      this.specificationForm2.specValue = '';
    },
    clickdelete () {
      this.ruleForm1.specValue = '';
    },
    onRemove (file) {},
    imgPreview (file) {
      let fileName = file.name;
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
      if (regex.test(fileName.toLowerCase())) {
        this.ruleForm.fileInfo = URL.createObjectURL(file.raw);
        this.ruleForm1.fileInfo1 = URL.createObjectURL(file.raw);
        console.log(file.raw);
        console.log(this.ruleForm.fileInfo);
        // this.uploadFile(file)
      } else {
        this.$message.error('请选择图片文件');
      }
    },
    scope (scope) {
      // console.log(scope)
    },
    change (label) {
      // console.log(label)
      // console.log(11111111)
      this.ruleForm1.claim = this.radiol;
    },
    // 获取核销员
    async verifier1 () {
      api
        .verifier()
        .then((res) => {
          console.log(res);
          this.verifier = res.data.data.list;
          console.log(this.verifier);
        })
        ['catch'](function (err) {
          console.log(err);
        });
    },
    // 添加图片

    // 添加颜色事件
    submit () {
      // console.log(this.AddColor)
      this.ruleForm1.specValue.push(this.AddColor);
      this.tianjiayanse = this.AddColor;
      // this.AddColor = ''
    },
    // 添加尺寸事件
    submit1 () {
      // console.log(this.AddColor)
      this.ruleForm.specName.push(this.AddSize);
      this.tianjiachicun = this.AddSize;
      this.AddSize = '';
    },
    // 图片列表移除图片时的钩子
    handleRemove (file, fileList) {
      // console.log(file, fileList)
    },
    success (err, file, fileList) {
      console.log(err);
    },
    // 图片上传前事件
    handleBeforeUpload (file) {
      console.log(22222);
      this.file = file; // 需要传给后台的file文件
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const _base64 = reader.result;
        this.imgUrl = _base64; // 将_base64赋值给图片的src，实现图片预览
      };
      return false; // 阻止图片继续上传，使得form表单提交时统一上传
    },
    // // 点击图片列表中的放大
    handlePictureCardPreview (file) {
      console.log(1111111);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // handleDownload (file) {
    //   console.log(file)
    // },
    // 标签点击按钮
    handleClose (tag) {
      this.ruleForm1.specValue.splice(this.ruleForm1.specValue.indexOf(tag));
    },
    // 标签点击按钮
    handleClose1 (tag) {
      this.specificationForm2.specValue.splice(
        this.specificationForm2.specValue.indexOf(tag),
      );
    },
    // 获取类目
    async getcategory () {
      api
        .category()
        .then((res) => {
          this.leiMu = res.data.data;
          // this.leimu.levelId = res.data.length
        })
        ['catch'](function (err) {
          console.log(err);
        });
    },
    // 二级 下拉触发事件
    twocategshijan (e) {
      // console.log(e)
      this.ruleForm.categoryId = e;
      this.ruleForm1.categoryId = e;
      // this.$http
      //   .get('/cat/product/category?parentCategoryId=' + e)
      api
        .categoryTwo(e)
        .then((res) => {
          this.erjimulu = res.data.data;
          // console.log('类目', this.onecatalogues)
        })
        ['catch'](function (error) {
          // handle error
          console.log(error);
        });
    },
    // 三级 下拉触发事件 threecateg
    threecategshijan (e) {
      this.ruleForm.categoryId = e;
      this.ruleForm1.categoryId = e;
      // console.log(e)
      // this.$http
      //   .get('/cat/product/category?parentCategoryId=' + e)
      api
        .categoryTwo(e)
        .then((res) => {
          this.tiwoCatalogues = res.data.data;
          // console.log('类目', this.onecatalogues)
        })
        ['catch'](function (error) {
          // handle error
          console.log(error);
        });
    },
    threecateg (e) {
      this.ruleForm.categoryId = e;
      this.ruleForm1.categoryId = e;
      // console.log(e)
      // this.$http
      //   .get('/cat/product/category?parentCategoryId=' + e)
      api
        .categoryTwo(e)
        .then((res) => {
          this.threecategs = res.data.data;
          // console.log('类目', this.onecatalogues)
        })
        ['catch'](function (error) {
          // handle error
          console.log(error);
        });
    },
    // 下拉 事件 核销员
    pullverifier (e) {
      // console.log(e)
      this.ruleForm1.cancelId = e;
    },
    // 添加物品 goodsId
    async submitForm () {
      if (this.judgment === '0') {
        this.$notify({
          title: '提醒',
          message: '请先加商品',
          duration: 0,
        });
        return;
      }
      // this.ruleForm1.specValue.push(this.specificationForm2.specValue)
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            console.log(this.ruleForm);
            // 拷贝
            this.ruleForm.requestId = Date.now();
            let param = this.ruleForm1;
            api.addProduct(param).then((res) => {
              // this.$router.push({ name: 'commodity' })
              this.specGoods.goodsId = res.data.data;
              this.form1.goodsId = res.data.data;
              // 添加价格需要保存ID
              this.specificationForm.hfGoodsId = res.data.data;
              console.log(res.data.data);
              this.$message({
                message: '恭喜你，添加成功',
                type: 'success',
              });
            });
          });
        }
      });
    },
    conver: function (s) {
      return s < 10 ? '0' + s : s;
    },
    // 当前时间
    time () {
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
      this.ruleForm.timestamp = now;
      // 发起请求的随机数, 用来判断请求是否重复
      this.ruleForm.requestId = Date.now();
      // console.log(this.timestamp)

      // specificationForm里的随机数和时间
      this.specificationForm.timestamp = now;
    },
    // 添加批量按钮
    resetForm (formName) {
      //  清空form表单
      this.$refs[formName].resetFields();
    },
    changeNum (row) {
      this.editable[row] = true;
      this.$set(this.editable, row, true);
    },
  },
  mounted () {},
};
</script>

<style scoped lang="less">
.clearfix:after {
  clear: both;
}
.el-container {
  margin: 10px;
  // margin-top: 47px;
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
  margin: 10px;
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
  margin-left: 90px;
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
.goods-table {
  margin: 20px;
}
.goods-button {
  width: 16%;
  margin-left: 460px;
  color: #fff;
}
</style>
