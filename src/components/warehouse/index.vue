<template>
<div class="wrapper">
  <v-head></v-head>
  <v-sidebar></v-sidebar>
  <div class="content-box" :class="{'content-collapse':collapse}">
    <warehouse></warehouse>
  </div>
</div>
</template>

<script>
import vSidebar from '@/components/common/sidebar.vue';
import vHead from '@/components/common/header.vue';
import warehouse from './warehouse';
export default {
  name: 'store',
  components: { 
    vHead, vSidebar, warehouse
  },
  data() {
    return {
      collapse: false
    }
  }
}
</script>
