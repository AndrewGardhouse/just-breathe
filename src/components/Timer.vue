<template>
  <div class="timer flex flex-column">
    <div class="timer__breath-circle my-auto absolute"
         v-bind:class="{ 'timer__breath-circle--grow': inhaleInterval || holdInhaleInterval }"
         v-bind:style="{ transitionDuration: `${transitionSpeed}s` }"></div>
    <audio class="click" ref="click">
      <source src="@/assets/click.mp3" type="audio/mpeg">
    </audio>
    <Counter :count="countDown" :total="countDown" v-if="showCountDown" />
    <Counter name="inhale" :count="inhaleCount" :total="inhale" v-if="inhaleInterval" />
    <Counter name="hold" :count="holdInhaleCount" :total="holdInhale" v-if="holdInhaleInterval" />
    <Counter name="exhale" :count="exhaleCount" :total="exhale" v-if="exhaleInterval" />
    <Counter name="hold" :count="holdExhaleCount" :total="holdExhale" v-if="holdExhaleInterval" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import Counter from './Counter.vue';

export default {
  components: {
    Counter,
  },
  data() {
    return {
      showCountDown: true,
      countDown: 3,
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
  methods: {
    ...mapMutations([
      'toggleShowClock',
    ]),
    playClick() {
      this.$refs.click.volume = 0.1;
      this.$refs.click.play();
    },
    clearCountDown() {
      clearInterval(this.countDownInterval);
      this.countDownInterval = null;
      this.showCountDown = !this.showCountDown;
      this.toggleShowClock();
    },
    startInhaleCount() {
      this.$emit('updateTransition', this.inhale + 1);
      this.$emit('toggleInhaleOrExhale', true);
      this.inhaleInterval = setInterval(() => {
        this.inhaleCount += 1;
      }, 1000);
    },
    clearInhale() {
      clearInterval(this.inhaleInterval);
      this.inhaleInterval = null;
      this.inhaleCount = 0;
    },
    startHoldInhaleCount() {
      this.holdInhaleInterval = setInterval(() => {
        this.holdInhaleCount += 1;
      }, 1000);
    },
    clearHoldInhale() {
      clearInterval(this.holdInhaleInterval);
      this.holdInhaleInterval = null;
      this.holdInhaleCount = 0;
    },
    startExhaleCount() {
      this.$emit('updateTransition', this.exhale + 1);
      this.$emit('toggleInhaleOrExhale', false);
      this.exhaleInterval = setInterval(() => {
        this.exhaleCount += 1;
      }, 1000);
    },
    clearExhale() {
      clearInterval(this.exhaleInterval);
      this.exhaleInterval = null;
      this.exhaleCount = 0;
    },
    startHoldExhaleCount() {
      this.holdExhaleInterval = setInterval(() => {
        this.holdExhaleCount += 1;
      }, 1000);
    },
    clearHoldExhale() {
      clearInterval(this.holdExhaleInterval);
      this.holdExhaleInterval = null;
      this.holdExhaleCount = 0;
    },
  },
  watch: {
    // For all of these watchers,
    // we are watching for when the countdowns are finished
    // so we can start new ones
    countDown(newVal) {
      if (newVal === 0) {
        this.playClick();
        this.clearCountDown();
        this.startInhaleCount();
      }
    },
    inhaleCount(newVal) {
      if (newVal === this.inhale + 1) {
        this.playClick();
        this.clearInhale();
        if (this.holdInhale === 0) {
          this.startExhaleCount();
        } else {
          this.startHoldInhaleCount();
        }
      }
    },
    holdInhaleCount(newVal) {
      if (newVal === this.holdInhale + 1) {
        this.playClick();
        this.clearHoldInhale();
        this.startExhaleCount();
      }
    },
    exhaleCount(newVal) {
      if (newVal === this.exhale + 1) {
        this.playClick();
        this.clearExhale();
        if (this.holdExhale === 0) {
          this.startInhaleCount();
        } else {
          this.startHoldExhaleCount();
        }
      }
    },
    holdExhaleCount(newVal) {
      if (newVal === this.holdExhale + 1) {
        this.playClick();
        this.clearHoldExhale();
        this.startInhaleCount();
      }
    },
  },
};
</script>

<style lang="less">
@import  '../assets/variables';

.timer {
  position: absolute;
  height: @viewport-height;
  width: 100vw;
  &__breath-circle {
    border-radius: 50%;
    border: 1px solid @white;
    height: 35vw;
    width: 35vw;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition-property: all;
    transition-timing-function: linear;
    transform: scale(1);
    @media @breakpoint-md {
      height: 25vw;
      width: 25vw;
    }
    @media @breakpoint-lg {
      height: 15vw;
      width: 15vw;
    }
  }
  &__breath-circle--grow {
    transform: scale(1.6);
  }
}
</style>
