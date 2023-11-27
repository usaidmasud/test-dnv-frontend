<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="bg-gray-100 shadow-lg overflow-hidden p-6 font-nunito w-full rounded-lg flex flex-col items-center"
  >
    <img v-bind:src="data.photos[0].name" alt="" class="rounded-full h-14 w-14 shadow-lg mb-4" />
    <h5 class="font-bold text-center text-lg">{{ data.name }}</h5>
    <h6 class="font-semibold text-sm">
      Owner : <span class="font-bold">{{ data.owner_name }}</span>
    </h6>
    <p class="text-sm mt-2 font-normal w-full max-w-lg text-center">{{ data.description }}}</p>
    <div class="mt-4 ">
      <ul class="text-xs">
        <li class="">
          <span class="">Alamat</span>
          <span class="">{{ data.address }}}</span>
        </li>
      </ul>
    </div>
    <div class="mt-4 w-full text-center ">
      <button class="text-sm font-semibold bg-violet-600 text-white rounded-lg px-3 py-1">
        Lihat Produk
      </button>
    </div>
  </div>
</template>
