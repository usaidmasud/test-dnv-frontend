<template>
  <div class="">
    <div class="my-6 grid grid-cols-2 gap-6 items-center">
      <div v-if="umkm !== null" class="">
        <div
          class="w-full rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 flex gap-2 overflow-hidden"
        >
          <img
            :src="'http://localhost:8000/storage/' + umkm?.photos[0].name"
            alt=""
            class="w-24 h-auto bg-indigo-600"
          />
          <div class="p-4">
            <h5 class="font-medium font-inter text-base">{{ umkm?.name }}</h5>
            <p class="text-sm font-normal font-inter">{{ umkm?.owner_name }}</p>
            <div class="mt-2">
              <span class="text-sm font-inter">{{ umkm.contact }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="font-inter">
        <ul class="flex flex-col gap-1">
          <li class="inline-flex gap-0 items-center">
            <span class="text-sm font-semibold w-24">Kota</span> 
            <span class="text-sm">: {{ umkm?.city?.name }}</span> 
          </li>
          <li class="inline-flex gap-0 items-center">
            <span class="text-sm font-semibold w-24">Provinsi</span> 
            <span class="text-sm">: {{ umkm?.province?.name }}</span> 
          </li>
          <li class="inline-flex gap-0 items-center">
            <span class="text-sm font-semibold w-24">Alamat</span> 
            <span class="text-sm">: {{ umkm?.address }}</span> 
          </li>
        </ul>
      </div>
    </div>
    <ProductSection :products="products">
      <SectionTitle title="Data Produk" description="Daftar Data Produk" />
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
import ProductSection from '../components/ProductSection.vue'
import Pagination from '../components/Pagination.vue'
import SectionTitle from '../components/SectionTitle.vue'
import {
  getUmkmProductPublicService,
  getUmkmPublicServiceById
} from '../utils/libs/services/umkm.public.service'

export default {
  name: 'product-view',
  data() {
    return {
      umkm: null,
      meta: {
        page: 1,
        per_page: 9,
        totalPage: 0,
        total: 0
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
    this.getDetailUmkm(this.$route.params.id)
    this.getProduct(this.$route.params.id, this.meta)
  },
  methods: {
    async getProduct(id, params) {
      const response = await getUmkmProductPublicService(id, params)
      this.products = response.data.data
      this.meta.total = response.data.meta.total
      this.meta.totalPage = response.data.meta.last_page
    },
    async getDetailUmkm(id) {
      const response = await getUmkmPublicServiceById(id)
      this.umkm = response.data.data
      console.log(response.data.data)
    },
    handlePageChange(page) {
      // Handle page change logic (e.g., fetch data for the new page)
      this.meta.page = page
      this.getProduct(this.$route.params.id, this.meta)
    }
  }
}
</script>
