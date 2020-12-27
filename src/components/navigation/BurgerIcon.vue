<template>
  <button @click="$emit('click')">
    <span class="line mt-1"/>
    <span class="line space"/>
    <span class="line space"/>
    <span class="line space"/>
  </button>
</template>
<style scoped lang="scss">
.line {
  height: 0.125rem;
  width: 1.75rem;
  @apply bg-white rounded-full block;
}

.space {
  margin-top: 0.25rem;
}
</style>