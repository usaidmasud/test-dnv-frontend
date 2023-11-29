<template>
  <div class="text-center mb-6">
    <h3 class="font-bold font-inter text-2xl">{{ title }}</h3>
    <p class="text-sm font-inter">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>

<style></style>
