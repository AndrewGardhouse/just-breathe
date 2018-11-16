<template lang="html">
  <button class="start-stop"
          v-on:click="toggleTimer"
          v-bind:class="{ 'start-stop--hidden' : !showButton }"
          v-bind:disabled="!showButton">
    <Pause v-if="this.isTimerRunning" />
    <Play v-else />
  </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Play from './Play.vue';
import Pause from './Pause.vue';

export default {
  components: {
    Play,
    Pause
  },
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
  &--hidden {
    opacity: 0;
  }
}
</style>
