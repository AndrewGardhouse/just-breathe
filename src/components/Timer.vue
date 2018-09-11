<template>
  <div class="timer">
    <p class="h1">Timer</p>
    <p>Total time per round: {{ breathRoundTime }} seconds</p>
    <button class="btn btn-outline start-stop" v-on:click="toggleTimer">{{ buttonText }}</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState([
      'isTimerRunning',
    ]),
    ...mapGetters([
      'breathRoundTime',
    ]),
    buttonText() {
      return this.isTimerRunning ? 'Stop' : 'Start';
    },
  },
  methods: {
    ...mapMutations([
      'toggleTimer',
    ]),
  },
};
</script>
