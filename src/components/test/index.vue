<template>
<div>
  <div class="pagepath">

  </div>
  <div>
    <div>详情页</div>
<el-dialog title="上传图片"  :visible.sync="picOpen" :close-on-click-modal="false">
          <el-upload list-type="picture-card" ref="fileUpload"  action="" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :auto-upload="false">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button @click="picOpen = false">取消</el-button>
            <el-button type="primary" :loading="editLoading" @click="handleUpload">提交</el-button>
          </div>
        </el-dialog>
      
    <div>
      <el-form>
        <el-form-item label="上传banner" prop="logo"> <span>支持扩展名：.png \ .jpg \ .jpeg；文件大小为：1920*676 px</span>
          <el-upload class="avatar-uploader" ref="upload" accept="image/png,image/jpg,image/jpeg"
          action="/as" multiple :show-file-list="true" :http-request="handleUpload"
          :auto-upload="false" :limit="20">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handlePush">发布</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <!-- <img  ref="selectlogoPictureImg" src="/api/goods/getFile?fileId=38"  /> -->
</div>
</template>

<style>

</style>

<script>
import axios from 'axios';
import {
  mapGetters
} from 'vuex';
export default {
  name: 'testIndex',
  methods: {
    handleUpload(raw) {
      this.files.push(raw.file);
      console.log(this.files)
    },
    async handlePush() {
      this.$refs.upload.submit();
      let fd = new FormData();
      fd.append('goodsId', 1);
      // fd.append('pictureName', "ddd");
      // fd.append("prictureDesc", 'sss');
      fd.append("username", 'ddd');
      fd.append("userId", 1);
      fd.append("requestId", "dsaaa");
      fd.append("token", 'sss');
      fd.append("timestamp", 'dd');
      // fd.append("fileInfo", 'dd');
      // console.log();
       fd.append('fileInfo', this.files[0]);
      // this.files.forEach(function (file) {
      //   fd.append('fileInfo', file, file.name);
      // });
      axios.post('api/goods/addPicture', fd, { responseType: 'arraybuffer' }).then(res => {
        console.log(res);
      });
    }
  },
  computed: {
    ...mapGetters(['taxno', 'username'])
  },
  data() {
    return {
      files: [],
      fileIds: [],
      picOpen: true
    }
  },
  init() {
    Vue.component('element-block', {
      template: '<div>子组件</div>'
    });
  }
}
</script>
