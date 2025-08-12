import axios from 'axios';
import { config } from '../../config'; // corrected import

const axiosInstance = axios.create({
  baseURL: config.baseUrl, // use the correct property here
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally handle token auth here
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
