<template>
  <n-tabs type="segment">
    <n-tab-pane name="all" tab="All"><Home /></n-tab-pane>
    <n-tab-pane name="social" tab="Social"><About /></n-tab-pane>
    <n-tab-pane name="wifi" tab="Wifi">Wifi</n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

</script>

<style lang="scss" scoped>
</style>