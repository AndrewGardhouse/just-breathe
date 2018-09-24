<template>
  <div class="counter">
    <span v-for="n in total" v-if="n === count">
      {{ n }}
    </span>
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
}
</script>

<style lang="less">
</style>
