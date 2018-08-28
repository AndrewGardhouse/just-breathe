<template>
  <modal name="timer-options" :adaptive="true" height="auto">
    <div class="timer-options flex flex-column p2">
      <p class="h1 m0">Settings</p>
      <div class="my1">
        <label for="slider-two">
          Inhale: {{ inhale }} {{ secondPluralFilter(inhale) }}
        </label>
        <vue-slider ref="slider-two"
                    :value.sync="inhale"
                    :min="1"
                    :max="12"
                    :tooltip="false"></vue-slider>
      </div>
      <div class="my1">
        <label for="slider-three">
          Exhale: {{ exhale }} {{ secondPluralFilter(exhale) }}
        </label>
        <vue-slider ref="slider-three"
                    :value.sync="exhale"
                    :min="1"
                    :max="12"
                    :tooltip="false"></vue-slider>
      </div>
      <div class="my1">
        <label for="slider-four">
          Hold Inhale: {{ heldInhale }} {{ secondPluralFilter(heldInhale) }}
        </label>
        <vue-slider ref="slider-four"
                    :value.sync="heldInhale"
                    :max="12"
                    :tooltip="false"></vue-slider>
      </div>
      <div class="my1">
        <label for="slider-five">
          Hold Exhale: {{ heldExhale }} {{ secondPluralFilter(heldExhale) }}
        </label>
        <vue-slider ref="slider-five"
                    :value.sync="heldExhale"
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
import { mapState } from 'vuex';

export default {
  components: {
    vueSlider,
  },
  computed: {
    ...mapState([
      'inhale',
      'exhale',
      'heldInhale',
      'heldExhale',
    ])
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
