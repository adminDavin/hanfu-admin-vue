<template>
<!-- -----------------------------------------------------------搜索----------------------------------------------------- -->
  <el-form style="padding-top:20px" label-width="100px" :inline="true"  class="demo-form-inline">
    <el-form-item :label="labelName">
      <el-input v-model="inquire.goodsName" placeholder="请输入物品名称"></el-input>
    </el-form-item>
    <el-form-item v-if="labelName!=='活动名称'" :label="labeltype">
       <el-input v-if="labeltype=='手机号'" v-model="inquire.productCategoryName" placeholder="请输入物品手机号"></el-input>
       <el-select v-if="labeltype!=='手机号'" v-model="inquire.productCategoryName" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.hfName"
              :value="item.id"
            ></el-option>
          </el-select>
    </el-form-item>
    <el-form-item style="float: right;">
      <el-button type="purple" @click="seeAbout" :loading="addLoading">查询</el-button>
      <el-button @click="sou" :loading="addLoading">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import storeService from '@/service/store.js';
import serviceProduct from '@/service/product.js';
import serviceEvents from '@/service/eventsManage.js';
import userCenterService from '@/service/userCenter.js';
// import quan from '@/service/quan.js';
import vip from '@/service/vip.js';
export default {
  props: ['labelName', 'labelType', 'options', 'labeltype', 'identify'],
  data() {
    return {
      addLoading: false,
      activeIndex: '1',
      activeNames: ['1'],
      // options: [
      //   {
      //     value: '0',
      //     label: '秒杀',
      //   },
      //   {
      //     value: '1',
      //     label: '团购',
      //   },
      //   {
      //     value: '2',
      //     label: '分销',
      //   },
      //   {
      //     value: '3',
      //     label: '精选',
      //   },
      //   {
      //     value: '4',
      //     label: '轮播图',
      //   },
      // ],
      inquire: {
        goodsName: '', // 商品名称
        productCategoryName: '', // 类目名称
        // bossId: '',
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
      console.log(this.inquire.goodsName);
      console.log(this.inquire.productCategoryName);
      if (this.labelType === '秒杀活动') {
        console.log('秒杀');
        serviceEvents.select(this.inquire.goodsName, (res) => {
          let tableData = res.data.data;
          this.$emit('parentByClick', tableData);
          console.log(res);
        });
      } else if (this.labelType === '团购商品') {
        console.log('团购');
        serviceEvents.groupSelete(this.inquire.goodsName, (res) => {
          let tableData = res.data.data;
          this.$emit('parentByClick', tableData);
          console.log(res);
        });
      } else if (this.labelType === '精选商品') {
        console.log('精选');
        serviceEvents.seniorityfindSeniorityInfo(this.inquire.goodsName, (res) => {
          let tableData = res.data.data;
          this.$emit('parentByClick', tableData);
          console.log(res);
        });
      } else if (this.labelType === '商品分销') {
        console.log('分销');
        serviceEvents.findProdcutActivity(this.inquire.goodsName, (res) => {
          let tableData = res.data.data;
          this.$emit('parentByClick', tableData);
          console.log(res);
        });
      } else if (this.labelType === '轮播图') {
        console.log('轮播图');
        serviceEvents.ratationActivity(this.inquire.goodsName, (res) => {
          let tableData = res.data.data;
          this.$emit('parentByClick', tableData);
          console.log(res);
        });
      }

      this.judgment();

      if (this.labelName === '姓名') {
        this.consumer();
      }

      if (this.labelName === '店铺名称') {
        let params = {
          bossId: 1,
          stoneType: this.inquire.productCategoryName,
          stoneName: this.inquire.goodsName,
        };
        storeService.getStore(params, (res) => {
          let tableData = res.data.data;
          this.$emit('parentByClick', tableData);
          console.log(res);
        });
      }
    },
    judgment() {
      if (this.labelName === '优惠名称') {
        console.log('优惠名称');
        if (this.labeltype === '所在店铺') {
          this.inquire.stoneId = this.inquire.productCategoryName;
        }
        serviceProduct.selectDiscountCoupon(this.inquire, (res) => {
          let tableData = res.data.data;
          this.$emit('parentByClick', tableData);
          console.log(res);
        });
      }
      if (this.labelName === '会员名') {
        console.log('会员名');
        vip.findvips(this.inquire, (res) => {
          let tableData = res.data.data;
          this.$emit('parentByClick', tableData);
          console.log(res);
        });
      }
      // if (this.labeltype === '所在店铺') {
      //   let stoneId = this.inquire.productCategoryName;
      //   console.log('所在店铺');
      //   quan.getliststoneId(stoneId, (res) => {
      //     let tableData = res.data.data;
      //     this.$emit('parentByClick', tableData);
      //     console.log(res);
      //   });

      // }
    },
    consumer () {
      let params = {
        bossId: 1,
        phone: this.inquire.productCategoryName,
        name: this.inquire.goodsName,
      };
      if (this.identify === 'identify') {
        console.log(1);
        userCenterService.checkUsers(params, (res) => {
          // console.log(res.data.data.list);
          let tableData = res.data.data.list;
          this.$emit('parentByClick', tableData);
        });
      }
      if (this.identify !== 'identify') {
        // eslint-disable-next-line no-magic-numbers
        console.log(2);
        userCenterService.checkAdmins(params, (res) => {
          let tableData = res.data.data;
          this.$emit('parentByClick', tableData);
        });
      }

    },
  },
};
</script>

<style lang="less" scoped>
.el-button {
  padding: 12px 46px;
}
</style>
