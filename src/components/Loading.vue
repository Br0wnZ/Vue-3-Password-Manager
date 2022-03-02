<template>
  <div class="center">
    <n-space vertical>
      <n-spin>
        <template #description>
          <n-gradient-text :gradient="gradientText">Loading...</n-gradient-text>
        </template>
      </n-spin>
    </n-space>
  </div>
</template>

<script setup lang="ts">
interface IGradient {
  from: string
  to: string
}

const gradientText: IGradient = {
  from: 'rgb(85, 85, 85)',
  to: 'rgb(170, 170, 170)'
}
</script>

<style scoped>

.center {
  text-align: center;
}
</style>