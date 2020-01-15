<template>
<el-form :model="form">
  <el-form-item prop="files">
    <el-upload ref="upload"
     class="upload-poster"
     accept=".jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.GIF,.BMP"
     action='' list-type="picture-card" :on-remove="onRemove" :on-change="imgPreview" :auto-upload="false">
      <i class="el-icon-plus"></i>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="picUrl" alt="">
      </el-dialog>
    </el-upload>
  </el-form-item>
</el-form>
</template>

<script>
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
      let fd = new FormData();
      fd.append('goodsId', this.goods.id);
      fd.append("username", "dd");
      fd.append("userId", 1);
      fd.append("requestId", "dsaaa");
      fd.append("token", 'sss');
      fd.append("timestamp", 'dd');
      fd.append('fileInfo', file.raw);
      axios.post('api/goods/addPicture', fd, {
        responseType: 'arraybuffer'
      }).then(res => {
        console.log(res);
      });
    },
    initGoodsFiles() {
      console.log(this.goods.id);
      axios.get("/api/goods/pictures", {params: {goodsId: this.goods.id}}).then((response) => {
        if (response.status == 200 && response.data.status == 200) {
          let fileIds = response.data.data;
          // for (let fileId of fileIds) {            
          //   axios.get("/api/goods/getFile", {params: {fileId:fileId.id}}).then(
          //     (response) => {
          //       console.log(response);
          //       console.log(this.form.files);
          //       this.form.files.push(response.data);
          //     }
          //   );
          // }
        }
      })
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
  },
  mounted() {
    this.initGoodsFiles();
  }
}
</script>
