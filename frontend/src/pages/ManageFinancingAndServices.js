// src/pages/ManageFinancingAndServices.js

import React, { useState } from 'react';
import './ManageFinancingAndServices.css';

function ManageFinancingAndServices() {
  // Dados de exemplo para solicitações de financiamento e serviços adicionais
  const [financingRequests, setFinancingRequests] = useState([
    { id: 1, user: 'João Silva', amount: 'R$ 50.000', status: 'pendente' },
    { id: 2, user: 'Maria Oliveira', amount: 'R$ 80.000', status: 'pendente' },
    { id: 3, user: 'Carlos Santos', amount: 'R$ 100.000', status: 'aprovado' },
  ]);

  const [additionalServices, setAdditionalServices] = useState([
    { id: 1, user: 'Ana Costa', service: 'Seguro', status: 'pendente' },
    { id: 2, user: 'Paulo Silva', service: 'Garantia Estendida', status: 'pendente' },
    { id: 3, user: 'Cláudia Martins', service: 'Seguro', status: 'aprovado' },
  ]);

  const handleApproveFinancing = (id) => {
    setFinancingRequests(financingRequests.map(request =>
      request.id === id ? { ...request, status: 'aprovado' } : request
    ));
    alert(`Financiamento ID ${id} aprovado.`);
  };

  const handleRejectFinancing = (id) => {
    setFinancingRequests(financingRequests.map(request =>
      request.id === id ? { ...request, status: 'rejeitado' } : request
    ));
    alert(`Financiamento ID ${id} rejeitado.`);
  };

  const handleApproveService = (id) => {
    setAdditionalServices(additionalServices.map(service =>
      service.id === id ? { ...service, status: 'aprovado' } : service
    ));
    alert(`Serviço ID ${id} aprovado.`);
  };

  const handleRejectService = (id) => {
    setAdditionalServices(additionalServices.map(service =>
      service.id === id ? { ...service, status: 'rejeitado' } : service
    ));
    alert(`Serviço ID ${id} rejeitado.`);
  };

  return (
    <div className="manage-financing-and-services">
      <h1>Gerenciamento de Financiamento e Serviços Adicionais</h1>

      <section className="financing-section">
        <h2>Solicitações de Financiamento</h2>
        <table className="financing-table">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {financingRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.user}</td>
                <td>{request.amount}</td>
                <td>{request.status}</td>
                <td>
                  {request.status === 'pendente' && (
                    <>
                      <button className="approve-button" onClick={() => handleApproveFinancing(request.id)}>Aprovar</button>
                      <button className="reject-button" onClick={() => handleRejectFinancing(request.id)}>Rejeitar</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="services-section">
        <h2>Seguros e Garantias</h2>
        <table className="services-table">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Serviço</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {additionalServices.map((service) => (
              <tr key={service.id}>
                <td>{service.user}</td>
                <td>{service.service}</td>
                <td>{service.status}</td>
                <td>
                  {service.status === 'pendente' && (
                    <>
                      <button className="approve-button" onClick={() => handleApproveService(service.id)}>Aprovar</button>
                      <button className="reject-button" onClick={() => handleRejectService(service.id)}>Rejeitar</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default ManageFinancingAndServices;
