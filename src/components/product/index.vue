<template>
<div class="wrapper">
  <v-head></v-head>
  <v-sidebar></v-sidebar>
  <div class="content-box" :class="{'content-collapse':collapse}">
    <product></product>
  </div>
</div>
</template>

<script>
import vSidebar from '@/components/common/sidebar.vue';
import vHead from '@/components/common/header.vue';
import product from './product.vue';
export default {
  name: 'store',
  components: { 
    vHead, vSidebar, product
  },
  data() {
    return {
      collapse: false
    }
  }
}
</script>
