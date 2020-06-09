<template>
  <div class="wrapper">
   <quan></quan>
  </div>
</template>
<script>
import quan from './quan.vue';

export default {
  name: 'store',
  components: {
    quan,
  },
  data() {
    return {
      collapse: false,
    };
  },
};
</script>
