<template>
  <modal name="timer-options" :adaptive="true" height="auto">
    <div class="timer-options flex flex-column pt2">
      <div class="flex justify-end px2">
        <button class="close my-auto" v-on:click="closeModal">
          <font-awesome-icon icon="times" size="2x" />
        </button>
      </div>
      <div class="px2 mb2">
        <p class="h2 bold my-auto">Settings</p>
      </div>
      <Option fieldName="Inhale"
              :value="inhale"
              :minTime="1"
              :maxTime="12"
              v-on:showSavedMessage="showSavedMessage" />
      <hr>
      <Option fieldName="Hold Inhale"
              :value="holdInhale"
              :minTime="0"
              :maxTime="12"
              v-on:showSavedMessage="showSavedMessage" />
      <hr>
      <Option fieldName="Exhale"
              :value="exhale"
              :minTime="1"
              :maxTime="12"
              v-on:showSavedMessage="showSavedMessage" />
      <hr>
      <Option fieldName="Hold Exhale"
              :value="holdExhale"
              :minTime="0"
              :maxTime="12"
              v-on:showSavedMessage="showSavedMessage" />
      <div class="p2 flex save-message" :class="{ saved: showSaved }">
        <p class="text h3 bold" v-if="showSaved">Saved</p>
        <p class="text h3 no-message" v-else></p>
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
  data() {
    return {
      showSaved: false,
      timeout: null,
    };
  },
  methods: {
    closeModal() {
      this.$modal.hide('timer-options');
    },
    showSavedMessage() {
      this.showSaved = true;
      this.timeout = setTimeout(() => {
        this.showSaved = false;
        this.timeout = null;
      }, 2000);
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
  .close {
    svg > path {
      fill: #0F3C7B;
    }
  }
  .save-message {
    border-top: 1px solid transparent;
    transition: background-color 0.5s linear;
    &.saved {
      border-top: 1px solid #0F3C7B;
      background-color: rgba(255, 255, 255, 0.6);
    }
    .text {
      margin: auto;
      color: #0F3C7B;
      &.no-message {
        height: 27px;
      }
    }
  }
}
</style>
