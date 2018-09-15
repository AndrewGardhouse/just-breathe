<template>
  <div class="timer flex flex-column">
    <div class="my-auto" v-if="showCountDown">
      <p class="h1">
        {{ countDown }}
      </p>
    </div>
    <div class="my-auto" v-else>
      <p class="h1 inhale" v-if="inhaleInterval">
        Inhale
        <br>
        <span v-show="inhaleCount !== 0">
          {{ inhaleCount }}
        </span>
      </p>
      <p class="h1 hold-inhale" v-if="holdInhaleInterval">
        Hold
        <br>
        <span v-show="holdInhaleCount !== 0">
          {{ holdInhaleCount }}
        </span>
      </p>
      <p class="h1 exhale" v-if="exhaleInterval">
        Exhale
        <br>
        <span v-show="exhaleCount !== 0">
          {{ exhaleCount }}
        </span>
      </p>
      <p class="h1 hold-exhale" v-if="holdExhaleInterval">
        Hold
        <br>
        <span v-show="holdExhaleCount !== 0">
          {{ holdExhaleCount }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      showCountDown: true,
      countDown: 5,
      countDownInterval: null,
      inhaleCount: 1,
      inhaleInterval: null,
      holdInhaleCount: 1,
      holdInhaleInterval: null,
      exhaleCount: 1,
      exhaleInterval: null,
      holdExhaleCount: 1,
      holdExhaleInterval: null,
    };
  },
  computed: {
    ...mapState([
      'inhale',
      'holdInhale',
      'exhale',
      'holdExhale',
    ]),
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
        this.inhaleInterval = setInterval(() => {
          this.inhaleCount = this.inhaleCount + 1;
        }, 1000);
      }
    },
    inhaleCount(newVal, oldVal) {
      if (newVal === this.inhale + 1) {
        clearInterval(this.inhaleInterval);
        this.inhaleInterval = null;
        this.inhaleCount = 0;
        // if holdInhale is 0, start the exhaleInterval
        // else start holdInhaleInterval
        if (this.holdInhale === 0) {
          this.exhaleInterval = setInterval(() => {
            this.exhaleCount = this.exhaleCount + 1;
          }, 1000);
        } else {
          this.holdInhaleInterval = setInterval(() => {
            this.holdInhaleCount = this.holdInhaleCount + 1;
          }, 1000);
        }
      }
    },
    holdInhaleCount(newVal, oldVal) {
      if (newVal === this.holdInhale + 1) {
        clearInterval(this.holdInhaleInterval);
        this.holdInhaleInterval = null;
        this.holdInhaleCount = 0;
        this.exhaleInterval = setInterval(() => {
          this.exhaleCount = this.exhaleCount + 1;
        }, 1000);
      }
    },
    exhaleCount(newVal, oldVal) {
      if (newVal === this.exhale + 1) {
        clearInterval(this.exhaleInterval);
        this.exhaleInterval = null;
        this.exhaleCount = 0;
        // if holdExhale is 0, start the inhaleInterval
        // else start holdExhaleInterval
        if (this.holdExhale === 0) {
          this.inhaleInterval = setInterval(() => {
            this.inhaleCount = this.inhaleCount + 1;
          }, 1000);
        } else {
          this.holdExhaleInterval = setInterval(() => {
            this.holdExhaleCount = this.holdExhaleCount + 1;
          }, 1000);
        }
      }
    },
    holdExhaleCount(newVal, oldVal) {
      if (newVal === this.holdExhale + 1) {
        clearInterval(this.holdExhaleInterval);
        this.holdExhaleInterval = null;
        this.holdExhaleCount = 0;
        this.inhaleInterval = setInterval(() => {
          this.inhaleCount = this.inhaleCount + 1;
        }, 1000);
      }
    }
  },
};
</script>

<style lang="less">
.timer {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>
