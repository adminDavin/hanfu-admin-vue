<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="280px" class="demo-ruleForm">
  <el-form-item style="width:100%" label="物品名称" prop="goodName ">
    <el-input style="width:50%" v-model="ruleForm1.goodName  "></el-input>
  </el-form-item>
  <el-form-item label="提货方式">
    <el-radio @change="takeManner" style="margin-left: 50px;" v-model="radio" label="0">快递</el-radio>
    <el-radio @change="takeManner" v-model="radio" label="1">自取</el-radio>
  </el-form-item>
  <el-form-item v-if="radio == 1" label="核销员" prop="region">
    <el-select @change="pullverifier" v-model="ruleForm.verifier" placeholder="请输入核销员姓名">
      <el-option v-for="(item, index) in verifier" :key="index" :label="item.realName" :value="item.realName" style="height: 45px;"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item style="width:100%" label="物品描述" prop="goodsDesc">
    <el-input style="width:50%" v-model="ruleForm1.goodsDesc  "></el-input>
  </el-form-item>
  <el-form-item label prop="brandId">
    <el-button style="width:25%; margin-left: 5px;" type="primary" @click="submitGoods">提交</el-button>
    <!-- <el-button type="success" style="color: #fff;" @click="dialogTableVisible = true">添加物品规格值</el-button> -->
  </el-form-item>
</el-form>
</template>

<script>
import serviceGoods from '@/service/goods.js';

export default {
  data() {
    return {
      radio: '0', // 单选按钮运费部分
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
      ruleForm: {},
      rules: {
        hfName: [{
          required: true,
          message: '请输入活动名称',
          trigger: 'blur',
        },
        {
          min: 3,
          max: 5,
          message: '长度在 3 到 5 个字符',
          trigger: 'blur',
        },
        ],
      },
    };
  },
  methods: {
    submitGoods() {
      // 添加物品
      serviceGoods.addProduct(this.ruleForm1, (res) => {
        console.log(res);
        this.goosID = res.data.data.id;
        // 添加物品规格值  goosID
        // this.specGoods.goodsId = res.data.data;
        // 添加价格需要保存ID
        // this.specificationForm.hfGoodsId = res.data.data;
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success',
        });
        this.drawer = false;
      });
    },
    takeManner(label) {
      // 提货方式
      this.ruleForm1.claim = this.radio;
    },
    // 下拉 事件 核销员
    pullverifier(e) {
      // console.log(e)
      this.ruleForm1.cancelId = e;
    },
  },
};
</script>
