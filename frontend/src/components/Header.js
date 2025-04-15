// src/components/Header.js

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle, faShoppingCart, faBars, faHome, faTools, faEnvelope, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../pages/assets/logo.jpeg';
import profileIcon from '../pages/assets/default-profile.png'; // Imagem de perfil padrão
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserType = localStorage.getItem('userType');

    if (token && storedUserType) {
      setIsLoggedIn(true);
      setUserType(storedUserType);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
    setUserType('');
    navigate('/login');
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" className="logo-wrapper">
          <img src={logo} alt="WebAuto Logo" className="logo" />
          <div className="black-stripe2"></div>
        </Link>
      </div>

      {/* Menu de Navegação */}
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="header-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/services">
              <FontAwesomeIcon icon={faTools} className="header-icon" />
              Serviços
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
              Contato
            </Link>
          </li>
          <li>
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch} className="header-icon" />
              Pesquisar
            </Link>
          </li>

          {/* Opções de menu para Administradores e Lojistas */}
          {userType === 'admin' && (
            <li>
              <Link to="/admin/dashboard">
                <FontAwesomeIcon icon={faTools} className="header-icon" />
                Painel Admin
              </Link>
            </li>
          )}
          {userType === 'lojista' && (
            <li>
              <Link to="/dealer/dashboard">
                <FontAwesomeIcon icon={faTools} className="header-icon" />
                Painel Lojista
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Ícones de Acesso Rápido */}
      <div className="header-icons">
        {isLoggedIn ? (
          <div className="user-section">
            <img 
              src={profileIcon} 
              alt={`${userType} Profile`} 
              className="profile-icon" 
              onClick={toggleDropdown} 
            />
            <span>{userType === 'admin' ? 'Admin' : userType === 'lojista' ? 'Lojista' : 'Usuário'}</span>

            {/* Menu dropdown para opções do usuário */}
            {showDropdown && (
              <div className="dropdown-menu">
                {userType === 'admin' ? (
                  <>
                    <Link to="/admin/dashboard">Painel de Admin</Link>
                    <Link to="/admin/users">Gerenciamento Usuários</Link>
                    <Link to="/admin/manage-vehicles">Gerenciamento Veículos</Link>
                    <Link to="/admin/manage-financing">Gerenciamento Financiamento</Link>
                    <Link to="/admin/reports">Estatísticas</Link>
                  </>
                ) : userType === 'lojista' ? (
                  <>
                    <Link to="/dealer/dashboard">Painel do Lojista</Link>
                    <Link to="/dealer/manage-vehicles">Gerenciamento Veículos</Link>
                    <Link to="/dealer/sales-reports">Relatórios de Vendas</Link>
                  </>
                ) : (
                  <Link to="/profile">Meu Perfil</Link>
                )}
                <button onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="icon-link">
            <FontAwesomeIcon icon={faUser} className="header-icon" />
            <span>Entrar</span>
          </Link>
        )}
        <Link to="/contact" className="icon-link">
          <FontAwesomeIcon icon={faQuestionCircle} className="header-icon" />
          <span>Ajuda</span>
        </Link>
        <Link to="/cart" className="icon-link">
          <FontAwesomeIcon icon={faShoppingCart} className="header-icon" />
          <span>Carrinho</span>
        </Link>
      </div>

      {/* Botão de Menu para Dispositivos Móveis */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}

export default Header;
