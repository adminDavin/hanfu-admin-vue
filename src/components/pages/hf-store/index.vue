<template>
  <div class="wrapper">
   <storelist></storelist>
  </div>
</template>
<script>
import storelist from './storelist.vue';

export default {
  name: 'store',
  components: {
    storelist,
  },
  data() {
    return {
      collapse: false,
    };
  },
};
</script>
