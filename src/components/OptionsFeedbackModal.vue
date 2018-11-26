<template>
  <modal :name="modalName"
         transition="fade"
         overlayTransition="fade"
         height="auto"
         :adaptive="true"
         :clickToClose="false">
    <transition name="modal-form-fade" mode="out-in">
      <TimerOptions v-if="showOptions" v-on:toggleShowOptions="toggleShowOptions" />
      <FeedbackForm v-else v-on:toggleShowOptions="toggleShowOptions" />
    </transition>
  </modal>
</template>

<script>
import TimerOptions from '@/components/TimerOptions.vue';
import FeedbackForm from '@/components/FeedbackForm.vue';
import { mapState } from 'vuex';

export default {
  components: {
    TimerOptions,
    FeedbackForm,
  },
  data() {
    return {
      showOptions: true,
    };
  },
  computed: {
    ...mapState([
      'modalName',
    ]),
  },
  methods: {
    toggleShowOptions() {
      this.showOptions = !this.showOptions;
    },
  },
};
</script>

<style lang="less">
@import  '../assets/variables';

.v--modal {
  background-color: @background-color;
}

.modal-form-fade-enter-active, .modal-form-fade-leave-active {
  transition: opacity 0.3s;
}
.modal-form-fade-enter, .modal-form-fade-leave-to {
  opacity: 0;
}
</style>
