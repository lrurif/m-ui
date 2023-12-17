<script setup lang="ts">
// import { ref } from 'vue'
import { hello } from "@m-ui/utils";
hello("你好");
const props = withDefaults(
  defineProps<{
    disabled?: Boolean;
  }>(),
  {
    disabled: false,
  }
);
</script>

<template>
  <button :disabled="props.disabled">contents</button>
</template>

<style scoped lang="scss"></style>
