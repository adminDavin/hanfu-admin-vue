<template>
  <div>
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
  </div>
</template>

<script>
import serviceGoods from '@/service/goods.js';
import axios from 'axios';
// import { mapGetters } from 'vuex';
export default {
  props: {
    // 联动
    letter: String,
  },
  data() {
    return {
      files: [],
      fileList: [],
    };
  },
  watch: {
    letter () {

      // if (this.letter) {
      console.log('三级连动图片触发', this.letter);
      //   this.acquire();
      // }
    },
  },
  computed: {
    // ...mapGetters(['taxno', 'username']),
  },
  //   created() {

  //   },
  methods: {
    handleUpload(raw) {
      this.files.push(raw.file);
    },
    // 获取图片
    acquire() {
      console.log('获取图片需要的ID', this.letter);
      serviceGoods.picturesAll(this.letter, (res) => {
        this.fileList = [];
        for (let i = 0; i < res.data.data.length; i++) {
          let file = res.data.data[i];
          serviceGoods.getFileFileId(file.fileId, (res) => {
            this.fileList.push({ name: file.hfName, url: res.config.url });
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
      fd.append('fileInfo1', file.raw);
      fd.append('goodsId', this.letter);
      fd.append('timestamp', '1');
      fd.append('token', '2');
      fd.append('userId', '3');
      fd.append('requestId', '2');
      axios.post('/api/api/product/goods/addPicture', fd).then((res) => {
        this.acquire();
      });
    },
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList);
      var num = file.url.replace(/[^0-9]/ig, '');
      console.log('num', num);
      serviceGoods.deleteGoodsFile(num, (res) => {
        console.log('删除成功');
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
