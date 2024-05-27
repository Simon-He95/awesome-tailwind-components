<script setup>
const isOpen = ref(false)
</script>

<template>
  <div class="shadow-md rounded bg-white overflow-hidden relative">
    <div class="absolute top-2 right-2">
      <div class="relative">
        <button
          class="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
          @click="isOpen = !isOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <!-- Dropdown card -->
        <div
          v-show="isOpen"
          class="absolute w-48 max-w-md mt-3 transform bg-white rounded-md shadow-lg -translate-x-3/4 min-w-max overflow-hidden"
          @click="isOpen = false"
        >
          <div class="p-2 font-medium border-b">
            <span class="text-gray-800">Actions</span>
          </div>
          <ul class="flex flex-col">
            <li>
              <a
                href="#"
                class="flex items-center px-2 py-1 transition hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path
                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                  />
                </svg>
                <span class="ml-2">View</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center px-2 py-1 transition hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
                <span class="ml-2">Edit</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center px-2 py-1 transition hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                  />
                </svg>
                <span class="ml-2">Remove</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 h-64">
      <div class="h-64 overflow-hidden">
        <img
          class="object-cover h-64 w-full"
          src="https://images.freeimages.com/images/small-previews/20c/my-puppy-maggie-1362787.jpg"
        >
      </div>
      <div class="h-64 overflow-hidden">
        <img
          class="object-cover h-32 w-full"
          src="https://images.freeimages.com/images/small-previews/e71/frog-1371919.jpg"
        >
        <img
          class="object-cover h-32 w-full"
          src="https://img.freepik.com/free-photo/beautiful-endangered-american-jaguar-nature-habitat-panthera-onca-wild-brasil-brasilian-wildlife-pantanal-green-jungle-big-cats_475641-2191.jpg?w=1380&amp;t=st=1659969671~exp=1659970271~hmac=09544e5c9ac070a09c464342394c6657fafdd87b4c9772f2d5679a70e20a68e0"
        >
      </div>
    </div>
    <div class="p-3">
      <div class="block md:flex justify-between">
        <div>
          <h3 class="font-medium">
            Card Title
          </h3>
          <span class="text-sm text-gray-500">Author Name •
            <a
              href="/cdn-cgi/l/email-protection"
              class="__cf_email__"
              data-cfemail="bddcc8c9d5d2cffdd8d0dcd4d193ded2d0"
            >[email&nbsp;protected]</a></span>
        </div>

        <div class="">
          <div>
            <span class="text-sm text-gray-500">01-20-2020 12:30</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope></style>
