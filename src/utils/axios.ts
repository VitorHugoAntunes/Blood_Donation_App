import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 4000,
    headers: { 'Access-Control-Allow-Origin': '*' }
});

export default axiosInstance;