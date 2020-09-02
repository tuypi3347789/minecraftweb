import axios from 'axios';
import Vue from 'vue';

axios.defaults.withCredentials = true;
// 發送前的動作
axios.interceptors.request.use((config) => {
  const httpToken = localStorage.getItem('token');
  const resConfig = config;
  if (httpToken) {
    resConfig.headers.token = httpToken;
  }
  return config;
}, (error) => {
  const value = error;
  return Promise.reject(value);
});

// 接收響應前的動作
axios.interceptors.response.use((response) => {
  const res = response;
  return res;
}, (error) => {
  const value = error.response;
  return Promise.resolve(value);
});

export default {
  post(url, value) {
    const params = {
      method: 'POST',
      baseURL: Vue.prototype.baseURL,
      url,
      data: value,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };
    return axios(params).then((response) => {
      // console.log(url)
      const res = response;
      return res;
    }).then((response) => {
      const res = response;
      return res;
    });
  },
  put(url, value) {
    const params = {
      method: 'PUT',
      baseURL: Vue.prototype.baseURL,
      url,
      data: value,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };
    return axios(params).then((response) => {
      // console.log(url)
      const res = response;
      return res;
    }).then((response) => {
      const res = response;
      return res;
    });
  },
  get(url) {
    const params = {
      method: 'GET',
      baseURL: Vue.prototype.baseURL,
      url,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };
    return axios(params).then((response) => {
      // console.log(url)
      const res = response;
      return res;
    }).then((response) => {
      const res = response;
      return res;
    });
  },
  delete(url) {
    const params = {
      method: 'DELETE',
      baseURL: Vue.prototype.baseURL,
      url,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };
    return axios(params).then((response) => {
      // console.log(url)
      const res = response;
      return res;
    }).then((response) => {
      const res = response;
      return res;
    });
  },
};
