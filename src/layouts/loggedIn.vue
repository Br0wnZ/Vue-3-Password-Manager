<template>
  <TheNavbar />
  <div class="container">
    <TheTabs />
    <slot />
  </div>
</template>

<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import TheTabs from '@/components/TheTabs.vue'

</script>

<style scoped></style>
