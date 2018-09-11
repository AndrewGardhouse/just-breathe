<template>
  <div class="timer">
    <p class="h1">Timer</p>
    <p>Total time per round: {{ breathingCycleTime }} seconds</p>
    <button class="btn btn-outline start-stop" v-on:click="toggleTimer">{{ buttonText }}</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import moment from 'moment';

export default {
  data() {
    return {
      startTime: null,
      currentTime: null,
      interval: null,
    };
  },
  computed: {
    ...mapState([
      'isTimerRunning',
    ]),
    ...mapGetters([
      'breathingCycleTime',
    ]),
    buttonText() {
      return this.isTimerRunning ? 'Stop' : 'Start';
    },
    timeRunning() {
      let time;
      if (this.currentTime && this.startTime) {
        time = moment(this.currentTime.diff(this.startTime)).format('mm:ss');
      } else {
        time = '00:00';
      }
      return time;
    },
  },
  methods: {
    ...mapMutations([
      'toggleIsTimerRunning',
    ]),
    increaseTime() {
      this.currentTime = moment();
    },
    toggleTimer() {
      this.toggleIsTimerRunning();
      if (this.isTimerRunning) {
        this.startTime = moment();
        this.currentTime = moment();
        this.interval = setInterval(this.increaseTime, 1000);
      } else {
        clearInterval(this.interval);
      }
    },
  },
};
</script>
