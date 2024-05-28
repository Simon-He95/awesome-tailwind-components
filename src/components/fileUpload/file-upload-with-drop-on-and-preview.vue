<script setup>
const fileTempl = document.getElementById('file-template')
const imageTempl = document.getElementById('image-template')
const empty = document.getElementById('empty')

// use to store pre selected files
let FILES = {}

// check if file is of type image and prepend the initialied
// template to the target element
function addFile(target, file) {
  const isImage = file.type.match('image.*')
  const objectURL = URL.createObjectURL(file)

  const clone = isImage
    ? imageTempl.content.cloneNode(true)
    : fileTempl.content.cloneNode(true)

  clone.querySelector('h1').textContent = file.name
  clone.querySelector('li').id = objectURL
  clone.querySelector('.delete').dataset.target = objectURL
  clone.querySelector('.size').textContent
    = file.size > 1024
      ? file.size > 1048576
        ? `${Math.round(file.size / 1048576)}mb`
        : `${Math.round(file.size / 1024)}kb`
      : `${file.size}b`

  isImage
    && Object.assign(clone.querySelector('img'), {
      src: objectURL,
      alt: file.name,
    })

  empty.classList.add('hidden')
  target.prepend(clone)

  FILES[objectURL] = file
}

const gallery = document.getElementById('gallery')
const overlay = document.getElementById('overlay')

// click the hidden input of type file if the visible button is clicked
// and capture the selected files
const hidden = document.getElementById('hidden-input')
document.getElementById('button').onclick = () => hidden.click()
hidden.onchange = (e) => {
  for (const file of e.target.files) addFile(gallery, file)
}

// use to check if a file is being dragged
const hasFiles = ({ dataTransfer: { types = [] } }) => types.includes('Files')

// use to drag dragenter and dragleave events.
// this is to know if the outermost parent is dragged over
// without issues due to drag events on its children
let counter = 0

// reset counter and append file to gallery when file is dropped
function dropHandler(ev) {
  ev.preventDefault()
  for (const file of ev.dataTransfer.files) {
    addFile(gallery, file)
    overlay.classList.remove('draggedover')
    counter = 0
  }
}

// only react to actual files being dragged
function dragEnterHandler(e) {
  e.preventDefault()
  if (!hasFiles(e))
    return

  ++counter && overlay.classList.add('draggedover')
}

function dragLeaveHandler(e) {
  --counter < 1 && overlay.classList.remove('draggedover')
}

function dragOverHandler(e) {
  if (hasFiles(e))
    e.preventDefault()
}

// event delegation to caputre delete events
// fron the waste buckets in the file preview cards
gallery.onclick = ({ target }) => {
  if (target.classList.contains('delete')) {
    const ou = target.dataset.target
    document.getElementById(ou).remove(ou)
    gallery.children.length === 1 && empty.classList.remove('hidden')
    delete FILES[ou]
  }
}

// print all selected files
document.getElementById('submit').onclick = () => {
  // alert(`Submitted Files:\n${JSON.stringify(FILES)}`)
  // console.log(FILES)
}

// clear entire selection
document.getElementById('cancel').onclick = () => {
  while (gallery.children.length > 0) gallery.lastChild.remove()

  FILES = {}
  empty.classList.remove('hidden')
  gallery.append(empty)
}
</script>

<template>
  <main class="container mx-auto max-w-screen-lg h-full">
    <!-- file upload modal -->
    <article
      aria-label="File Upload Modal"
      class="relative h-full flex flex-col bg-white shadow-xl rounded-md"
      ondrop="dropHandler(event);"
      ondragover="dragOverHandler(event);"
      ondragleave="dragLeaveHandler(event);"
      ondragenter="dragEnterHandler(event);"
    >
      <!-- overlay -->
      <div
        id="overlay"
        class="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md"
      >
        <i>
          <svg
            class="fill-current w-12 h-12 mb-3 text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z"
            />
          </svg>
        </i>
        <p class="text-lg text-blue-700">
          Drop files to upload
        </p>
      </div>

      <!-- scroll area -->
      <section class="h-full overflow-auto p-8 w-full h-full flex flex-col">
        <header
          class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
        >
          <p
            class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center"
          >
            <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
          </p>
          <input id="hidden-input" type="file" multiple="" class="hidden">
          <button
            id="button"
            class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
          >
            Upload a file
          </button>
        </header>

        <h1 class="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
          To Upload
        </h1>

        <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
          <li
            id="empty"
            class="h-full w-full text-center flex flex-col items-center justify-center items-center"
          >
            <img
              class="mx-auto w-32"
              src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
              alt="no data"
            >
            <span class="text-small text-gray-500">No files selected</span>
          </li>
        </ul>
      </section>

      <!-- sticky footer -->
      <footer class="flex justify-end px-8 pb-8 pt-4">
        <button
          id="submit"
          class="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
        >
          Upload now
        </button>
        <button
          id="cancel"
          class="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
        >
          Cancel
        </button>
      </footer>
    </article>
  </main>
</template>

<style scope>
.hasImage:hover section {
  background-color: rgba(5, 5, 5, 0.4);
}
.hasImage:hover button:hover {
  background: rgba(5, 5, 5, 0.45);
}

#overlay p,
i {
  opacity: 0;
}

#overlay.draggedover {
  background-color: rgba(255, 255, 255, 0.7);
}
#overlay.draggedover p,
#overlay.draggedover i {
  opacity: 1;
}

.group:hover .group-hover\:text-blue-800 {
  color: #2b6cb0;
}
</style>
