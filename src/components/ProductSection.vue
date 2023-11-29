<template>
  <!-- section produk -->
  <section class="py-6">
    <slot></slot>
    <div class="grid grid-cols-3 gap-6">
      <div class="" v-for="(product, index) in products" :key="index">
        <div class="bg-white shadow-lg rounded-xl overflow-hidden h-auto hover:-translate-y-2 duration-300">
          <div class="flex justify-center">
            <div
              class="flex justify-center relative items-center w-full h-44 bg-gray-300 overflow-hidden"
            >
              <img
                :src="'http://localhost:8000/storage/' + product.photos[0].name"
                alt=""
                class="object-cover w-full h-44"
              />
            </div>
          </div>
          <div class="p-4">
            <!-- :to="'/product/' + product.id" -->
            <RouterLink :to="'/product/'+product.id" >
              <div class="group">
                <h5 class="font-inter duration-300 font-normal text-sm">{{ product.name }}</h5>

              <h5 class="font-inter duration-300 font-bold text-sm text-danger-main">
                {{ filters.formatMoney(product.price) }}
              </h5>
              </div>
            </RouterLink>
            <div class="mt-2 flex justify-between items-center">
              <span class="text-xs font-semibold font-nunito">{{
                product.umkm.province.name
              }}</span>
              <button
                title="Add to favorite"
                class="text-gray-600 hover:text-danger-main duration-300"
              >
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot name="footer"></slot>
  </section>
  <!-- ./section produk -->
</template>

<script>
export default {
  props: {
    products: Array
  },
  created() {
    console.log('product', this.products)
  }
}
</script>

<style></style>
