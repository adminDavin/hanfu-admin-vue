<template>
  <el-form style="padding-top:20px" label-width="100px" :inline="true"  class="demo-form-inline">
    <el-form-item label="商品名称">
      <el-input v-model="inquire.goodsName" placeholder="请输入物品名称"></el-input>
    </el-form-item>
    <el-form-item label="类目分类">
      <el-input v-model="inquire.productCategoryName" placeholder="请输入要查询的类目名称"></el-input>
    </el-form-item>
    <el-form-item style="float: right;">
      <el-button type="purple" @click="seeAbout" :loading="addLoading">查询</el-button>
      <el-button @click="sou" :loading="addLoading">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import serviceProduct from '@/service/product.js';

export default {
  data() {
    return {
      addLoading: false,
      activeIndex: '1',
      activeNames: ['1'],
      // statusStatistics: [
      //   {
      //     index: '1',
      //     name: 'all',
      //     desc: '全部商品',
      //     quantity: 0,
      //   },
      //   {
      //     index: '2',
      //     name: 'selling',
      //     desc: '出售中',
      //     quantity: 0,
      //   },
      //   {
      //     index: '3',
      //     name: 'stock',
      //     desc: '库存',
      //     quantity: 0,
      //   },
      // ],
      inquire: {
        goodsName: '', // 商品名称
        productCategoryName: '', // 类目名称
      },
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === '1') {
        this.getcoommo();
      } else if (key === '2') {
        this.qihuanchus();
        console.log('出售中');
      } else if (key === '3') {
        this.qihuankuch();
      }
    },
    sou: function() {
      this.inquire.goodsName = '';
      this.inquire.productCategoryName = '';
      let tableData = -1;
      this.$emit('parentByClick', tableData);
    },
    seeAbout() {
      serviceProduct.productNameListBos(this.inquire, (res) => {
        let tableData = res.data.data.list;
        this.$emit('parentByClick', tableData);
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-button {
  padding: 12px 46px;
}
</style>
