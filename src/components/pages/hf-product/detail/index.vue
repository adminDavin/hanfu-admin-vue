<template>
  <div slot="header" class="clearfix">
    <el-card class="box-card box-form">
      <div slot="header" class="clearfix">
        <span class="box-form">商品信息</span>
      </div>

      <el-form
        :rules="rules"
        ref="formName"
        :inline="true"
        :model="productInfo"
        class="demo-form-inline"
      >
        <el-row :gutter="20">
          <el-form-item label="商品名称" prop="productName">
            <el-input v-model="productInfo.productName" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item prop="categoryId" label="所属类目">
            <el-cascader
              :options="options"
              :children="'categories'"
              v-model="productInfo.categoryId"
              :props="{value: 'id', label: 'hfName' ,children:'categories'}"
              clearable
            ></el-cascader>
          </el-form-item>
          <el-form-item label="所属店铺">
            <el-input disabled v-model="productInfo.stoneName" placeholder="所属店铺"></el-input>
          </el-form-item>
                <el-button
              type="purple"
              @click="onProductSubmit('formName')"
            >{{isCreate ? '+ 添加商品' : '更新商品'}}</el-button>
            <el-button label="ltr" @click="evenMore">+ 添加详情图</el-button>
        </el-row>

        <el-row :gutter="20">
            <el-form-item prop="productDesc" label="商品描述">
              <el-input
                type="textarea"
                style="width:400px; height: 60px;"
                v-model="productInfo.productDesc"
              ></el-input>
            </el-form-item>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card box-form">
      <div slot="header" class="clearfix">
        <el-header style="height: -1px;" class="font-neue t-10">
          {{Cabinet}}图片管理
          <span style="margin: 0 4px">{{Cabinet}}名称：{{productInfo.name}}</span>
        </el-header>
      </div>

      <list-picture v-if="detailsp" :productId="commodityId"></list-picture>
      <listgraph v-if="!detailsp" :letter="letter"></listgraph>
    </el-card>

    <el-card class="box-card box-form">
      <div slot="header" class="clearfix">
        <el-header style="height: 10px;" class="font-neue t-10">
          {{Cabinet}}规格
          <span style="margin: 0 4px">{{Cabinet}}名称：{{productInfo.name}}</span>
          <el-button type="purple" style="float: right;" @click="addGoodsSpecificationList()">+ 添加规格</el-button>
        </el-header>
      </div>

      <list-specification ref="specif" :letter="letter" :goosID="goosID" :commodityId="commodityId"></list-specification>
    </el-card>

    <el-card class="box-card box-form">
      <div slot="header" class="font-neue clearfix">
        <span>物品信息列表</span>
        <el-button
          @click="drawer = true"
          style="float: right;margin-right: 8px;"
          type="purple"
        >+ 添加物品</el-button>
      </div>

      <GoodsList  @change="handieLetterChange" v-if="isRouterAlive" :commodityId="commodityId"></GoodsList>
    </el-card>

    <el-dialog
      title="添加物品"
      :visible.sync="drawer"
      width="60%"
      height="100%"
      center
      :before-close="handleClose"
    >
      <GoodsLncrease
      @shutDown="refresh"
        ref="mychild"
        v-if="isRouterAlive"
        @goodsId="goodsIdGetMsg"
        @func="getMsgFormSon"
        :commodityId="commodityId"
        :productName="productInfo.productName"
      ></GoodsLncrease>
      <span slot="footer" class="dialog-footer">
        <el-button @click="drawer = false">取 消</el-button>
        <el-button type="primary" @click="appendGoods">保 存</el-button>
      </span>
    </el-dialog>

    <!-- 抽屉组件 -->
    <el-dialog title="添加图片" :visible.sync="introduce" direction="rtl" :before-close="handleClose">
      <div>
        <div>添加详情介绍图</div>
        <div>
          <el-upload
            list-type="picture-card"
            ref="upload"
            action
            multiple
            :auto-upload="false"
            :limit="20"
            :file-list="fileList"
            :on-change="imgUpload"
            :on-remove="handleRemove"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import GoodsList from '../goods/list';
