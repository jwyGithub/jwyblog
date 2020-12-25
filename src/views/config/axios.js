/*
 * @Descripttion: axios config
 * @version:  1.0
 * @Author: jwy
 * @Date: 2020-12-04 16:39:10
 * @LastEditors: jwy
 * @LastEditTime: 2020-12-04 17:08:39
 */
import axios from 'axios';

const $axios = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

// 添加请求拦截器
$axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// 添加响应拦截器
$axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default $axios;
