// src/pages/DealerDashboard.js

import React, { useState, useEffect } from 'react';
import './DealerDashboard.css';

function DealerDashboard() {
  const [storeName, setStoreName] = useState('Minha Loja');
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [pendingSales, setPendingSales] = useState(5);

  useEffect(() => {
    // Aqui você faria uma chamada de API para buscar dados reais
    setTotalVehicles(20); // Exemplo de dado estático
    setPendingSales(3); // Exemplo de dado estático
  }, []);

  return (
    <div className="dealer-dashboard">
      <h1>Painel do Lojista - {storeName}</h1>
      <div className="dashboard-overview">
        <div className="card">
          <h3>Veículos Listados</h3>
          <p>{totalVehicles}</p>
        </div>
        <div className="card">
          <h3>Vendas Pendentes</h3>
          <p>{pendingSales}</p>
        </div>
      </div>
    </div>
  );
}

export default DealerDashboard;
