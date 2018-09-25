<template>
  <div class="counter">
    <p class="h1 m0">
      <span class="number" v-for="n in totalRange" :key="n" v-if="n === count">
        {{ n === 0 ? name : n }}
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
</style>
