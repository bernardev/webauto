// src/pages/ReportsAndStatistics.js

import React, { useState } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import './ReportsAndStatistics.css';

// Registrando os elementos e escalas necessários
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

function ReportsAndStatistics() {
  const [financialData] = useState({
    transactions: [1500, 2300, 1800, 2200, 2600, 3000],
    sales: [10, 15, 12, 18, 14, 20],
    fees: [200, 250, 220, 280, 300, 350]
  });

  const [activityData] = useState({
    accesses: [500, 450, 550, 600, 580, 620],
    interactions: [300, 320, 310, 330, 350, 370],
    registrations: [50, 60, 55, 70, 65, 80]
  });

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <div className="reports-and-statistics">
      <h1>Relatórios e Estatísticas</h1>

      {/* Gráfico de Linhas para Relatório Financeiro */}
      <section className="financial-reports">
        <h2>Relatórios Financeiros</h2>
        <div className="chart-container">
          <Line
            data={{
              labels: months,
              datasets: [
                {
                  label: 'Transações (R$)',
                  data: financialData.transactions,
                  borderColor: '#3b82f6',
                  fill: false
                },
                {
                  label: 'Vendas',
                  data: financialData.sales,
                  borderColor: '#10b981',
                  fill: false
                },
                {
                  label: 'Taxas de Serviço (R$)',
                  data: financialData.fees,
                  borderColor: '#f97316',
                  fill: false
                }
              ]
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'bottom' }
              }
            }}
          />
        </div>
      </section>

      {/* Gráfico de Barras para Acessos e Interações */}
      <section className="activity-reports">
        <h2>Relatório de Atividade</h2>
        <div className="chart-container">
          <Bar
            data={{
              labels: months,
              datasets: [
                {
                  label: 'Acessos',
                  data: activityData.accesses,
                  backgroundColor: '#3b82f6'
                },
                {
                  label: 'Interações',
                  data: activityData.interactions,
                  backgroundColor: '#10b981'
                },
                {
                  label: 'Novos Registros',
                  data: activityData.registrations,
                  backgroundColor: '#f97316'
                }
              ]
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'bottom' }
              }
            }}
          />
        </div>
      </section>

      {/* Gráfico de Rosca para Proporções de Vendas */}
      <section className="sales-ratio">
        <h2>Proporção de Vendas</h2>
        <div className="chart-container">
          <Doughnut
            data={{
              labels: ['Veículos', 'Serviços Adicionais', 'Financiamentos'],
              datasets: [
                {
                  data: [55, 25, 20],
                  backgroundColor: ['#3b82f6', '#10b981', '#f97316']
                }
              ]
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'bottom' }
              }
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default ReportsAndStatistics;
