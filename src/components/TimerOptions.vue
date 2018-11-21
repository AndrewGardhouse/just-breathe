<template lang="html">
  <div class="timer-options flex flex-column py2">
    <!-- <div class="flex justify-end px2">
      <button class="timer-options__close my-auto" v-on:click="closeModal">
        <font-awesome-icon icon="times" size="2x" />
      </button>
    </div> -->
    <div class="px2 mb2">
      <p class="bold my-auto timer-options__title">Settings</p>
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
    <div class="flex px2 mt1 mb3">
      <button class="btn timer-options__save" v-on:click="closeModal">Save</button>
    </div>
    <hr>
    <div class="flex px2 timer-options__contact">
      <p class="mt2 mb0">
        Let us know what you think!
        <span class="px1">
          <a href="#">Feedback</a>
        </span>
      </p>
    </div>
  </div>
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
      'modalName',
    ]),
  },
  methods: {
    closeModal() {
      this.$modal.hide(this.modalName);
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
    margin: 0;
  }
  &__title {
    color: #d8c3a1;
    font-size: 1.6rem;
  }
  &__close {
    svg > path {
      fill: #0F3C7B;
    }
  }
  &__contact {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    color: #918f8d;
    a {
      color: #d8c3a1;
      font-weight: bold;
    }
  }
}
</style>
