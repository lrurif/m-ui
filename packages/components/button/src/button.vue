<script setup lang="ts">
// import { ref } from 'vue'
import { hello } from '@m-ui/utils';

hello('你好');
const props = withDefaults(
  defineProps<{
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  },
);
</script>

<template>
  <button
    :disabled="props.disabled"
    class="m-button"
  >
    333
  </button>
</template>

<style scoped lang="scss">
.m-button {
  color: yellow;
}
</style>
