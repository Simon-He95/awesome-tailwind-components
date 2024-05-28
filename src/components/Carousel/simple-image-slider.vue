<script setup></script>

<template>
  <div
    x-data="imageSlider"
    class="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4"
  >
    <div
      class="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white"
    >
      <span x-text="currentIndex" />/<span x-text="images.length" />
    </div>

    <button
      class="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
      @click="previous()"
    >
      <i class="fas fa-chevron-left text-2xl font-bold text-gray-500" />
    </button>

    <button
      class="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
      @click="forward()"
    >
      <i class="fas fa-chevron-right text-2xl font-bold text-gray-500" />
    </button>

    <div class="relative h-80" style="width: 30rem">
      <template v-for="image in images" :key="image">
        <div
          v-show="currentIndex === index + 1"
          x-transition:enter="transition transform duration-300"
          x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100"
          x-transition:leave="transition transform duration-300"
          x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0"
          class="absolute top-0"
        >
          <img :src="image" alt="image" class="rounded-sm">
        </div>
      </template>
    </div>
  </div>
</template>

<style scope></style>
