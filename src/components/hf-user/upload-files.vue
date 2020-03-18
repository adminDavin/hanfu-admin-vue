<template>
<el-form :model="form">
  <el-form-item prop="files">
    <el-upload v-model="form.files" ref="upload"
     class="upload-poster" :limit='4'
     accept=".jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.GIF,.BMP"
     action='' list-type="picture-card"
			:show-file-list="true"  :on-remove="onRemove" :on-change="imgPreview" :auto-upload="false">
      <i class="el-icon-plus"></i>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="picUrl" alt="">

      </el-dialog>
    </el-upload>
  </el-form-item>
</el-form>
</template>

<script>
import Axios from "axios"
export default {
  name: 'uploadFiles',
  props: ['goods'],
  data() {
    return {
      dialogVisible: false,
      picUrl: '',
      form: {
        files: []
      },
    }
  },
  methods: {
    uploadAction() {
      console.log(this);
    },
    uploadFile(file) {
      console.log(this.form);
      console.log('上传图片1',file);
      let fd = new FormData();
      fd.append('fileInfo',file.raw);
      fd.append('userId',"1");
      axios.post('/user/user/upload_avatar', fd, {
        responseType: 'arraybuffer'
      }).then(res => {
        console.log(res);
      });
    },
    onRemove(file) {
      console.log("remove:", file);
    },
    imgPreview(file) {
      let fileName = file.name;
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
      if (regex.test(fileName.toLowerCase())) {
        this.picUrl = URL.createObjectURL(file.raw);
        this.uploadFile(file);
      } else {
        this.$message.error('请选择图片文件');
      }
    },
  }
}
</script>
