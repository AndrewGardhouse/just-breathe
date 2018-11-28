<template lang="html">
  <transition name="fade">
    <p class="time m0"
       v-if="showClock"
       v-bind:class="{ 'time--is-running': isRunning }">{{ timeRunning }}</p>
  </transition>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  props: {
    isRunning: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    ...mapState([
      'showClock',
    ]),
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
  transition-property: color, opacity;
  transition-duration: 0.5s;
  font-size: 1.6rem;
  position: absolute;
  z-index: 1;
  top: @button-position;
  right: @button-position;
  color: @light;
  font-weight: bold;
  &--is-running {
    color: @white;
  }
}
</style>
