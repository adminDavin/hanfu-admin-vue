<template>
  <div>
    <!-- <el-button  type="success" round>{{commodityId}}</el-button> -->
    <el-table
      :data="tableData"
      v-loading="loading"
      stripe
      @row-click="rowClick"
      highlight-current-row
      ref="multipleTable"
    >
      <el-table-column prop="goodsId" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="goodsName" label="物品名称"></el-table-column>
      <el-table-column prop="goodsDesc" label="物品描述"></el-table-column>
      <el-table-column prop="brandName" label="生产厂家"></el-table-column>
      <el-table-column prop="sellPrice" label="售卖价格"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="137"></el-table-column>
      <el-table-column prop="modifyTime" label="更新时间" width="137"></el-table-column>
      <el-table-column fixed="right" width="100" label="操作">
        <template slot-scope="scope">
          <el-button @click="editProduct(scope.row)" type="text" size="small">查看详情</el-button>
          <el-button class="ff3" @click="deleteProduct(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
      style="float: right;"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="totalSize"
      ></el-pagination>
    </div>

    <el-dialog title="查看详情" :before-close="handleClose" :visible.sync="drawer" width="60%" center>
      <el-row :gutter="20">
        <el-col :span="2">
          <div>图片管理</div>
        </el-col>
        <el-col :span="20">
          <el-form>
            <el-form-item>
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
                <!-- <div slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
              </el-upload>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :span="2">
          <div>物品管理</div>
        </el-col>
        <el-col :span="22">
                  <el-table
          :data="details"
          v-loading="loading"
          stripe
          highlight-current-row
          ref="multipleTable"
        >
          <el-table-column prop="goodsId" label="序号" width="50" align="center"></el-table-column>
          <el-table-column prop="goodsName" label="物品名称">
            <template slot-scope="scope">
              <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.goodsName"></el-input>
              <span v-show="!show">{{scope.row.goodsName}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="goodsDesc" label="物品描述">
            <template slot-scope="scope">
              <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.goodsDesc"></el-input>
              <span v-show="!show">{{scope.row.goodsDesc}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="brandName" label="生产厂家">
            <template slot-scope="scope">
              <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.brandName"></el-input>
              <span v-show="!show">{{scope.row.brandName}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="sellPrice" label="售卖价格">
            <template slot-scope="scope">
             <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.sellPrice"></el-input>
              <span v-show="!show">{{scope.row.sellPrice}}</span>
            </template>
          </el-table-column>
            <el-table-column label="划线价格" prop="linePrice">
            <template slot-scope="scope">
              <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.linePrice"></el-input>
              <span v-show="!show">{{scope.row.linePrice}}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" width="100" label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="show =!show">编辑</el-button>
              <el-button @click="modification(scope)" type="text" size="small">提交</el-button>
            </template>
          </el-table-column>
        </el-table>
        </el-col>
      </el-row>

      <!-- <el-row :gutter="10">
        <el-col :span="2">
          <div>仓库信息</div>
        </el-col>
        <el-col :span="22">
            <el-table :data="storage" stripe style="width: 60%">
            <el-table-column prop="warehouseName" label="仓库" width="180">
              <template slot-scope="scope">
                <el-select style="width:80%" v-model="scope.row.warehouseId" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.hfName"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="quantity" label="数量" width="180">
              <template slot-scope="scope">
                <el-input v-show="Display" placeholder="请输入内容" v-model="scope.row.quantity"></el-input>
                <span v-show="!Display">{{scope.row.quantity}}</span>
              </template>
            </el-table-column>
            <el-table-column fixed="right" width="100" label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="Display =true">编辑</el-button>
                <el-button @click="warehouse(scope)" type="text" size="small">提交</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row> -->

      <el-row :gutter="10">
        <el-col :span="2">
          <div>规格管理</div>
        </el-col>
        <el-col :span="22">
           <ListSpecification
          ref="child"
          details="false"
          :interconnectedID="interconnectedID"
          :detailgoodsId="detailgoodsId"
        ></ListSpecification>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="drawer = false">取 消</el-button>
        <el-button type="primary" @click="drawer = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
import serviceGoods from '@/service/goods.js';
import ListSpecification from '../list-specification';
import axios from 'axios';
export default {
  props: {
    commodityId: {
      type: String,
      default: '0',
    },
  },
  components: {
    ListSpecification,
  },
  data() {
    return {
      urlId: '',
      options: [], // 库存
      fileList: [],
      detailgoodsId: '',
      interconnectedID: 0,
      show: false,
      Display: false,
      loading: false,
      totalSize: 0,
      currpage: 1,
      tableData: [],
      productId: 0,
      drawer: false, // 抽屉组件开关
      details: [],
      storage: [], // 仓库详情
      ware: {
        warehouseName: '',
        quantity: '',
      },
    };
  },
  created() {
    this.setProducts();
    this.depot();
  },

  methods: {
    handleClose(done) {
      this.fileList = [];
      done();
    },
    // 获取仓库
    depot() {
      serviceGoods.listWareHouse((res) => {
        console.log('获取仓库', res);
        this.options = res.data.data;
      });
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
      fd.append('fileInfo1', file.raw);
      fd.append('goodsId', this.urlId);
      fd.append('timestamp', '1');
      fd.append('token', '2');
      fd.append('userId', '3');
      fd.append('requestId', '2');
      axios.post('/api/api/product/goods/addPicture', fd).then((res) => {
        // this.acquire();
      });
    },
    // 获取图片
    acquire() {
      if (this.urlId === '') {
        this.urlId = this.details[0].goodsId;
      }

      // console.log('图需要的ID', this.details[0].goodsId);
      serviceGoods.picturesAll(this.urlId, (res) => {
        this.fileList = [];
        console.log(res);
        for (let i = 0; i < res.data.data.length; i++) {
          let file = res.data.data[i];
          serviceGoods.getFileFileId(file.fileId, (res) => {
            this.fileList.push({ name: file.hfName, url: res.config.url });
            console.log(this.fileList);
          });
        }
      });
    },
    setProducts() {
      this.loading = true;
      this.productId = this.commodityId;
      console.log(this.commodityId);
      serviceGoods.getGoodsByProductId(this.productId, (res) => {
        let data = res.data.data;
        for (var i = 0; i < data.length; i++) {
          // eslint-disable-next-line no-magic-numbers
          data[i].linePrice = (data[i].linePrice / 100).toFixed(2);
          // eslint-disable-next-line no-magic-numbers
          data[i].sellPrice = (data[i].sellPrice / 100).toFixed(2);
        }
        this.tableData = data;
        console.log('tableData', data);
        this.loading = false;
      });
    },
    handleCreate(e) {
      this.$router.push({
        path: '/hf-product/detail',
      });
    },
    // 点击物品列表行触发
    rowClick(e) {
      console.log('三级连动', e.goodsId);
      // this.interconnectedID = e.goodsId;
      // this.$emit('change', e.goodsId + '');
    },
    // 详情
    editProduct(row) {

      console.log('row', row);
      this.detailgoodsId = row.goodsId;
      this.drawer = true;
      this.urlId = row.goodsId;
      this.acquire();
      serviceGoods.selectProductGoods(row.goodsId, this.commodityId, (res) => {
        let data = res.data.data;
        for (var i = 0; i < data.length; i++) {
          // eslint-disable-next-line no-magic-numbers
          data[i].linePrice = (data[i].linePrice / 100).toFixed(2);
          // eslint-disable-next-line no-magic-numbers
          data[i].sellPrice = (data[i].sellPrice / 100).toFixed(2);
        }
        this.storage = data;
        this.details = data;
        console.log('详情', res.data.data);
      });
    },
    // 修改提交
    modification(scope) {
      let row = JSON.parse(JSON.stringify(scope.row));
      // eslint-disable-next-line no-magic-numbers
      row.sellPrice = row.sellPrice * 100;
      serviceGoods.updateGood(row, (res) => {
        this.show = !this.show;
        this.setProducts();
      });
    },
    // 修改仓库
    // warehouse(scope) {
    //   console.log(scope);
    //   // eslint-disable-next-line no-magic-numbers
    //   scope.row.sellPrice = scope.row.sellPrice * 100;
    //   serviceGoods.updateGood(scope.row, (res) => {
    //     this.Display = false;
    //   });
    // },
    deleteProduct(row) {
      this.$confirm('确认删除吗？', '提示', {}).then(async () => {
        serviceGoods.deleteById(row.goodsId, (res) => {
          this.setProducts();
        });
      });
    },
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList);
      // var num = parseInt(file.url.substring(1).file.url.substring(1));
      var num = file.url.replace(/[^0-9]/gi, '');
      console.log('num', num);
      serviceGoods.deleteGoodsFile(num, (res) => {
        console.log('删除成功');
      });
    },
    handleCurrentChange(val) {
      this.currpage = val;
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  margin: 5px;
}

.boxes {
  display: flex;
}
.el-col {
  margin-top: 20px;
}
</style>

