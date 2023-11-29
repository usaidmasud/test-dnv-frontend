<template>
  <h5 class="text-xl font-poppins font-medium mb-6">Tambah Data Umkm</h5>
  <div class="py-6">
    <form>
      <div class="form-group">
        <label class="label" for="">Nama UMKM</label>
        <input v-model="model.name" type="text" placeholder="Nama Umkm" class="input" />
      </div>
      <div class="form-group">
        <label class="label" for="">Nama Pemilik</label>
        <input v-model="model.owner_name" type="text" placeholder="Nama Pemilik" class="input" />
      </div>
      <div class="form-group">
        <label class="label" for="">Deskripsi</label>
        <textarea
          v-model="model.description"
          name=""
          id=""
          cols="30"
          rows="3"
          placeholder="Deskripsi"
          class="input"
        ></textarea>
      </div>
      <div class="form-group">
        <label class="label" for="">Alamat</label>
        <textarea
          v-model="model.address"
          name=""
          id=""
          cols="30"
          rows="3"
          placeholder="Alamat"
          class="input"
        ></textarea>
        <div class="form-group">
          <label class="label" for="">Provinsi</label>
          <select v-model="model.province" name="" id="" class="input">
            <option value="-">Select</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="label" for="">Kota</label>
        <select v-model="model.city" name="" id="" class="input">
          <option value="-">Select</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label" for="">No HP</label>
        <input v-model="model.contact" type="text" placeholder="Nomor HP" class="input" />
      </div>

      <div v-if="this.model.photos.length > 0" class="flex gap-2 py-4">
        <div class="" v-for="(photo, index) in this.model.photos" :key="index">
          <div
            class="relative w-20 h-20 bg-gray-200 rounded-lg flex justify-center items-center hover:scale-110 duration-300"
          >
            <img :src="'http://localhost:8000/storage/' + photo" alt="" class="w-16 h-16" />
            <div
              class="absolute top-2 right-2 cursor-pointer bg-gray-600 rounded-full p-1 text-white hover:bg-gray-800 duration-300 hover:scale-110"
              @click="handleRemovePhoto(index)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="label" for="">Photo</label>
        <input @change="uploadImage" type="file" multiple class="input" />
      </div>
      <ul class="my-4" v-if="Object.keys(this.errorList).length > 0">
        <li class="" v-for="(error, index) in this.errorList" :key="index">
          {{ error[0] }}
        </li>
      </ul>
      <button type="button" @click="handleStore" class="button">Simpan</button>
    </form>
  </div>
</template>

<script>
import { storeUmkmService } from '../../utils/libs/services/umkm.service'
import { uploadFileService } from '../../utils/libs/services/file.service'
import { MESSAGE_STATE } from '../../utils/constants/message.constant'
export default {
  name: 'AdminUmkmCreate',
  data() {
    return {
      files: [],
      model: {
        name: 'Syarip',
        description: 'xxx',
        address: 'Keru',
        city: '-',
        province: '-',
        owner_name: 'masud',
        contact: '087852373926',
        photos: []
      },
      errorList: {}
    }
  },
  components: {},
  mounted() {},
  methods: {
    async handleStore() {
      var myThis = this
      myThis.errorList = {}
      await storeUmkmService(myThis.model)
        .then(() => {
          this.$swal(MESSAGE_STATE.STORE_SUCCESS)
          this.$router.push({ name: 'admin.umkm' })
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 422) {
              myThis.errorList = error.response.data.errors
              console.log(myThis.errorList)
            }
          }
        })
    },
    handleRemovePhoto(id) {
      this.model.photos.splice(id, 1)
    },
    async uploadImage(e) {
      const image = e.target.files
      console.log('images', image)
      const formData = new FormData()
      for (let x = 0; x < image.length; x++) {
        formData.append('files[]', image[x])
      }
      await uploadFileService(formData)
        .then((res) => {
          this.model.photos = res.data.files
          console.log('image', res.data)
        })
        .catch((e) => {
          console.log('error', e)
        })
    }
  }
}
</script>

<style>
.form-group {
  @apply mb-2;
}
.label {
  @apply text-sm font-semibold text-gray-700;
}
.input {
  @apply block px-4 py-2 border border-gray-300 rounded-lg mb-2 w-full focus:ring-dark-main focus:ring-2 hover:ring-1 transition duration-300 hover:ring-dark-main focus:outline-none text-sm focus:border-dark-main font-poppins text-gray-700;
}
.button {
  @apply px-4 py-2 uppercase tracking-wider bg-primary-main block w-full rounded-lg text-white hover:bg-primary-hover duration-300 font-poppins font-bold transition;
}
</style>
