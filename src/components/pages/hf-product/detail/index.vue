<template>
<<<<<<< HEAD
  <div slot="header" class="clearfix">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">商品信息</div>
        <el-form :rules="rules" :inline="true" :model="productInfo" class="demo-form-inline">
          <el-row class="t-10">
            <el-col :span="8">
              <el-form-item label="商品名称" prop="productName">
                <el-input v-model="productInfo.productName" placeholder="商品名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="所属类目">
                <el-select v-model="productInfo.categoryId" placeholder="请选择类目">
                  <el-option
                    v-for="item in classifyData"
                    :key="item.id"
                    :label="item.hfName"
                    :value="item.id"
                    style="height: 45px;"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="所属商家">
                <el-input v-model="productInfo.lastModifier" placeholder="所属商家"></el-input>
              </el-form-item>
            </el-col>
            <el-button type="primary" @click="onProductSubmit">{{isCreate ? '添加商品' : '更新商品'}}</el-button>
            <el-button label="ltr" @click="evenMore">查看更多</el-button>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <div class="p-5"></div>
        <div class="grid-content bg-purple">
          物品信息列表
          <el-button
            @click="appendGoods"
            round
            size="mini"
            style="float: right;margin-right: 8px;"
            type="primary"
          >添加物品</el-button>
        </div>
        <GoodsList :commodityId="commodityId"></GoodsList>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">属性设置</div>
        <el-container class="t-10 radius-4">
          <el-header class="font-neue t-10">图片管理</el-header>
          <el-main>
            <list-picture></list-picture>
          </el-main>
        </el-container>
        <el-container class="t-10 radius-4">
          <el-header class="font-neue t-10">规格管理</el-header>
          <el-main>
            <list-specification :goosID='goosID' :commodityId="commodityId"></list-specification>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
<!-- 抽屉组件 -->
    <el-drawer
      :title="title"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      size="80%"
    >
    <div>
      <GoodsLncrease @goodsId="goodsIdGetMsg" @func="getMsgFormSon" :commodityId="commodityId" v-if="title!=='添加商品'"></GoodsLncrease>
    </div>
    </el-drawer>
  </div>
=======
<div slot="header" class="clearfix">
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">商品信息</div>
      <el-form :rules="rules" :inline="true" :model="productInfo" class="demo-form-inline">
        <el-row class="t-10">
          <el-col :span="8">
            <el-form-item label="商品名称" prop="productName">
              <el-input v-model="productInfo.productName" placeholder="商品名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属类目">
              <el-select v-model="productInfo.categoryId" placeholder="请选择类目">
                <el-option v-for="item in classifyData" :key="item.id" :label="item.hfName" :value="item.id" style="height: 45px;"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属商家">
              <el-input v-model="productInfo.lastModifier" placeholder="所属商家"></el-input>
            </el-form-item>
          </el-col>
          <el-button type="primary" @click="onProductSubmit">{{isCreate ? '添加商品' : '更新商品'}}</el-button>
          <el-button label="ltr" @click="evenMore">查看更多</el-button>
        </el-row>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="16">
      <div class="p-5"></div>
      <div class="grid-content bg-purple">
        物品信息列表
        <el-button @click="appendGoods" round size="mini" style="float: right;margin-right: 8px;" type="primary">添加物品</el-button>
      </div>
      <GoodsList :commodityId="commodityId"></GoodsList>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light">属性设置</div>
      <el-container class="t-10 radius-4">
        <el-header class="font-neue t-10">图片管理</el-header>
        <el-main>
          <list-picture></list-picture>
        </el-main>
      </el-container>
      <el-container class="t-10 radius-4">
        <el-header class="font-neue t-10">规格管理</el-header>
        <el-main>
          <list-specification :goosID='goosID' :commodityId="commodityId"></list-specification>
        </el-main>
      </el-container>
    </el-col>
  </el-row>
  <!-- 抽屉组件 -->
  <el-drawer :title="title" :visible.sync="drawer" :direction="direction" :before-close="handleClose" size="80%">
    <GoodsLncrease @func="getMsgFormSon" :commodityId="commodityId" v-if="title!=='添加商品'"></GoodsLncrease>
  </el-drawer>
</div>
>>>>>>> f1ea1922341dfba6b2106f6cce684c3901c7ec8f
</template>

