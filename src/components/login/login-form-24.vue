<script setup lang="ts"></script>

<template>
  <div class="bg-slate-700 p-10">
    <h1 class="text-white text-xl text-center font-bold my-8">
      Login App
    </h1>
    <div class="shadow-xl rounded-md overflow-hidden">
      <input
        type="email"
        class="block w-full bg-white bg-opacity-10 border-r-2 border-transparent focus:border-slate-400 py-3 px-4 placeholder:text-slate-500 text-slate-50 outline-none transition-colors ease-in-out"
        placeholder="Email"
      >
      <input
        type="password"
        class="block w-full bg-white bg-opacity-10 border-r-2 border-transparent focus:border-slate-400 py-3 px-4 placeholder:text-slate-500 text-slate-50 outline-none transition-colors ease-in-out"
        placeholder="Password"
      >
      <button
        class="block p-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl transition-colors shadow-xl"
      >
        Login
      </button>
    </div>
  </div>
</template>

<style scope></style>
