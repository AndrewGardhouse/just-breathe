<template>
  <div class="timer">
    <p class="h1" v-if="showCountDown">
      {{ countDown }}
    </p>
    <p v-else>
      Total time per round: {{ breathingCycleTime }} seconds
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showCountDown: true,
      countDown: 5,
      countDownInterval: null,
    }
  },
  computed: {
    ...mapGetters([
      'breathingCycleTime',
      'timeRunning',
    ]),
  },
  mounted() {
    this.countDownInterval = setInterval(() => {
      this.countDown = this.countDown - 1;
    }, 1000);
  },
  watch: {
    countDown(newVal, oldVal) {
      if (newVal === 0) {
        clearInterval(this.countDownInterval);
        this.showCountDown = !this.showCountDown;
      }
    }
  }
};
</script>
