<template>
  <modal :name="modalName"
         transition="fade"
         overlayTransition="fade"
         height="auto"
         :adaptive="true"
         :clickToClose="false">
    <TimerOptions />
  </modal>
</template>

<script>
import TimerOptions from '@/components/TimerOptions.vue';
import { mapState } from 'vuex';

export default {
  components: {
    TimerOptions,
  },
  computed: {
    ...mapState([
      'modalName',
    ]),
  },
};
</script>
