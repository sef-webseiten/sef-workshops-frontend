<template>
  <div class="font-bold select-none flex flex-row">
    <button :class="{'bg-primary': value == false, 'bg-light': value || value != false}" class="label rounded-l-sm"
            @click.prevent="$emit('input', false)">
      {{ leftContent || "Nein" }}
    </button>
    <button :class="{'bg-primary': value, 'bg-light': !value}" class="label rounded-r-sm"
            @click.prevent="$emit('input', true)">
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
<style lang="scss" scoped>
.label {
  @apply py-1 px-3 w-16 border border-white text-white;
}
</style>