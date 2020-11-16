<template>
  <div class="lds-dual-ring"></div>
</template>
<style scoped lang="scss">
$accent: white;

.lds-dual-ring {
  display: block;
  width: 2rem;
  height: 2rem;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.25rem;
  border-radius: 50%;
  border: 3px solid $accent;
  border-color: $accent transparent $accent transparent;
  animation: lds-dual-ring 1s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
