<template>
  <div class="counter my-auto">
    <transition-group name="new-number" tag="p">
      <span class="counter__number"
            v-for="n in totalRange"
            :key="n"
            v-if="n === count"
            v-bind:class="{ 'counter__number--is-name': n === 0 && name }">
        {{ n === 0 && name ? name : n }}
      </span>
    </transition-group>
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
.counter {
  p {
    font-family: 'Roboto', sans-serif;
  }
  &__number {
    position: absolute;
    left: 0;
    right: 0;
    top: 47%;
    margin: auto;
    font-size: 3rem;
    line-height: 1;
    color: rgba(255,255,255,0.68);
    &--is-name {
      font-size: 1.8rem;
      top: 48%;
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
