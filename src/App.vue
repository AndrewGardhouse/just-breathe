<template>
  <div id="app">
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
          <button class="wrapper__open-options" v-on:click="openOptions">
            <font-awesome-icon icon="cog" size="3x" />
          </button>
        </div>
      </transition>
      <TimerOptions />
      <TimerToggle v-on:resetTransitionSpeed="updateTransition"
                   v-on:setIsInhaleFalse="toggleInhale" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Timer from './components/Timer.vue';
import TimerOptions from './components/TimerOptions.vue';
import TimerToggle from './components/TimerToggle.vue';
import Clock from './components/Clock.vue';

export default {
  name: 'app',
  components: {
    Timer,
    TimerOptions,
    TimerToggle,
    Clock,
  },
  data() {
    return {
      transitonSpeed: 1,
      isInhale: false,
    };
  },
  computed: {
    ...mapState([
      'isTimerRunning',
    ]),
  },
  methods: {
    openOptions() {
      this.$modal.show('timer-options');
    },
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
@import  './assets/variables';

body {
  margin: 0;
  position: absolute;
  height: 100%;
  width: 100%;
}

#app {
  font-family: 'Comfortaa', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @dark;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  cursor: pointer;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  &:focus {
    outline:0;
  }
}

.btn {
  color: #0F3C7B;
  border-color: #0F3C7B;
  &:focus {
    border-color: inherit;
    box-shadow: none;
  }
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.wrapper {
  height: 100vh;
  background-color: #faf5ef;
  transition-timing-function: linear;
  transition-property: background-color;
  &--timer-running {
    background-color: #bfeaec;
  }
  &--inhale {
    background-color: #bad6c9;
  }
  &__open-options {
    position: absolute;
    padding: 0;
    bottom: calc(@button-position + 2.5vw);
    left: @button-position;
    user-select: none;
    svg > path {
      fill: @light;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
