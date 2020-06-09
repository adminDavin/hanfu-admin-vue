<template>
  <div class="wrapper">
   <vip></vip>
  </div>
</template>
<script>
import vip from './hf-vip.vue';

export default {
  name: 'store',
  components: {
    vip,
  },
  data() {
    return {
      collapse: false,
    };
  },
};
</script>
