<template>
  <modal name="timer-options" :adaptive="true" height="auto">
    <div class="timer-options flex flex-column p2">
      <p class="h1 m0">Settings</p>
      <div class="my1">
        <label for="slider-two">
          Inhale: {{ valTwo }} {{ secondPluralFilter(valTwo) }}
        </label>
        <vue-slider ref="slider-two"
                    v-model="valTwo"
                    :min="1"
                    :max="12"
                    :tooltip="false"></vue-slider>
      </div>
      <div class="my1">
        <label for="slider-three">
          Exhale: {{ valThree }} {{ secondPluralFilter(valThree) }}
        </label>
        <vue-slider ref="slider-three"
                    v-model="valThree"
                    :min="1"
                    :max="12"
                    :tooltip="false"></vue-slider>
      </div>
      <div class="my1">
        <label for="slider-four">
          Hold Inhale: {{ valFour }} {{ secondPluralFilter(valFour) }}
        </label>
        <vue-slider ref="slider-four"
                    v-model="valFour"
                    :max="12"
                    :tooltip="false"></vue-slider>
      </div>
      <div class="my1">
        <label for="slider-five">
          Hold Exhale: {{ valFive }} {{ secondPluralFilter(valFive) }}
        </label>
        <vue-slider ref="slider-five"
                    v-model="valFive"
                    :max="12"
                    :tooltip="false"></vue-slider>
      </div>
      <div class="my1 flex">
        <button class="btn btn-outline" v-on:click="closeModal">Close</button>
      </div>
    </div>
  </modal>
</template>

<script>
import vueSlider from 'vue-slider-component';

export default {
  components: {
    vueSlider,
  },
  data() {
    return {
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
    secondPluralFilter(time) {
      let label = '';
      if (time === 1) {
        label = 'second';
      } else if (time > 1) {
        label = 'seconds';
      }
      return label;
    },
  },
};
</script>

<style lang="less">
</style>
