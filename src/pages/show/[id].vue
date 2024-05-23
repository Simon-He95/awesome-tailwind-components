<script setup lang="ts">
import { store } from '~/store'
const props = defineProps<{ id: string }>()
const html = store.get(props.id)?.html

const copyStatus = ref<boolean>(false)
function copy() {
  const v = useClipboard()
  v.copy(html).then(() => {
    copyStatus.value = true
    setTimeout(() => {
      copyStatus.value = false
    }, 1000)
  })
}
</script>

<template>
  <div v-html="html" />
  <div class="fixed top-4 right-4 z-50">
    <svg
      v-if="!copyStatus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"
      @click="copy"
    >
      <rect
        class=" stroke-black" width="336" height="336" x="128" y="128" fill="none" stroke-linejoin="round"
        stroke-width="32" rx="57" ry="57"
      />
      <path
        fill="none" stroke="currentColor" class=" stroke-black" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="32"
        d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
      />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
      <g class="stroke-pink-500" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <path d="m4 8l2.05 1.64a.48.48 0 0 0 .4.1a.5.5 0 0 0 .34-.24L10 4" />
        <circle cx="7" cy="7" r="6.5" />
      </g>
    </svg>
  </div>
</template>

<style scoped></style>
