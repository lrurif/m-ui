<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <input
    v-model="value"
    class="m-input"
  >
</template>

<style scoped lang="scss">
.m-input {
  color: red;
}
</style>
