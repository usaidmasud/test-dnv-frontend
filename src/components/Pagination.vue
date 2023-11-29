<template>
  <nav class="pagination">
    <ul class="flex space-x-2">
      <li v-if="currentPage > 1">
        <button
          class="border p-2 w-10 h-10 hover:bg-primary-hover duration-300 hover:text-white border-gray-300 rounded-lg disabled:cursor-not-allowed"
          @click="changePage(currentPage - 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </li>
      <li v-for="page in pages" :key="page">
        <button
          @click="changePage(page)"
          :class="[
            page === currentPage && 'bg-primary-main text-white ',
            'rounded-lg focus:outline-none hover:bg-primary-main hover:text-white border border-primary-main duration-300 p-2 w-10 h-10'
          ]"
        >
          {{ page }}
        </button>
      </li>
      <li v-if="currentPage < totalPages">
        <button
          class="border p-2 w-10 h-10 hover:bg-primary-hover duration-300 hover:text-white border-gray-300 rounded-lg"
          @click="changePage(currentPage + 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'my-pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  computed: {
    pages() {
      const start = Math.max(1, this.currentPage - 2)
      const end = Math.min(this.totalPages, start + 4)

      return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('page-change', page)
      }
    }
  }
}
</script>

<style scoped></style>
