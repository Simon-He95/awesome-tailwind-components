<script setup></script>

<template>
  <button
    type="button"
    x-show="open"
    x-transition.duration.300ms=""
    class="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
    @click="closeToast()"
  >
    <div class="flex items-center space-x-2">
      <span class="text-3xl"><i class="bx bx-check" /></span>
      <p class="font-bold">
        Item Created Successfully!
      </p>
    </div>
  </button>

  <button
    type="button"
    class="rounded-md bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-600"
    @click="openToast()"
  >
    Launch toast
  </button>
</template>

<style scope></style>
