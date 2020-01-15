<template>
<div class="wrapper">
  <v-head></v-head>
  <v-sidebar></v-sidebar>
  <div class="content-box" :class="{'content-collapse':collapse}">
    <hfUser></hfUser>
  </div>
</div>
</template>

<script>
import vSidebar from '@/components/common/sidebar.vue';
import vHead from '@/components/common/header.vue';
import hfUser from './hf-assess';
export default {
  name: 'store',
  components: {
    vHead, vSidebar, hfUser
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
