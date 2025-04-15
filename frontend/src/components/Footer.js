// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Não se esqueça de criar o arquivo Footer.css para estilização específica
import logo from '../pages/assets/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="WebAuto Logo" />
        </div>

        {/* Links Rápidos */}
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Serviços</Link></li>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-contact">
          <h3>Contato</h3>
          <p>Telefone: (41) 98765-4321</p>
          <p>Email: contato@webauto.com</p>
          <p>Endereço: Avenida Abcdefgh, 1234, Curitiba - PR</p>
        </div>

        {/* Redes Sociais */}
        <div className="footer-social">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Assine nossa Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Seu email" required />
            <button type="submit">Inscrever-se</button>
          </form>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="footer-bottom">
        <p>&copy; 2024 WebAuto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
