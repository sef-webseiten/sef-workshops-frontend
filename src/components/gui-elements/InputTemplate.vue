<template>
  <div :class="colorName === 'primary' ? 'focus-within:border-primary' : 'focus-within:border-abi'"
       class="relative border-b-2 mt-8 mb-2">

    <!-- input -->
    <input v-if="type !== 'textarea' && type !== 'checkbox'" :id="id" :class="colorName" :name="label" :required="required"
           :type="type" :value="value"
           class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "
           @input="$emit('input', $event.target.value)"/>

    <!-- checkbox -->
    <input v-else-if="type === 'checkbox'" :id="id" :class="colorName" :name="label" :required="required"
           :type="type" :value="value" class="mr-1"
           @input="$emit('input', $event.target.value)">

    <!-- textarea -->
    <textarea v-else :id="id" :class="colorName" :name="label" :required="required" :value="value"
              class="block w-full h-20 appearance-none focus:outline-none bg-transparent" placeholder=" "
              @input="$emit('input', $event.target.value)"/>

    <!-- label -->
    <label :class="labelClasses" :for="id">
      {{ `${label.trim()}${required ? "*" : ""}` }}
    </label>

  </div>
</template>
<script>
export default {
  data() {
    return {
      id: Math.random()
    }
  },
  computed: {
    labelClasses() {
      return {
        'absolute top-0 duration-300 origin-0 pointer-events-none': this.type !== 'checkbox',
        'text-center': this.type === 'checkbox',
        'text-gray-500': !this.value || this.value.length === 0
      }
    }
  },
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    colorName: {
      type: String,
      default: "primary"
    }
  }
}
</script>
<style lang="scss" scoped>
input:focus-within ~ label,
input:not(:placeholder-shown) ~ label,
textarea:focus-within ~ label,
textarea:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6;
}

input.primary:focus-within ~ label,
textarea.primary:focus-within ~ label {
  @apply text-primary;
}

input.abi:focus-within ~ label,
textarea.abi:focus-within ~ label {
  @apply text-abi;
}
</style>