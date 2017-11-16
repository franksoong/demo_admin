/*
 * @Author: soong
 * @Date: 2017-11-16 21:36:39
 * @Last Modified by:   soong
 * @Last Modified time: 2017-11-16 21:36:39
 */
import axios from 'axios';

const base = '';

export const requestLogin = params => axios.post(`${base}/login`, { params }).then(res => res.data);

export const getUserList = params => axios.get(`${base}/user/list`, { params });

export const getUserListPage = params => axios.get(`${base}/user/listpage`, { params });

export const removeUser = params => axios.get(`${base}/user/remove`, { params });

export const batchRemoveUser = params => axios.get(`${base}/user/batchremove`, { params });

export const editUser = params => axios.get(`${base}/user/edit`, { params });

export const addUser = params => axios.get(`${base}/user/add`, { params });
