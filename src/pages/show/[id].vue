<script setup lang="ts">
import { store } from '~/store'
const props = defineProps<{ id: string }>()

onMounted(() => {
  const url = store.get(props.id)

  const App = defineAsyncComponent(() => import(url))
  const app = createApp(App)
  // console.log({ app })
  app.mount('#component-display')
})
</script>

<template>
  <div id="component-display" />
  <!-- <component v-if="is" :is="is"></component> -->
</template>

<style scoped></style>
