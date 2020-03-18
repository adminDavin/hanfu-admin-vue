<template>
  <div>
    <el-card class="box-card">
      <el-form :model="bianrow" ref="ruleForm" label-width="180px" class="demo-ruleForm">
        <el-form-item label="商品标题" prop="productName">
          <el-input style="width:70%" v-model="bianrow.productName "></el-input>
        </el-form-item>
        <!-- <el-form-item style="width:100%" label="商品编号" prop="goodName">
            <el-input style="width:40%" v-model="ruleForm.goodName"></el-input>
        </el-form-item>-->
        <el-form-item style="width:100%" label="商品属性" prop="inventory">
          <!-- <el-input style="width:40%" v-model="ruleForm.inventory"></el-input>
            <span>件</span>
          <span style="margin: 6px;width:40%">商品属性</span>-->
          <el-select style="width:30%" v-model="bianrow.member" placeholder="请选择商品属性">
            <el-option label="会员" value="1"></el-option>
            <el-option label="非会员" value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品类目" prop="categoryId">
          <el-select
            @change="twocategshijan"
            style
            v-model="bianrow.categoryId1"
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
            v-model="bianrow.region"
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
          <el-select @change="threecateg" style v-model="bianrow.freight" placeholder="请选择三级类目">
            <el-option
              v-for="(item, index) in tiwoCatalogues"
              :key="index"
              :label="item.hfName"
              :value="item.id"
              style="height: 45px;"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="width:60%" label="商品描述" prop="productDesc">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 6}"
            placeholder="请输入商品描述"
            v-model="bianrow.productDesc"
          ></el-input>
        </el-form-item>

        <el-button type="primary" @click="bianjiSubmit" :loading="addLoading">提交</el-button>
      </el-form>
      <div class="f10">商品规格</div>
      <el-table :data="tabledatas1" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="规格名称">
          <template slot-scope="scope">
            <!-- <span v-show="!scope.row.show">{{scope.row.hfName}}</span> -->
            <el-input placeholder="请输入内容" v-model="scope.row.hfName"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="规格类型">
          <template slot-scope="scope">
            <!-- <span v-show="!scope.row.show">{{scope.row.specType}}</span> -->
            <el-input placeholder="请输入内容" v-model="scope.row.specType"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="默认值" >
          <template slot-scope="scope">
            <span v-show="!scope.row.show">{{scope.row.specValue}}</span>
            <!-- <el-input placeholder="请输入内容" v-model="scope.row.specValue"></el-input> -->
          </template>
        </el-table-column>
        <el-table-column label="规格单位">
          <template slot-scope="scope">
            <!-- <span v-show="!scope.row.show">{{scope.row.specType}}</span> -->
            <el-input placeholder="请输入内容" v-model="scope.row.specUnit"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button @click="additionSpec(scope)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="f10">物品价格</div>
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
            <el-button type="text" style="color: rgb(24, 211, 71);" @click="submitPrice(scope)">修改</el-button>
            <!-- <el-button type="text" @click="particulars(scope)">详情</el-button> -->
            <el-button type="text" style="color: rgb(218, 18, 28);" @click="deletion(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import api from '@/api/commodity_api.js';
export default {
  data () {
    return {
      // 添加按钮Loading加载
      addLoading: false,
      categoryId: '', // 商品所属的类目id*
      bianrow: {
        bossId: '1',
        freight: '',

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
        // productName: '',
        // productDesc: '', // 描述
        // productCategoryName: '', // 类目
        // categoryId: '',
        // id: '',
        // timestamp: '1223',
        // token: '123',
        // userId: '1'
      },
      // 修改商品规格
      specGoods: {
        categorySpecId: '1', // 类目ID
        productId: '',
        productSpecId: '',
        specName: '',
        specUnit: '',
      },
      // 删除
      deletion (scope) {
        this.$confirm('确认删除吗？', '提示', {}).then(() => {
          api
            .deleteGood(scope.row.id)
            .then((res) => {
              this.getcoommo();
              this.$message({
                message: '删除成功',
                type: 'success',
              });
            });
        });
      },
      bianRules: {
        productName: [
          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur',
          },
        ],
        productDesc: [
          {
            required: true,
            message: '请输入商品描述',
            trigger: 'blur',
          },
        ],
        value4: [
          {
            required: true,
            message: '请选择商品分类',
            trigger: 'blur',
          },
        ],
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
        username: '12', // 店家名称, 登录修改的用户名称
        // specValue: ['1.1'] // 标签 颜色 // 规格
      },
      leiMu: {},
      tiwoCatalogues: [], // 三级目录
      erjimulu: [], // 二级目录
      tabledatas: [],
      tabledatas1: [],
    };
  },
  created () {
    this.mounted();
    this.Acquire();
    this.getcoommo();
    this.getcategory();
  },
  methods: {
    // 商品 编辑 提交按钮
    bianjiSubmit: function () {
      console.log(this.bianrow);
      api.updategoods(this.bianrow, this.categoryId);
    },
    // 提交价格
    submitPrice (scope) {
      this.specificationForm.quantity = scope.row.quantity;
      this.specificationForm.sellPrice = scope.row.sellPrice;
      this.specificationForm.hfGoodsId = scope.row.id;
      this.specificationForm.linePrice = scope.row.linePrice;
      api
        .setPrice(this.specificationForm)
        .then((res) => {
          this.getcoommo();
        });
    },
    // 获取商品规格
    Acquire () {
      api.specifies(this.bianrow.id).then((res) => {
        console.log('获取规格ID', res);
        this.tabledatas1 = res.data.data;
      });
    },
    // 获取物品列表
    async getcoommo () {
      api
        .getProductList(1)
        .then((res) => {
          this.tabledatas = res.data.data;
          console.log(this.tabledatas);
        });
    },
    // 修改商品规格名称
    additionSpec (scope) {
      console.log(scope);
      this.specGoods.specName = scope.row.hfName;
      this.specGoods.productSpecId = scope.row.id;
      this.specGoods.specUnit = scope.row.specUnit;
      this.specGoods.productId = this.bianrow.id;
      this.specGoods.categorySpecId = this.bianrow.categoryId;
      api
        .update(this.specGoods)
        .then((res) => {
          this.Acquire();
        });
    },
    async getcategory () {
      api
        .category()
        .then((res) => {
          this.leiMu = res.data.data;
          // this.leimu.levelId = res.data.length
        });
    },
    // 二级 下拉触发事件
    twocategshijan (e) {
      // console.log(e)
      this.categoryId = e;
      // this.$http
      //   .get('/cat/product/category?parentCategoryId=' + e)
      api
        .categoryTwo(e)
        .then((res) => {
          this.erjimulu = res.data.data;
          // console.log('类目', this.onecatalogues)
        });
    },
    // 三级 下拉触发事件 threecateg
    threecategshijan (e) {
      this.categoryId = e;
      // console.log(e)
      // this.$http
      //   .get('/cat/product/category?parentCategoryId=' + e)
      api
        .categoryTwo(e)
        .then((res) => {
          this.tiwoCatalogues = res.data.data;
          // console.log('类目', this.onecatalogues)
        });
    },
    threecateg (e) {
      this.categoryId = e;
      api.categoryTwo(e)
        .then((res) => {
          this.threecategs = res.data.data;
          // console.log('类目', this.onecatalogues)
        });
    },
    mounted () {
      var list = decodeURIComponent(this.$route.query.row);
      this.bianrow = JSON.parse(list);
    },
  },
};
</script>

<style lang="less" scoped>
.f10 {
  font-size: 28px;
  margin: 10px;
}
</style>
