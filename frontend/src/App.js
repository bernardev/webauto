// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import VehicleDetail from './pages/VehicleDetail';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdditionalServices from './pages/AdditionalServices';
import InspectionDelivery from './pages/InspectionDelivery';
import ComparadorDePrecos from './pages/ComparadorDePrecos';
import HelpCenter from './pages/HelpCenter';
import ManageUsers from './pages/ManageUsers';
import ManageVehicles from './pages/ManageVehicles';
import Vehicles from './Vehicles'
import ManageFinancingAndServices from './pages/ManageFinancingAndServices';
import ReportsAndStatistics from './pages/ReportsAndStatistics';
import DealerDashboard from './pages/DealerDashboard';
import ManageDealerVehicles from './pages/ManageDealerVehicles';
import SalesReports from './pages/SalesReports';

function App() {
  const [userType, setUserType] = useState('');

  // Carrega o userType do localStorage ao montar o App
  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  return (
    <Router basename='/webauto/frontend'>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />

        {/* Rotas para o administrador */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute userType={userType} requiredType="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/users" 
          element={
            <ProtectedRoute userType={userType} requiredType="admin">
              <ManageUsers />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/manage-vehicles" 
          element={
            <ProtectedRoute userType={userType} requiredType="admin">
              <ManageVehicles />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/manage-financing" 
          element={
            <ProtectedRoute userType={userType} requiredType="admin">
              <ManageFinancingAndServices />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/reports" 
          element={
            <ProtectedRoute userType={userType} requiredType="admin">
              <ReportsAndStatistics />
            </ProtectedRoute>
          } 
        />

        {/* Rotas para o lojista */}
        <Route 
          path="/dealer/dashboard" 
          element={
            <ProtectedRoute userType={userType} requiredType="lojista">
              <DealerDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dealer/manage-vehicles" 
          element={
            <ProtectedRoute userType={userType} requiredType="lojista">
              <ManageDealerVehicles />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dealer/sales-reports" 
          element={
            <ProtectedRoute userType={userType} requiredType="lojista">
              <SalesReports />
            </ProtectedRoute>
          } 
        />

        {/* Rotas adicionais */}
        <Route path="/vehicle-test" element={<VehicleDetail />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/services" element={<AdditionalServices />} />
        <Route path="/inspection" element={<InspectionDelivery />} />
        <Route path="/comparar" element={<ComparadorDePrecos />} />
        <Route path="/contact" element={<HelpCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
