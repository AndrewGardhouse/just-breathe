<template>
  <div class="counter"></div>
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
