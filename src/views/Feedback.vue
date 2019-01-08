<template>
  <div class="wrapper flex">
    <div class="feedback flex flex-column max-width-2 mx-auto my-auto px2">
      <div class="feedback__link-row flex mb3">
        <router-link to="/options" class="feedback__link-row__back flex">
          <Back />
          <p class="my-auto ml1">Back to settings</p>
        </router-link>
        <router-link to="/" class="feedback__link-row__close my-auto">
          <Close />
        </router-link>
      </div>
      <div class="mb2 feedback__title">
        <p class="bold my-auto">Feedback</p>
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
  &__link-row, &__description {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
  }
  &__link-row {
    justify-content: space-between;
    a {
      color: #d8c3a1;
      font-weight: bold;
      text-decoration: none;
    }
    &__close {
      height: 29px;
      width: 29px;
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
