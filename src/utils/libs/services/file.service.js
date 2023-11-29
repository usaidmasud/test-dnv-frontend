import instance from '../api/instance'
// const baseURL = import.meta.env.VUE_APP_API_URL
export const uploadFileService = async (data) => {
  return new Promise((resolve, reject) => {
    instance
      .post('/file/upload/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => resolve(res))
      .catch((e) => reject(e))
  })
}
