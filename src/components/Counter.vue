<template>
  <div class="counter my-auto">
    <transition-group name="new-number" tag="p">
      <span class="number" v-for="n in totalRange" :key="n" v-if="n === count">
        {{ n === 0 ? name : n }}
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
      required: true,
      type: String,
    },
  },
  computed: {
    totalRange() {
      return Array.from(Array(this.total + 1).keys());
    }
  }
};
</script>

<style lang="less">
.counter {
  p {
    font-size: 2rem;
    .number {
      height: 6%;
      position: absolute;
      left: 0;
      right: 0;
      top: 47.5%;
      margin: auto;
    }
  }
}
.new-number-enter-active, .new-number-leave-active {
  transition: all 0.3s;
}
.new-number-enter, .new-number-leave-to {
  opacity: 0;
}
</style>
