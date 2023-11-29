<template>
  <div class="">
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
import { getUmkmProductPublicService } from '../utils/libs/services/umkm.public.service'

export default {
  name: 'product-view',
  data() {
    return {
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
    this.getProduct(this.$route.params.id, this.meta)
  },
  methods: {
    async getProduct(id, params) {
      const response = await getUmkmProductPublicService(id, params)
      this.products = response.data.data
      this.meta.total = response.data.meta.total
      this.meta.totalPage = response.data.meta.last_page
    },
    handlePageChange(page) {
      // Handle page change logic (e.g., fetch data for the new page)
      this.meta.page = page
      this.getProduct(this.$route.params.id, this.meta)
    }
  }
}
</script>
