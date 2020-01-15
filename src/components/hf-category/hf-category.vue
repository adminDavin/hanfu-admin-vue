<template>

  <div style="width:95%;height: 95%;background: #ffffff;margin:0 auto;margin-top: 40px;">
    <div style="width: 100%;height: 200px;background:#ffffff;">
    <div style="width: 100%;height: 50px;border-bottom: 1px solid #cccccc;"><span style="display: block;padding-top:10px;margin-left: 15px;font-size: 20px;">类目管理</span></div>
    <div style="margin-left:80px;margin-top:50px;"><span style="font-size: 20px;">类目名称</span><el-input v-model="input" placeholder="请输入内容" style="width:15%;margin-left: 20px;">
    </el-input>
    <span style="margin-left: 100px;font-size:20px;">类目创建时间</span>


    <el-date-picker
      v-model="value1"
      type="daterange" style="margin-left: 30px;"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>

    <div style="float: right;width: 140px;height: 50px;border:1px solid #cccccc;text-align: center;line-height: 50px;color: #ffffff;border-radius: 5px;color:black;margin-right:100px;">重置</div>
    <div style="float: right;width: 140px;height: 50px;background:#A6A3FB;text-align: center;line-height: 50px;color: #ffffff;border-radius: 5px;margin-right:100px;">查询</div>

   </div>

  </div>
  <div style="width: 100%;height: 100%;background:#ffffff;">

    <div style="float: right;width: 140px;height: 50px;border:1px solid #cccccc;text-align: center;line-height: 50px;color: #ffffff;border-radius: 5px;color:black;margin-right:100px;margin-top: 40px;">批量管理</div>
    <div style="float: right;width: 140px;height: 50px;background:#A6A3FB;text-align: center;line-height: 50px;color: #ffffff;border-radius: 5px;margin-right:100px;margin-top: 40px;" @click="dialogVisible = true">+添加类目</div><br>
      <el-table
         ref="multipleTable"
         :data="tableData"
         tooltip-effect="dark"
         style="width: 100%"
         @selection-change="handleSelectionChange">
         <el-table-column
           type="selection" align="center"
           width="200">
         </el-table-column>
         <el-table-column
           label="日期" align="center"
           width="300">
           <template slot-scope="scope">{{ scope.row.date }}</template>
         </el-table-column>
         <el-table-column
           prop="name"
           label="姓名" align="center"
           width="300">
         </el-table-column>
         <el-table-column
         prop="province"
           label="地址" align="center" width="200"
           show-overflow-tooltip>
         </el-table-column>
          <el-table-column
               fixed="right"
               label="操作" align="center"
               width="300">
               <template slot-scope="scope">
                 <el-button @click="handleClick(scope.row)" type="text" size="small" style="font-size:18px;">编辑</el-button>
                 <el-button type="text" size="small" style="color: hotpink;font-size:18px;">删除</el-button>
               </template>
             </el-table-column>
       </el-table>
       <div style="margin-top: 20px">
   <div class="block" style="float: right;margin-right:100px;">

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    <el-dialog
      title="新建类目"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div style="margin-left: 100px;">
        <el-radio v-model="radio" label="1">新建单个类目</el-radio>
        <el-radio v-model="radio" label="2">新建多个类目</el-radio>
        </div><br>
        <div>
          <div style="margin-left: 100px;">新建类目名称<el-input v-model="input" placeholder="请输入类目名称" style="width:40%;margin-left:40px;"></el-input></div><br>
 <div style="margin-left: 100px;">所属类目层级
   <el-select v-model="value" placeholder="请选择"  style="margin-left: 38px;">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div><br>


        </div>
      <span slot="footer" class="dialog-footer">

       <div style="width: 300px;height: 80px ;margin: 0 auto;">
         <el-button @click="dialogVisible = false" style="float: left;width:140px;">取 消</el-button>
         <el-button type="primary" @click="dialogVisible = false" style="float: right;width:140px;background: #A6A3FB;">确 定</el-button>

       </div>


      </span>
    </el-dialog>
    

    </div>
       </div>
  </div>
  </div>
</template>

<script>
  export default{
    data:()=>{
      return{
         options: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                }, {
                  value: '选项3',
                  label: '蚵仔煎'
                }],
         radio: '1',
         dialogVisible: false,
         input:"",
         value1:"",
            tableData: [{
                     date: '2016-05-02',
                     name: '一级',
                     province: '2019-10-22  15:20:30',
                   }, {
                     date: '2016-05-04',
                     name: '一级',
                     province: '2019-10-22  15:20:30',
                   }, {
                     date: '2016-05-01',
                     name: '一级',
                     province: '2019-10-22  15:20:30',
                   }, {
                     date: '2016-05-03',
                     name: '二级',
                     province: '2019-10-22  15:20:30',
                   }, {
                     date: '2016-05-03',
                     name: '二级',
                     province: '2019-10-22  15:20:30',
                   }, {
                     date: '2016-05-03',
                     name: '二级',
                     province: '2019-10-22  15:20:30',
                   }
                   , {
                     date: '2016-05-03',
                     name: '二级',
                     province: '2019-10-22  15:20:30',
                   },
                   {
                     date: '2016-05-03',
                     name: '二级',
                     province: '2019-10-22  15:20:30',
                   },
                   {
                     date: '2016-05-03',
                     name: '二级',
                     province: '2019-10-22  15:20:30',
                   },

                   {
                     date: '2016-05-03',
                     name: '二级',
                     province: '2019-10-22  15:20:30',
                   },

                   {
                     date: '2016-05-03',
                     name: '二级',
                     province: '2019-10-22  15:20:30',
                   }
                   ]
      }
    },methods:{

        handleClick(row)
        {
        console.log(row);
        },
        toggleSelection(rows) {
                if (rows) {
                  rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                  });
                } else {
                  this.$refs.multipleTable.clearSelection();
                }
              },
              handleSelectionChange(val) {
                this.multipleSelection = val;
              }

    }
  }
</script>

<style>
  body{
    width: 100%;
    height: 100%;
    background: #F0F1F6;

  }div{
    cursor: pointer;
  }
</style>
