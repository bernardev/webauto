// src/contexts/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

// Criando o contexto de autenticação
const AuthContext = createContext();

// Hook para acessar o contexto
export const useAuth = () => useContext(AuthContext);

// Componente provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  const loginAsAdmin = () => {
    setIsLoggedIn(true);
    setUserType('admin');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
