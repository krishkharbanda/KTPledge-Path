import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
});

// Remove or adjust any interceptors that add Authorization headers
API.interceptors.request.use(
  (config) => {
    // Avoid adding Authorization header to login and token refresh requests
    if (!config.url.endsWith('/api/token/') && !config.url.endsWith('/api/token/refresh/')) {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
