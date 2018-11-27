<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
</style>
