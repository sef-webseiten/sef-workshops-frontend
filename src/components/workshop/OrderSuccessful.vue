<template>
  <div class="md:rounded p-6 md:p-10 card animate__animated animate__fadeInUp animate__fast">
    <p class="h2">Teilnahme bestätigt</p>
    <p class="h4 mt-2">Vielen Dank für deine Teilnahme! </p>
    <p class="mt-6">
      Alle Details zu deinen Buchungen findest du unter deinen
      <g-link to="/account/orders" class="text-primary">Buchungen. </g-link>
    </p>

    <p class="mt-6">
      In der Buchungsbestätigung per E-Mail bekommst du von uns nochmal alles zusammengefasst, inklusive des genauen
      Ortes.
    </p>

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