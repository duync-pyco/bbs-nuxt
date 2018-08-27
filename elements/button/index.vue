<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>


<style scoped>
@import './index.css';
</style>


