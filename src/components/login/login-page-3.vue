<script setup lang="ts"></script>

<template>
  <div class="w-full h-screen flex">
    <img
      src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
      alt="background"
      class="object-cover object-center h-screen w-7/12"
    >
    <div
      class="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg"
    >
      <h1 class="text-3xl font-bold text-orange-500 mb-2">
        LOGIN
      </h1>
      <div class="w-1/2 text-center">
        <input
          type="text"
          name="username"
          placeholder="username"
          autocomplete="off"
          class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
        >
        <input
          type="password"
          name="password"
          placeholder="password"
          autocomplete="off"
          class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
        >
        <button
          class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<style scope></style>
