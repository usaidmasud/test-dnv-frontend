<script setup></script>

<template>
  <main class="font-nunito w-full">
    <!-- search produk -->
    <!-- ./search produk -->

    <!-- section umkm -->
    <UmkmSection :umkms="umkms">
      <div class="mb-6 text-center">
        <h5 class="font-semibold font-inter text-xl">Daftar UMKM</h5>
      </div>
      <template #footer >
        <RouterLink class="flex justify-center my-4" to="/umkm">
          <button class="px-4 py-2 text-sm font-inter font-medium bg-info-main text-white hover:bg-info-hover duration-300">Lihat Semua</button>
        </RouterLink>
      </template>
    </UmkmSection>
    <!-- ./section umkm -->

    <!-- section produk -->
    <section class="py-6">
      <ProductSection :products="products">
        <div class="flex justify-between mb-6">
          <h2 class="text-xl font-inter font-semibold">Catalog</h2>
          <div class="">
            <button
              @click="this.$router.push('/product')"
              class="text-xs font-inter bg-slate-500 px-2 text-white py-1 rounded-full hover:bg-slate-600 hover:text-white duration-300"
            >
              See all
            </button>
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
    </section>
    <!-- ./section produk -->
  </main>
</template>

<script>
import Pagination from '../components/Pagination.vue'
import ProductSection from '../components/ProductSection.vue'
import UmkmSection from '../components/UmkmSection.vue'
import { getProductPublicService } from '../utils/libs/services/product.public.service'
import { getUmkmPublicService } from '../utils/libs/services/umkm.public.service'

export default {
  name: 'home-view',
  data() {
    return {
      meta: {
        page: 1,
        per_page:3,
        totalPage: 0,
        total: 0
      },
      metaUmkm: {
        page: 1,
        per_page:3,
        totalPage: 0,
        total: 0
      },
      umkms: [],
      products: []
    }
  },
  components: { ProductSection, UmkmSection, Pagination },
  mounted() {
    this.getUmkm(this.metaUmkm)
    this.getProduct(this.meta)
  },
  methods: {
    async getUmkm(params) {
      const response = await getUmkmPublicService(params)
      this.umkms = response.data.data
    },
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
      console.log('meta',this.meta)
    }
  }
}
</script>
