<template>
<div>
  <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleAdd" size="mini" round>新增</el-button>
  <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
    <el-form :inline="true" :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
      <el-form-item label="商品名称" prop="hfName">
        <el-input v-model="addForm.hfName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="productDesc">
        <el-input v-model="addForm.productDesc" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="value" placeholder="请选择" @change="changeQuentitySubject(index)">
          <el-option v-for="(item,index) in leiMu" :key="index" :label="item.hfName" :value="item.hfName">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addFormVisible = false">取消</el-button>
      <el-button type="primary" @click="addSubmit" :loading="addLoading">提交</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'addProduct',
  data() {
    return {
      leimu: {
        category: '',
        parentCategoryId: "-1",
        levelId: '0'
      },
      addForm: {
        hfName: "",
        productDesc: "",

      }
    }
  },
  methods: {
    handleAdd: function () {
      this.addFormVisible = true;
    },

    //新增
    addSubmit: function () {
      console.log(this.value)
      var _this = this;
      this.$refs.addForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.addLoading = true;
            let param = Object.assign({}, this.addForm);
            console.log(param);
            this.$ajax({
              method: "post",
              url: "/api/product/addproduct",
              params: param
            }).then(res => {
              this.addLoading = false;
              _this.getList();
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.addForm.hfName = '';
              this.addForm.productDesc = '';
              this.addFormVisible = false;
              // this.$refs["addForm"].resetFields();

              // this.getResult(1);
            });
          });
        }
      });
    },
    
    changeQuentitySubject: function () {
      let obj = {};
      obj = this.leiMu.find((item) => { //这里的selectList就是上面遍历的数据源
        //筛选出匹配数据
        if (item.hfName == this.value) {
          return item
        }
      });
      this.addForm.categoryId = obj.id;

    },
  }

}
</script>
