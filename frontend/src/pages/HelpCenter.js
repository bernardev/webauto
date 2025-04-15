// src/pages/HelpCenter.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HelpCenter.css';
import { faUser, faList, faShoppingCart, faMoneyBillWave, faShieldAlt, faHandshake, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HelpCenter() {
  return (
    <div className="help-center-page">
      <Header />

      {/* Banner */}
      <div className="help-banner">
        <h1>Bem-vindo à Central de Ajuda WebAuto</h1>
        <p>Tire todas as suas dúvidas ou entre em contato com nossa equipe de suporte</p>
        <div className="search-bar">
            <input type="text" placeholder="Digite sua dúvida..." />
        </div>
      </div>

      {/* Categorias */}
      <section className="categories-section">
        <h2>Sobre o que você precisa de ajuda?</h2>
        <div className="categories-grid">
          <div className="category-card">
            <FontAwesomeIcon icon={faUser} className="category-icon" />
            <h3>Cadastro</h3>
            <p>Como criar e atualizar seu perfil.</p>
          </div>
          <div className="category-card">
            <FontAwesomeIcon icon={faList} className="category-icon" />
            <h3>Anúncios</h3>
            <p>Orientações para publicar e gerenciar seus veículos.</p>
          </div>
          <div className="category-card">
            <FontAwesomeIcon icon={faShoppingCart} className="category-icon" />
            <h3>Compra e Venda</h3>
            <p>Processos de compra e venda de veículos.</p>
          </div>
          <div className="category-card">
            <FontAwesomeIcon icon={faMoneyBillWave} className="category-icon" />
            <h3>Financiamento</h3>
            <p>Opções e processos de financiamento disponíveis.</p>
          </div>
          <div className="category-card">
            <FontAwesomeIcon icon={faShieldAlt} className="category-icon" />
            <h3>Segurança</h3>
            <p>Como manter seus dados e transações seguras.</p>
          </div>
          <div className="category-card">
            <FontAwesomeIcon icon={faHandshake} className="category-icon" />
            <h3>Parcerias</h3>
            <p>Informações sobre nossos parceiros.</p>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="faq-section">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-list">
          <div className="faq-item">O que é a Tabela FIPE?</div>
          <div className="faq-item">Como anunciar um veículo na WebAuto?</div>
          <div className="faq-item">Como funciona o financiamento?</div>
          <div className="faq-item">Como alterar meus dados cadastrais?</div>
          <div className="faq-item">Quais são as medidas de segurança na WebAuto?</div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="contact-form-section">
        <h2>Não encontrou o que procurava?</h2>
        <p>Entre em contato com nosso suporte para ajuda adicional.</p>
        <form className="contact-form">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu email" required />
          <input type="text" placeholder="Assunto" required />
          <textarea placeholder="Descreva sua dúvida" required></textarea>
          <button type="submit" className="submit-btn">Enviar Mensagem</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default HelpCenter;
