/*
  @file: http 请求库
  @Author: tree
 */

import axios from 'axios';
import httpCode from '../../consts/httpCode';
import localStorage from '../localStorage'

const _axios = axios.create({});
_axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
_axios.interceptors.request.use(
  (config) => {
    if (localStorage.get('token')) {
      config.headers.token = localStorage.get('token');
    }
    config.headers.Accept = 'application/json';
    return config;
  },
  (err) => Promise.reject(err),
);

_axios.interceptors.response.use(
  (response) => {
    return response;
  }, (error) => {
    if (error && error.response) {
      if (error.response.status === 401) {
        //todo
      }
    }
    return Promise.reject(error.response && error.response.data);
  },
);

const request = function (url, params, config, method) {
  return _axios[method](url, params, Object.assign({}, config))
    .then(checkStatus).then(checkCode);
};

// 处理网络请求带来的校验
function checkStatus(response) {
  // 如果 http 状态码正常, 则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data || httpCode.NET_ERROR
  }
  return httpCode.NET_ERROR
}

// 校验服务器返回数据
function checkCode(res) {
  return res;
}

export default {

  init: function (option = {withCredentials: true}) {
    _axios.defaults.baseURL = option.url;
    _axios.defaults.timeout = option.timeout || 20000;
    _axios.defaults.withCredentials = option.withCredentials;
  },

  get: (url, params, config = {}) => request(url, params, config, 'get'),

  post: (url, params, config = {}) => request(url, params, config, 'post'),

}

