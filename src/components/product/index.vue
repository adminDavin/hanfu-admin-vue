<template>
<div class="wrapper">
	<v-head></v-head>
  <v-sidebar></v-sidebar>
  <div class="content-box" :class="{'content-collapse':collapse}">
    <productTable></productTable>
  </div>
</div>
</template>

<script>
import vSidebar from '@/components/common/sidebar.vue';

export default {
  name: 'store',
  components: {
    vHead, vSidebar, product, productv1, productTable
  },
  data() {
    return {
      collapse: false
    }
  }
}
</script>
