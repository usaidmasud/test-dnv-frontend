<template>
  <h5 class="text-xl font-poppins font-medium mb-6">Data Umkm</h5>

  <div class="flex justify-end">
    <button class="bg-primary-main text-white hover:bg-primary-hover duration-300 rounded-lg text-sm px-4 py-2 font-poppins tracking-wide font-medium">Tambah</button>
  </div>
  <div class="table-responsive">
    <table>
      <thead>
        <tr>
          <th>#</th>
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
      <tbody>
        <tr class="" v-for="(item, index) in dataUmkm" :key="index">
          <td>{{ ++index }}</td>
          <td>{{ item.name }}</td>
          <td>List Photo</td>
          <td>{{ item.description }}</td>
          <td>{{ item.owner_name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.province }}</td>
          <td>
            <div class="inline-flex items-center gap-1">
              <button
                class="px-2 py-1 rounded-lg bg-green-700 hover:bg-green-800 text-gray-100 duration-300 text-xs font-medium font-poppins"
              >
                Edit
              </button>
              <button
                class="px-2 py-1 rounded-lg bg-red-700 hover:bg-red-800 text-gray-100 duration-300 text-xs font-medium font-poppins"
              >
                Hapus
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getUmkmService } from '../../utils/libs/services/umkm.service'
export default {
  name: 'AdminUmkm',
  data() {
    return {
      dataUmkm: []
    }
  },
  mounted() {
    this.fetchUmkm()
  },
  methods: {
    async fetchUmkm() {
      const response = await getUmkmService()
      this.dataUmkm = response.data.data
    }
  }
}
</script>

<style>
.table-responsive {
  @apply w-full overflow-x-scroll;
}
table {
  @apply table-fixed;
}
table th {
  @apply border-b-2 border-gray-400 px-4 py-1.5 text-sm font-semibold font-poppins;
}
table td {
  @apply px-4 py-1.5 border-b border-gray-300 font-normal text-sm font-poppins;
}
</style>
