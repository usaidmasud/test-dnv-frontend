import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const getUmkmPublicService = async () => {
  const response = await instance.get('/public/umkm')
  return response
}
export const getUmkmPublicServiceById = async (id) => {
  const response = await instance.get('/public/umkm/' + id)
  return response
}
