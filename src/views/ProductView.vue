<template>
  <div class="">
    <ProductSection :products="products">
      <SectionTitle title="Data Produk" description="Daftar Data Produk" />
      <div class="mt-4 mb-8">
        <div class="relative w-full">
          <input
            type="text"
            v-model="meta.search"
            @input="debouncedPerformSearch" 
            @keyup.enter="handleSearch" 
            placeholder="Cari Produk"
            class="w-full rounded-md pr-10 focus:outline-none hover:border-primary-main focus:ring-2 focus:ring-primary-main text-sm py-2 focus:border-primary-main font-inter font-medium"
          />
          <div class="absolute inset-y-[5px] right-1 text-gray-600">
            <button
              @click="handleSearch"
              class="flex gap-1 justify-center items-center w-24 bg-info-main text-white hover:bg-info-hover duration-300 text-sm font-inter px-2 py-1 rounded-md"
            >
              Cari
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-center my-6">
          <Pagination
            :currentPage="meta.page"
            :totalPages="meta.totalPage"
            @page-change="handlePageChange"
          />
        </div>
      </template>
    </ProductSection>
  </div>
</template>

<style></style>

<script>
import { getProductPublicService } from '../utils/libs/services/product.public.service'
import ProductSection from '../components/ProductSection.vue'
import Pagination from '../components/Pagination.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { debounce } from 'lodash';

export default {
  name: 'product-view',
  data() {
    return {
      meta: {
        page: 1,
        per_page: 9,
        totalPage: 0,
        total: 0,
        search: ''
      },
      products: []
    }
  },
  components: {
    ProductSection,
    Pagination,
    SectionTitle
  },
  mounted() {
    this.getProduct(this.meta)
  },
  methods: {
    async getProduct(params) {
      const response = await getProductPublicService(params)
      this.products = response.data.data
      this.meta.total = response.data.meta.total
      this.meta.totalPage = response.data.meta.last_page
    },
    handlePageChange(page) {
      // Handle page change logic (e.g., fetch data for the new page)
      this.meta.page = page
      this.getProduct(this.meta)
      console.log('meta', this.meta)
    },
    async handleSearch() {
      await this.getProduct(this.meta)
    },
    debouncedPerformSearch: debounce(function() {
      this.getProduct(this.meta);
    }, 300), // 300 milliseconds debounce time

  }
}
</script>
