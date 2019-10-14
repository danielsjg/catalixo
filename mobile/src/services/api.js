import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.1.138.38:3333'
});

export default api;