<template>
  <div>
    <el-form>
      <el-form-item >
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
  </div>
</template>

<script>
import serviceProduct from '@/service/product.js';
import servicegoods from '@/service/goods.js';
import axios from 'axios';
// import { mapGetters } from 'vuex';
export default {
  props: {
    productId: {
      type: String,
      default: '0',
    },
  },
  data() {
    return {
      files: [],
      fileList: [],
    };
  },
  computed: {
    // ...mapGetters(['taxno', 'username']),
  },
  created() {
    this.acquire();
  },
  methods: {
    handleUpload(raw) {
      this.files.push(raw.file);
    },
    // 获取图片
    acquire() {
      // console.log(this.productId);
      if (this.productId !== 'undefined') {
        serviceProduct.selectProductPictures(this.productId, (res) => {
          this.fileList = [];
          for (let i = 0; i < res.data.data.length; i++) {
            let file = res.data.data[i];
            servicegoods.getFileFileId(file.fileId, (res) => {
              this.fileList.push({ name: file.hfName, url: res.config.url });
            });
          }
        });
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
      fd.append('productId', this.productId);
      axios.post('/api/api/product/product/addProductPictrue', fd).then((res) => {
        this.acquire();
      });
    },
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList);
      var num = file.url.replace(/[^0-9]/ig, '');
      console.log('num', num);
      serviceProduct.deleteProductPictrue(num, this.productId, (res) => {
        console.log('删除成功');
      });
    },
    // error(err) {
    //   console.log(err);
    //   this.$message.error('图片过大');
    // },
  },
};
</script>

<style lang="less" scoped>
</style>
