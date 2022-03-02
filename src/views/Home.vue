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
    <n-grid cols="2 s:3 m:4 l:5 xl:2 2xl:7" responsive="screen">
      <n-grid-item class="m-1 p-1" v-for="(item, index) in items" :key="index">
        <PasswordCard :password="item" @click="showModal(index)" :color="randomColor()" />
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, Ref, ref } from "vue";
import PasswordCard from "@/components/PasswordCard.vue";
import { IPassword } from "@/models/password";

defineComponent({
  name: "Home"
})

let showPassword: Ref<boolean> = ref(false);
let title: Ref<string> = ref('')
const items: IPassword[] = [{
  url: 'www.facebook.com',
  icon: 'https://www.pinclipart.com/picdir/middle/414-4146033_like-us-on-facebook-at-www-find-us.png',
  name: 'Facebook',
  folder: 'social',
  username: 'username',
  password: 'password'
},
{
  url: 'www.twitter.com',
  icon: 'https://www.canaljesustv.com/wp-content/uploads/2016/06/twitter-round-logo-png-transparent-background-7.png',
  name: 'Twitter',
  folder: 'social',
  username: 'username',
  password: 'password'
},
{
  url: 'www.instagram.com',
  icon: 'https://www.pngplay.com/wp-content/uploads/1/Round-Instagram-Logo-PNG-HD-Quality.png',
  name: 'Instagram',
  folder: 'social',
  username: 'username',
  password: 'password'
}
]
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
  title.value = items[index].name
}

</script>