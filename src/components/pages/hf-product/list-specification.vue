<template>
  <div>
    <div v-if="detailsp">
      <!-- <div>商品规格</div> -->
      <el-table class="goods-table" :data="specificationData" stripe>
        <!-- <el-table-column type="selection"></el-table-column> -->
        <el-table-column label="规格名称" width="110">
          <template slot-scope="scope">
            <el-input v-show="!scope.row.show" placeholder="请输入内容" v-model="scope.row.hfName"></el-input>
            <span v-show="scope.row.show">{{scope.row.hfName}}</span>
          </template>
        </el-table-column>
        <el-table-column label="规格类型" width="90">
          <template slot-scope="scope">
            <el-select :disabled="scope.row.show" v-model="scope.row.specType" placeholder="请选择">
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
            <el-input v-show="!scope.row.show" placeholder="请输入内容" v-model="scope.row.specValue"></el-input>
            <span v-show="scope.row.show">{{scope.row.specValue}}</span>
          </template>
        </el-table-column>
        <el-table-column label="规格单位" width="120">
          <template slot-scope="scope">
            <el-select :disabled="scope.row.show"  v-model="scope.row.specUnit" placeholder="请选择">
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
            <el-button type="text" size="small" @click="compile(scope.row)">编辑</el-button>
            <el-button  type="text" @click="save(scope)">保存</el-button>
            <el-button class="ff3"  type="text" style="color: red;" @click="deleteEvent(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="!detailsp" style="margin-top: 20px;">
      <!-- <div>物品规格</div> -->
      <el-table :data="tabledata" stripe>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="规格名称">
          <template slot-scope="scope">
            <span placeholder="请输入内容" >{{scope.row.hfName}}</span>
          </template>
        </el-table-column>
        <el-table-column label="规格类型" width="120">
          <template slot-scope="scope">
            <el-select disabled v-model="scope.row.specType" placeholder="请选择">
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
            <el-input v-show="scope.row.show" placeholder="请输入内容" v-model="scope.row.specValue"></el-input>
            <span v-show="!scope.row.show">{{scope.row.specValue}}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column v-for="(item,i) in cols" :key="i" :prop="item.prop" :label="item.label">
            <template slot-scope="scope">
              <input value @input="inputEvent($event)" @blur="Article(scope)" ref="abc" />
            </template>
        </el-table-column> -->
        <el-table-column label="规格单位" width="90">
          <template slot-scope="scope">
            <el-select disabled v-model="scope.row.specUnit" placeholder="请选择">
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
            <el-button type="text" style="color: rgb(24, 211, 71);" @click="scope.row.show=!scope.row.show">编辑</el-button>
            <el-button type="text" style="color: rgb(24, 211, 71);" @click="submitPrice(scope)">保存</el-button>
            <!-- <el-button type="text" style="color: rgb(218, 18, 28);" @click="deletion(scope)">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
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
      type: String,
      default: '',
    },
    goosID: {
      type: Number,
      default: 0,
    },
    details: {
      type: String,
      default: 'true',
    },
    // 详情
    detailgoodsId: {
      type: Number,
      default: 0,
    },
    interconnectedID: {
      type: Number,
      default: 0,
    },
    // 联动
    letter: String,
  },
  data() {
    return {
      show: false,
      detailsp: true,
      specificationData: [], // 准备 删除
      // 添加物品规格 展示数据
      tabledata: [

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
        // 更新用的
        productSpecId: '',
        specName: '',
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

  watch: {
    interconnectedID(newValue, oldValue) {
      console.log('查看详情触发', newValue);
      serviceGoods.goodsSpecifies(newValue, (res) => {
        console.log('物品规格1');
        console.log('物品规格1', res);
        this.tabledata = res.data.data;
      });
    },
    letter () {
      if (this.letter) {
        console.log('三级连动规格触发', this.letter);
        this.detailsp = false;
        serviceGoods.goodsSpecifies(this.letter, (res) => {
          console.log('物品规格');
          console.log('物品规格', res);
          this.tabledata = res.data.data;
        });
      }
    },
  },
  created() {
    this.getspecification();
    // if (this.interconnectedID !== 0) {
    //   console.log('成功');
    //   this.detailsp = false;
    // }
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
    compile(row) {
      // console.log(row);
      row.show = !row.show;
    },
    // 删除商品规格
    deleteEvent(id) {
      this.$confirm('此操作将会删除该活动, 是否继续?', '提示', {}).then(() => {
        console.log(id);
        serviceProduct.deleteSpecifies(id, () => {
          this.$message({
            showClose: true,
            message: '恭喜你，删除成功',
            type: 'success',
          });
          this.getspecification();
        });
      });
    },

    rowClick() {
      console.log('子联动', this.interconnectedID);
    },
    callMethod() {
      console.log('方法2:直接调用调用成功');
    },
    getspecification() {
      if (this.commodityId !== '') {
        serviceProduct.specifies(this.commodityId, (res) => {
          console.log(res);
          this.specificationData = res.data.data;
        });
      }
    },
    // 物品规格
    goodsSpecification() {
      console.log('111');
      if (this.detailgoodsId !== 0) {
        console.log('物品规格');
        this.detailsp = false;
        serviceGoods.goodsSpecifies(this.detailgoodsId, (res) => {
          console.log('物品规格');
          console.log('物品规格', res);
          this.tabledata = res.data.data;
        });
      } else if (this.commodityId !== '') {
        serviceProduct.specifies(this.commodityId, (res) => {
          console.log('商品规格');
          console.log('商品规格', res);
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
        show: false,
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
      if (scope.row.hfName === '') {
        this.$message.error('规格名称不能为空');
        return;
      }
      if (scope.row.id === undefined) {
        console.log('添加');
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
          scope.row.show = !scope.row.show;
          this.getspecification();
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
      } else {
        console.log('更新');
        this.specification.specName = scope.row.hfName;
        this.specification.productSpecId = scope.row.id;
        this.specification.specUnit = scope.row.specUnit;
        this.specification.productId = this.commodityId;
        this.specification.specValue = scope.row.specValue;
        serviceProduct.updatespec(this.specification, () => {
          this.$message({
            message: '更新商品规格成功',
            type: 'success',
          });
          scope.row.show = !scope.row.show;

        });
      }
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
