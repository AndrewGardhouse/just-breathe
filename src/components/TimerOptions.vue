<template>
  <modal name="timer-options"
         transition="fade"
         overlayTransition="fade"
         height="auto"
         :adaptive="true"
         :clickToClose="false">
    <div class="timer-options flex flex-column py2">
      <!-- <div class="flex justify-end px2">
        <button class="timer-options__close my-auto" v-on:click="closeModal">
          <font-awesome-icon icon="times" size="2x" />
        </button>
      </div> -->
      <div class="px2 mb2">
        <p class="h2 bold my-auto">Settings</p>
      </div>
      <Option fieldName="Inhale"
              :value="inhale"
              :minTime="1"
              :maxTime="12" />
      <hr>
      <Option fieldName="Hold Inhale"
              :value="holdInhale"
              :minTime="0"
              :maxTime="12" />
      <hr>
      <Option fieldName="Exhale"
              :value="exhale"
              :minTime="1"
              :maxTime="12" />
      <hr>
      <Option fieldName="Hold Exhale"
              :value="holdExhale"
              :minTime="0"
              :maxTime="12" />
      <div class="flex justify-end px2 mt1">
        <button class="btn btn-outline" v-on:click="closeModal">Save</button>
      </div>
    </div>
  </modal>
</template>

<script>
import Option from '@/components/Option.vue';
import { mapState } from 'vuex';

export default {
  components: {
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
@import  '../assets/variables';

.timer-options {
  background-color: @background-color;
  hr {
    width: 100%;
  }
  &__close {
    svg > path {
      fill: #0F3C7B;
    }
  }
}
</style>
