<template>
  <button @click="onClick" class="button">{{ label }}</button>
</template>

<script>
export default {
  name: 'button-component',
  props: {
    label: {
      type: String,
      default: 'Button'
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>
.button {
  @apply px-3 py-1 bg-primary-main text-white hover:bg-primary-hover duration-300;
}
</style>
