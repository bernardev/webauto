// src/pages/ManageVehicles.js

import React, { useState } from 'react';
import './ManageVehicles.css';

function ManageVehicles() {
  // Dados de exemplo para os veículos
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      type: 'Carro',
      model: 'Honda Civic',
      price: 'R$ 80.000',
      year: 2020,
      status: 'disponível',
    },
    {
      id: 2,
      type: 'Caminhão',
      model: 'Mercedes-Benz Actros',
      price: 'R$ 200.000',
      year: 2018,
      status: 'em negociação',
    },
    {
      id: 3,
      type: 'Moto',
      model: 'Yamaha MT-07',
      price: 'R$ 35.000',
      year: 2021,
      status: 'vendido',
    },
  ]);

  const [filter, setFilter] = useState(''); // Filtro de status

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Função para filtrar veículos por status
  const filteredVehicles = vehicles.filter((vehicle) =>
    filter ? vehicle.status === filter : true
  );

  const handleEdit = (vehicleId) => {
    alert(`Editar veículo com ID: ${vehicleId}`);
  };

  const handleApprove = (vehicleId) => {
    alert(`Aprovar veículo com ID: ${vehicleId}`);
  };

  const handleReject = (vehicleId) => {
    alert(`Rejeitar veículo com ID: ${vehicleId}`);
  };

  const handleRemove = (vehicleId) => {
    const confirmed = window.confirm(`Tem certeza que deseja remover o veículo com ID: ${vehicleId}?`);
    if (confirmed) {
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== vehicleId));
    }
  };

  return (
    <div className="manage-vehicles">
      <h1>Gerenciamento de Veículos</h1>

      <div className="filter-section">
        <label htmlFor="statusFilter">Filtrar por status:</label>
        <select
          id="statusFilter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">Todos</option>
          <option value="disponível">Disponível</option>
          <option value="em negociação">Em Negociação</option>
          <option value="vendido">Vendido</option>
        </select>
      </div>

      <table className="vehicles-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Modelo</th>
            <th>Preço</th>
            <th>Ano</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredVehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.type}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.price}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.status}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(vehicle.id)}>Editar</button>
                {vehicle.status === 'disponível' && (
                  <>
                    <button className="approve-button" onClick={() => handleApprove(vehicle.id)}>Aprovar</button>
                    <button className="reject-button" onClick={() => handleReject(vehicle.id)}>Rejeitar</button>
                  </>
                )}
                <button className="remove-button" onClick={() => handleRemove(vehicle.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageVehicles;
