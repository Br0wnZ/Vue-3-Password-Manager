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
    </n-modal>
    <Loading v-if="isLoading" />
    <n-grid cols="2 s:3 m:4 l:5 xl:2 2xl:7" responsive="screen" class="bounce-in">
      <n-grid-item class="m-1 p-1" v-for="(password, index) in passwords" :key="index">
        <PasswordCard :password="password" @click="showModal(index)" :color="randomColor()" />
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import PasswordCard from "@/components/PasswordCard.vue";
import Loading from "@/components/Loading.vue";
import { IPassword } from "@/models/password";
import { getPasswords } from '@/services/passwordService'

defineComponent({
  name: "Home"
})

let showPassword: Ref<boolean> = ref(false);
let title: Ref<string> = ref('')
let passwords: Ref<IPassword[]> = ref<IPassword[]>([])
let isLoading: Ref<boolean> = ref<boolean>(false)

const colors: string[] = ['#686868', '#707070', '#787878', '#808080']

const segmented = {
  content: 'soft',
} as const

const bodyStyle = {
  width: '600px'
}

onMounted(async () => {
  isLoading.value = true
  passwords.value = await getPasswords()
  isLoading.value = false
})

const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

const showModal = (index: number) => {
  showPassword.value = !showPassword.value
  title.value = passwords.value[index].name
}

</script>

<style scoped lang="scss">
  .bounce-in {
  animation: bounce-in 2s ease;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% { transform: scale(.9); }
  100% { transform: scale(1); }
}
</style>