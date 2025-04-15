
import React, { useState } from 'react';
import axios from 'axios';

function VehicleForm({ fetchVehicles }) {
  const [vehicle, setVehicle] = useState({
    type: '',
    model: '',
    price: '',
    year: ''
  });

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pega o token JWT armazenado no localStorage após o login
    const token = localStorage.getItem('token');

    // Enviar os dados para o back-end via POST com o token JWT no cabeçalho
    axios.post('http://srv633415.hstgr.cloud:3000/vehicles', vehicle, {
      headers: {
        Authorization: `Bearer ${token}`  // Inclui o token JWT no cabeçalho
      }
    })
      .then(response => {
        alert('Veículo cadastrado com sucesso!');
        setVehicle({ type: '', model: '', price: '', year: '' });  // Limpa o formulário
        fetchVehicles();  // Atualizar a lista de veículos após o cadastro
      })
      .catch(error => {
        console.error('Erro ao cadastrar veículo:', error);
        alert('Erro ao cadastrar o veículo, tente novamente.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  );
}

export default VehicleForm;