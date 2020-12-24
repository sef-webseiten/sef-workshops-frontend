<template>
  <button class="px-2 py-2 text-white bg-primary rounded-full w-full">
    {{ content }}
  </button>
</template>
<script>
export default {
  props: ["content"]
}
</script>