// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, userType }) => {
  // Permite o acesso se o userType for 'admin' ou 'lojista'
  if (userType !== 'admin' && userType !== 'lojista') {
    return <Navigate to="/login" replace />;
  }

  // Caso o userType seja 'admin' ou 'lojista', renderiza o conteúdo protegido
  return children;
};

export default ProtectedRoute;
