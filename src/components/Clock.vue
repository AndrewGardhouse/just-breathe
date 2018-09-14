<template lang="html">
  <p class="h2 time m0">{{ timeRunning }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'timeRunning',
    ]),
  },
};
</script>

<style lang="less">
.time {
  position: absolute;
  top: 5vw;
  right: 5vw;
}
</style>
