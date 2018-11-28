<template lang="html">
  <div class="wrapper flex">
    <div class="timer-options flex flex-column max-width-2 mx-auto my-auto px2">
      <div class="flex justify-end">
        <router-link to="/" class="timer-options__close my-auto">
          <font-awesome-icon icon="times" size="2x" />
        </router-link>
      </div>
      <div class="mb2">
        <p class="bold my-auto timer-options__title">Settings</p>
      </div>
      <Option fieldName="Inhale"
              :value="options.inhale"
              :minTime="1"
              :maxTime="12"
              v-on:updateTimerValue="updateValue" />
      <hr>
      <Option fieldName="Hold Inhale"
              :value="options.holdInhale"
              :minTime="0"
              :maxTime="12"
              v-on:updateTimerValue="updateValue" />
      <hr>
      <Option fieldName="Exhale"
              :value="options.exhale"
              :minTime="1"
              :maxTime="12"
              v-on:updateTimerValue="updateValue" />
      <hr>
      <Option fieldName="Hold Exhale"
              :value="options.holdExhale"
              :minTime="0"
              :maxTime="12"
              v-on:updateTimerValue="updateValue" />
      <div class="flex mt1 mb3">
        <button type="button"
                name="save"
                class="btn timer-options__save"
                v-on:click="saveOptions">
          Save
        </button>
      </div>
      <hr>
      <div class="flex timer-options__contact">
        <p class="mt2 mb0">
          Let us know what you think!
          <span class="px1">
            <router-link to="/feedback">Feedback</router-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Option from '@/components/Option.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    Option,
  },
  data() {
    return {
      options: Object.assign(
        {},
        { inhale: this.$store.state.inhale },
        { exhale: this.$store.state.exhale },
        { holdInhale: this.$store.state.holdInhale },
        { holdExhale: this.$store.state.holdExhale },
      ),
    };
  },
  methods: {
    ...mapMutations([
      'updateTimerValues',
    ]),
    updateValue(value) {
      this.options[value.fieldProperty] = value.timeAmount;
    },
    saveOptions() {
      this.updateTimerValues(this.options);
      this.$router.replace({ path: '/' });
    },
  },
};
</script>

<style lang="less">
@import  '../assets/variables';

.timer-options {
  width: 100%;
  hr {
    width: 100%;
    margin: 0;
  }
  &__title {
    color: #d8c3a1;
    font-size: 1.6rem;
    text-align: left;
  }
  &__close {
    svg > path {
      fill: #d8c3a1;
    }
  }
  &__contact {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    color: #918f8d;
    a {
      color: #d8c3a1;
      font-weight: bold;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
