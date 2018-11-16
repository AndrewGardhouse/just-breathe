<template lang="html">
  <button class="start-stop"
          v-on:click="toggleTimer"
          v-bind:class="{ 'start-stop--hidden' : !showButton,
                          'start-stop--pause': isTimerRunning }"
          v-bind:disabled="!showButton">
    <transition name="button-fade" mode="out-in">
      <Pause v-if="isTimerRunning" />
      <Play v-else />
    </transition>
  </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Play from './Play.vue';
import Pause from './Pause.vue';

export default {
  components: {
    Play,
    Pause,
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
  transition: all 0.5s;
  opacity: 1;
  user-select: none;
  border-radius: 50%;
  border: 2px solid #918f8d;
  height: 76px;
  width: 76px;
  &--hidden {
    opacity: 0;
  }
  &--pause {
    border-color: @white;
  }
  svg {
    position: relative;
    bottom: 2px;
    right: 2px;
  }
  .button-fade-enter-active, .button-fade-leave-active {
    transition: opacity .1s;
  }
  .button-fade-enter, .button-fade-leave-to /* .button-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
