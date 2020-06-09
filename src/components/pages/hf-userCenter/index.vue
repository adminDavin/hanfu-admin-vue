<template>
<div class="wrapper">
  <userList></userList>
</div>
</template>

<script >
import userList from './userList.vue';

export default {
  name: 'store',
  components: {
    userList,
  },
  data() {
    return {
      collapse: false,
    };
  },
};
</script>
