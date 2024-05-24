<script setup lang="ts"></script>

<template>
  <meta charset="UTF-8"><meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  ><title>Iniciar sesión - Mi aplicación</title><link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  >
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-8">
        <img
          src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
          alt="Logo"
          class="w-30 h-20"
        >
      </div>
      <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
        Iniciar sesión
      </h1>
      <form>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600">Correo electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required=""
          >
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm text-gray-600">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required=""
          >
          <a href="#" class="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
        </div>
        <button
          type="submit"
          class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
        >
          Acceso
        </button>
      </form>
      <div class="text-center">
        <p class="text-sm">
          ¿No tienes una cuenta?
          <a href="#" class="text-cyan-600">Regístrate ahora</a>
        </p>
      </div>
      <p class="text-xs text-gray-600 text-center mt-10">
        © 2023 WCS LAT
      </p>
    </div>
  </div>
</template>

<style scope></style>
