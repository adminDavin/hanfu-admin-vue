<template>
<div>

  <el-row>
    <el-col :span="16" class="p50">
      <h3 style="margin-left:40px;margin-top: 20px;">基本信息管理</h3>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="昵称" style="margin-top: 20px;">
          <el-col :span="10">
            <el-input v-model="form.nickName" ></el-input>
          </el-col>
        </el-form-item>
        </el-form-item>

        <el-form-item label="名字"  >
          <el-col :span="10">
            <el-input v-model="form.realName"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="用户名"  >
          <el-col :span="10">
            <el-input v-model="form.username"></el-input>
          </el-col>
        </el-form-item>
       <el-form-item label="注册电话"  style="width:1780px;">
          <el-col :span="6">
            <el-input v-model="form.phone" maxlength="11"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="设置邮箱" style="width:1360px;">
          <el-col :span="8">
            <el-input v-model="form.email"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="出生日期" style="width:720px;">
          <el-col :span="16">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birthDay" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="现居地址">
          <el-col :span="4"  >
            <el-input v-model="form.address" title="市"></el-input>
          </el-col>
          <el-col :span="6" style="margin-left: 20px;">
            <el-input v-model="form.address1"></el-input>
          </el-col>
          <el-col :span="8" style="margin-left: 20px;">
            <el-input v-model="form.address2"></el-input>
          </el-col>
        </el-form-item>



<!-- <el-dialog title="上传图片"  :visible.sync="picOpen" :close-on-click-modal="false">
          <el-upload list-type="picture-card" ref="fileUpload"  action="" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :auto-upload="false">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button @click="picOpen = false">取消</el-button>
            <el-button type="primary" :loading="editLoading" @click="uploadFiles">提交</el-button>
          </div>
        </el-dialog> -->


