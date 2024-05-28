<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { store } from '~/store'
import { getComponentHtml } from '~/utils'

const namespace = 'bottomNavigation'
const urls = import.meta.glob('../components/bottomNavigation/*.vue')
const components = ref<
  { url: string; html: string; uuid: string; componentName: string }[]
>([])
const router = useRouter()
onMounted(() => {
  Promise.all(
    Object.keys(urls).map(async (key) => {
      // 复用uuid
      const target = store.find(namespace, key)

      if (target)
        return target
      const url = urls[key]
      const componentName = key.match(`\/${namespace}\/(.+)\.vue`)![1]

      return {
        url: key,
        html: await getComponentHtml(url),
        uuid: `${namespace}-${uuidv4()}`,
        componentName,
      }
    }),
  ).then((res) => {
    components.value = res
    store.set(
      'bottomNavigation',
      res.reduce((acc, cur) => {
        acc[cur.uuid] = {
          html: cur.html,
          url: cur.url,
          uuid: cur.uuid,
          componentName: cur.componentName,
        }
        return acc
      }, {} as any),
    )
  })
})

function handlerClick(uuid: string) {
  router.push(`/show/${uuid}`)
}
</script>

<template>
  <h1 class="px-8 pt-4 font-bold text-[30px]">
    BottomNavigation Components:
  </h1>
  <div class="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 p-8">
    <div
      v-for="item in components"
      :key="item.url"
      class="cursor-pointer group relative main-container"
      @click="handlerClick(item.uuid)"
    >
      <div
        class="group-hover:scale-105 block rounded-lg shadow dark:bg-gray-800 hover:shadow-lg !max-h-[250px] overflow-hidden aspect-w-16 aspect-h-10"
        v-html="item.html"
      />
      <span
        class="group-hover:block hidden absolute bottom-0 z-50 left-[50%] text-center truncate -translate-x-[50%] translate-y-[100%] text-gray-500/40 w-full"
      >{{ item.componentName }}</span>
    </div>
  </div>
</template>

<style scoped>
:deep(.main-container > div) {
  transform: translate3d(0, 0, 0);
  pointer-events: none;
}

:deep(.main-container .h-screen) {
  height: 100% !important;
}

:deep(.main-container .min-h-screen) {
  min-height: 100% !important;
}

:deep(.main-container > div > *) {
  /* transform: scale(0.66); */
  height: 100%;
}

:deep(.main-container .lg\:w-4\/12),
:deep(.main-container .lg\:w-1\/3, ),
:deep(.main-container .w-screen),
:deep(.main-container .lg\:w-5\/12),
:deep(.main-container .lg\:w-11\/12),
:deep(.main-container .lg\:w-2\/3),
:deep(.main-container .lg\:w-1\/2),
:deep(.main-container .lg\:w-3\/4),
:deep(.main-container .lg\:w-2\/5),
:deep(.main-container .lg\:w-3\/5),
:deep(.main-container .lg\:w-1\/4),
:deep(.main-container .lg\:w-1\/5),
:deep(.main-container .lg\:w-2\/5),
:deep(.main-container .lg\:w-3\/5),
:deep(.main-container .lg\:w-4\/5),
:deep(.main-container .lg\:w-5\/6),
:deep(.main-container .lg\:w-1\/6),
:deep(.main-container .lg\:w-2\/6),
:deep(.main-container .lg\:w-3\/6),
:deep(.main-container .lg\:w-4\/6),
:deep(.main-container .lg\:w-5\/6),
:deep(.main-container .lg\:w-6\/12),
:deep(.main-container .lg\:w-7\/12),
:deep(.main-container .lg\:w-8\/12),
:deep(.main-container .lg\:w-9\/12),
:deep(.main-container .lg\:w-10\/12),
:deep(.main-container .lg\:w-11\/12),
:deep(.main-container .lg\:w-12\/12),
:deep(.main-container .lg\:w-1\/12),
:deep(.main-container .lg\:w-2\/12),
:deep(.main-container .lg\:w-3\/12),
:deep(.main-container .lg\:w-4\/12),
:deep(.main-container .lg\:w-5\/12),
:deep(.main-container .lg\:w-6\/12),
:deep(.main-container .lg\:w-7\/12),
:deep(.main-container .lg\:w-8\/12),
:deep(.main-container .lg\:w-9\/12),
:deep(.main-container .lg\:w-10\/12),
:deep(.main-container .lg\:w-11\/12),
:deep(.main-container .md\:w-8\/12) {
  width: 100% !important;
}
</style>
