// src/pages/SalesReports.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import './SalesReports.css';

function SalesReports() {
  const salesData = [5000, 7000, 8000, 7500, 9000];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  return (
    <div className="sales-reports">
      <h1>Relatórios de Vendas</h1>
      <div className="chart-container">
        <Line
          data={{
            labels: months,
            datasets: [
              {
                label: 'Vendas (R$)',
                data: salesData,
                borderColor: '#3b82f6',
                fill: false,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'bottom' },
            },
          }}
        />
      </div>
    </div>
  );
}

export default SalesReports;
