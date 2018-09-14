<template lang="html">
  <button class="btn btn-outline start-stop" v-on:click="toggleTimer">{{ buttonText }}</button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
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
        this.startTimer()
      } else {
        this.stopTimer()
      }
    },
  },
};
</script>

<style lang="less" scoped>
button {
  @button-position: 5vw;
  @button-size: 25vw;

  position: absolute;
  padding: 0;
  bottom: @button-position;
  right: @button-position;
  height: @button-size;
  width: @button-size;
  border-radius: 100%;
}
</style>
