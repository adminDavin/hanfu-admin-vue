<template>
  <!---------------------------------- 分销 -------------------------------------------------- -->
  <div>
    <el-card class="search-card">
      <hfsearch :labelType='labelType' @parentByClick="childClick" labelName="活动名称"></hfsearch>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button
          class="clearfix"
          style="float: right;margin: 8px;"
          @click="addGoodsSpecificationList"
          type="primary"
        >添加活动</el-button>
      </div>
      <!-- 活动列表展示 -->
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        @row-click="rowChange"
        @selection-change="eventsSelectionChange"
        style="width: 100%"
      >
        <el-table-column checked type="selection" width="55"></el-table-column>
        <el-table-column prop="activityName" label="活动名称">
        </el-table-column>
        <el-table-column label="活动类型" prop="activityType">
          <span>分销</span>
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间">
          <template slot-scope="scope">
            <el-date-picker
              value-format="yyyy-MM-dd HH:mm:ss"
              v-model="scope.row.startTime"
              type="datetime"
              placeholder="开始时间"
              align="right"
              default-time="12:00:00"
            ></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="endtime" label="结束时间">
          <template slot-scope="scope">
            <el-date-picker
              value-format="yyyy-MM-dd HH:mm:ss"
              v-model="scope.row.endTime"
              type="datetime"
              placeholder="结束时间"
              align="right"
              default-time="12:00:00"
            ></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button class="ffc" type="text" @click="centerDialogVisible=true" size="mini">查看</el-button>
            <el-button type="text" @click="editEvent(scope.row)" size="mini">编辑</el-button>
            <el-button class="ff3" type="text" @click="deleteEvent(scope.row.id)" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="所有商品" :visible.sync="dialogTableVisible">
        <el-table
          ref="multipleTable"
          :data="gridData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="商品ID">
            <template slot-scope="scope">{{ scope.row.id}}</template>
          </el-table-column>
          <el-table-column label="商品描述">
            <template slot-scope="scope">{{ scope.row.goodsDesc}}</template>
          </el-table-column>
        </el-table>
      </el-dialog>

      <el-dialog title="编辑" :visible.sync="editboxVisible">
        <el-table :data="addActivities" style="width: 100%">
          <el-table-column prop="hfName" label="活动名称">
            <template slot-scope="scope">
               <el-input v-show="show" placeholder="请输入内容" v-model="scope.row.activityName"></el-input>
                   <span v-show="!show">{{scope.row.activityName}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="startTime" label="开始时间">
            <template slot-scope="scope">
              <el-date-picker
              :disabled="disabled"
                v-model="scope.row.startTime"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="开始时间"
                align="right"
                default-time="12:00:00"
              ></el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop="endTime" label="结束时间">
            <template slot-scope="scope">
              <el-date-picker
              :disabled="disabled"
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="scope.row.endTime"
                type="datetime"
                placeholder="结束时间"
                align="right"
                default-time="12:00:00"
              ></el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop="stopTime" label="操作">
            <template slot-scope="scope">
                <el-button type="text" @click="addGcommodity(scope)" size="mini">保存</el-button>
                <el-button type="text" @click="modification" size="mini">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin: 6px;">给活动添加商品部分</div>
        <el-form width="40%" :inline="true" :model="transfedata" class="demo-form-inline">
          <el-form-item label="商品ID">
            <el-input v-model="transfedata.goodsId" placeholder="商品ID"></el-input>
          </el-form-item>
          <el-form-item label="活动ID">
            <el-input v-model="transfedata.seniorityId" placeholder="活动ID"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
          </el-form-item>
        </el-form>

        <el-table
          ref="multipleTable"
          :data="gridData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="商品ID">
            <template slot-scope="scope">{{ scope.row.id}}</template>
          </el-table-column>
          <el-table-column label="商品名字">
            <template slot-scope="scope">{{ scope.row.productName}}</template>
          </el-table-column>
          <el-table-column label="商品描述">
            <template slot-scope="scope">{{ scope.row.productDesc}}</template>
          </el-table-column>
          <el-table-column label="店铺名称">
            <template slot-scope="scope">{{ scope.row.stoneName}}</template>
          </el-table-column>
        </el-table>
      </el-dialog>

      <el-drawer title="商品分销设置" :visible.sync="drawer" size="80%" direction="btt">
        <el-row type="flex" class="row-bg">
          <el-table
            ref="multipleTable"
            :data="proportionlist"
            stripe
            tooltip-effect="dark"
            style="width: 100%;margin-top: 30px;"
            :select-all="dianji(selection)"
            @selection-change="eventsSelectionChange"
          >
            <el-table-column label="序列号" type="index" width="70"></el-table-column>
            <el-table-column label="商品名称">
              <template slot-scope="scope">{{ scope.row.productName}}</template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip></el-table-column>
            <el-table-column prop="modifyTime" label="修改时间" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="操作">
              <!-- <template slot-scope="scope">

              </template>-->
            </el-table-column>
          </el-table>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="12">
            <div></div>
            <div>分销比例设置</div>
            <div>
              <el-table class="goods-table" :data="Placelist" border>
                <el-table-column type="selection"></el-table-column>
                <el-table-column label="分销名称" width="90">
                  <template slot-scope="scope">
                    <el-select v-model="scope.row.name" placeholder="请选择">
                      <el-option
                        v-for="item in Types"
                        :key="item.index"
                        :label="item.name"
                        :value="item.index"
                      ></el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="分销比例">
                  <template slot-scope="scope">
                    <el-input placeholder="请输入内容" v-model="scope.row.ratio"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="店铺名称">
                  <template slot-scope="scope">{{ scope.row.stoneName}}</template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button type="text" @click="SettingPrice(scope.row)" size="mini">保存</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-button style="float: right;" size="mini" @click="addGoodsList()">添加分销</el-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-drawer>
    </el-card>

    <el-dialog title="查看物品" :visible.sync="centerDialogVisible" width="60%" center>
      <el-table
        ref="multipleTable"
        :data="eventsGoods"
        stripe
        tooltip-effect="dark"
        style="width: 100%;margin-top: 30px;"
        :select-all="dianji(selection)"
        @selection-change="eventsSelectionChange"
      >
        <el-table-column label="序列号" type="index" width="70"></el-table-column>
        <el-table-column label="商品名称">
          <template slot-scope="scope">{{ scope.row.productName}}</template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="modifyTime" label="修改时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <!-- <el-button type="text" @click="SettingPrice(scope.row)" size="mini">保存</el-button> -->
            <el-button type="text" @click="lookover(scope.row)" size="mini">查看</el-button>
            <el-button class="ff3" type="text" @click="deleteArticle(scope.row.id)" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import store from '@/store';
import serviceEvents from '@/service/eventsManage.js';
import hfsearch from './hf-search.vue';
export default {
  components: { hfsearch },
  props: ['labelType'],
  data() {
    return {
      show: false,
      disabled: true,
      centerDialogVisible: false,
      Types: [
        {
          index: '1',
          name: '一级',
        },
        {
          index: '2',
          name: '二级',
        },
        {
          index: '3',
          name: '三级',
        },
      ],
      proportionlist: [], // 抽屉里的
      Placelist: [], // 列表
      drawer: false,
      imageUrl: '',
      fileList: [], // 图片
      dialogTableVisible: false,
      editboxVisible: false, // 编辑
      selection: [],
      activeIndex: '1',
      // 添加精选
      groupform: {
        activityName: '', // 活动名称
        activityType: 'distributionActivity', // 活动类型
        startTime: '', // 开始时间
        endTime: '', // 结束时间
        timestamp: '2', // 当前时间
        token: '1',
        userId: '1',
        requestId: '2', // 随机数
      },
      // options: [], // 下拉框
      transfedata: {
        goodsId: '',
        seniorityId: '',
        id: '',
        distributionRatio: '',
        timestamp: '2', // 当前时间
        token: '1',
        userId: '1',
        requestId: '2', // 随机数
      },
      // eventsId: [], // 保存活动ID
      // goodsId: [], // 保存商品ID
      // 第一个表单
      addActivities: [],
      // 表单
      tableData: [],
      // 弹窗数据
      gridData: [],
      // 活动下物品列表
      eventsGoods: [],
    };
  },
  created() {
    this.getselect();
    this.setProducts();
    this.geteventType();
  },
  methods: {

    childClick(tableData) {
      if (tableData === -1) {
        this.getselect();
      } else {
        this.tableData = tableData;
      }
    },
    modification() {
      this.disabled = !this.disabled;
      this.show = !this.show;
      console.log('12');
    },
    // 添加一行分销
    addGoodsList() {
      let row = {
        ratio: '',
        name: '',
      };
      console.log(this.Placelist);
      this.Placelist.push(row);
    },
    // 获取商品活动类型
    geteventType() {
      serviceEvents.getProdcutActivityType((res) => {
        console.log('获取商品活动类型', res.data.data);
        this.options = res.data.data;
      });
    },
    // 添加一行商品规格
    addGoodsSpecificationList() {
      let row = {
        activityName: '', // 活动名称
        activityType: '', // 活动类型
        startTime: '', // 开始时间
        endTime: '', // 结束时间
      };
      this.show = true;
      this.disabled = false;
      this.transfedata.seniorityId = '';
      this.addActivities = [];
      this.editboxVisible = true;
      this.addActivities.push(row);
    },
    // 绑定 里的确定按钮
    onSubmit() {
      serviceEvents.seniorityBinding(this.transfedata, (res) => {
        console.log('绑定商品', res);
        if (res.data.data === -1) {
          this.$message({
            message: '警告，请勿重复添加',
            type: 'warning',
          });
          // eslint-disable-next-line no-magic-numbers
        } else if (res.data.data === -2) {
          this.$message({
            message: '警告，此商品已经过其他活动',
            type: 'warning',
          });
        } else {
          this.$message({
            showClose: true,
            message: '恭喜你，添加成功',
            type: 'success',
          });
        }
        serviceEvents.getActivityProductList(
          this.transfedata.seniorityId,
          (res) => {
            console.log('活动商品列表信息', res);
            // this.eventsGoods = res.data.data;
            let ventsGood = res.data.data;
            for (let vaents of ventsGood) {
              console.log(vaents);
              // eslint-disable-next-line valid-typeof
              if (typeof vaents.distributionRatio !== null) {
                vaents.distribut = JSON.parse(vaents.distributionRatio);
                console.log(vaents.distribut);
              }
            }
            this.eventsGoods = res.data.data;
            console.log('distribut', res.data.data.distribut);
            this.Placelist = res.data.data.distribut;
            console.log(this.Placelist);
          },
        );
      });
    },
    // 查看
    lookover(row) {
      this.proportionlist = [];
      this.drawer = true;
      console.log(row);
      this.transfedata.id = row.id;
      this.Placelist = row.distribut;
      this.proportionlist.push(row);
    },
    // 保存价格比例
    SettingPrice(row) {
      console.log(row);
      let comma = ',';
      this.transfedata.distributionRatio =
        'name:' + row.name + comma + 'ratio:' + row.ratio;
      console.log(this.transfedata.distributionRatio);
      console.log(this.transfedata.distributionRatio);
      serviceEvents.updateActivityProduct(this.transfedata, (res) => {
        console.log('保存比例', res.data.data);
        if (res.data.data === '-1') {
          console.log('错误，请按照顺序添加');
          this.$message.error('错误，请按照顺序添加');
        }
      });
    },
    // 编辑
    editEvent(row) {
      console.log(row);
      this.show = false;
      this.disabled = true;
      this.addActivities = [];
      this.editboxVisible = true;
      this.addActivities.push(row);
    },
    // 点击一行触发
    rowChange(row) {
      console.log(row);
      this.eventsGoods = [];
      this.transfedata.seniorityId = row.id;
      if (row.id !== undefined) {
        console.log('阻止');
        serviceEvents.getActivityProductList(row.id, (res) => {
          console.log('活动商品列表信息', res);
          // this.eventsGoods = res.data.data;
          let ventsGood = res.data.data;
          for (let vaents of ventsGood) {
            console.log(vaents);
            // eslint-disable-next-line valid-typeof
            if (typeof vaents.distributionRatio !== null) {
              vaents.distribut = JSON.parse(vaents.distributionRatio);
              console.log(vaents.distribut);
            }
          }
          this.eventsGoods = res.data.data;
          this.Placelist = res.data.data.distribut;
          console.log(this.Placelist);
        });
      }
    },

    handleCurrentChange(val) {
      this.currentRow = val;
    },
    // 查询排行相关信息
    getselect() {
      serviceEvents.findProdcutActivity('', (res) => {
        console.log('分销商品', res.data.data);
        this.tableData = res.data.data;
        if (res.data.data.length !== 0) {
          let seniorityId = res.data.data[0].id;
          if (seniorityId !== undefined) {
            serviceEvents.getActivityProductList(
              seniorityId,
              (res) => {
                console.log('活动分销商品列表信息', res);
                let ventsGood = res.data.data;
                // eslint-disable-next-line no-debugger
                // debugger;
                for (let vaents of ventsGood) {
                  console.log(vaents);
                  vaents.distribut = JSON.parse(vaents.distributionRatio);
                  console.log(vaents.distribut);
                  this.Placelist.push(vaents.distribut);
                }
                this.eventsGoods = ventsGood;
                for (var i = 0; i < this.eventsGoods.length; i++) {
                  if (this.eventsGoods[i].distribut === null) {
                    this.eventsGoods[i].distribut = [];
                  }
                }
                console.log('分销查看', this.eventsGoods);
              },
            );
          }
        }
      });
    },

    //  添加排行相关信息 timestamp  repertory
    addGcommodity(scope) {
      this.groupform.activityName = scope.row.activityName;
      this.groupform.startTime = scope.row.startTime;
      this.groupform.endTime = scope.row.endTime;
      console.log('parathis.groupformms', this.groupform);
      console.log('保存');

      console.log(scope);
      if (scope.row.id === undefined) {
        console.log('保存');
        serviceEvents.ceateInsert(this.groupform, (res) => {
          console.log('精选', res);
          this.$message({
            showClose: true,
            message: '恭喜你，添加成功',
            type: 'success',
          });
          this.getselect();
          this.transfedata.seniorityId = res.data.data;
        });
      } else {
        console.log('更新');
        this.preserveModify(scope);
      }
      console.log('scope', scope);
    },
    // 获取所有商品
    setProducts() {
      serviceEvents.selectAll((res) => {
        console.log('所有商品', res);
        this.gridData = res.data.data;
      });
    },
    // 单个删除活动商品
    deleteEvent(seniorityId) {
      this.$confirm('此操作将会删除该活动, 是否继续?', '提示', {}).then(() => {
        console.log(seniorityId);
        serviceEvents.eventsDelete(seniorityId, () => {
          this.$message({
            showClose: true,
            message: '恭喜你，删除成功',
            type: 'success',
          });
        });
        this.getselect();
      });
    },
    // 修改活动名称
    preserveModify(scope) {
      this.groupform.activityName = scope.row.activityName;
      this.groupform.id = scope.row.id;
      this.groupform.startTime = scope.row.startTime;
      this.groupform.endTime = scope.row.endTime;
      serviceEvents.updateProdcutActivity(this.groupform, (res) => {
        console.log('修改活动', res);
        this.$message({
          showClose: true,
          message: '恭喜你，修改成功',
          type: 'success',
        });
        this.getselect();
      });
    },
    // 删除活动里的商品
    deleteArticle(id) {
      this.$confirm('此操作将会删除该活动, 是否继续?', '提示', {}).then(() => {
        console.log(id);
        serviceEvents.deleteGoods(id, () => {
          this.$message({
            showClose: true,
            message: '恭喜你，删除成功',
            type: 'success',
          });
        });
        this.getselect();
      });
    },
    // 查看
    view(seniorityId) {
      console.log(seniorityId);
      serviceEvents.seniorityfindSeniorityContent(seniorityId, (res) => {
        console.log(res);
      });
    },
    dianji(selection) {
      console.log(selection);
    },

    eventsSelectionChange(val) {
      console.log('活动', val);
      this.transfedata.seniorityId = [];
      for (let i = 0; i < val.length; i++) {
        // this.transfedata.seniorityId = val[i].id;
      }
      console.log('this.eventsId', this.transfedata.seniorityId);
    },
    handleSelectionChange(val) {
      this.transfedata.goodsId = [];
      console.log('选中的值', val);
      let arr = val;
      for (let i = 0; i < arr.length; i++) {
        this.transfedata.goodsId = val[i].id;
        this.transfedata.instanceId = val[i].instanceId + '';
      }
      console.log(this.transfedata.goodsId);
    },

    changeFile(file, fileList) {
      this.fileInfo = file.raw;
      console.log(file.raw);
    },
  },
};
</script>

<style lang="less" scoped>
.el-input__inner {
  width: 50%;
}
.search-card {
  // margin: 0 5px 5px 5px;
  margin-bottom: 25px;
}
</style>
