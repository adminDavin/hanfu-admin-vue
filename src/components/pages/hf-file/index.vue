<template>
<div class="wrapper">
  <el-upload
  accept=".jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.GIF,.BMP"
  action=""
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  :auto-upload="false"
  :on-change="imgUpload"
  >
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl+selectedFileId" alt="">
</el-dialog>
</div>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      dialogImageUrl: '/api/api/user/file/image?fileId=',
      dialogVisible: false,
      userId: '',
      selectedFileId: 0,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
      fd.append('file', file.raw);
      Axios.post('/api/api/user/file/upload', fd).then((res) => {
        this.selectedFileId = res.data.data.id;
      });
    },
  },
};
</script>
