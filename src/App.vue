<template>
  <div id="app">
    <div class="wrapper flex flex-column" v-bind:class="{ 'timer-is-running' : isTimerRunning}">
      <Clock />
      <Timer v-if="isTimerRunning" />
      <div class="my-auto" v-else>
        <p class="h1 mt0">Just Breathe</p>
        <button class="btn btn-outline open-options" v-on:click="openOptions">Settings</button>
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
body {
  margin: 0;
  position: absolute;
  height: 100%;
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.wrapper {
  height: 100vh;
  background-color: #faf5ef;
  transition: background-color 3s;
  &.timer-is-running {
    background-color: #7FD9F1;
  }
}
</style>
