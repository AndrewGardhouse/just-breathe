<template>
  <div class="counter my-auto">
    <!-- <transition-group name="new-number" tag="p" type="out-in"> -->
    <p>
      <span class="counter__number my-auto"
            v-for="n in totalRange"
            :key="n"
            v-if="n === count"
            v-bind:class="{ 'counter__number--is-name': n === 0 && name }">
        {{ n === 0 && name ? name : n }}
      </span>
    </p>
    <!-- </transition-group> -->
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
    // position: absolute;
    // left: 0;
    // right: 0;
    margin: auto;
    font-size: 3rem;
    line-height: 1;
    color: @white;
    &--is-name {
      font-size: 1.8rem;
      margin: auto;
      // position: absolute;
      // left: 0;
      // right: 0;
      // top: 0;
      // bottom: 0;
      // top: 48%;
    }
  }
}
.new-number-enter-active, .new-number-leave-active {
  transition: all .4s;
}
.new-number-enter, .new-number-leave-to {
  opacity: 0;
}
</style>