<!--
         <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="handleAvatarSuccess"
            :on-remove="handleRemove" style="margin-left:80px;">
            <i class="el-icon-plus">上传头像</i>
          </el-upload>

          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
 -->




        <el-form-item style="margin-top: 20px;">
          <el-button type="primary" :plain="true" @click="onSubmit()">更新信息</el-button>
          <el-button>取消更新</el-button><br>
          <el-button type="primary" style="margin-top: 20px;" @click="upload()">头像上传</el-button>


        </el-form-item>
        <el-button type="primary" style="margin-left: 80px;" @click="dialogVisible = true">添加收货地址</el-button>


      </el-form>
    </el-col>







  </el-row>
  <h3 style="margin-left:40px;margin-top: 20px;">收货地址管理</h3>
  <el-input v-model="phoneNumber" style="width:200px;margin-left:40px;margin-top: 20px;" placeholder="请输入内容"></el-input>

    <el-button type="primary" style="margin-left:10px;" @click="search()">搜索</el-button>



  <br>
  <br>
    <el-dialog
    title="确定收获地址"
    :visible.sync="dialogVisible"
    width="60%" align="center"
     >
 <el-row>
    <el-col :span="16" class="p50">

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="联系人" style="margin-top: 20px;">
          <el-col :span="10">
            <el-input v-model="address.contact" ></el-input>
          </el-col>
        </el-form-item>
        </el-form-item>

       <el-form-item label="电话号码" style="width:1780px;">
          <el-col :span="6">
            <el-input v-model="address.phoneNumber" maxlength="11"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="国家" style="width:1360px;">
          <el-col :span="8">
            <el-input v-model="address.hfConty"></el-input>
          </el-col>
        </el-form-item>


        <el-form-item label="现居地址">
          <el-col :span="4"  >
            <el-input v-model="address.hfProvince" title="市"></el-input>
             <span style="margin-left:120px;display: block;margin-top: -40px;">省</span>
          </el-col>
          <el-col :span="6" style="margin-left:35px;">
            <el-input v-model="address.hfCity"></el-input>
            <span style="margin-left:175px;margin-top: -40px;display: block;">市</span>
          </el-col>
          <el-col :span="6" style="margin-left:30px;">
            <el-input v-model="address.trees"></el-input>
            <span style="margin-left:160px;width: 60px;display:block;margin-top: -40px;">街道</span>
          </el-col>
        </el-form-item>
         <el-form-item label="具体地址" style="width:1360px;">
           <el-col :span="8">
             <el-input v-model="address.hfAddressDetail"></el-input>
           </el-col>
         </el-form-item>

      </el-form>
    </el-col>



  </el-row>

    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="add()">添加</el-button>
    </span>
    </el-dialog>



      <el-table
        :data="arr"
        style="width: 100%"
        max-height="250">
        <el-table-column
          fixed
          prop="contact"
          label="联络人"
          width="150" align="center"  >
        </el-table-column>
        <el-table-column
          prop="hfAddressDetail"
          label="详细地址信息"
          width="120" align="center">
        </el-table-column>
        <el-table-column
          prop="hfProvince"
          label="城市"
          width="120" align="center">
        </el-table-column>
        <el-table-column
          prop="hfConty"
          label="国家"
          width="120" align="center">
        </el-table-column>
        <el-table-column
          prop="hfDesc"
          label="备注"
          width="300" align="center">
        </el-table-column>
        <el-table-column
          prop="hfProvince"
          label="省"
          width="120" align="center">
        </el-table-column>

        <el-table-column
          prop="phoneNumber"
          label="手机号"
          width="120" align="center">
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          width="150" align="center">
          <template slot-scope="scope">
            <el-button
              @click="deleteRow(scope)"
              type="text"
              size="small">
              删除
            </el-button>
            <el-button
              @click="bianji(scope)"
              type="text"
              size="small">
              编辑
            </el-button>
             <el-button
               @click="Detail(scope)"
               type="text"
               size="small">
               详情
             </el-button>
          </template>
        </el-table-column>
      </el-table>



  <el-dialog
    title=" "
    :visible.sync="dialogVisible1"
    width="60%" align="left"
     >

      <!--   <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="handleAvatarSuccess"
            :on-remove="handleRemove" >
            <i class="el-icon-plus"></i>
          </el-upload> -->
          <uploadFiles :goods='selectedGoods'></uploadFiles>
          <!-- <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog> -->



    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="uploads()">添加</el-button>
    </span>
    </el-dialog>

     <!-- 编辑 -->
     <el-dialog
        title="更改用户地址"
        :visible.sync="dialogVisible4"
        width="60%" align="center"
         >
     <el-row>
        <el-col :span="16" class="p50">

          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="联系人" style="margin-top: 20px;">
              <el-col :span="10">
                <el-input v-model="address1.contact" ></el-input>
              </el-col>
            </el-form-item>
            </el-form-item>

           <el-form-item label="电话号码" style="width:1780px;">
              <el-col :span="6">
                <el-input v-model="address1.phoneNumber" maxlength="11"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="国家" style="width:1360px;">
              <el-col :span="8">
                <el-input v-model="address1.hfConty"></el-input>
              </el-col>
            </el-form-item>


            <el-form-item label="现居地址">
              <el-col :span="4"  >
                <el-input v-model="address1.hfProvince" title="市"></el-input>
                 <span style="margin-left:120px;display: block;margin-top: -40px;">省</span>
              </el-col>
              <el-col :span="6" style="margin-left:35px;">
                <el-input v-model="address1.hfCity"></el-input>
                <span style="margin-left:175px;margin-top: -40px;display: block;">市</span>
              </el-col>
              <el-col :span="6" style="margin-left:30px;">
                <el-input v-model="address1.trees"></el-input>
                <span style="margin-left:160px;width: 60px;display:block;margin-top: -40px;">街道</span>
              </el-col>
            </el-form-item>
             <el-form-item label="具体地址" style="width:1360px;">
               <el-col :span="8">
                 <el-input v-model="address1.hfAddressDetail"></el-input>
               </el-col>
             </el-form-item>

          </el-form>
        </el-col>



      </el-row>

        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="many()">确定</el-button>
        </span>
        </el-dialog>

</div>



</template>



