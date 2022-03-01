<template>
  <div id="password-card">
    <n-card
      :title="title"
      :style="{ backgroundColor: color }"
      size="small"
      class="pass-card"
    >Card Content</n-card>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from 'vue'

defineComponent({
  name: 'passwordCard'
})

defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
</style>
