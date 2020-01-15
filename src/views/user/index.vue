<template>
  <div
    style="width: 95%;height: 90%;background:#ffffff;margin: 0 auto;margin-top:60px;"
  >
    <div style="width: 100%;height:500px; ">
      <div style="width: 100%;height: 50px;border-bottom: 1px solid #cccccc;">
        <span style="margin-left: 30px;line-height:50px;">用户管理</span>
        <div
          style="float: right;line-height: 50px;margin-right: 60px;color: #A3A0FB;"
        >
          今日取消：300
        </div>
        <div
          style="float: right;line-height: 50px;margin-right: 60px;color: #A3A0FB;"
        >
          兴趣人群：300
        </div>
        <div
          style="float: right;line-height: 50px;margin-right: 60px; color: #A3A0FB;"
        >
          今日新增：300
        </div>
        <div
          style="float: right;line-height: 50px;margin-right: 60px;color: #A3A0FB;"
        >
          用户总量：300
        </div>
      </div>
      <!-- <div class="block">
        <span class="demonstration">注册时间</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          style="margin-left: 100px;margin-left: 45px;"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>

      <div class="block2">
        <span class="leijixiaof" style>累计消费</span>
        <span style="margin-left: 10px;"></span>
        <el-input v-model="input" placeholder="请输入内容" style="width: 15%;margin-left:40px;"></el-input>
        <span style="margin-left: 10px;">至</span>
        <el-input v-model="input2" placeholder="请输入内容" style="width: 15%;margin-left:20px;"></el-input>
      </div>
      <div class="block3">
        <div>
          关键词
          <el-input v-model="input1" placeholder="请输入退款编号" style="width:20%;margin-left: 60px;"></el-input>
          <span style="margin-left: 10px;">客户身份</span>
          <el-select v-model="value" placeholder="请选择" style="margin-left: 20px;">
            <el-option
              v-for="item in identity"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span style="margin-left: 10px;">性别</span>
          <el-select v-model="xingbie" placeholder="请选择" style="margin-left: 20px;">
            <el-option
              v-for="item in sex"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>

        <div style="margin-top: 20px;">
          购买次数
          <el-input
            style="margin-left: 45px;"
            class="input1"
            v-model="form.input"
            placeholder="请输入内容"
          ></el-input>
          <span style="margin-left: 10px;">至</span>
          <el-input class="input2" v-model="form.input1" placeholder="请输入内容"></el-input>
          <span style="margin-left: 10px;">单价</span>
          <el-input class="input2" v-model="form.input2" placeholder="请输入内容"></el-input>
          <span style="margin-left: 10px;">至</span>
          <el-input class="input2" v-model="form.input3" placeholder="请输入内容"></el-input>
        </div>
      </div> -->

      <!-- <div style="width:22%;height: 60px;margin: 0 auto;margin-top: 30px;">
        <div
          style="float: left;width:50%;height:60px;text-align: center;line-height: 60px;background: #A3A0FB;border-radius: 5px;color: #ffffff;haixuan"
          @click="shaixuan()"
        >筛选</div>
        <div
          style="float: left;width: 50%;height:60px;text-align: center;line-height: 60px;color: #A3A0FB;"
        >重置筛选条件</div>
      </div> -->

      <!-- <div style="width: 100%;height:100%;background:#ffffff;">
        <div
          style="width:8%;height:40px;text-align: center;line-height: 40px;background: #ffffff;color: #cccccc;border-radius: 5px;float:right;margin-right: 40px;margin-top: 50px;border: 1px solid #cccccc;"
        >批量管理</div> -->
      <div
        style="width:8%;height:40px;text-align: center;line-height: 40px;background: #A6A3FB;color: #ffffff;border-radius: 5px;float: right;margin-right: 20px;margin-top: 50px;"
        @click="dialogVisible = true"
      >
        <el-button type="primary" @click="dialogVisible = true" class="bg"
          >+添加会员</el-button
        >
      </div>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%;text-align: center;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="120"
          style="text-align: center;"
        ></el-table-column>
        <el-table-column label="序号" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="昵称" align="center">
          <template slot-scope="scope">{{ scope.row.realName }}</template>
        </el-table-column>
        <el-table-column label="性别" align="center">
          <template slot-scope="scope">{{
            scope.row.sex === 1 ? "男" : "女"
          }}</template>
        </el-table-column>

        <el-table-column align="center" label="所在地">
          <template slot-scope="scope">{{ scope.row.region }}</template>
        </el-table-column>
        <el-table-column
          prop="userLevel"
          width="160"
          label="等级"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.userLevel }}</template>
        </el-table-column>
        <el-table-column
          prop="createDate"
          label="关注时间"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.createDate }}</template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="余额"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.chengjiao }}</template>
        </el-table-column>
        <!-- <el-table-column
            prop="address"
            label="成交"
            align="center"
            show-overflow-tooltip
          >
            <template slot-scope="scope">{{ scope.row.chengjiao }}</template>
          </el-table-column>-->
        <el-table-column fixed="right" label="操作" width="260" align="center">
          <template slot-scope="scope">

            <!-- ---------------------------------------------------------------------------- -->
            <el-button type="text" @click="dialog = true"
              size="small"
              style="color: #A6A3FB;"
              modal="false"
              >设置权益卡</el-button
            >
            <el-dialog
              title="会员管理"
              :visible.sync="dialog"
              width="845px"
              height="480px"
              :before-close="handleClose"
            >
            <div class="zt">
          <!-- 左侧 -->
          <div class="left">
            <div class="lei">
              <div class="zr">
                客户身份
              </div>
              <div class="zr_1">
                <el-radio v-model="radio" label="1">会员</el-radio>
                <el-radio v-model="radio" label="2">非会员</el-radio>
              </div>
            </div>
            <div class="lei">
              <div class="zr">
                手机号
              </div>
              <div class="zr_2">
                <el-input
                  v-model="input_input"
                  placeholder="请输入手机号"
                  class="sr"
                ></el-input>
              </div>
            </div>
            <div class="lei">
              <div class="zr">姓名</div>
              <div class="zr_2">
                <el-input
                  v-model="input_1"
                  placeholder="请输入姓名"
                  class="sr"
                ></el-input>
              </div>
            </div>
            <div class="lei">
              <div class="zr">性别</div>
              <div class="zr_1">
                <el-radio v-model="radio_1" label="1">男</el-radio>
                <el-radio v-model="radio_1" label="2">女</el-radio>
              </div>
            </div>
            <div class="lei">
              <div class="zr">是否核销员</div>
              <div class="zr_1">
                <el-radio v-model="radio_2" label="1">是</el-radio>
                <el-radio v-model="radio_2" label="2">否</el-radio>
              </div>
            </div>
          </div>
          <!-- 右侧 -->
          <div class="right">
            <div class="lei">
              <div class="zr">标签</div>
              <div class="sr">
                <el-select v-model="value" placeholder="全部">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="lei">
              <div class="zr">生日</div>
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </div>
            </div>
            <div class="lei">
              <div class="zr">地域</div>
              <div class="sr">
                <el-select v-model="value" placeholder="全部">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="lei">
              <div class="zr">备注</div>
              <div class="sr">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="textarea"
                ></el-input>
              </div>
            </div>
          </div>
        </div>
              <!-- ------------------------------------------------------------- -->
                <el-button @click="dialog = false" class="input">取 消</el-button>
                <el-button type="primary" @click="dialog = false" class="input_1"
                  >确 定</el-button
                >

            </el-dialog>
            <!-- <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small "
              style="color: #FFCE26;"
              >添加标签</el-button -->
            <!-- > -->
            <!-- <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
              style="color: #FF318A;"
              >联系客户</el-button
            > -->
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px"></div>

      <el-dialog
        title="会员管理"
        :visible.sync="dialogVisible"
        width="845px"
        height="480px"
        :before-close="handleClose"
      >
        <!-- 整体 -->
        <div class="zt">
          <!-- 左侧 -->
          <div class="left">
            <div class="lei">
              <div class="zr">
                客户身份
              </div>
              <div class="zr_1">
                <el-radio v-model="radio" label="1">会员</el-radio>
                <el-radio v-model="radio" label="2">非会员</el-radio>
              </div>
            </div>
            <div class="lei">
              <div class="zr">
                手机号
              </div>
              <div class="zr_2">
                <el-input
                  v-model="input"
                  placeholder="请输入手机号"
                  class="sr"
                ></el-input>
              </div>
            </div>
            <div class="lei">
              <div class="zr">姓名</div>
              <div class="zr_2">
                <el-input
                  v-model="input1"
                  placeholder="请输入姓名"
                  class="sr"
                ></el-input>
              </div>
            </div>
            <div class="lei">
              <div class="zr">性别</div>
              <div class="zr_1">
                <el-radio v-model="radio_1" label="1">男</el-radio>
                <el-radio v-model="radio_1" label="2">女</el-radio>
              </div>
            </div>
          </div>
          <!-- 右侧 -->
          <div class="right">
            <div class="lei">
              <div class="zr">标签</div>
              <div class="sr">
                <el-select v-model="value" placeholder="全部">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="lei">
              <div class="zr">生日</div>
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </div>
            </div>
            <div class="lei">
              <div class="zr">地域</div>
              <div class="sr">
                <el-select v-model="value" placeholder="全部">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="lei">
              <div class="zr">备注</div>
              <div class="sr">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="textarea"
                ></el-input>
              </div>
            </div>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false" class="input"
            >取 消</el-button
          >
          <el-button type="primary" @click="saveUser" class="input_1">
            确定
          </el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import api from '@/api/user-api.js'
