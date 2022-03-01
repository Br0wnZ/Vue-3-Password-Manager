<template>
  <n-card :title="title" size="small">
      Card Content
  </n-card>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    title: {
      type: String,
      required: true
    }
  })
</script>

<style scoped>

</style>