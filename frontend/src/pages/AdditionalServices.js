// src/pages/AdditionalServices.js

import React from 'react';
import Header from '../components/Header'; // Incluindo o Header
import Footer from '../components/Footer'; // Incluindo o Footer
import './AdditionalServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCarCrash, faTools } from '@fortawesome/free-solid-svg-icons';

function AdditionalServices() {
  return (
    <div className="additional-services-container">
      <Header /> {/* Header da página */}

      <div className="additional-services-content">
        <h1>Serviços Adicionais</h1>
        <p>
          Na WebAuto, oferecemos serviços adicionais para garantir sua segurança e tranquilidade
          durante e após a compra do seu veículo. Explore as opções abaixo para encontrar
          o que melhor atende às suas necessidades.
        </p>

        <div className="services-grid2">
          {/* Serviço de Seguro */}
          <div className="service-card2">
            <FontAwesomeIcon icon={faShieldAlt} className="service-icon2" />
            <h2>Seguro Completo</h2>
            <p>Proteja seu veículo contra acidentes, roubo, danos e muito mais. O seguro completo oferece cobertura total para garantir sua tranquilidade.</p>
            <button className="service-button2">Saiba Mais</button>
          </div>

          {/* Serviço de Extensão de Garantia */}
          <div className="service-card2">
            <FontAwesomeIcon icon={faTools} className="service-icon2" />
            <h2>Extensão de Garantia</h2>
            <p>Prolongue a garantia do seu veículo e evite despesas inesperadas. A extensão de garantia cobre reparos adicionais além da garantia original.</p>
            <button className="service-button2">Saiba Mais</button>
          </div>

          {/* Serviço de Assistência em Caso de Colisões */}
          <div className="service-card2">
            <FontAwesomeIcon icon={faCarCrash} className="service-icon2" />
            <h2>Assistência em Colisões</h2>
            <p>Serviço de assistência rápida em caso de acidentes. Tenha suporte para emergências e atendimento 24 horas.</p>
            <button className="service-button2">Saiba Mais</button>
          </div>
        </div>

        <div className="contact-section">
          <h3>Interessado em algum serviço?</h3>
          <p>Entre em contato para saber mais e receber uma cotação personalizada.</p>
          <button className="contact-button">Solicitar Mais Informações</button>
        </div>
      </div>

      <Footer /> {/* Footer da página */}
    </div>
  );
}

export default AdditionalServices;
