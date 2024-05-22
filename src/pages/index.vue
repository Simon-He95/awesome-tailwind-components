<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 px-8 py-4 ">
    <button class="hover:shadow-lg py-2 shadow" @click="router.push('/login')">
      Login
    </button>
    <!-- <button class="hover:shadow-lg py-2 shadow" @click="router.push('/login')">Button</button> -->
  </div>
</template>
