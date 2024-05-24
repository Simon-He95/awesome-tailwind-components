<script setup lang="ts"></script>

<template>
  <div class="max-w-xl container mx-auto">
    <div class="w-full">
      <img src="./../images/Dummy_Logo (1).png" class="mx-auto" alt="">
      <p class="text-center text-neutral-600 text-base font-semibold">
        Login into your account
      </p>
      <div class="mt-10">
        <form action="" class="px-10">
          <div class="mt-2">
            <label for="" class="text-neutral-600 text-base font-normal">Email Id :</label>
            <div
              class="flex my-3 items-center justify-between bg-zinc-100 rounded-lg"
            >
              <input
                id=""
                type="text"
                name=""
                placeholder="info@provistechnologies.com"
                class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
              >
            </div>
          </div>
          <div class="mt-6">
            <label for="" class="text-neutral-600 text-base font-normal">Password :</label>
            <div
              class="flex my-3 items-center justify-between bg-zinc-100 rounded-lg"
            >
              <input
                id=""
                type="password"
                name=""
                placeholder="info@provistechnologies.com"
                class="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
              >
            </div>
          </div>
          <a
            href="forget-password.html"
            class="mt-6 text-indigo-900 flex justify-end text-sm font-normal underline"
          >Forgot password?</a>
          <button
            class="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9"
          >
            Login now
          </button>

          <div class="relative flex items-center mt-8">
            <div class="border h-0 w-2/4 border-stone-300" />
            <div class="text-stone-300 px-4 text-sm font-normal">
              OR
            </div>
            <div class="border h-0 w-2/4 border-stone-300" />
          </div>
          <button
            class="border border-indigo-900 rounded-lg text-center text-indigo-900 bg-white text-base font-semibold w-full py-3 mt-9"
          >
            Signup now
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scope></style>
