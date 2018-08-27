<template>
  <div id="app">
    <h1>Just Breathe</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <button class="btn btn-outline">Options</button>
    <Timer />
    <TimerOptions />
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
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
