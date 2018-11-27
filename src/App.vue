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
      <OptionsFeedbackModal />
      <TimerToggle v-on:resetTransitionSpeed="updateTransition"
                   v-on:setIsInhaleFalse="toggleInhale" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Timer from './components/Timer.vue';
import OptionsFeedbackModal from './components/OptionsFeedbackModal.vue';
import TimerToggle from './components/TimerToggle.vue';
import Clock from './components/Clock.vue';

export default {
  name: 'app',
  components: {
    Timer,
    OptionsFeedbackModal,
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
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
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
      'modalName',
    ]),
  },
  methods: {
    openOptions() {
      this.$modal.show(this.modalName);
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
  width: 100vw;
}

body, #app, .wrapper {
  height: @viewport-height;
  overflow: hidden;
}

#app {
  font-family: 'Comfortaa', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @dark;
}

::selection {
  background: #f0e8db;
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
  color: #fff;
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
  color: #fff;
  background-color: #d8c3a1;
  border-radius: 2px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  padding: .5rem 1.5rem;
  border: none;
  &:focus {
    box-shadow: none;
  }
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
