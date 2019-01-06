<template>
  <div id="app">
    <transition name="page-fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // eslint-disable-next-line
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      // We execute the same script as before
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    // if (window.matchMedia('(display-mode: fullscreen)').matches || window.navigator.standalone) {
    //   alert('display-mode is standalone');
    //   console.log('display-mode is standalone');
    // }
  },
};
</script>

<style lang="less">
@import  './assets/variables';

body {
  margin: 0;
  position: absolute;
  width: 100vw;
  background-color: rgba(250, 245, 239, 1);
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.page-fade-enter-active, .page-fade-leave-active {
  transition: opacity 0.3s;
}
.page-fade-enter, .page-fade-leave-to {
  opacity: 0;
}
</style>
