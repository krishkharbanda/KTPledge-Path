import { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
        try {
        const response = await axios.post('/api/login', credentials);
        setUser(response.data.user);
        // Store token in localStorage or cookies
        localStorage.setItem('token', response.data.token);
        // Set default header for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        } catch (error) {
        console.error(error);
        }
    };
    
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };
  

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
