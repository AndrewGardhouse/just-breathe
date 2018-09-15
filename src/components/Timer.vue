<template>
  <div class="timer flex flex-column">
    <div class="my-auto" v-if="showCountDown">
      <p class="h1">
        {{ countDown }}
      </p>
    </div>
    <div class="my-auto" v-else>
      <div class="inhale" v-if="inhaleInterval">
        <p class="h1 mb0">
          Inhale
        </p>
        <p class="h1 mt0">
          <span v-show="inhaleCount !== 0">
            {{ inhaleCount }}
          </span>
        </p>
      </div>
      <div class="hold-inhale" v-if="holdInhaleInterval">
        <p class="h1 mb0">
          Hold
        </p>
        <p class="h1 mt0">
          <span v-show="holdInhaleCount !== 0">
            {{ holdInhaleCount }}
          </span>
        </p>
      </div>
      <div class="exhale" v-if="exhaleInterval">
        <p class="h1 mb0">
          Exhale
        </p>
        <p class="h1 mt0">
          <span v-show="exhaleCount !== 0">
            {{ exhaleCount }}
          </span>
        </p>
      </div>
      <div class="hold-exhale" v-if="holdExhaleInterval">
        <p class="h1 mb0">
          Hold
        </p>
        <p class="h1 mt0">
          <span v-show="holdExhaleCount !== 0">
            {{ holdExhaleCount }}
          </span>
        </p>
      </div>
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
      this.countDown--;
    }, 1000);
  },
  watch: {
    countDown(newVal, oldVal) {
      if (newVal === 0) {
        clearInterval(this.countDownInterval);
        this.showCountDown = !this.showCountDown;
        this.inhaleInterval = setInterval(() => {
          this.inhaleCount++;
        }, 1000);
      }
    },
    inhaleCount(newVal, oldVal) {
      if (newVal === this.inhale + 1) {
        clearInterval(this.inhaleInterval);
        this.inhaleInterval = null;
        this.inhaleCount = 1;
        // if holdInhale is 0, start the exhaleInterval
        // else start holdInhaleInterval
        if (this.holdInhale === 0) {
          this.exhaleInterval = setInterval(() => {
            this.exhaleCount++;
          }, 1000);
        } else {
          this.holdInhaleInterval = setInterval(() => {
            this.holdInhaleCount++;
          }, 1000);
        }
      }
    },
    holdInhaleCount(newVal, oldVal) {
      if (newVal === this.holdInhale + 1) {
        clearInterval(this.holdInhaleInterval);
        this.holdInhaleInterval = null;
        this.holdInhaleCount = 1;
        this.exhaleInterval = setInterval(() => {
          this.exhaleCount++;
        }, 1000);
      }
    },
    exhaleCount(newVal, oldVal) {
      if (newVal === this.exhale + 1) {
        clearInterval(this.exhaleInterval);
        this.exhaleInterval = null;
        this.exhaleCount = 1;
        // if holdExhale is 0, start the inhaleInterval
        // else start holdExhaleInterval
        if (this.holdExhale === 0) {
          this.inhaleInterval = setInterval(() => {
            this.inhaleCount++;
          }, 1000);
        } else {
          this.holdExhaleInterval = setInterval(() => {
            this.holdExhaleCount++;
          }, 1000);
        }
      }
    },
    holdExhaleCount(newVal, oldVal) {
      if (newVal === this.holdExhale + 1) {
        clearInterval(this.holdExhaleInterval);
        this.holdExhaleInterval = null;
        this.holdExhaleCount = 1;
        this.inhaleInterval = setInterval(() => {
          this.inhaleCount++;
        }, 1000);
      }
    }
  },
};
</script>

<style lang="less">
.timer {
  background-color: rgba(69,179,224,0); // #45b3e0
  position: absolute;
  height: 100vh;
  width: 100vw;
  transition: background-color 1s;
}
</style>
