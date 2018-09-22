<template>
  <div class="option my2 px2">
    <label class="flex justify-between mb1" :for="fieldNameSlugified">
      <span class="bold">{{ fieldName }}:</span>
      <span>{{ value }} {{ secondPluralFilter(value) }}</span>
    </label>
    <vue-slider :ref="fieldNameSlugified"
                :value.sync="value"
                :min="minTime"
                :max="maxTime"
                :tooltip="false"
                :sliderStyle="sliderStyle"
                :bgStyle="bgStyle"
                :processStyle="processStyle"
                @callback="updateValue"
                @drag-end="emitShowSaved"></vue-slider>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import { mapActions } from 'vuex';

export default {
  props: {
    value: {
      required: true,
      type: Number,
    },
    minTime: {
      required: true,
      type: Number,
    },
    maxTime: {
      required: true,
      type: Number,
    },
    fieldName: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      bgStyle: {
        height: '2px',
      },
      processStyle: {
        backgroundColor: '#0F3C7B',
      },
      sliderStyle: {
        boxShadow: 'none',
        backgroundColor: '#0F3C7B',
        top: '-7px',
      },
    };
  },
  components: {
    VueSlider,
  },
  computed: {
    fieldNameSlugified() {
      // https://gist.github.com/mathewbyrne/1280286
      return this.fieldName.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        // eslint-disable-next-line
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        // eslint-disable-next-line
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
    },
    fieldNameCapitalized() {
      return this.fieldName.toString().charAt(0).toUpperCase() + this.fieldName.toString().slice(1).replace(/[^\w]+/g, '');
    },
  },
  methods: {
    ...mapActions([
      'updateTimerValue',
    ]),
    secondPluralFilter(time) {
      let label = '';
      if (time === 1) {
        label = 'second';
      } else if (time > 1 || time === 0) {
        label = 'seconds';
      }
      return label;
    },
    updateValue(value) {
      this.updateTimerValue({
        timeAmount: value,
        fieldProperty: this.fieldNameCapitalized,
      });
    },
    emitShowSaved() {
      this.$emit('showSavedMessage');
    }
  },
};
</script>
