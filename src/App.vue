<template>
  <div id="app">
    <div class="flex flex-column">
      <p class="h1">Just Breathe</p>
      <button class="btn btn-outline open-options" v-on:click="openOptions">Options</button>
      <Timer />
      <TimerOptions />
    </div>
  </div>
</template>

<script>
import Timer from './components/Timer.vue';
import TimerOptions from './components/TimerOptions.vue';

export default {
  name: 'app',
  components: {
    Timer,
    TimerOptions,
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
  background-color: #faf5ef;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
