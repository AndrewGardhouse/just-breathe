<template>
  <div id="app">
    <div class="wrapper flex flex-column" v-bind:class="{ 'timer-is-running' : isTimerRunning}">
      <Clock />
      <Timer v-if="isTimerRunning" />
      <div class="my-auto" v-else>
        <p class="h1 mt0">Just Breathe</p>
        <button class="open-options" v-on:click="openOptions">
          <font-awesome-icon icon="cog" size="5x" />
        </button>
      </div>
      <TimerOptions />
      <TimerToggle />
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
  computed: {
    ...mapState([
      'isTimerRunning',
    ]),
  },
  methods: {
    openOptions() {
      this.$modal.show('timer-options');
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
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @dark;
  button:focus {
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
  transition: background-color 1s;
  &.timer-is-running {
    background-color: rgba(35,206,235,0.1);
  }
  .open-options {
    position: absolute;
    padding: 0;
    bottom: @button-position;
    left: @button-position;
    user-select: none;
  }
}
</style>
