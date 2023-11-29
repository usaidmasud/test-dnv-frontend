<template>
  <div class="">

    <div class="text-center  ">
      <h3 class="font-bold font-inter text-2xl">Data Produk</h3>
      <p class="text-sm font-inter">List data produk</p>
    </div> 
    <ProductSection :products="products" >
    
  </ProductSection> 
  </div>
</template>

<style></style>

<script>
import { getProductPublicService } from '../utils/libs/services/product.public.service'
import ProductSection from '../components/ProductSection.vue'

export default {
  name: 'product-view',
  data() {
    return {
      products:[]
    }
  },
  components: {
    ProductSection,
  },
  mounted() {
    this.fetchAllProduct()
  },
  methods: {
   
    async fetchAllProduct(id) {
      const response = await getProductPublicService(id)
      this.products = response.data.data
    }
  }
}
</script>
