<template>
  <span class="text-black">
    <a class="link" href="https://erichier.tech/impressum" rel="noopener" target="_blank">Impressum</a>
    <g-link class="link" to="/privacy/">Datenschutzerklärung</g-link>
    <g-link class="link" to="/agb/">AGB</g-link>
    <span class="hidden md:inline-block">
      <button class="link" @click="$root.$emit('openContactForm')">Support kontaktieren</button>
    </span>
  </span>
</template>