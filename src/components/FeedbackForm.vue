<template>
  <form class="feedback-form" v-on:submit.prevent="submitForm">
    <div class="feedback-form__field mb2">
      <input type="email" id="email" name="email" placeholder="Email" v-model="form.email">
    </div>
    <div class="feedback-form__field">
      <textarea name="comment"
                rows="4"
                cols="80"
                placeholder="Comments"
                id="comment"
                v-model="form.comment"></textarea>
    </div>
    <transition name="fade">
      <div class="feedback-form__field" v-show="formSubmitted">
        <p class="feedback-form__field__thank-you mt2 mb0">Thank you for your feedback!</p>
      </div>
    </transition>
    <div class="feedback-form__field mt2">
      <button class="btn" type="submit" name="button">Send</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  data() {
    return {
      formSubmitted: false,
      form: {
        email: '',
        comment: '',
      },
    };
  },
  methods: {
    submitForm() {
      axios.post('https://formcarry.com/s/S8G6oaaqi7H', qs.stringify(this.form))
        .then((response) => {
          this.form.email = '';
          this.form.comment = '';
          this.formSubmitted = true;
          this.formSubmittedTimeout = setTimeout(() => {
            this.formSubmitted = false;
          }, 5000);
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.error(err);
        });
    },
  },
}
</script>

<style lang="less">
.feedback-form {
  &__field {
    display: flex;
    &__thank-you {
      font-family: 'Roboto', sans-serif;
      font-size: 1.1rem;
      color: #918f8d;
      transition: all 0.5s;
    }
    input, textarea {
      &::placeholder {
        color: #d8c3a1;
      }
      -webkit-appearance: none;
      box-sizing: border-box;
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
</style>
