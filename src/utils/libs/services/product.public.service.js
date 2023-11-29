import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const getProductPublicService = async () => {
  const response = await instance.get('/public/product')
  return response
}
export const getProductPublicServiceById = async (id) => {
  const response = await instance.get('/public/product/' + id)
  return response
}
