<template>
  <div>
    <div v-if="detailsp">
      <div>商品规格</div>
      <el-table class="goods-table" :data="specificationData" border>
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
        <el-table-column label="默认值">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.specValue"></el-input>
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
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="save(scope)">添加</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button style="float: right;" size="mini" @click="addGoodsSpecificationList()">添加一行</el-button>
    </div>
    <div v-if="!detailsp" style="margin-top: 20px;">
      <div>物品规格</div>
      <el-table :data="tabledata" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="规格名称">
          <template slot-scope="scope">
            <span placeholder="请输入内容" >{{scope.row.hfName}}</span>
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
            <el-button type="text" style="color: rgb(24, 211, 71);" @click="submitPrice(scope)">更新</el-button>
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
  </div>
</template>

<script>
import serviceProduct from '@/service/product.js';
import serviceGoods from '@/service/goods.js';
export default {
  name: 'listSpecification',
  props: {
    commodityId: {
      type: Number,
      default: 0,
    },
    goosID: {
      type: Number,
      default: 0,
    },
    details: {
      type: String,
      default: 'true',
    },
    // 详情 interconnectedID
    detailgoodsId: {
      type: Number,
      default: 0,
    },
    interconnectedID: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      detailsp: true,
      specificationData: [], // 准备 删除
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
      // 添加物品规格获取数据
      tabledatas: [],
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
      productId: '',
      // 添加规格名称
      cols: [
        // { prop: 'date', label: '颜色' },
      ],
      // 添加商品规格
      specification: {
        specValue: '', // 默认值
        productId: '',
        hfName: '', // 规格名称
        specType: '', // 规格类型
        specUnit: '', // 规格单元
        requestId: '',
        timestamp: '',
        token: '',
        userId: '',
      },
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
    };
  },
  created() {
    this.getspecification();
    if (this.interconnectedID !== 0) {
      console.log('成功');
      this.detailsp = false;
    }
    this.goodsSpecification();
  },
  mounted () {
    var that = this;
    this.$on('bridge', () => {
      that.setDefaultValue();
      console.log('直接调用调用成功');
    });// 设置接收父组件的方法
  },
  methods: {
    callMethod() {
      console.log('方法2:直接调用调用成功');
    },
    getspecification() {
      serviceProduct.specifies(this.commodityId, (res) => {
        console.log(res);
        this.specificationData = res.data.data;
      });
    },
    // 物品规格
    goodsSpecification() {
      if (this.detailgoodsId !== 0) {
        console.log('物品规格');
        serviceGoods.goodsSpecifies(this.detailgoodsId, (res) => {
          console.log('物品规格');
          console.log('物品规格', res);
          this.tabledata = res.data.data;
        });
      } else {
        serviceProduct.specifies(this.commodityId, (res) => {
          console.log('商品规格');
          this.tabledata = res.data.data;
        });
      }
    },
    // 添加一行商品规格
    addGoodsSpecificationList() {
      let row = {
        specValue: '',
        hfName: '',
        specType: '',
        specUnit: '',
      };
      this.specificationData.push(row);
    },
    // 添加一行物品规格值
    handleAdd() {
      let row = {
        prop: 'date', label: '值',
      };
      this.cols.push(row);
    },
    // 添加商品规格
    save(scope) {
      console.log(scope);
      scope.row.show = false;
      this.specification.hfName = scope.row.hfName;
      this.specification.specValue = scope.row.specValue;
      this.specification.specType = scope.row.specType;
      this.specification.specUnit = scope.row.specUnit;
      this.specification.productId = this.commodityId;
      serviceProduct.addSpecify(this.specification, () => {
        this.$message({
          message: '添加商品规格成功',
          type: 'success',
        });
        serviceProduct.specifies(this.specification.productId, (res) => {
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
    inputEvent: function(e) {
      console.log(e.target.value); // 实时获取输入值
      this.specGoods.specValue = e.target.value;
      // console.log(index)// 获取点击输入框的索引
    },

    // 添加物品规格值
    Article(scope) {
      console.log(scope);
      console.log('2', this.tabledatas[scope.column.test].id);
      this.specGoods.goodsId = this.goosID;
      this.specGoods.productSpecId = this.tabledatas[scope.column.test].id;
      // serviceGoods.additionSpecs(this.specGoods, (res) => {
      //   console.log(res);
      // });
    },
    // 更新按钮
    submitPrice(scope) {
      console.log(scope.row);
      serviceGoods.goodsSpecUpdate(scope.row, this.detailgoodsId, (res) => {
        console.log(res);
        this.$message({
          message: '提交成功',
          type: 'success',
        });
      });

    },
  },
};
</script>
