<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { store } from '~/store'

const urls = import.meta.glob('../components/login/*.vue')

const components = ref<{ url: string; component: any; uuid: string }[]>([])
const router = useRouter()
onMounted(() => {
  Promise.all(Object.keys(urls).map(async (key) => {
    const url = urls[key]
    return {
      url: key,
      component: defineAsyncComponent(url as any),
      uuid: `login-${uuidv4()}`,
    }
  })).then((res) => {
    components.value = res
    store.set('login', res.reduce((acc, cur) => {
      acc[cur.uuid] = `../${cur.url}`
      return acc
    }, {} as any))
  })
})

function handlerClick(uuid: string) {
  router.push(`/show/${uuid}`)
}
</script>

<template>
  <h1 class="px-8 pt-4 font-bold text-[30px]">
    Login Components:
  </h1>
  <div class="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 px-8">
    <div
      v-for="item in components" :key="item.url"
      class=" relative block overflow-hidden rounded-lg shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 main-container hover:shadow-lg"
      @click="handlerClick(item.uuid)"
    >
      <component :is="item.component" />
    </div>
  </div>
</template>

<style scoped>
:deep(.main-container>div) {
  transform: translate3d(0, 0, 0);
  pointer-events: none;
}

:deep(.main-container .h-screen) {
  height: 100% !important;
}

:deep(.main-container>div>div) {
  transform: scale(0.66)
}
</style>
