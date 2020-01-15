<template>

  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top: 30px;">
      <el-form-item label="审批人" style="margin-left: 75px;">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>



      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-button type="primary" @click="onSubmit()" style="margin-left:12px;">查询</el-button>
      </el-form-item>

      <el-form-item label="添加邮箱地址" style="margin-left:10px;">
        <el-input v-model="formInline.user" placeholder="邮箱地址"></el-input><br><br>
      </el-form-item>



      <el-form-item>
        <el-button type="primary" @click="onSubmit()">添加</el-button>

        <el-button size="small" type="primary" @click="file()" style="height:40px;">点击上传</el-button>
      </el-form-item>
    </el-form>



    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="190" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址" width="180" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱地址" width="180" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="180" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="昵称" width="180" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.tony }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地区" width="180" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.region }}</span>
        </template>
      </el-table-column>


      <el-table-column label="姓名" width="180" align="center">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="地址" width="210" align="center">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.address}}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>

      <div class="del-dialog-cnt" style="text-align: center;">删除不可恢复，是否确定删除？</div>

      <span slot="footer" class="dialog-footer">

        <el-button @click="delVisible = false">取 消</el-button>

        <el-button type="primary" @click="deleteRow()">确 定</el-button>

      </span>

    </el-dialog>


    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>

      <div class="del-dialog-cnt" style="text-align: center;">删除不可恢复，是否确定删除？</div>

      <span slot="footer" class="dialog-footer">

        <el-button @click="delVisible = false">取 消</el-button>

        <el-button type="primary" @click="deleteRow()">确 定</el-button>

      </span>

    </el-dialog>


    <!-- <transition mode="out-in" @before-enter="beforeEnter()" @enter="enter()"
       @before-leave="beforeLeave()"
       @leave="leave" :css="false">
    </transition> -->


     <el-dialog title="点击上传图片" :visible.sync="model_input" width="600px"   center>
        <el-upload

          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>


       <span slot="footer" class="dialog-footer">


       <el-button type="primary" @click="ok()">确 定</el-button>

       </span>

     </el-dialog>




  </div>
</template>





<script>
  import axios from 'axios';
  import api from '@/apis/user-api.js';

  export default {
    data() {
      return {

        packData: [],
        delVisible: false, //删除提示弹框的状态
        msg: "", //记录每一条的信息，便于取id
        delarr: [], //存放删除的数据
        model: false,
        model_input:false,
        dialogImageUrl: '',
        dialogVisible: false,
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          }, {
            date: '2016-05-04',
            nice: "Heloise",
            name: '王小虎',
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          }, {
            date: '2016-05-01',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          }, {
            date: '2016-05-03',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
          {
            date: '2016-05-03',
            nice: "Heloise",
            name: '王小虎',
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            nice: "Heloise",
            email: "82970198@qq.com",
            address: '上海市普陀区金沙江',
            sex: "男",
            tony: "玛丽亚",
            region: "China"
          },
        ]

      }
    },
    methods: {
      onSubmit() {
        api.update(params).then(res => {
          console.log(res);
        })
      },
      //上传
      file() {
        this.model_input = true
      },
      handleEdit() {

      },
      handleDelete(index, row) {
        this.idx = index;
        this.delVisible = true

      },
      deleteRow(index, row) {


      },

       handleRemove(file, fileList) {
      console.log(file, fileList);
            },

       handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
            },

               ok(){
                 this.model_input = false
               }
    }
  }
</script>










<style>
</style>
