<template lang="html">
  <button class="start-stop"
          v-on:click="toggleTimer"
          v-bind:class="{ 'start-stop--hidden' : !showButton }"
          v-bind:disabled="!showButton">
    <font-awesome-icon icon="pause" size="2x" v-if="this.isTimerRunning" />
    <font-awesome-icon icon="play" size="2x" v-else />
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
  border-radius: 100%;
  border: 2px solid #918f8d;
  height: calc(@button-position * 4);
  width: calc(@button-position * 4);
  &--hidden {
    opacity: 0;
  }
  svg {
    &.fa-play {
      margin: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 5px;
    }
    path {
      fill: #918f8d;
    }
  }
}
</style>
