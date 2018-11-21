<template>
  <modal :name="modalName"
         transition="fade"
         overlayTransition="fade"
         height="auto"
         :adaptive="true"
         :clickToClose="false">
    <TimerOptions />
    <!-- <FeedbackForm /> -->
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
  computed: {
    ...mapState([
      'modalName',
    ]),
  },
};
</script>
