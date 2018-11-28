<template>
  <div class="wrapper flex">
    <div class="feedback flex flex-column max-width-2 mx-auto my-auto px2">
      <div class="flex justify-end">
        <router-link to="/" class="timer-options__close my-auto">
          <font-awesome-icon icon="times" size="2x" />
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
      <form class="feedback__form" v-on:submit.prevent="submitForm">
        <div class="feedback__form__field mb2">
          <input type="email" name="email" placeholder="Email" v-model="form.email">
        </div>
        <div class="feedback__form__field mb3">
          <textarea name="comment"
                    rows="4"
                    cols="80"
                    placeholder="Comments"
                    v-model="form.message"></textarea>
        </div>
        <div class="feedback__form__field">
          <button class="btn" type="submit" name="button">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Back from '@/components/Back.vue';

export default {
  components: {
    Back,
  },
  data() {
    return {
      formSubmitted: false,
      form: {
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // console.log(this.form);
      // https://formcarry.com/s/S8G6oaaqi7H
      axios.post('https://formcarry.com/s/S8G6oaaqi7H', qs.stringify(this.form))
        .then(() => {
          this.form.email = '';
          this.form.message = '';
          this.formSubmitted = true;
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.error(err);
        });
    },
    showOptions() {
      this.$emit('toggleShowOptions');
    },
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
  &__form {
    &__field {
      display: flex;
      input, textarea {
        &::placeholder {
          color: #d8c3a1;
        }
        font-family: 'Roboto', sans-serif;
        padding: 0.5rem;
        color: #918f8d;
        background-color: #fff;
        border: 1px solid #d8c3a1;
        border-radius: 2px;
        width: 100%;
        font-size: 1.2rem;
        &:focus {
          outline:0;
        }
      }
      textarea {
        resize: none;
      }
    }
  }
}
</style>
