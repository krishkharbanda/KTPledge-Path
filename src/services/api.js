import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust the base URL accordingly
});

// Add request interceptors if needed (e.g., for adding auth tokens)

export default API;
