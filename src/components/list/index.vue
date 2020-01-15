<template>
<div class="wrapper">
  <v-head></v-head>
  <v-sidebar></v-sidebar>
  <div class="content-box" :class="{'content-collapse':collapse}">
    <list></list>
  </div>
</div>
</template>

<script>
import vSidebar from '@/components/common/sidebar.vue';
import vHead from '@/components/common/header.vue';
import list from './list';
export default {
  name: 'store',
  components: { 
    vHead, vSidebar, list
  },
  data() {
    return {
      collapse: false
    }
  }
}
</script>
