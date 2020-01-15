<template>
<div class="wrapper" >
  <v-head></v-head>
  <v-sidebar></v-sidebar>
  <div class="content-box" :class="{'content-collapse':collapse}" style="background:#F0F1F6 ;padding-top: 37px;padding-left: 26px;padding-right: 26px;">
  <hfStoneTable></hfStoneTable>
  

  </div>
</div>
</template>

<script>
import vSidebar from '@/components/common/sidebar.vue';
import vHead from '@/components/common/header.vue';
import goodsTable from './goods-table';
import hfStoneTable from './hf-stone-table';
import hfStone from './hf-store';
export default {
  name: 'store',
  components: {
    vHead, vSidebar, hfStone, goodsTable, hfStoneTable
  },
  data() {
    return {
      collapse: false,
      selectedStone: 1
    }
  },
  methods: {
     selectedStoneHandler(res){
       this.selectedStone = res;
}
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    }
</style>
