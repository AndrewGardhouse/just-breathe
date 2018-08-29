<template>
  <div class="option my1">
    <label :for="fieldNameSlugified">
      {{ fieldName }}: {{ value }} {{ secondPluralFilter(value) }}
    </label>
    <vue-slider :ref="fieldNameSlugified"
                :value.sync="value"
                :min="minTime"
                :max="maxTime"
                :tooltip="false"></vue-slider>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component';

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
    }
  },
  components: {
    vueSlider,
  },
  computed: {
    fieldNameSlugified() {
      // https://gist.github.com/mathewbyrne/1280286
      return this.fieldName.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    },
  },
  methods: {
    secondPluralFilter(time) {
      let label = '';
      if (time === 1) {
        label = 'second';
      } else if (time > 1) {
        label = 'seconds';
      }
      return label;
    },
  }
}
</script>

<style lang="css">
</style>
