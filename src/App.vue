<template>
  <div id="app">
    <div class="wrapper flex flex-column"
         v-bind:class="{
          'timer-is-running': isTimerRunning,
          'inhale-background': isInhale && isTimerRunning,
         }"
         v-bind:style="{ transitionDuration: `${transitonSpeed}s` }">
      <Clock />
      <transition name="fade">
        <Timer v-if="isTimerRunning"
               v-on:updateTransition="updateTransition"
               v-on:toggleInhaleOrExhale="toggleInhale" />
        <div class="my-auto" v-else>
          <p class="h1 mt0">Just Breathe</p>
          <button class="open-options" v-on:click="openOptions">
            <font-awesome-icon icon="cog" size="3x" />
          </button>
        </div>
      </transition>
      <TimerOptions />
      <TimerToggle v-on:resetTransitionSpeed="updateTransition"
                   v-on:setIsInhaleFalse="toggleInhale" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Timer from './components/Timer.vue';
import TimerOptions from './components/TimerOptions.vue';
import TimerToggle from './components/TimerToggle.vue';
import Clock from './components/Clock.vue';

export default {
  name: 'app',
  components: {
    Timer,
    TimerOptions,
    TimerToggle,
    Clock,
  },
  data() {
    return {
      transitonSpeed: 1,
      isInhale: false,
    };
  },
  computed: {
    ...mapState([
      'isTimerRunning',
    ]),
  },
  methods: {
    openOptions() {
      this.$modal.show('timer-options');
    },
    updateTransition(speed) {
      this.transitonSpeed = speed;
    },
    toggleInhale(isInhale) {
      this.isInhale = isInhale;
    },
  },
};
</script>

<style lang="less">
@import  './assets/variables';

body {
  margin: 0;
  position: absolute;
  height: 100%;
  width: 100%;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @dark;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  &:focus {
    outline:0;
  }
  svg > path {
    fill: @dark;
  }
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.wrapper {
  height: 100vh;
  background-color: #faf5ef;
  transition-timing-function: linear;
  transition-property: background-color;
  &.timer-is-running {
    // background-color: rgba(35,206,235,0.1);
    background-color: #f3fafd;
  }
  &.inhale-background {
    // background-color: rgba(35,206,235,1);
    background-color: #45b3e0;
  }
  .open-options {
    position: absolute;
    padding: 0;
    bottom: @button-position;
    left: @button-position;
    user-select: none;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
