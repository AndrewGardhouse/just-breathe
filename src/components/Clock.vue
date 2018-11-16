<template lang="html">
  <p class="time m0"
     v-bind:class="{ 'time--is-running': isRunning }">{{ timeRunning }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    isRunning: {
      type: Boolean,
      required: true,
    },
  },
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
  transition-timing-function: linear;
  transition-property: color;
  transition-duration: 0.5s;
  font-size: 1.6rem;
  position: absolute;
  z-index: 1;
  top: @button-position;
  right: @button-position;
  color: @light;
  font-weight: bold;
  &--is-running {
    color: rgba(255,255,255,0.68);
  }
}
</style>
