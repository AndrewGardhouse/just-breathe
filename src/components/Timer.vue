<template>
  <div class="timer flex flex-column"
       v-bind:class="{ 'inhale-background': inhaleInterval || holdInhaleInterval }"
       v-bind:style="{ transitionDuration: `${transitionSpeed}s` }">
    <div class="breath-circle my-auto absolute"
         v-bind:class="{ 'grow': inhaleInterval || holdInhaleInterval }"
         v-bind:style="{ transitionDuration: `${transitionSpeed}s` }"></div>
    <div class="my-auto" v-if="showCountDown">
      <p class="h1">
        {{ countDown }}
      </p>
    </div>
    <div class="my-auto" v-else>
      <div class="inhale" v-if="inhaleInterval">
        <p class="h1">
          {{ inhaleCount === 0 ? 'Inhale' : inhaleCount }}
        </p>
      </div>
      <div class="hold-inhale" v-if="holdInhaleInterval">
        <p class="h1">
          {{ holdInhaleCount === 0 ? 'Hold' : holdInhaleCount }}
        </p>
      </div>
      <div class="exhale" v-if="exhaleInterval">
        <p class="h1">
          {{ exhaleCount === 0 ? 'Exhale' : exhaleCount }}
        </p>
      </div>
      <div class="hold-exhale" v-if="holdExhaleInterval">
        <p class="h1">
          {{ holdExhaleCount === 0 ? 'Hold' : holdExhaleCount }}
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
      inhaleCount: 0,
      inhaleInterval: null,
      holdInhaleCount: 0,
      holdInhaleInterval: null,
      exhaleCount: 0,
      exhaleInterval: null,
      holdExhaleCount: 0,
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
    transitionSpeed() {
      let speed;
      if (this.inhaleInterval) {
        speed = this.inhale;
      } else {
        speed = this.exhale;
      }
      return speed + 1;
    },
  },
  mounted() {
    this.countDownInterval = setInterval(() => {
      this.countDown -= 1;
    }, 1000);
  },
  watch: {
    countDown(newVal) {
      if (newVal === 0) {
        clearInterval(this.countDownInterval);
        this.showCountDown = !this.showCountDown;
        this.inhaleInterval = setInterval(() => {
          this.inhaleCount += 1;
        }, 1000);
      }
    },
    inhaleCount(newVal) {
      if (newVal === this.inhale + 1) {
        clearInterval(this.inhaleInterval);
        this.inhaleInterval = null;
        this.inhaleCount = 0;
        // if holdInhale is 0, start the exhaleInterval
        // else start holdInhaleInterval
        if (this.holdInhale === 0) {
          this.exhaleInterval = setInterval(() => {
            this.exhaleCount += 1;
          }, 1000);
        } else {
          this.holdInhaleInterval = setInterval(() => {
            this.holdInhaleCount += 1;
          }, 1000);
        }
      }
    },
    holdInhaleCount(newVal) {
      if (newVal === this.holdInhale + 1) {
        clearInterval(this.holdInhaleInterval);
        this.holdInhaleInterval = null;
        this.holdInhaleCount = 0;
        this.exhaleInterval = setInterval(() => {
          this.exhaleCount += 1;
        }, 1000);
      }
    },
    exhaleCount(newVal) {
      if (newVal === this.exhale + 1) {
        clearInterval(this.exhaleInterval);
        this.exhaleInterval = null;
        this.exhaleCount = 0;
        // if holdExhale is 0, start the inhaleInterval
        // else start holdExhaleInterval
        if (this.holdExhale === 0) {
          this.inhaleInterval = setInterval(() => {
            this.inhaleCount += 1;
          }, 1000);
        } else {
          this.holdExhaleInterval = setInterval(() => {
            this.holdExhaleCount += 1;
          }, 1000);
        }
      }
    },
    holdExhaleCount(newVal) {
      if (newVal === this.holdExhale + 1) {
        clearInterval(this.holdExhaleInterval);
        this.holdExhaleInterval = null;
        this.holdExhaleCount = 0;
        this.inhaleInterval = setInterval(() => {
          this.inhaleCount += 1;
        }, 1000);
      }
    },
  },
};
</script>

<style lang="less">
.timer {
  position: absolute;
  height: 100vh;
  width: 100vw;
  transition-timing-function: linear;
  transition-property: background-color;
  &.inhale-background {
    background-color: rgba(35,206,235,1);
  }
  .breath-circle {
    border-radius: 50%;
    border: 1px solid #2c3e50;
    box-shadow: inset 0px 0px 2px 0px rgba(44,62,80,1), 0px 0px 2px 0px rgba(44,62,80,1);
    height: 35vw;
    width: 35vw;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition-property: all;
    transition-timing-function: linear;
    transform: scale(1);
    &.grow {
      transform: scale(1.6);
    }
  }
}
</style>
