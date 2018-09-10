<template>
  <div class="option my1">
    <label :for="fieldNameSlugified">
      {{ labelText }}
    </label>
    <vue-slider :ref="fieldNameSlugified"
                :value.sync="value"
                :min="minTime"
                :max="maxTime"
                :tooltip="false"
                :piecewise="true"
                :piecewiseStyle="piecewiseStyle"
                :piecewiseActiveStyle="piecewiseActiveStyle"
                @callback="updateValue"></vue-slider>
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
      piecewiseStyle: {
        backgroundColor: '#ccc',
        visibility: 'visible',
        width: '12px',
        height: '12px',
      },
      piecewiseActiveStyle: {
        backgroundColor: '#3498db',
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
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
    },
    labelText() {
      return `${this.fieldName}: ${this.value} ${this.secondPluralFilter(this.value)}`;
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
      } else if (time > 1) {
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
  },
};
</script>
