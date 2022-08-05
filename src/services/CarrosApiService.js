import axios    from 'axios';
import {BASE_URL} from '../utils/resquests';

export default class CarrosApiService {
    constructor() {
        this.axios = axios.create({
            baseURL: BASE_URL
        });

        this.axios.interceptors.request.use(config => {
            const token = localStorage.getItem('token');
            if (token) config.headers.Authorization = 'Bearer ' + token
    
            return config;
        });
    };

    get(url) {
        return this.axios.get(url);
    }

    delete(url) {
        return this.axios.delete(url);
    }

    post(url, data) {
        return this.axios.post(url, data);
    }

    put(url, data) {
        return this.axios.put(url, data);
    }
};