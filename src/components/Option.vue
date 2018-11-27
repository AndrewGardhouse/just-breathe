<template>
  <div class="option my2">
    <label class="flex justify-between mb1 option__label" :for="fieldNameSlugified">
      <span class="label__field-name">{{ fieldName }}:</span>
      <span class="label__field-value">{{ value }} {{ secondPluralFilter(value) }}</span>
    </label>
    <vue-slider :ref="fieldNameSlugified"
                :value.sync="value"
                :min="minTime"
                :max="maxTime"
                :tooltip="false"
                :sliderStyle="sliderStyle"
                :bgStyle="bgStyle"
                :processStyle="processStyle"
                @callback="updateValue"></vue-slider>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';

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
        backgroundColor: '#918f8d',
      },
      sliderStyle: {
        boxShadow: 'none',
        backgroundColor: '#918f8d',
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
    fieldNameCamelCase() {
      return this.fieldName.toString()
        .replace(/\s(.)/g, ($1) => $1.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, ($1) => $1.toLowerCase());
    },
  },
  methods: {
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
      this.$emit('updateTimerValue', {
        timeAmount: value,
        fieldProperty: this.fieldNameCamelCase,
      });
    },
  },
};
</script>

<style lang="less">
@import  '../assets/variables';

.option {
  &__label {
    font-family: 'Roboto', sans-serif;
    color: #918f8d;
    .label__field-value {
      font-weight: 300;
    }
  }
}
</style>
