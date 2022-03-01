<template>
  <div class="home">
    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
      <n-grid-item class="m-1 p-1" v-for="(item, index) in items" :key="index">
        <PasswordCard :title="item" />
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import PasswordCard from "@/components/PasswordCard.vue";

const items: string[] = ['Facebook', 'Twitter']

defineComponent({
  name: "Home"
})
</script>
