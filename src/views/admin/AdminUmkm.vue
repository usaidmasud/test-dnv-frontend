<template>
  <h5 class="text-xl font-poppins font-medium">Data Umkm</h5>

  <div class="flex justify-end py-6">
    <button
      @click="handleAdd"
      class="bg-primary-main text-white hover:bg-primary-hover duration-300 rounded-lg text-sm px-4 py-2 font-poppins tracking-wide font-medium"
    >
      Tambah
    </button>
  </div>
  <div class="table-responsive">
    <table>
      <thead>
        <tr>
          <th style="width: 50">#</th>
          <th>Nama Umkm</th>
          <th>Photo</th>
          <th>Deskripsi</th>
          <th>Nama Owner</th>
          <th>Alamat</th>
          <th>Kota</th>
          <th>Provinsi</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody v-if="!loading">
        <tr class="" v-for="(item, index) in dataUmkm" :key="index">
          <td>{{ ++index }}</td>
          <td>{{ item.name }}</td>
          <td class="inline-flex items-center flex-wrap gap-1">
            <!-- <CoolLightBox :items="item.photos.map((photo) => photo.name)" :index="index" @close="index = null"> </CoolLightBox> -->

            <!-- <div class="images-wrapper">
              <div
                class="image"
                v-for="(image, imageIndex) in item.photos"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')' }"
              ></div>
            </div> -->
            <div v-for="(photo, key) in item.photos" :key="key">
              <img  class="w-8 h-8" :src="'http://localhost:8000/storage/' + photo.name" alt="" />
            </div>
          </td>
          <td>{{ item.description }}</td>
          <td>{{ item.owner_name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.province }}</td>
          <td>
            <div class="inline-flex items-center gap-1">
              <RouterLink
                :to="{
                  path: '/admin/umkm/' + item.id + '/edit'
                }"
              >
                <button
                  class="px-2 py-1 rounded-lg bg-green-700 hover:bg-green-800 text-gray-100 duration-300 text-xs font-medium font-poppins"
                >
                  Edit
                </button>
              </RouterLink>
              <button
                @click="handleDelete(item.id)"
                class="px-2 py-1 rounded-lg bg-red-700 hover:bg-red-800 text-gray-100 duration-300 text-xs font-medium font-poppins"
              >
                Hapus
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="loading"
      class="flex justify-center items-center w-full text-sm animate-pulse font-medium py-4"
    >
      Loading ...
    </div>
  </div>
</template>

<script>
import { getUmkmService, deleteUmkmService } from '../../utils/libs/services/umkm.service'
import { MESSAGE_STATE } from '../../utils/constants/message.constant'

export default {
  name: 'AdminUmkm',
  data() {
    return {
      index: null,
      loading: false,
      dataUmkm: []
    }
  },
  components: {
  },
  mounted() {
    this.fetchUmkm()
  },
  methods: {
    async fetchUmkm() {
      this.loading = true
      const response = await getUmkmService()
      this.dataUmkm = response.data.data
      this.loading = false
    },
    handleAdd() {
      this.$router.push({ name: 'admin.umkm.create' })
    },
    async handleDelete(id) {
      this.$swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await deleteUmkmService(id).then(() => {
              this.$swal.fire({
                title: 'Deleted!',
                text: MESSAGE_STATE.DELETE_SUCCESS,
                icon: 'success'
              })
              this.fetchUmkm()
            })
          }
        })
    }
  }
}
</script>

<style>
.table-responsive {
  @apply w-full overflow-x-scroll;
}
table {
  @apply w-full table-auto;
}
table th {
  @apply border-b-2 border-gray-400 px-4 py-1.5 text-sm font-semibold font-poppins;
}
table td {
  @apply px-4 py-1.5 border-b border-gray-300 font-normal text-sm font-poppins;
}
</style>
