<template>
  <transition
      enter-active-class="animate__animated animate__faster animate__bounceInRight"
      leave-active-class="animate__animated animate__faster animate__bounceOutRight"
  >
    <div class="absolute z-30 right-0">
      <div class="z-30 absolute right-0 bg-white w-4 h-4 transform rotate-45 translate-y-1/2 mr-12"></div>
      <div class="z-30 w-360px bg-white p-2 shadow-2xl rounded-sm mt-4">
        <slot/>
      </div>
    </div>
  </transition>
</template>