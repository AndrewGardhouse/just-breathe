<template lang="html">
  <button class="btn btn-outline start-stop"
          v-on:click="toggleTimer"
          v-bind:class="{ 'hide-button' : !showButton }">{{ buttonText }}</button>
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
          clearTimout(this.timeout);
        }, 6000);
      } else {
        this.stopTimer();
      }
    },
  },
};
</script>

<style lang="less">
.start-stop {
  @button-position: 5vw;
  @button-size: 25vw;

  position: absolute;
  padding: 0;
  bottom: @button-position;
  right: @button-position;
  height: @button-size;
  width: @button-size;
  border-radius: 100%;
  transition: opacity 0.5s;
  opacity: 1;
  &.hide-button {
    opacity: 0;
  }
}
</style>
