// src/pages/ManageUsers.js

import React, { useEffect, useState } from 'react';
import './ManageUsers.css';

function ManageUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@gmail.com',
      phone: '(11) 91234-5678',
      role: 'cliente',
    },
    {
      id: 2,
      name: 'Maria Oliveira',
      email: 'maria.oliveira@gmail.com',
      phone: '(11) 98765-4321',
      role: 'lojista',
    },
    {
      id: 3,
      name: 'Carlos Souza',
      email: 'carlos.souza@gmail.com',
      phone: '(21) 91234-5678',
      role: 'admin',
    },
  ]);
  
  const [filter, setFilter] = useState(''); // Para filtrar usuários por categoria (e.g., clientes, lojistas)

  useEffect(() => {
    // Chama a função para buscar usuários ao carregar a página
    // Caso deseje substituir os dados de exemplo pelo fetch da API, descomente abaixo:
    // fetchUsers(); 
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://srv633415.hstgr.cloud:3000/admin/users'); // Altere a URL conforme necessário
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    filter ? user.role === filter : true
  );

  return (
    <div className="manage-users">
      <h1>Gerenciamento de Usuários</h1>

      <div className="filter-section">
        <label htmlFor="roleFilter">Filtrar por tipo de usuário:</label>
        <select
          id="roleFilter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">Todos</option>
          <option value="cliente">Clientes</option>
          <option value="lojista">Lojistas</option>
          <option value="admin">Administradores</option>
        </select>
      </div>

      <table className="users-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>
                <button className="edit-button">Editar</button>
                <button className="delete-button">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;
