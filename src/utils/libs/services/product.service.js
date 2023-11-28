import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const getProductService = async () => {
  const response = await instance.get('/product')
  return response
}
export const getProductServiceById = async (id) => {
  const response = await instance.get('/product/' + id)
  return response
}
export const storeProductService = async (data) => {
  const response = await instance.post('/product/', data)
  return response
}
export const updateProductService = async (id, data) => {
  const response = await instance.patch('/product/' + id, data)
  return response
}

export const deleteProductService = async (id) => {
  const response = await instance.delete('/product/' + id)
  return response
}
