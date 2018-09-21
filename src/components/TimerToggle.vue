<template lang="html">
  <button class="start-stop"
          v-on:click="toggleTimer"
          v-bind:class="{ 'hide-button' : !showButton }"
          v-bind:disabled="!showButton">
    <font-awesome-icon icon="pause" size="3x" v-if="this.isTimerRunning" />
    <font-awesome-icon icon="play" size="3x" v-else />
  </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      showButton: true,
      timeout: null,
    };
  },
  computed: {
    ...mapState([
      'isTimerRunning',
    ]),
    buttonText() {
      return this.isTimerRunning ? 'Stop' : 'Start';
    },
  },
  methods: {
    ...mapMutations([
      'toggleIsTimerRunning',
      'startTimer',
      'stopTimer',
    ]),
    toggleTimer() {
      this.toggleIsTimerRunning();
      if (this.isTimerRunning) {
        this.startTimer();
        this.showButton = !this.showButton;
        this.timeout = setTimeout(() => {
          this.showButton = !this.showButton;
          clearTimeout(this.timeout);
        }, 6000);
      } else {
        this.stopTimer();
        this.$emit('resetTransitionSpeed', 1);
        this.$emit('setIsInhaleFalse', false);
      }
    },
  },
};
</script>

<style lang="less">
@import  '../assets/variables';

.start-stop {
  position: absolute;
  padding: 0;
  bottom: @button-position;
  right: @button-position;
  transition: opacity 0.5s;
  opacity: 1;
  user-select: none;
  &.hide-button {
    opacity: 0;
  }
}
</style>
