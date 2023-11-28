import axios from 'axios'

// const baseURL = process.env.VUE_APP_API_url;
const baseURL = 'http://localhost:8000/api';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 2000,
  headers: {
    Accept: 'application/json'
    // ContentType: 'application/json',
  }
})

// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {
    const token = sessionStorage.getItem('accessToken')
    console.log('token',token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      // config.headers['Content-Type'] = 'application/json';
      config.headers['Accept'] = 'application/json';
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // get response error code

    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // const { status } = error.response;
    // if (status === 401) {
    //   await signOut({
    //     redirect: false,
    //   });
    // }
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance
