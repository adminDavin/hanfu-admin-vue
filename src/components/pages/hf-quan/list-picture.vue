<template>
  <div>
    <el-form>
      <el-form-item>
        <el-upload
          list-type="picture-card"
          ref="upload"
          action=""
          multiple
          :auto-upload="false"
          :limit="20"
          :file-list="fileList"
          :on-change="imgUpload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlePush">发布</el-button>
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
  props: ['productId'],
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
      serviceProduct.selectProductPictures(this.productId, (res) => {
        this.fileList = [];
        for (let i = 0; i < res.data.data.length; i++) {
          let file = res.data.data[i];
          servicegoods.getFileFileId(file.fileId, (res) => {
            this.fileList.push({name: file.hfName, url: res.config.url});
          });
        }
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
      fd.append('fileInfo', file.raw);
      fd.append('productId', this.productId);
      axios.post('/api/api/product/product/addProductPictrue', fd).then((res) => {
        this.acquire();
      });
    },
    async handlePush() {
      this.$refs.upload.submit(); // 这里是执行文件上传的函数，其实也就是获取我们要上传的文件
      let fd = new FormData();
      fd.append('productId', this.productId);
      // fd.append('fileInfo', this.files);
      this.files.forEach(function(file) {
        console.log(file);
        fd.append('fileInfo', file, file.name); // 因为要上传多个文件，所以需要遍历一下才行
        // 不要直接使用我们的文件数组进行上传，你会发现传给后台的是两个Object
      });
      console.log(this.files);
      axios
        .post('https://www.tjsichuang.cn:1443/api/product/product/addProductPictrue', fd)
        .then((res) => {
          if (res.data.status === 'OK') {
            console.log(res);
          }
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
