<template>
  <div class="wrapper flex flex-column"
           v-bind:class="{
            'wrapper--timer-running': isTimerRunning,
            'wrapper--inhale': isInhale && isTimerRunning,
           }"
           v-bind:style="{ transitionDuration: `${transitonSpeed}s` }">
        <Clock :isRunning="isTimerRunning" />
        <transition name="fade">
          <Timer v-if="isTimerRunning"
                 v-on:updateTransition="updateTransition"
                 v-on:toggleInhaleOrExhale="toggleInhale" />
          <div class="my-auto" v-else>
            <div class="wrapper__title">
              <p class="wrapper__title__just m0">Just</p>
              <p class="wrapper__title__breathe mt2 mb0">Breathe.</p>
              <hr class="wrapper__title__line mt2 mb0 ml0">
            </div>
            <router-link to="/options" class="wrapper__open-options">
              <font-awesome-icon icon="cog" size="3x" />
            </router-link>
          </div>
        </transition>
        <TimerToggle v-on:resetTransitionSpeed="updateTransition"
                     v-on:setIsInhaleFalse="toggleInhale" />
      </div>
</template>

<script>
import { mapState } from 'vuex';
import Timer from '../components/Timer.vue';
import TimerToggle from '../components/TimerToggle.vue';
import Clock from '../components/Clock.vue';

export default {
  name: 'app',
  components: {
    Timer,
    TimerToggle,
    Clock,
  },
  data() {
    return {
      transitonSpeed: 1,
      isInhale: false,
    };
  },
  beforeCreate() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    // if (window.matchMedia('(display-mode: fullscreen)').matches || window.navigator.standalone) {
    //   alert('display-mode is standalone');
    //   console.log('display-mode is standalone');
    // }
  },
  computed: {
    ...mapState([
      'isTimerRunning',
    ]),
  },
  methods: {
    updateTransition(speed) {
      this.transitonSpeed = speed;
    },
    toggleInhale(isInhale) {
      this.isInhale = isInhale;
    },
  },
};
</script>

<style lang="less">
@import  '../assets/variables';

.wrapper {
  height: 100%;
  background-color: rgba(250, 245, 239, 1);
  transition-timing-function: linear;
  transition-property: background-color;
  &--timer-running {
    // background-color: #bfeaec;
    background-color: rgba(186, 214, 201, 1);
  }
  &--inhale {
    // background-color: #bad6c9;
    background-color: rgba(191, 234, 236, 1);
  }
  &__open-options {
    position: absolute;
    padding: 0;
    bottom: @button-position + (@button-position / 2);
    left: @button-position;
    user-select: none;
    svg > path {
      fill: @light;
    }
    @media @breakpoint-md, @breakpoint-lg {
      bottom: @button-position;
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    padding: 0 @button-position;
    &__just, &__breathe, &__line {
      display: flex;
      line-height: 1;
    }
    &__just {
      color: #e9dcc0;
      font-weight: bold;
      font-size: 1.8rem;
    }
    &__breathe {
      color: #d8c3a1;
      font-size: 2.3rem;
      letter-spacing: 0.5rem;
    }
    &__line {
      width: 212px;
      border: 0;
      background-color: @light;
      height: 2px;
    }
  }
}
</style>
