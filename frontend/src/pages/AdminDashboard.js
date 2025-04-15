// src/pages/AdminDashboard.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';  // Arquivo CSS para estilização do painel

function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [financingPending, setFinancingPending] = useState(0);
  const [highlightedAds, setHighlightedAds] = useState(0);

  useEffect(() => {
    // Aqui você faria chamadas para APIs para buscar dados de cada estatística
    setTotalUsers(150);  // Exemplo de dados fixos para teste
    setTotalVehicles(230);
    setTotalSales(78);
    setFinancingPending(15);
    setHighlightedAds(12);
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Painel do Administrador</h1>
      <div className="dashboard-overview">
        <div className="card">
          <h3>Total de Usuários</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="card">
          <h3>Veículos Cadastrados</h3>
          <p>{totalVehicles}</p>
        </div>
        <div className="card">
          <h3>Vendas Realizadas</h3>
          <p>{totalSales}</p>
        </div>
        <div className="card">
          <h3>Financiamentos Pendentes</h3>
          <p>{financingPending}</p>
        </div>
        <div className="card">
          <h3>Anúncios em Destaque</h3>
          <p>{highlightedAds}</p>
        </div>
      </div>

      <div className="notifications">
        <h2>Notificações</h2>
        <ul>
          <li>Solicitação de financiamento aguardando aprovação</li>
          <li>Usuário solicitou suporte - Pedido #1234</li>
          <li>Veículo novo cadastrado por um lojista - Aguardando revisão</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
