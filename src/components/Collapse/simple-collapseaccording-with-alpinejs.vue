<script setup></script>

<template>
  <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
    <div class="max-w-md mx-auto space-y-6">
      <img
        src="https://tailwindcomponents.com/svg/logo-color.svg"
        class="h-8"
      >

      <p class="text-gray-600" />

      <div
        class="flex items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 mx-auto"
        @click="reportsOpen = !reportsOpen"
      >
        <div
          class="w-10 border-r px-2 transform transition duration-300 ease-in-out"
          :class="{
            'rotate-90': reportsOpen,
            ' -translate-y-0.0': !reportsOpen,
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div class="flex items-center px-2 py-3">
          <div class="mx-3">
            <button class="hover:underline">
              This is where you click to open
            </button>
          </div>
        </div>
      </div>

      <div
        class="flex p-5 md:p-0 w-full transform transition duration-300 ease-in-out border-b pb-10"
        x-cloak=""
        x-show="reportsOpen"
        x-collapse=""
        x-collapse.duration.500ms=""
      >
        This is a very simple dropdown/accordion/collapse (whatever you call it)
        using Tailwind, Alpine.js, and the Alpine.js plugin "Collapse" to enable
        smoother open/collapse transitions than what comes out of the box with
        Alpine.js
      </div>
    </div>
  </div>
</template>

<style scope></style>
