<template>
  <div class="fixed top-0 left-0 z-50 w-screen h-screen p-6 md:p-10 bg-black bg-opacity-70 overflow-y-auto" @click="$emit('close')">
    <div class="bg-gray-100 p-8 md:p-10 mx-auto w-full md:w-3/4 lg:w-3/4 max-w-3xl rounded-sm" @click.stop>
      <slot/>
    </div>
    <button class="mx-auto block text-white text-sm mt-4">Tippe hier zum schließen.</button>
  </div>
</template>