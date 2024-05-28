<script setup lang="ts">
const router = useRouter()
const buttonRoute = Object.keys(import.meta.glob('../pages/*.vue')).map(
  (key) => {
    const name = key.match(/\/(.+)\.vue/)![1]
    return {
      title: name[0].toUpperCase() + name.slice(1),
      url: `/${name}`,
    }
  },
)
</script>

<template>
  <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-8">
    <h1
      class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
    >
      Awesome Tailwind Components
    </h1>
  </div>
  <div class="grid gap-8 lg:mt-16 mt-8 md:grid-cols-2 lg:grid-cols-3 px-8 py-4">
    <button
      v-for="item in buttonRoute"
      :key="item.url"
      class="hover:shadow-lg py-2 shadow"
      @click="router.push(item.url)"
    >
      {{ item.title }}
    </button>
  </div>
</template>
