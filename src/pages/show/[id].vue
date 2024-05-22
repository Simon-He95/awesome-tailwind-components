<script setup lang="ts">
import { store } from '~/store'
const props = defineProps<{ id: string }>()

onMounted(() => {
  const url = store.get(props.id)
  const App = defineAsyncComponent(() => import(/* @vite-ignore */ url))
  const app = createApp(App)
  app.mount('#component-display')
})
</script>

<template>
  <div id="component-display" />
  <!-- <component v-if="is" :is="is"></component> -->
</template>

<style scoped></style>
