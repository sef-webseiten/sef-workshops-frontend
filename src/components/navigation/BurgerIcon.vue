<template>
  <button @click="$emit('click')" class="px-1 pb-1">
    <span class="line first"/>
    <span class="line space"/>
    <span class="line space"/>
  </button>
</template>
<style scoped lang="scss">
.line {
  height: 0.125rem;
  width: 1.4rem;
  @apply bg-white rounded-full block;
}

.first {
  margin-top: .3rem;
}

.space {
  margin-top: 0.25rem;
}
</style>