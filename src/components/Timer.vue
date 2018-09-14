<template>
  <div class="timer">
    <p>Total time per round: {{ breathingCycleTime }} seconds</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'breathingCycleTime',
      'timeRunning',
    ]),
  },
};
</script>
