// src/providers/NextAuthContext.tsx

'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { User } from 'next-auth';
import { FC } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get('authToken');
        //const token = localStorage.getItem('authToken');
        if (token) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/check-auth`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response.data.status === 'success') {
            setUser(response.data.user);
          }
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
      if (response.data.access_token) {
       // localStorage.setItem('authToken', response.data.access_token);
        Cookies.set('authToken', response.data.access_token, { expires: 1 }) 
        setUser(response.data.user);
        return true;
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
    return false;
  };

  const signOut = async () => {
   // localStorage.removeItem('authToken');
    Cookies.remove('authToken'); 
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
