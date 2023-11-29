<template>
  <div class="">
    <SectionTitle title="Data UMKM" description="Daftar Data UMKM" />
    <UmkmSectionVue :umkms="umkms">
      <template #footer>
        <div class="flex justify-center my-6">
          <Pagination
            :currentPage="meta.page"
            :totalPages="meta.totalPage"
            @page-change="handlePageChange"
          />
        </div>
      </template>
    </UmkmSectionVue>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue'
import SectionTitle from '../components/SectionTitle.vue'
import UmkmSectionVue from '../components/UmkmSection.vue'
import { getUmkmPublicService } from '../utils/libs/services/umkm.public.service'

export default {
  name: 'umkm-view',
  data() {
    return {
      meta: {
        page: 1,
        per_page: 9,
        totalPage: 0,
        total: 0
      },
      umkms: []
    }
  },
  components: {
    UmkmSectionVue,
    SectionTitle,
    Pagination
  },
  mounted() {
    this.getUmkm(this.meta)
  },
  methods: {
    async getUmkm(id) {
      const response = await getUmkmPublicService(id)
      this.umkms = response.data.data
      this.meta.total = response.data.meta.total
      this.meta.totalPage = response.data.meta.last_page
    },
    handlePageChange(page) {
      // Handle page change logic (e.g., fetch data for the new page)
      this.meta.page = page
      this.getUmkm(this.meta)
      console.log('meta', this.meta)
    }
  }
}
</script>

<style lang="scss" scoped></style>
