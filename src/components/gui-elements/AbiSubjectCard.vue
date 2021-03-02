<template>
  <g-link
      :class="bgClass"
      :to="search" class="block rounded text-white transition duration-200 shadow-xl hover:shadow-2xl p-8 py-4 pl-4 pr-6">
    <fa :class="iconClass" :icon="icon" size="6x"/>
    <p class="text-xl text-right">
      <slot/>
    </p>
  </g-link>
</template>
<script>
export default {
  props: ["bgClass", "iconClass", "icon", "text", "search"]
}
</script>