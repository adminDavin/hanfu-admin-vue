<template>
<div>
   <div style="float: left;">
       <div>物品规格</div>
      <el-table :data="specificationData" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="规格名称">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.hfName"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="规格类型" width="90">
          <template slot-scope="scope">
            <el-select v-model="scope.row.specType" placeholder="请选择">
              <el-option
                v-for="item in Types"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="值">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.specValue"></el-input>
          </template>
        </el-table-column>
        <el-table-column v-for="(item,i) in cols" :key="i" :prop="item.prop" :label="item.label">
            <template slot-scope="scope">
              <input value @input="inputEvent($event)" @blur="Article(scope)" ref="abc" />
            </template>
        </el-table-column>
        <el-table-column label="规格单位" width="90">
          <template slot-scope="scope">
            <el-select v-model="scope.row.specUnit" placeholder="请选择">
              <el-option
                v-for="item in Units"
                :key="item.specUnit"
                :label="item.label"
                :value="item.specUnit"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" style="color: rgb(24, 211, 71);" @click="submitPrice(scope)">提交</el-button>
            <!-- <el-button type="text" style="color: rgb(218, 18, 28);" @click="deletion(scope)">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <el-button
        v-model="handleAdd"
        type="text"
        circle
        plain
        icon="el-icon-plus"
        @click="handleAdd()"
      >添加一列</el-button>
    </div>

  <div  style="float: right;width: 50%;">
    <el-form :model="ruleForm" ref="ruleForm" label-width="280px" class="demo-ruleForm">
    <el-form-item style="width:100%" label="物品名称" prop="goodName">
      <el-input style="width:50%" v-model="increase.goodName  "></el-input>
    </el-form-item>
    <el-form-item style="width:100%" label="物品描述" prop="goodsDesc">
      <el-input style="width:50%" v-model="increase.goodsDesc  "></el-input>
    </el-form-item>
    <el-form-item label="提货方式">
      <el-radio @change="takeManner" style="margin-left: 50px;" v-model="radio" label="0">快递</el-radio>
      <el-radio @change="takeManner" v-model="radio" label="1">自取</el-radio>
    </el-form-item>
    <el-form-item v-if="radio == 1" label="核销员" prop="region">
      <el-select @change="pullverifier" v-model="increase.verifier" placeholder="请输入核销员姓名">
        <el-option
          v-for="(item, index) in verifier"
          :key="index"
          :label="item.realName"
          :value="item.realName"
          style="height: 45px;"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item style="width:100%" label="价格" prop="sellPrice">
      <el-input style="width:50%" v-model="specificationForm.sellPrice  "></el-input>
    </el-form-item>
    <el-form-item style="width:100%" label="划线价格" prop="linePrice">
      <el-input style="width:50%" v-model="specificationForm.linePrice  "></el-input>
    </el-form-item>
    <el-form-item style="width:100%" label="库存" prop="quantity">
      <el-input style="width:50%" v-model="specificationForm.quantity"></el-input>
    </el-form-item>
    <el-form-item label prop="brandId">
      <el-button style="width:25%; margin-left: 5px;" type="primary" @click="SubmitGoods">提交</el-button>
      <!-- <el-button type="success" style="color: #fff;" @click="dialogTableVisible = true">添加物品规格值</el-button> -->
    </el-form-item>
  </el-form>
  </div>
</div>
</template>

<script>
import serviceGoods from '@/service/goods.js';
import serviceProduct from '@/service/product.js';
export default {
  props: {
    commodityId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      // 添加规格名称
      cols: [
        // { prop: 'date', label: '颜色' },
      ],
      Types: [
        {
          value: '衣服',
          label: '衣服',
        },
        {
          value: '食品',
          label: '食品',
        },
        {
          value: '饮料',
          label: '饮料',
        },
      ],
      Units: [
        {
          specUnit: '色',
          label: '色',
        },
        {
          specUnit: '斤',
          label: '斤',
        },
        {
          specUnit: '寸',
          label: '寸',
        },
      ],
      title: '添加物品', // Drawer 抽屉标题头
      radio: '0', // 单选按钮运费部分
      ruleForm: {},
      // 设置价格
      specificationForm: {
        linePrice: '', // 划线价
        quantity: '', // 物品数量
        hfGoodsId: '', // 物品ID
        sellPrice: '', // 物品价格
      },
      specificationData: [],
      // 添加物品
      increase: {
        specValue: '',
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
      // 顶部表单验证
      rules: {
        goodName: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 1, max: 9, message: '长度在 1 到 9 个字符', trigger: 'blur' },
        ],
      },
    };
  },
  created() {
    this.getspecification();
  },
  methods: {
    // 商品规格
    getspecification() {
      serviceProduct.specifies(this.commodityId, (res) => {
        console.log(res);
        this.specificationData = res.data.data;
      });
    },
    // 添加一行物品规格值
    handleAdd() {
      let row = {
        prop: 'date', label: '值',
      };
      this.cols.push(row);
    },
    takeManner(label) {
      // 提货方式
      this.ruleForm1.claim = this.radio;
    },
    setPrices() {
      serviceGoods.setPrice(this.specificationForm, (res) => {
        console.log('添加价格', res);
      });
    },
    SubmitGoods() {
      var object = {};
      console.log(this.specificationData);
      for (var i = 0;i < this.specificationData.length;i++) {
        object[this.specificationData[i].id] = this.specificationData[i].specValue;
        var json = JSON.stringify(object);

      }
      console.log(json);
      this.increase.specValue = json;
      // 添加物品
      this.increase.productId = this.commodityId;
      console.log(this.commodityId);
      serviceGoods.addProduct(this.increase, (res) => {
        console.log(res);
        console.log(res.data.data);
        this.goosID = res.data.data;
        this.specificationForm.hfGoodsId = res.data.data;
        this.setPrices();
        this.$emit('goodsId', res.data.data);
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success',
        });
      // this.$emit('func', false);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
