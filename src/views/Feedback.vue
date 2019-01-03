<template>
  <div class="wrapper flex">
    <div class="feedback flex flex-column max-width-2 mx-auto my-auto px2">
      <div class="flex justify-end">
        <router-link to="/" class="timer-options__close my-auto">
          <Close />
        </router-link>
      </div>
      <div class="feedback__back flex mb3">
        <router-link to="/options" class="feedback__back__button flex">
          <Back />
          <p class="my-auto ml1">Back to settings</p>
        </router-link>
      </div>
      <div class="mb2 feedback__title">
        <p class="bold my-auto">Settings</p>
      </div>
      <div class="mb3 feedback__description">
        <p class="my-auto">
          We'd love to hear what you like
          and don't like about this and any suggestions you might have.
        </p>
      </div>
      <FeedbackForm />
    </div>
  </div>
</template>

<script>
import Back from '@/components/Back.vue';
import Close from '@/components/Close.vue';
import FeedbackForm from '@/components/FeedbackForm.vue';

export default {
  components: {
    Back,
    Close,
    FeedbackForm,
  },
};
</script>

<style lang="less">
@import  '../assets/variables';

.feedback {
  &__back, &__description {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
  }
  &__back {
    a {
      color: #d8c3a1;
      font-weight: bold;
      text-decoration: none;
    }
  }
  &__title {
    color: #d8c3a1;
    font-size: 1.6rem;
    text-align: left;
  }
  &__description {
    color: #918f8d;
    text-align: left;
  }
}
</style>
