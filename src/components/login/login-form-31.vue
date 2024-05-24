<script setup lang="ts"></script>

<template>
  <div class="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
    <h2 class="text-2xl font-semibold mb-4">
      Inscription
    </h2>

    <form action="#" method="POST">
      <!-- Nom et Prénom -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            class="mt-1 p-2 w-full border rounded-md"
          >
        </div>
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            class="mt-1 p-2 w-full border rounded-md"
          >
        </div>
      </div>

      <!-- Adresse email -->
      <div class="mt-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Adresse email</label>
        <input
          id="email"
          type="email"
          name="email"
          class="mt-1 p-2 w-full border rounded-md"
        >
      </div>

      <!-- Mot de passe -->
      <div class="mt-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
        <input
          id="password"
          type="password"
          name="password"
          class="mt-1 p-2 w-full border rounded-md"
        >
      </div>

      <!-- Bouton d'inscription -->
      <div class="mt-6">
        <button
          type="submit"
          class="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          S'inscrire
        </button>
      </div>
    </form>
  </div>
</template>

<style scope></style>
