<template>
  <div :style="{ height }"></div>
</template>

<script setup>
defineProps({
  height: {
    type: String,
    default: '1rem'
  }
})
</script>
