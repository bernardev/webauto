// src/pages/InspectionDelivery.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './InspectionDelivery.css';

function InspectionDelivery() {
  return (
    <div className="inspection-delivery-container">
      <Header />

      {/* Seção de Introdução */}
      <section className="intro-section">
        <h1>Inspeção e Entrega</h1>
        <p>
          Na WebAuto, priorizamos a segurança e tranquilidade dos nossos clientes. 
          Antes de finalizar sua compra, você pode inspecionar o veículo em nossos 
          postos autorizados e garantir que tudo está em perfeito estado.
        </p>
      </section>

      {/* Locais de Inspeção */}
      <section className="locations-section">
        <h2>Locais de Inspeção</h2>
        <p>Confira nossos postos de inspeção autorizados disponíveis:</p>
        <ul className="locations-list">
          <li>
            <strong>Posto Curitiba - PR</strong>
            <p>Endereço: Rua Exemplo, 123 - Centro</p>
            <p>Horário: Seg-Sex, 8h - 18h</p>
          </li>
          <li>
            <strong>Posto São Paulo - SP</strong>
            <p>Endereço: Avenida Exemplo, 456 - Centro</p>
            <p>Horário: Seg-Sex, 8h - 18h</p>
          </li>
          {/* Adicione outros postos conforme necessário */}
        </ul>
      </section>

      {/* Benefícios da Inspeção */}
      <section className="benefits-section">
        <h2>Benefícios da Inspeção</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <p>Tranquilidade na Compra</p>
          </div>
          <div className="benefit-item">
            <p>Garantia de Qualidade</p>
          </div>
          <div className="benefit-item">
            <p>Verificação Completa</p>
          </div>
        </div>
      </section>

      {/* Agendamento de Inspeção */}
      <section className="appointment-section">
        <h2>Agendar Inspeção</h2>
        <p>Preencha o formulário abaixo para agendar sua inspeção:</p>
        <form className="appointment-form">
          <label>Data da Inspeção:</label>
          <input type="date" required />

          <label>Horário:</label>
          <select required>
            <option value="8:00">8:00</option>
            <option value="10:00">10:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
          </select>

          <label>Posto de Inspeção:</label>
          <select required>
            <option value="Curitiba">Curitiba - PR</option>
            <option value="São Paulo">São Paulo - SP</option>
            {/* Adicione outros postos conforme necessário */}
          </select>

          <button type="submit" className="btn appointment-submit">Agendar Inspeção</button>
        </form>
      </section>

      {/* Contato para Suporte */}
      <section className="contact-support-section">
        <h2>Precisa de Ajuda?</h2>
        <p>
          Se você tiver alguma dúvida sobre o processo de inspeção e entrega, 
          entre em contato com nossa equipe de suporte:
        </p>
        <p><strong>Email:</strong> suporte@webauto.com</p>
        <p><strong>Telefone:</strong> (41) 98765-4321</p>
      </section>

      <Footer />
    </div>
  );
}

export default InspectionDelivery;
