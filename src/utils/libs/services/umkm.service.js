import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const getUmkmService = async () => {
  const response = await instance.get('/umkm')
  return response
}
export const getUmkmServiceById = async (id) => {
  return new Promise((resolve, reject) => {
    instance
      .get('/umkm/' + id)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}
export const storeUmkmService = async (data) => {
  return new Promise((resolve, reject) => {
    instance
      .post('/umkm/', data)
      .then((res) => resolve(res))
      .catch((e) => reject(e))
  })
}
export const updateUmkmService = async (id, data) => {
  const response = await instance.patch('/umkm/' + id, data)
  return response
}

export const deleteUmkmService = async (id) => {
  const response = await instance.delete('/umkm/' + id)
  return response
}
export const getProvince = async () => {
  const response = await instance.get('/province')
  return response
}
export const getRegencies = async (id) => {
  const response = await instance.get('/city/' + id)
  return response
}
