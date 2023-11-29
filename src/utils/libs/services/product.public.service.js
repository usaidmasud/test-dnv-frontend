import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const getProductPublicService = async (meta) => {
  const response = await instance.get(`/public/product?page=${meta.page}&per_page=${meta.per_page}`)
  return response
}
export const getProductPublicServiceById = async (id) => {
  const response = await instance.get('/public/product/' + id)
  return response
}
