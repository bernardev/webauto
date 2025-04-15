// src/pages/Register.js

import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import './Register.css'; 
import logo from './assets/logo.jpeg';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'user' // Default to "user"
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      // Envia os dados do usuário para o backend
      await axios.post('http://srv633415.hstgr.cloud:3000/register', {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        userType: formData.userType // Inclui o userType no envio
      });
      alert('Conta criada com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar:', error);
      alert('Falha no registro.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo-container">
          <img src={logo} alt="Logo WebAuto" className="logo" />
        </div>

        <div className="register-content">
          <div className="social-section">
            <h3>Cadastre-se com suas redes sociais</h3>
            <button className="social-button facebook">
              <FontAwesomeIcon icon={faFacebook} /> Continuar com Facebook
            </button>
            <button className="social-button google">
              <FontAwesomeIcon icon={faGoogle} /> Continuar com Google
            </button>
            <button className="social-button apple">
              <FontAwesomeIcon icon={faApple} /> Continuar com Apple
            </button>
          </div>

          <div className="divider">ou</div>

          <div className="email-section">
            <h3>Crie uma conta com seu e-mail</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <FontAwesomeIcon icon={faUser} />
                <input
                  type="text"
                  placeholder="Nome completo"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-container">
                <FontAwesomeIcon icon={faPhone} />
                <input
                  type="text"
                  placeholder="Telefone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Crie uma senha"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-password"
                />
              </div>

              <div className="input-container">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirme sua senha"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="toggle-password"
                />
              </div>

              {/* Campo para selecionar o tipo de usuário */}
              <div className="input-container">
                <label>Tipo de Usuário:</label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                >
                  <option value="user">Usuário</option>
                  <option value="lojista">Lojista</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <button type="submit" className="register-button">
                Criar Conta
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <p>Já tem uma conta? <a href="/login">Entrar</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
