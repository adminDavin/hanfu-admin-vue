<template>
  <div>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <el-form
        style="background: #fff;padding: 40px 0 20px 20px; "
        :inline="true"
        title="编辑商品"
        :model="bianrow"
        label-width="80px"
        :rules="bianRules"
        ref="bianForm"
      >
        <div style="font-size: 17px;margin-bottom: 30px;">商品编辑</div>

        <el-form-item style="margin-bottom:50px;" label>
          <div style="font-size: 15px;">商品名称:</div>
        </el-form-item>
        <el-form-item label prop="goodName">
          <el-input v-model="bianrow.goodName" auto-complete="off"></el-input>
        </el-form-item>
        <br />
        <el-form-item style="margin-bottom:50px;" label>
          <div style="font-size: 15px;">商品描述:</div>
        </el-form-item>
        <el-form-item label prop="goodsDesc">
          <el-input
            v-model="bianrow.goodsDesc"
            auto-complete="off"
            style="width: 500px;"
            type="textarea"
            resize="none"
          ></el-input>
        </el-form-item>
        <br />

        <!-- <el-form-item style="margin-bottom:50px;" label>
          <div style="font-size: 15px;">商品分类:</div>
        </el-form-item> -->
        <!-- <el-form-item label>
          <el-input
            v-model="bianrow.productCategoryName"
            auto-complete="off"
            prop="productCategoryName"
          ></el-input>
        </el-form-item> -->
        <br />
        <el-form-item style="margin-bottom:50px;" label>
          <div style="font-size: 15px;">商品ID:</div>
        </el-form-item>
        <el-form-item label>
          <el-input disabled v-model="bianrow.id" auto-complete="off" prop="id"></el-input>
        </el-form-item>
        <br />
        <el-button type="primary" @click="bianjiSubmit" :loading="addLoading">提交</el-button>
      </el-form>
      <!-- --------------------------------------------------------------------------------------------------------------------------------------- -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>型号单价</span>
        </div>
        <!-- 商品型号 -->
        <span style="position: relative;top: 20px;left:220px">商品型号</span>
        <div class="kaipi">
          <el-button class="sc-delete" type="text">删除型号</el-button>
          <div>
            <el-input
              v-model="input"
              style="width:304px;height: 32px; margin: 24px 0"
              placeholder="请输入内容"
            ></el-input>
            <!-- 单选按钮 -->
            <el-checkbox v-model="checked">添加规格图片</el-checkbox>
          </div>
          <!-- 标签 -->
          <el-tag
            :key="tag"
            v-for="tag in specificationForm.specValue"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <!-- 图片上传图片 -->
          <!-- <el-upload
          action="/api/goods/addPicture"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          name="fileInfo"
          file="file"
          :data="{...specificationForm }"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>-->
          <el-upload
            ref="upload"
            class="upload-poster"
            accept=".jpg, .jpeg, .png, .gif, .bmp, .JPG, .JPEG, .GIF, .BMP"
            action
            list-type="picture-card"
            :on-remove="onRemove"
            :on-change="imgPreview"
            :auto-upload="false"
          >
            <i class="el-icon-plus"></i>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="fileInfo " alt />
            </el-dialog>
          </el-upload>
          <el-input v-model="AddColor" style="width:194px; height:32px;" placeholder="请输入内容"></el-input>
          <el-button @click="submit" style="margin:8px">添加商品规格</el-button>
          <el-input v-model="specificationForm1.productSpecId" placeholder="添加商品id"></el-input>
        </div>
        <el-button @click="postspecification" class="add-button">添加</el-button>

        <span style="position: relative;top: 57px;left:-830px">商品价格/库存</span>
        <el-table :data="tableData">
          <el-table-column label="颜色" width="101">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="尺寸" width="101">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="价格" width="101">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="库存" width="101">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="划线价" width="101">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="图片" width="101">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                type="text"
                style="color:red"
                plain
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- ------------------------------------------------------------------------------------------ -->
        <el-form :model="ruleForm2" ref="ruleForm" label-width="110px" class="reduceForm">
          <el-form-item label="库存减扣方式" prop="region">
            <el-select v-model="ruleForm2.region" placeholder="拍下减库存"></el-select>
          </el-form-item>

          <el-form-item style="width:21%" label="库存" prop="name">
            <el-input label="请输入库存数量" v-model="ruleForm2.name"></el-input>
          </el-form-item>

          <el-form-item style="width:21%" label="商品详情" prop="name"></el-form-item>
        </el-form>
        <el-button class="add-button">添加</el-button>
      </el-card>
    </div>
  </div>
