<template>
  <div class="md:rounded p-6 md:p-10 card animate__animated animate__fadeInUp animate__fast">
    <p class="h2">Bezahlung erfolgreich</p>
    <p class="mt-8">Du bist jetzt erfolgreich zum Workshop <span class="text-primary">{{ workshop.title }}</span>
      angemeldet!</p>
    <p class="mt-8">In der Bestellbestätigung bekommst du von uns nochmal alles zusammengefasst, inklusive des genauen
      Ortes. </p>
  </div>
</template>
<script>
export default {
  props: ["workshop"]
}
</script>
<style lang="scss" scoped>
.card {
  @apply bg-white w-full;
}
</style>