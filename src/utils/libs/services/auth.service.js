import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const loginService = async (data) => {
  return new Promise((resolve, reject) => {
    instance
      .post('/auth/login', data)
      .then((res) => resolve(res))
      .catch((e) => reject(e))
  })
}
