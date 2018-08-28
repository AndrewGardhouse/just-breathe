<template>
  <modal name="timer-options" :adaptive="true" height="auto">
    <div class="timer-options flex flex-column p2">
      <p class="h1 m0">Settings</p>
      <div class="my1">
        <label for="">Total Time</label>
        <vue-slider ref="slider-one" v-model="valOne"></vue-slider>
      </div>
      <div class="my1">
        <label for="">Inhale</label>
        <vue-slider ref="slider-two" v-model="valTwo"></vue-slider>
      </div>
      <div class="my1">
        <label for="">Exhale</label>
        <vue-slider ref="slider-three" v-model="valThree"></vue-slider>
      </div>
      <div class="my1">
        <label for="">Hold Inhale</label>
        <vue-slider ref="slider-four" v-model="valFour"></vue-slider>
      </div>
      <div class="my1">
        <label for="">Hold Exhale</label>
        <vue-slider ref="slider-five" v-model="valFive"></vue-slider>
      </div>
      <div class="my1">
        <button class="btn btn-outline" v-on:click="closeModal">Close</button>
      </div>
    </div>
  </modal>
</template>

<script>
import vueSlider from 'vue-slider-component'

export default {
  components: {
    vueSlider
  },
  data() {
    return {
      valOne: 3,
      valTwo: 4,
      valThree: 5,
      valFour: 1,
      valFive: 2,
    };
  },
  methods: {
    closeModal() {
      this.$modal.hide('timer-options');
    },
  },
};
</script>

<style lang="less">
</style>
