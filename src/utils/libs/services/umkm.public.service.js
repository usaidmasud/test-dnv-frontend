import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const getUmkmPublicService = async (meta) => {
  const response = await instance.get(`/public/umkm?page=${meta.page}&per_page=${meta.per_page}&search=${meta.search}`)
  return response
}
export const getUmkmPublicServiceById = async (id) => {
  const response = await instance.get('/public/umkm/' + id)
  return response
}
export const getUmkmProductPublicService = async (id, meta) => {
  const response = await instance.get(
    '/public/umkm/product/' + id + `?page=${meta.page}&per_page=${meta.per_page}`
  )
  return response
}
