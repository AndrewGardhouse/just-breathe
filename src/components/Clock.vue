<template lang="html">
  <p class="time m0">{{ timeRunning }}</p>
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
@import  '../assets/variables';

.time {
  font-size: 1.6rem;
  position: absolute;
  z-index: 1;
  top: @button-position;
  right: @button-position;
  color: @light;
  font-weight: bold;
}
</style>
