import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const getUmkmService = async () => {
  const response = await instance('/umkm')
  return response
}
