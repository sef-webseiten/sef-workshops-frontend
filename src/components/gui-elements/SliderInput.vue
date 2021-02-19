<template>
  <div class="font-bold select-none">
    <button :class="{'bg-primary': !value, 'bg-light': value}" class="label rounded-l-sm" @click.prevent="$emit('input', false)">
      {{ leftContent || "Nein" }}
    </button>
    <button :class="{'bg-primary': value, 'bg-light': !value}" class="label rounded-r-sm" @click.prevent="$emit('input', true)">
      {{ rightContent || "Ja" }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["leftContent", "rightContent", "value"],
  data() {
    return {
      id: Math.random(),
    }
  },

}
</script>
<style scoped lang="scss">
.label {
  @apply py-1 px-3 w-16 border border-white text-white;
}
</style>