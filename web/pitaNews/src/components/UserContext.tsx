import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth } from '../Authotication/firebase';

export interface User {
  [x: string]: any;
  name?: string;  // Optional if not provided
  AR_Number: string;
  username: string;
  role: string;
  email: string;
  profilePicture?: string;  // Optional
}


interface UserContextType {
  user: User | null;
  signIn: (userData: User) => void;
  signOut: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signIn = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    auth.signOut();
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