<script>
import uploadFiles from './upload-files';
import Axios from "axios";
import api from '@/apis/user-api.js';
export default {
  data() {
    return {
		dialogImageUrl:'',
         selectedGoods: {},
          liss:{},
         phoneNumber:"",
         dialogVisible1:false,
         dialogVisible:false,
         dialogVisible4:false,
         tableData: [{
        date: '1',
        name: '王小虎',
        province: '上海',
        city: '中国',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 15688108250,
        zips: "河北"
        }],
       fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      form: {
        address:"1",
        email:"1",
        fileInfo:"",
        nickName: '1',
        realName:"1",
        region: '中国',
        requestId:"1",
        sex:1,
        timestamp:"1",
        token:"1",
        username:"1",
        userId:"1",
        phone:"12313132132",
        birthDay:"2019-10-15",
        list:[],
        dialogImageUrl:"",
        id:1,
         dialogVisible2:false,
         dialogVisible: false,

        dialogVisible1:false,
         address1:1,
         address2:2,
        list:[],


        imageUrl: '',

      },
        collapse: false,

         rows:{
           id:1
         },

         detail:{
            id:155,

         },
         Search:{
           phoneNumber:""
         },
        address:{
          contact:"王博",
          phoneNumber:"13837774547",
          hfConty:"中国",
          hfCity:"北京",
          hfDesc:"111",
          hfProvince:"河北",
          trees:"上地七街",
          userId:1,
          hfAddressDetail:"上地七街九头鸟"
        },
        address1:{
          contact:"王博鹏",
          phoneNumber:"13837774547",
          hfConty:"中国",
          hfCity:"北京",
          id:160,
          userId:1,
          isFaultAddress:0,
          hfProvince:"河北",
          trees:"上地七街",
          hfAddressDetail:"上地七街九头鸟"
        },
        update:{
          file:""

        }
       ,
         lists:{
         token:1,
         userId:1
         },
        arr:[],
        arr1:[],

    }
  },

  created(){
    this.admin()
  },
  methods: {
    admin(){
     api.list(this.lists).then(res=>{
      console.log(res.data)
      this.arr=res.data.data

     })

   },
   //搜索
    search(){
        api.Search(this.Search).then(response=>{
          console.log(response)
          this.arr=response.data.data
  
        })
    },

   upload(){
   this.dialogVisible1=true;
   },
    //编辑
    bianji(row){
     console.log(row.row.id)
     this.dialogVisible4=true
     this.address1.id=row.row.id
     // this.address1=Object.assign({},row)
    },
    //详情
     Detail(){
     api.addressDetail(this.detail).then(res=>{
     // console.log(res)
     })
     },

    many(){
      api.updateAddress(this.address1).then(res=>{
      console.log(res.data)
       let studenteList=this.address1;
       console.log(studenteList)
       if(res.data.status==200){
       this.arr.push({
         contact:this.address1.contact,
         phoneNumber:this.address1.phoneNumber,
         hfConty:this.address1.hfConty,
         hfCity:this.address1.hfCity,
         isFaultAddress:this.address1.isFaultAddress,
         hfProvince:this.address1.hfProvince,
         trees:this.address1.trees,
         hfAddressDetail:this.address1.hfAddressDetail
       })
       this.$message({
        message: '更改地址成功',
        type: 'success',
        });
       this.admin()
       this.dialogVisible4=false
       }

      })
    },
    uploads(){
      this.dialogVisible1=false;
    },
    onSubmit() {
       api.update(this.form).then(response => {
          console.log(response.data)
          if(response.data.status==200){
            this.$message({
             message: '用户更新成功',
             type: 'success',
             });
          }else{
            this.$message({
             message: '用户更新失败',
             type: 'success',
             });
              }
          });
        },
         //头像上传
         handleAvatarSuccess:function(response, file, fileList){
          console.log(FileList)
          let fd=new FormData()

          fd.append("userId",1)
          this.list=fileList;

          fileList.forEach((item)=>{
          console.log(item,item.name)
          fd.append("fileInfo",item,item.name)
          })

//           Axios.post("/user/user/update",fd,{
//           reponseType:"arraybuffer"
//
//            }).then(res=>{
//
//           console.log("上传图片",res)
//           })

         },
          handleRemove(file, fileList) {
          console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
          },



              handleClose(done) {

               },

          //删除
          deleteRow(index,scope) {
           console.log(index)
           api.remove(index.row.id).then(res=>{
           let _this=this;
           console.log(res)
           if(res.data.status==200){
            this.$message({
            message: '删除成功',
            type: 'success',
            });
            this.admin()

           }else{
              this.$message({
              message: '删除失败',
              type: 'success',
              });

                   }
                   })
                   }
                   ,

                message(){
                 this.dialogAddgsVisible = true;
                 },

                     add(){
                     api.address(this.address).then(res=>{
                     if(res.data.status==200){
                       this.arr.push({
                       contact:this.address.contact,
                       phoneNumber:this.address.phoneNumber,
                       hfConty:this.address.hfConty,
                       hfCity:this.address.hfCity,
                       id:this.address.id,
                        userId:this.address.userId,
                       hfProvince:this.address.hfProvince,
                       trees:this.address.trees,
                       hfAddressDetail:this.address.hfAddressDetail,
                       })
                       this.$message({
                        message: '用户添加成功',
                        type: 'success',
                        });
                       this.dialogVisible=false
                     }else{
                       this.$message({
                        message: '用户添加失败',
                        type: 'success',
                        });
                     }

                     })

                 },

  },
  components: {
            uploadFiles
      },
}

</script>
<style lang="scss">

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
          }


</style>