export default {
  data () {
    return {
      form: {
        contact: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input6: '',
        input5: ''
      },

      radio: '1', // 弹窗里的
      radio_1: '1', // 弹窗里的
      radio_2: '1',
      input: '', // 弹窗里的
      dialogVisible: false, // 弹窗里的
      dialog: false,
      input1: '',
      input2: '',
      value: '',
      xingbie: '',
      textarea: '', // 弹窗里的

      sex: [
        {
          value: '选项1',
          label: '女'
        },
        {
          value: '选项2',
          label: '男'
        }
      ],
      identity: [
        {
          value: '选项1',
          label: '会员'
        },
        {
          value: '选项2',
          label: '非会员'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: '',
      value2: '',
      tableData: [],
      multipleSelection: []
    }
  },
  created () {
    this.getcategory()
  },
  methods: {
    // 获取用户列表
    async getcategory () {
      api
        .categoryId()
        .then(res => {
          this.tableData = res.data.data
          console.log('用户列表', res)
        })
        .catch(function (err) {
          console.log(err)
        })
    },

    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    shaixuan () {
      // console.log('asdadsa')
    },
    saveUser () {
      console.log('保存用户')
    },
    // 添加
    // dialogVisibl () {
    //   this.$http
    //     .get('/log/user/address/addAddress')
    //     .then(res => {
    //       this.tableData = res.data.data
    //       console.log('类目', this.onecatalogues)
    //     })
    //     .catch(function (error) {
    //       alert(error)
    //     })
    // }
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }

}
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
  background: #cccccc;
}
div {
  cursor: pointer;
}
.block {
  margin-left: 200px;
  margin-top: 60
  px;
}
.block2 {
  margin-top: 30px;
}
.block3 {
  margin-top: 30px;
  margin-left: 200px;
}
.input1 {
  width: 15%;
  margin-left: 105px;
}
.input2 {
  width: 15%;
  margin-left: 20px;
}
.leijixiaof {
  margin-left: 200px;
}
.el-table {
  margin-top: 40px;
}
.text {
  font-size: 18px;
}
.dialog-footer {
  text-align: center;
}
/* // 整体 */
.zt {
  display: flex;
}
/* // 左侧 */
.left {
  flex: 1;
}
.lei {
  display: flex;
  padding-top: 41px;
}
.sr {
  width: 186px;
  height: 36px;
}
.zr {
  width: 80px;
  height: 36px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  /* // padding-left: 73px; */
  line-height: 36px;
  text-align: center;
  overflow: hidden;
}
.zr_1 {
  margin-left: 39px;
  line-height: 36px;
}

/* // 右侧 */
.right {
  flex: 1;
}
.sr {
  margin-left: 37px;
}
.block {
  margin-left: 37px;
}
.input {
  width: 118px;
  height: 36px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(235, 237, 240, 1);
  border-radius: 4px;
  margin-right: 40px;
}
.input_1 {
  width: 118px;
  height: 36px;
  background: rgba(163, 160, 251, 1);
  border-radius: 4px;
}
.bg {
  background-color: #a3a0fb;
}
.el-button--primary {
  border: none !important;
}
</style>
