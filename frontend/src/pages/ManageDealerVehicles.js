// src/pages/ManageDealerVehicles.js

import React, { useState, useEffect } from 'react';
import './ManageDealerVehicles.css';

function ManageDealerVehicles() {
  const [vehicles, setVehicles] = useState([]);
  
  useEffect(() => {
    // API para obter os veículos
    setVehicles([
      { id: 1, model: 'Carro A', status: 'disponível' },
      { id: 2, model: 'Carro B', status: 'em negociação' },
    ]);
  }, []);

  const handleAddVehicle = () => {
    // Lógica para adicionar um veículo
    alert('Veículo adicionado');
  };

  const handleEditVehicle = (id) => {
    // Lógica para editar um veículo
    alert(`Editar veículo com ID: ${id}`);
  };

  const handleDeleteVehicle = (id) => {
    // Lógica para excluir um veículo
    alert(`Excluir veículo com ID: ${id}`);
  };

  return (
    <div className="manage-dealer-vehicles">
      <h1>Gerenciamento de Veículos</h1>
      <button onClick={handleAddVehicle}>Adicionar Novo Veículo</button>
      <table className="vehicles-table">
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.model}</td>
              <td>{vehicle.status}</td>
              <td>
                <button onClick={() => handleEditVehicle(vehicle.id)}>Editar</button>
                <button onClick={() => handleDeleteVehicle(vehicle.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageDealerVehicles;
