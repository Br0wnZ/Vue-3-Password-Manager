<template>
  <div id="password-card">
    <n-card :style="style" size="medium" class="pass-card">
      <div class="parent">
        <img :src="password.icon" loading="lazy" />
        <div class="flex-container">
          <div class="flex-items">{{ password.name }}</div>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, PropType } from 'vue'
import { IPassword } from "@/models/password"

defineComponent({
  name: 'passwordCard'
})

const props = defineProps({
  password: {
    type: Object as PropType<IPassword>,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

const style = { backgroundColor: props.color }
</script>

<style scoped lang="scss">

#password-card > .n-card {
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(59, 60, 65, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px) !important;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

}
.parent {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: normal;
  align-content: space-between;

  img {
    border-radius: 50%;
    height: 5vh;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: normal;
    align-content: space-between;
  }

  .flex-items:nth-child(1) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
  }

  .flex-items:nth-child(2) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
  }
}
</style>
