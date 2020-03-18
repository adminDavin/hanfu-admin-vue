<template>
  <div class="wrapper">
    <orderCenter></orderCenter>
  </div>
</template>
<script>
import orderCenter from './hf-orderCenter.vue';

export default {
  name: 'store',
  components: {
    orderCenter
  },
  data() {
    return {
      collapse: false
    }
  }
}
</script>