</template>
<style lang="less">
// 设置输入框的宽度
</style>
<script>
import api from '@/api/commodity_api.js'
export default {
  name: 'searchinput',
  data () {
    return {
      // 图片
      fileInfo: '',
      // 添加颜色
      AddColor: '',
      input: '', // 复制来的
      collapse: false,
      value4: '',
      bianrow: {
        goodName: '',
        goodsDesc: '', // 描述
        productCategoryName: '', // 类目
        categoryId: '',
        id: '',
        timestamp: '1223',
        token: '123',
        userId: '1'
      },
      leimu: {
        category: '',
        parentCategoryId: '-1',
        levelId: '0'
      },
      mu: false,
      leiMuId: '',
      value1: '',
      guigelist: [],
      leiId: '',
      leiMu: '',
      editFormVisible3: false,
      editFormVisible2: false,
      editFormVisible1: false,
      guiform: {
        productId: '',
        hfName: '',
        specType: '',
        specUnit: '',
        specValue: '',
        categorySpecId: 1
      },
      // 添加图片
      specificationForm: {
        bossId: '1',
        goodsId: '2', // 物品ID
        productSpecId: '', // 商品规格ID
        requestId: '123123123', // 发起请求的随机数, 用来判断请求是否重复
        timestamp: '12231231', // 当前时间
        token: '11238',
        userId: '12' // 用户id
        // specValue: ['1.1'] // 标签 颜色 // 规格
      },

      // 添加规格
      specificationForm1: {
        productId: '3',
        bossId: '3',
        goodsDesc: '1111', // 物品描述
        goodName: '3', // 物品名称
        hfStoreId: '3', // 商铺id
        requestId: '123123123', // 发起请求的随机数, 用来判断请求是否重复
        timestamp: '12231231', // 当前时间
        token: '11238',
        userId: '12', // 用户id
        username: '1' // 商家名称
        // specValue: ['1.1'] // 标签 颜色 // 规格
      },
      ruleForm2: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      // 搜索区域参数
      filters: {
        userName: '',
        userNo: '',
        job: '',
        loginName: '',
        mobile: '',
        sex: '',
        // 性别下拉框
        sexOptions: [
          {
            value: '1',
            label: '审核通过'
          },
          {
            value: '0',
            label: '未审核'
          }
        ],
        // 岗位列表搜索参数
        positionName: '',
        positionCode: ''
      },
      // table返回的数据
      tableData: [],
      // 列表Loading加载
      listLoading: false,
      // 批量选中data
      selectList: [],
      // 分页
      count: 0,
      currentPage: 1,
      pageSize: 10,
      // 角色信息
      roleData: [],
      // 新增界面是否显示
      addFormVisible: false,
      // 添加按钮Loading加载
      addLoading: false,
      leimuForm: {
        category: [
          {
            required: true,
            message: '请输入类目名称',
            trigger: 'blur'
          }
        ]
      },
      guigerulue: {
        hfName: [
          {
            required: true,
            message: '请输入规格名称',
            trigger: 'blur'
          }
        ],
        specType: [
          {
            required: true,
            message: '请输入规格类型',
            trigger: 'blur'
          }
        ],
        specUnit: [
          {
            required: true,
            message: '请输入规格单位',
            trigger: 'blur'
          }
        ],
        specValue: [
          {
            required: true,
            message: '请输入规格值',
            trigger: 'blur'
          }
        ]
      },
      bianRules: {
        productName: [
          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          }
        ],
        productDesc: [
          {
            required: true,
            message: '请输入商品描述',
            trigger: 'blur'
          }
        ],
        value4: [
          {
            required: true,
            message: '请选择商品分类',
            trigger: 'blur'
          }
        ]
      },
      // 输入框验证
      addFormRules: {
        hfName: [
          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          }
        ],
        productDesc: [
          {
            required: true,
            message: '请输入商品描述',
            trigger: 'blur'
          }
        ],
        value: [
          {
            required: true,
            message: '请选择商品分类',
            trigger: 'blur'
          }
        ]
      },
      // 新增界面数据
      addForm: {
        bossId: '1', // 商家id
        brandId: '1', // 品牌id
        categoryId: '', // 类目
        hfName: '', // 商品名称
        lastModifier: '1', // 最后修改者
        productDesc: '' // 产品描述
      },

      value: '',

      // 详细界面是否显示
      selectFormVisible: false,
      // 性别下拉框
      sexOptions: [
        {
          value: '1',
          label: '审核通过'
        },
        {
          value: '0',
          label: '未审核'
        }
      ],

      // 编辑界面是否显示
      editFormVisible: false,
      // 是否修改密码复选框
      checked: false,
      // 编辑按钮Loading加载
      editLoading: false,

      // 组织结构界面是否显示
      orgFormVisible: false,
      // 结构树Loading
      treeLoading: false,
      // 组织结构数据
      treeData: [],
      // 属性名称转换
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      // 岗位table返回的数据
      positionTableData: [],
      // 岗位列表Loading加载
      positionListLoading: false,
      // 是否显示岗位列表
      positionFormVisible: false,
      // 岗位table分页
      positionCount: 0,
      positionCurrentPage: 1,
      positionPageSize: 10,
      // 用户信息
      infoForm: [],
      // 角色Loading加载
      roleListLoading: false,
      // 角色信息
      //   roleData: [],
      // 是否显示角色信息
      roleFormVisible: false,
      file: ''
    }
  },
  created () {
    this.mounted()
  },
  methods: {
    // 获取图片
    Acquire () {

    },
    // 添加规格
    async postspecification () {
      this.time()
      this.specificationForm.requestId = Date.now()
      this.$http
        .post('/api/goods/addSpecify', { params: this.specificationForm1 })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 添加颜色事件
    submit (e) {
      // console.log(this.AddColor)
      this.specValue = e.target.value
      this.AddColor = ''
    },
    // 点击图片列表中已上传的图片时的钩子
    handlePictureCardPreview (file) {
      console.log(1111111)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 图片列表移除图片时的钩子
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    // 商品 编辑 提交按钮
    bianjiSubmit: function () {
      api.updategoods(this.bianrow)
      // let params = this.bianrow
      // console.log(params)
      // this.$http.post('/api/goods/updategood', params, {
      //   transformRequest: [
      //     function (data) {
      //       var str = ''
      //       for (var key in data) {
      //         str +=
      //           encodeURIComponent(key) +
      //           '=' +
      //           encodeURIComponent(data[key]) +
      //           '&'
      //       }
      //       return str
      //     }
      //   ]
      // })
    },

    deletegui: function (row) {
      this.guiform.productId = this.bianrow.id
      this.$confirm('确认删除吗？', '提示', {}).then(() => {
        // this.addLoading = true;
        // api.deleteSpec(row.id).then(response => {
        //   console.log(response)
        //   if (response.data.status === 200) {
        //     this.checkguige()
        //     this.$message({
        //       message: '删除成功',
        //       type: 'success'
        //     })
        //   } else {
        //     this.$message({
        //       message: '删除失败',
        //       type: 'success'
        //     })
        //   }
        // })
      })
    },
    changeQuentitySubject1: function () {
      let obj = {}
      obj = this.leiMu.find(item => {
        // 这里的selectList就是上面遍历的数据源
        // 筛选出匹配数据
        if (item.hfName === this.value4) {
          return item
        }
      })
      this.bianrow.categoryId = obj.id
      console.log(this.bianrow.categoryId)
    },
    checkguige: function () {
      // var _this = this
      // _this
      //   .$ajax({
      //     method: 'get',
      //     url: '/api/product/specifies',
      //     params: {
      //       productId: this.bianrow.id
      //     }
      //   })
      //   .then(res => {
      //     _this.guigelist = res.data.data
      //     console.log('查询规格', res)
      //   })
    },
    add: function () {
      this.guiform.productId = this.bianrow.id
      this.$refs.guiform1.validate(valid => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.addLoading = true
            let param = Object.assign({}, this.guiform)
            console.log('1', param)
            // this.$ajax({
            //   method: 'post',
            //   url: '/api/product/addSpecify',
            //   params: param
            // }).then(res => {
            //   this.addLoading = false
            //   console.log('添加规格', res)
            //   this.checkguige()
            //   this.$message({
            //     message: '提交成功',
            //     type: 'success'
            //   })

            this.addFormVisible1 = false
            this.$refs['guiform1'].resetFields()

            // this.getResult(1);
            // })
          })
        }
      })
    },

    // 查询类目
    checkType: function (val) {
      var _this = this
      this.$ajax({
        method: 'get',
        url: '/api/product/category'
      }).then(function (resultData) {
        console.log('查询类目', resultData)
        _this.leiMu = resultData.data.data
        let obj = {}
        obj = _this.leiMu.find(item => {
          if (item.id === _this.bianrow.categoryId) {
            return item
          }
        })
        console.log(obj)
        _this.value4 = obj.hfName
      })
    }
  },
  mounted () {
    var list = decodeURIComponent(this.$route.query.row)
    this.bianrow = JSON.parse(list)
    // this.bianrow=this.$route.query.row;
    console.log('编辑带过来的', this.bianrow)
    this.checkType()
    this.checkguige()
  }
}
</script>

<style scoped lang="less">
.kaipi {
  width: 676px;
  height: 100%;
  margin-left: 300px;
  border: 1px solid rgba(46, 45, 45, 0.09);
  padding-left: 30px;
  .el-tag {
    margin-bottom: 10px;
  }
  .el-checkbox {
    margin-left: 8px;
  }
}
// s码部分
.model {
  width: 676px;
  height: 170px;
  margin-left: 300px;
  border: 1px solid rgba(46, 45, 45, 0.09);
  padding-left: 30px;
  .el-checkbox {
    margin-left: 8px;
  }
}
// 所以按钮文字颜色
.el-button {
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(163, 160, 251, 1);
}
// 删除型号文字颜色
.sc-delete {
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 49, 138, 1);
  float: right;
  padding: 8px;
}
// 添加按钮样式
.add-button {
  width: 708px;
  height: 39px;
  margin-left: 300px;
  margin-top: 10px;
  margin-bottom: 26px;
}

// 表单部分
.el-table {
  width: 710px;
  height: 100%;
  margin-left: 300px;
  border: 1px solid rgba(46, 45, 45, 0.09);
}
.reduceForm {
  margin-top: 45px;
  margin-left: 300px;
}
</style>
