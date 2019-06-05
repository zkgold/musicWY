import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'},
  // xhrFields: { withCredentials: true }
  withCredentials: true,
  // 允许跨域发生cookie
});

// instance.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     console.log(config)
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.resolve({'code': 400});
  });

export default instance