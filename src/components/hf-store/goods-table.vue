<template>
<div>
  <div>当前店铺{{selectedStone}}</div>
  <el-table :data="tableData">
  <el-table-column label="品牌id">
    <template slot-scope="scope">
      <span>{{ scope.row.brandId}}</span>
    </template>
  </el-table-column>

  <el-table-column label="ID">
    <template slot-scope="scope">
      <span>{{ scope.row.id}}</span>
    </template>
  </el-table-column>

  <el-table-column>
    <template slot-scope="scope">
      <el-button @click="TellMeId(scope.row.id)">TellMe</el-button>
    </template>
  </el-table-column>
</el-table>
</div>
</template>

<script>
import api from '@/apis/hf-api.js';
export default {
  name: 'productTable',
  props: ['selectedStone'],
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    TellMeId(num) {
      console.log(num)
    },
    listProduct(n) {
      console.log('gogos', n);
      api.getProductList(n).then(response => {
        if (response.status == 200) {
          if (response.data.status === 200) {
            this.tableData = response.data.data;
          }
        }
      });
    }
  },
  // watch: {
  //   selectedStone: (o, n) => {
  //     console.log(this);
  //     this.listProduct(n);
  //   }
  // }
}
</script>
