<template>
  <div class="counter my-auto">
    <p>
      <span class="counter__number my-auto"
            v-for="n in totalRange"
            :key="n"
            v-if="n === count"
            v-bind:class="{ 'counter__number--is-name': n === 0 && name }">
        {{ n === 0 && name ? name : n }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      required: true,
      type: Number,
    },
    total: {
      required: true,
      type: Number,
    },
    name: {
      required: false,
      type: String,
    },
  },
  computed: {
    totalRange() {
      return Array.from(Array(this.total + 1).keys());
    },
  },
};
</script>

<style lang="less">
@import  '../assets/variables';

.counter {
  p {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    height: 3rem;
    display: flex;
  }
  &__number {
    margin: auto;
    font-size: 3rem;
    line-height: 1;
    color: @white;
    &--is-name {
      font-size: 1.8rem;
      margin: auto;
    }
  }
}
</style>
