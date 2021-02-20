<template>
  <div :style="style" class="lds-dual-ring"></div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "white"
    }
  },
  computed: {
    style() {
      return { "--accent": `${this.color}` }
    }
  }
}
</script>
<style lang="scss" scoped>
.lds-dual-ring {
  display: block;
  width: 1.35rem;
  height: 1.35rem;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 1.1rem;
  height: 1.1rem;
  margin: 0.125rem;
  border-radius: 50%;
  border: 3px solid var(--accent);
  border-color: var(--accent) transparent var(--accent) transparent;
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