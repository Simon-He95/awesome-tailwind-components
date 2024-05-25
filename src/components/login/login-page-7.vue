<script setup lang="ts"></script>

<template>
  <div class="flex h-screen">
    <div
      class="m-auto text-center border border-red-900 rounded p-5 bg-red-300"
    >
      <span class="text-2xl block">Welcome back!</span>
      <form action="#">
        <label for="emailaddress" class="block text-lg">Email</label>
        <input
          id="emailaddress"
          type="email"
          class="block bg-red-400 border border-red-800 rounded p-0.5"
          name="emailaddress"
        >
        <label for="emailaddress" class="block text-lg">Password</label>
        <input
          id="password"
          type="password"
          class="block bg-red-400 border border-red-800 rounded p-0.5"
          name="password"
        >
      </form>
    </div>
  </div>
</template>

<style scope></style>
