// src/pages/ForgotPassword.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ForgotPassword.css'; 
import logo from './assets/logo.jpeg'; // Ajuste o caminho, se necessário.
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio de e-mail
    alert(`Instruções para redefinição de senha enviadas para: ${email}`);
    setEmail('');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <div className="logo-container">
          <img src={logo} alt="Logo WebAuto" className="logo" />
        </div>
        <h2>Recuperar Senha</h2>
        <p>Insira seu e-mail cadastrado e enviaremos instruções para redefinir sua senha.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Enviar Instruções
          </button>
        </form>

        <div className="footer">
          <p><Link to="/">Voltar ao Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