<script>
import GoodsList from '../goods/list';
import GoodsLncrease from '../goods/lncrease';
import ListPicture from '../list-picture';
import ListSpecification from '../list-specification';
import serviceProduct from '@/service/product.js';
// import serviceGoods from '@/service/goods.js';
export default {
  components: {
    GoodsList,
    ListSpecification,
    ListPicture,
    GoodsLncrease,
  },
  data() {
    return {
      commodityId: 0,
      goosID: 0,
      title: '',
      loading: false,
      drawer: false,
      isCreate: false,
      direction: 'rtl',
      classifyData: {}, // 类目数据
      productInfo: {
        bossId: '1',
        region: '',
        productName: '',
        lastModifier: '', // 商家名称
        id: '',
        categoryId: '',
      },

      // 添加物品规格值
      specGoods: {
        productSpecId: '',
        goodsId: '43',
        requestId: '111',
        specValue: '',
        timestamp: '20191023T081324Z',
        token: '11',
        userId: '11',
      },
      // 顶部表单验证
      rules: {
        productName: [{
          required: true,
          message: '请输入商品名称',
          trigger: 'blur',
        },
        {
          min: 1,
          max: 9,
          message: '长度在 1 到 9 个字符',
          trigger: 'blur',
        },
        ],
        hfName: [{
          required: true,
          message: '请选择类目名称',
          trigger: 'change',
        }],
      },
    };
  },
  created() {
    console.log(this.$route.query);
    let query = this.$route.query;
    if (typeof query.productId === 'undefined') {
      this.isCreate = true;
    } else {
      this.commodityId = Number(query.productId);
    }
    // 加载类目
    this.getCatagery();
    this.getCurrent();
  },
  methods: {
    // 提交按钮 物品格 productSpecId
    submitPrice(scope) {

      // this.specGoods.specValue = scope.row.specValue;
      // this.specGoods.productSpecId = scope.row.id;
      // serviceGoods.additionSpecs(this.specGoods, (res) => {
      //   console.log(res);
      // });
      // this.$message({
      //   message: '提交成功',
      //   type: 'success',
      // });
    },

    getMsgFormSon(data) {
      this.drawer = data;
      console.log(this.drawer);
      console.log(data);
    },
    // 子组件传来的 物品ID
    goodsIdGetMsg(data) {
      this.specGoods.goodsId = data;
      console.log(this.drawer);
      console.log(data);
    },

    getCatagery() {
      this.loading = true;
      serviceProduct.getCatagery((res) => {
        this.classifyData = res.data.data;
        this.loading = false;
      });
    },
    refreshPage() {
      // 查询商品详情
      console.log('ddd');
    },
    onProductSubmit() {
      if (this.productInfo.id === '') {
        if (this.productInfo.productName !== '') {
          console.log('添加商品');
          // 添加商品
          this.loading = true;
          serviceProduct.ceateProduct(this.productInfo, (res) => {
            this.commodityId = res.data.data.productId;
            this.$router.push({
              path: '/hf-product/detail?productId=' + res.data.data.productId,
            });
            location.reload();
          });
        }
      } else {
        console.log('更新商品');
        serviceProduct.updateProduct(this.productInfo, (res) => {
          console.log('更新商品', res);
        });
      }
    },
    // 获取当前商品
    getCurrent() {
      if (!this.isCreate) {
        serviceProduct.getDetail(this.commodityId, (res) => {
          console.log('获取当前', res.data.data);
          this.productInfo.productName = res.data.data.productName;
          this.productInfo.id = res.data.data.id;
          this.productInfo.lastModifier = res.data.data.stoneName;
          this.productInfo.categoryId = res.data.data.categoryId;
        });
      }
    },
    appendGoods() {
      // 抽屉控制 添加物品
      this.drawer = true;
      this.direction = 'btt';
      this.title = '添加物品';
    },
    evenMore() {
      this.drawer = true;
      this.direction = 'rtl';
      this.title = '添加商品';
    },
    // 下拉 事件 核销员
    pullverifier(e) {
      // console.log(e)
      this.ruleForm1.cancelId = e;
    },
    handleClose(done) {
      done();
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  // margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  background-color: #f9fafc;
}

.t-10 {
  margin-top: 10px;
}

.radius-4 {
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.font-neue {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.pl-5 {
  padding-right: 5px;
}
</style>
