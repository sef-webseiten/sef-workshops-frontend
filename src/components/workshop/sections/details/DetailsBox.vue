<template>
  <div class="box mt-8 w-full p-4 overflow-hidden select-none h-auto max-h-screen" :class="{'max-h-14-important': !extended}">
    <div :class="{'-rotate-180' : extended}" class="float-right -m-2 p-2 transition-all duration-200 transform"
         @click="extended = !extended">
      <fa icon="chevron-down" size="lg"/>
    </div>
    <h2 class="text-lg mb-4">{{ title }}</h2>
    <span class="text-justify"><slot/></span>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      extended: false
    }
  }
}
</script>
<style>
.max-h-14-important {
  max-height: 3.5rem !important;
}
</style>