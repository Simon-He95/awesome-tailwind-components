<script setup lang="ts">
const toggleInputContainer = function (input: HTMLInputElement) {
  if (input.value !== '')
    input.classList.add('filled')
  else input.classList.remove('filled')
}

const labels = document.querySelectorAll('.label')
for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', function () {
    this.previousElementSibling.focus()
  })
}

window.addEventListener('load', () => {
  const inputs = document.getElementsByClassName('input')
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
      toggleInputContainer(this)
    })
    toggleInputContainer(inputs[i])
  }
})
</script>

<template>
  <div class="shadow-xl p-10 bg-white max-w-xl rounded">
    <h1 class="text-4xl font-black mb-4">
      Login
    </h1>
    <div class="mb-4 relative">
      <input
        id="email"
        class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
        type="text"
        autofocus
      >
      <label
        for="email"
        class="label absolute top-0 left-0 mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
      >Email Address</label>
    </div>
    <div class="mb-4 relative">
      <input
        id="password"
        class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
        type="password"
        autofocus
      >
      <label
        for="password"
        class="label absolute top-0 left-0 mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
      >Password</label>
    </div>
    <button
      class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded"
    >
      Submit
    </button>
  </div>
</template>

<style scope>
.input {
  transition: border 0.2s ease-in-out;
  min-width: 280px;
}

.input:focus + .label,
.input:active + .label,
.input.filled + .label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  top: -0.1rem;
  color: #667eea;
}

.label {
  transition: all 0.2s ease-out;
  top: 0.4rem;
  left: 0;
}
</style>
