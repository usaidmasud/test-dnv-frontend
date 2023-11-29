<template>
  <section class="">
    <slot></slot>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="" v-for="(umkm, index) in umkms" :key="index">
        <div
          class="bg-white rounded-xl h-60 shadow-lg p-6 flex flex-col items-center overflow-hidden bg-cover object-cover relative"
        >
          <div class="w-16 h-16 bg-slate-100 p-1 shadow-lg rounded-full">
            <img :src="'http://localhost:8000/storage/' + umkm.photos[0].name" alt="" class="" />
          </div>
          <div class="text-center mt-4">
            <h5 class="font-bold font-inter text-base">{{ umkm.name }}</h5>
            <p class="font-normal mt-0 text-sm font-nunito">{{ umkm.description }}</p>
          </div>
          <div class="absolute bottom-4">
            <RouterLink :to="'/umkm/product/' + umkm.id">
              <button
                class="px-4 py-1.5 bg-info-main text-white rounded-xl w-full block text-sm hover:bg-info-hover duration-300"
              >
                Lihat Produk
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <slot name="footer"></slot>
  </section>
</template>

<script>
export default {
  props: {
    umkms: Array
  }
}
</script>

<style></style>
