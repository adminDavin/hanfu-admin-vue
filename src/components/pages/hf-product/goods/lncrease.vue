<template>
  <div>
    <div style="width: 100%;">
      <el-form
        :rules="rules"
        status-icon
        ref="formName"
        :model="specificationForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="物品名称" prop="goodName">
              <el-input v-model="increase.goodName" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="价格" prop="sellPrice">
              <el-input style v-model="specificationForm.sellPrice  "></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style label="划线价格" prop="linePrice">
              <el-input style v-model="specificationForm.linePrice  "></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="仓库" prop="wareHouseId">
              <el-select v-model="specificationForm.wareHouseId" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.hfName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="库存" prop="quantity">
              <el-input v-model="specificationForm.quantity"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="物品描述" prop="goodsDesc">
              <el-input type="textarea" v-model="increase.goodsDesc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- <el-form-item  style="width:100%" label prop="brandId">
          <el-button style="margin-left: 5px;" type="primary" @click="SubmitGoods('formName')">保存</el-button>
        </el-form-item>-->
      </el-form>
    </div>

    <div>
      <el-row :gutter="6">
        <el-col :span="3">
          <div>物品规格</div>
        </el-col>
        <el-col :span="16">
          <el-table :header-cell-style="styleObj" :data="specificationData" stripe>
            <el-table-column label="规格名称">
              <template slot-scope="scope">
                <el-input placeholder="请输入内容" v-model="scope.row.hfName"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="规格类型" width="120">
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

            <el-table-column label="规格单位" width="120">
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
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import serviceGoods from '@/service/goods.js';
import serviceProduct from '@/service/product.js';
export default {
  props: {
    commodityId: {
      type: String,
      default: '1',
    },
    productName: {
      type: String,
      default: '商品名字',
    },
    stoneId: {
      type: String,
      default: '',
    },
  },
  data() {
    var checkAge = (rule, value, callback) => {
      const age = /^\d+$|^\d*\.\d+$/g;
      if (!age.test(value)) {
        callback(new Error('只能为数字'));
      } else {
        callback();
      }
      // eslint-disable-next-line no-magic-numbers
    };
    return {
      styleObj: {
        background: '#F5F6FA',
      },

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
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
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
        wareHouseId: '', // 仓库ID
      },
      specificationData: [],
      // 添加物品
      increase: {
        stoneId: '', // 店铺id
        specValue: '',
        sellPrice: '', // 价格
        quantity: '', // 库存量
        productId: '1', // 商品id*
        categoryId: '', // 商品所属的类目id*
        // cancelId: '', // 核销Id *
        // claim: '', // 是否自提 *
        // member: '', // 是否为会员商品 *
        frames: '0', // 上下架*
        goodName: '', // 物品名称*
        goodsDesc: '', // 商品描述
        requestId: '123123123', // 请求id, 发起请求的随机数, 用来判断请求是否重
        token: '11238', // 登录成功后返回的token
        userId: '', // 用户id
        fileInfo1: [],
      },
      // 顶部表单验证
      rules: {
        wareHouseId: [
          { required: true, message: '请选择仓库', trigger: 'change' },
        ],
        sellPrice: [{ validator: checkAge, trigger: 'blur' },
          { required: true, message: '请输入', trigger: 'change' }],
        linePrice: [{ validator: checkAge, trigger: 'blur' },
          { required: true, message: '请输入', trigger: 'change' }],
        quantity: [{ validator: checkAge, trigger: 'blur' },
          { required: true, message: '请输入', trigger: 'change' }],
      },
    };
  },
  created() {
    this.getspecification();
    this.depot();
  },
  methods: {
    // 商品规格
    getspecification() {
      serviceProduct.specifies(this.commodityId, (res) => {
        console.log(res);
        this.specificationData = res.data.data;
      });
    },
    // 获取仓库
    depot() {
      serviceGoods.listWareHouse((res) => {
        console.log('获取仓库', res);
        this.options = res.data.data;
      });
    },
    // 添加一行物品规格值
    handleAdd() {
      let row = {
        prop: 'date',
        label: '值',
      };
      this.cols.push(row);
    },
    takeManner(label) {
      // 提货方式
      this.ruleForm1.claim = this.radio;
    },
    setPrices() {
      console.log(this.specificationForm);
      serviceGoods.setPrice(this.specificationForm, (res) => {
        console.log('添加价格', res);
      });
    },
    SubmitGoods(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var object = {};
          var Name = '';
          console.log(this.specificationData);
          for (var i = 0; i < this.specificationData.length; i++) {
            object[this.specificationData[i].id] = this.specificationData[
              i
            ].specValue;
            Name +=
              this.specificationData[i].hfName +
              ':' +
              this.specificationData[i].specValue +
              ',';
            var json = JSON.stringify(object);
          }
          console.log(json);
          this.increase.specValue = json;
          // 添加物品
          this.increase.productId = this.commodityId;
          this.increase.goodName = this.productName + ':' + Name;
          if (this.$route.query.action === 'store') {
            this.increase.stoneId = this.$route.query.stoneId;
          }
          let userId = JSON.parse(window.sessionStorage.userInfor);
          this.increase.userId = userId.id;
          console.log(this.commodityId);
          console.log(this.$route.query);
          console.log(this.increase);
          serviceGoods.addProduct(this.increase, (res) => {
            console.log(res);
            console.log(res.data.data);
            this.goosID = res.data.data;
            this.specificationForm.hfGoodsId = res.data.data;
            this.setPrices();
            this.$emit('goodsId', res.data.data);
            // 关闭弹窗
            this.$emit('shutDown', '');

            this.$message({
              message: '恭喜你，添加成功',
              type: 'success',
            });
          });
        } else {
          console.log('填写格式不对或未填写');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .el-table__empty-block {
    border: 1px solid #ccc;
  }
</style>
