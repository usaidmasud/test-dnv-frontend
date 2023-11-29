import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const getProductPublicService = async (meta) => {
  const filterValue = `?page=${meta.page}&per_page=${meta.per_page}&search=${meta.search}`
  const response = await instance.get(`/public/product` + filterValue)
  return response
}
export const getProductPublicServiceById = async (id) => {
  const response = await instance.get('/public/product/' + id)
  return response
}
