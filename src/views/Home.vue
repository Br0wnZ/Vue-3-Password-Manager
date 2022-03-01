<template>
  <div id="home">
    <n-modal
      v-model:show="showPassword"
      preset="card"
      :title="title"
      :style="bodyStyle"
      :bordered="false"
      size="huge"
      :segmented="segmented"
    >
      <template #header-extra></template>
      Content
      <!-- <template #footer>Footer</template> -->
    </n-modal>
    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
      <n-grid-item class="m-1 p-1" v-for="(item, index) in items" :key="index">
        <PasswordCard :title="item" @click="showModal(index)" :color="randomColor()"/>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, Ref, ref } from "vue";
import PasswordCard from "@/components/PasswordCard.vue";

let showPassword: Ref<boolean> = ref(false);
let title: Ref<string> = ref('')
const items: string[] = ['Facebook', 'Twitter']
const colors: string[] = ['#686868', '#707070', '#787878', '#808080']

const segmented = {
  content: 'soft',
} as const

const bodyStyle = {
  width: '600px'
}

const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

const showModal = (index: number) => {
  showPassword.value = !showPassword.value
  title.value = items[index]
}

defineComponent({
  name: "Home"
})

</script>