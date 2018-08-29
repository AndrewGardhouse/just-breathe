<template>
  <modal name="timer-options" :adaptive="true" height="auto">
    <div class="timer-options flex flex-column p2">
      <p class="h1 m0">Settings</p>
      <Option fieldName="Inhale" :value="inhale" :minTime="1" :maxTime="12" />
      <Option fieldName="Exhale" :value="exhale" :minTime="1" :maxTime="12" />
      <Option fieldName="Hold Inhale" :value="holdInhale" :minTime="0" :maxTime="12" />
      <Option fieldName="Hold Exhale" :value="holdExhale" :minTime="0" :maxTime="12" />
      <div class="my1 flex">
        <button class="btn btn-outline" v-on:click="closeModal">Close</button>
      </div>
    </div>
  </modal>
</template>

<script>
import vueSlider from 'vue-slider-component';
import Option from '@/components/Option.vue';
import { mapState } from 'vuex';

export default {
  components: {
    vueSlider,
    Option,
  },
  computed: {
    ...mapState([
      'inhale',
      'exhale',
      'holdInhale',
      'holdExhale',
    ]),
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
