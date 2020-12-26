<template>
  <button @click="$emit('click')">
    <span class="line"/>
    <span class="line space"/>
    <span class="line space"/>
  </button>
</template>
<style scoped lang="scss">
.line {
  height: 0.2rem;
  @apply w-8 bg-white rounded-full block;
}

.space {
  @apply mt-2;
}
</style>