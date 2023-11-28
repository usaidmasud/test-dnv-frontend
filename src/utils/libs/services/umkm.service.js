import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const getUmkmService = async () => {
  const response = await instance.get('/umkm')
  return response
}
export const getUmkmServiceById = async (id) => {
  const response = await instance.get('/umkm/' + id)
  return response
}
export const storeUmkmService = async (data) => {
  const response = await instance.post('/umkm/', data)
  return response
}
export const updateUmkmService = async (id, data) => {
  const response = await instance.patch('/umkm/' + id, data)
  return response
}

export const deleteUmkmService = async (id) => {
  const response = await instance.delete('/umkm/' + id)
  return response
}
