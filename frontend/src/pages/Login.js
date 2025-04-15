// src/pages/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import logo from './assets/logo.jpeg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Base URL da API em produção
  const apiBaseURL = "http://srv633415.hstgr.cloud:3999/webauto/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envia a requisição POST para a API de login
      const response = await axios.post(`${apiBaseURL}/login`, { username, password });

      // Supondo que a resposta inclua o token e o tipo de usuário
      const { token, userType } = response.data;

      // Armazenar token e userType no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);

      alert('Login bem-sucedido!');

      // Redireciona com base no tipo de usuário
      if (userType === 'admin') {
        navigate('/admin/dashboard'); // Redireciona para o dashboard do admin
      } else {
        navigate('/'); // Redireciona para a Home para outros tipos de usuários
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);

      // Exibe mensagem de erro personalizada
      if (error.response && error.response.status === 401) {
        alert('Credenciais inválidas. Verifique seu username e senha.');
      } else if (error.response && error.response.status === 500) {
        alert('Erro interno no servidor. Tente novamente mais tarde.');
      } else {
        alert('Falha no login. Verifique sua conexão e tente novamente.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="login-logo" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field2">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username"
              required 
            />
          </div>
          <div className="input-field2">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password"
              required 
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        {/* Botão visual do Google Login com ícone */}
        <button className="google-login-button">
          <FontAwesomeIcon icon={faGoogle} className="google-icon" /> Continuar com Google
        </button>
        <div className="login-options">
          <p><a href="/register">Registrar-se</a> | <a href="/forgot-password">Esqueceu a senha?</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;