import GoodsLncrease from '../goods/lncrease';
import ListPicture from '../list-picture';
import listgraph from '../goods/list-graph';
import ListSpecification from '../list-specification';
import serviceProduct from '@/service/product.js';
import serviceGoods from '@/service/goods.js';
import store from '@/store';
export default {
  components: {
    GoodsList,
    ListSpecification,
    ListPicture,
    GoodsLncrease,
    listgraph,
  },
  props: {
    // 如果该值为false 则只能选择最后一级
    // 如果该值为true 则可以选择任意层级
    changeOnSelect: {
      default: false,
    },
  },
  data() {
    return {
      detailsp: true, // 图片显示物品获商品控制
      letter: '', // 物品列表连动传递的值
      props: {
        value: 'main',
        // 显示的文字字段名
        label: 'label',
        // 子层级字段名
        children: 'child',
      },
      fileList: [],
      isRouterAlive: true,
      Cabinet: '商品',
      commodityId: '',
      goosID: 0,
      loading: false,
      drawer: false,
      introduce: false, // 添加商品介绍图弹窗
      isCreate: false,
      classifyData: {}, // 类目数据
      productInfo: {
        bossId: '1', // 店铺
        // stoneId: '1', // 商家
        region: '',
        productName: '',
        stoneName: '',
        // lastModifier: '', // 商家名称
        productDesc: '',
        id: '',
        categoryId: '',
        name: '', // 展示
        userId: '',
      },
      options: [],
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
        productName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 1, message: '请输入内容', trigger: 'blur' },
        ],
        categoryId: [
          { required: true, message: '请选择类目名称', trigger: 'change' },
        ],
        productDesc: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
        ],
      },
    };
  },
  created() {
    console.log(this.$route.query);
    let query = this.$route.query;
    this.productInfo.stoneName = this.$route.query.stoneName;
    this.productInfo.id = query.productId + '';
    if (typeof query.productId === 'undefined') {
      this.isCreate = true;
    } else {
      this.commodityId = query.productId;
    }
    // 加载类目
    this.getCatagery();
    this.getCurrent();
    this.acquire();
    this.productInfo.bossId = store.getUser().BSid;
  },
  methods: {
    addGoodsSpecificationList() {
      this.$refs.specif.addGoodsSpecificationList();
    },
    // ----------------------------------------图片-------------------------------------------------
    // 获取图片
    acquire() {
      console.log('获取图片', this.$route.query.productId);
      if (this.$route.query.productId === undefined) {
        return;
      }
      if (this.productId !== 'undefined') {
        serviceProduct.selectProductIntroducePictrue(
          this.productInfo.id,
          (res) => {
            this.fileList = [];
            for (let i = 0; i < res.data.data.length; i++) {
              let file = res.data.data[i];
              serviceGoods.getFileFileId(file.fileId, (res) => {
                this.fileList.push({ name: file.hfName, url: res.config.url });
              });
            }
          },
        );
      }
    },
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
      fd.append('userId', 1);
      fd.append('fileInfo', file.raw);
      fd.append('productId', this.$route.query.productId);
      axios
        .post('/api/api/product/product/addProductIntroducePictrue', fd)
        .then((res) => {
          this.acquire();
        });
    },
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList);
      var num = file.url.replace(/[^0-9]/gi, '');
      console.log('num', num);
      serviceProduct.deletedPictrue(num, this.$route.query.productId, (res) => {
        console.log('删除成功');
      });
    },
    // ____________________________________________________________________________________________

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
    handieLetterChange(letter) {
      console.log('letter', letter);
      this.letter = letter;
      this.Cabinet = '物品';
      this.detailsp = false;
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
        this.options = res.data.data;
        console.log('类目', res);
        this.loading = false;
      });
    },
    onProductSubmit(formName) {
      let userId = JSON.parse(window.sessionStorage.userInfor);
      this.productInfo.userId = userId.id;
      this.$refs[formName].validate((valid) => {
        console.log(this.productInfo.id);
        if (valid) {
          if (this.productInfo.id === 'undefined') {
            if (this.$route.query.stoneId !== undefined) {
              this.productInfo.stoneId = this.$route.query.stoneId;
            }
            console.log('添加商品', this.productInfo);
            console.log('添加商品stoneId', this.$route.query.stoneId);
            // 添加商品 undefined
            this.loading = true;
            serviceProduct.ceateProduct(this.productInfo, (res) => {
              console.log(res);
              this.commodityId = res.data.data.productId + '';
              this.$router.push({
                path:
                  '/hf-product/detail?productId=' +
                  res.data.data.productId +
                  '&stoneId=' +
                  this.$route.query.stoneId +
                  '&action=' +
                  this.$route.query.action,
              });
              location.reload();
            });
          } else {
            console.log('更新商品', this.productInfo);
            serviceProduct.updateProduct(this.productInfo, (res) => {
              console.log('更新商品', res);
            });
          }
        } else {
          console.log('请输入内容');
          return false;
        }
      });
    },
    // 获取当前商品
    getCurrent() {
      console.log(this.$route.query.stoneId);
      if (!this.isCreate) {
        serviceProduct.getDetail(
          this.commodityId,
          this.$route.query.stoneId,
          (res) => {
            console.log('获取当前', res.data.data);
            this.productInfo.productName = res.data.data.productName;
            this.productInfo.id = this.commodityId + '';
            // this.productInfo.stoneName = res.data.data.stoneName;
            this.productInfo.categoryId = res.data.data.categoryId;
            this.productInfo.name = res.data.data.productName;
            this.productInfo.productDesc = res.data.data.productDesc;
          },
        );
      }
    },
    // 触发子组件方法
    appendGoods() {
      this.$refs.mychild.SubmitGoods('formName');
      // this.refresh();
    },
    shutDown() {
      this.drawer = false;
      // this.$refs[ruleForms].resetFields();
    },
    evenMore() {
      if (this.$route.query.productId === undefined) {
        this.$message({
          message: '警告，请添加商品',
          type: 'warning',
        });
        return;
      }
      this.introduce = true;
    },
    // 下拉 事件 核销员
    pullverifier(e) {
      // console.log(e)
      this.ruleForm1.cancelId = e;
    },
    refresh() {
      this.shutDown();
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
    handleClose(done) {
      this.refresh();
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
 font-size:18px;
font-weight:500;
color: #303133
}
.pl-5 {
  padding-right: 5px;
}

.box-form {
  margin-bottom: 20px;
}

.box-form .el-form-item {
  margin-left: 80px;
}
.el-textarea__inner {
  min-height: 28.9792px;
  margin-top: 0px;
  margin-bottom: 0px;
  height: 92px;
}
.el-header {
  padding: 0;
}
</style>
