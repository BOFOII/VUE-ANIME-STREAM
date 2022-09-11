import axios from 'axios';

// for expres js
export const otaku = axios.create({
    baseURL: "http://127.0.0.1:3000",
})

// for laravel
export const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});
let personal_access_token = localStorage.getItem('personal_access_token');
api.defaults.headers.common['Authorization'] = `Bearer ${personal_access_token}`;