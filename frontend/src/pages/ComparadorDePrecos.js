// src/pages/ComparadorDePrecos.js

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ComparadorDePrecos.css';

import chevrolet from './assets/chevrolet.png';
import volkswagen from './assets/volkswagen.png';
import fiat from './assets/fiat.png';
import honda from './assets/honda.png';
import toyota from './assets/toyota.png';
import hyundai from './assets/hyundai.png';
import ford from './assets/ford.png';
import nissan from './assets/nissan.png';
import renault from './assets/renault.webp';
import jeep from './assets/jeep.png';
import mitsubishi from './assets/mitsubishi.png';
import bmw from './assets/bmw.webp';

function ComparadorDePrecos() {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [km, setKm] = useState('');
  const [estado, setEstado] = useState('');
  const [tipoVeiculo, setTipoVeiculo] = useState('carro');

  const buscarComparacao = () => {
    console.log("Buscando comparação de preço para:");
    console.log({ marca, modelo, ano, km, estado, tipoVeiculo });
  };

  return (
    <div className="comparador-precos-page">
      <Header />
      <div className="comparador-banner">
        <h1>Tabela Fipe e Tabela WebAuto</h1>
        <p>Consulte o preço médio de veículos novos e usados</p>
      </div>

      <div className="comparador-container">
        <div className="comparador-card">
          <h2>Selecione o tipo de veículo</h2>
          <div className="tipo-veiculo">
            <button
              className={`tipo-btn ${tipoVeiculo === 'carro' ? 'active' : ''}`}
              onClick={() => setTipoVeiculo('carro')}
            >
              🚗 Carro
            </button>
            <button
              className={`tipo-btn ${tipoVeiculo === 'moto' ? 'active' : ''}`}
              onClick={() => setTipoVeiculo('moto')}
            >
              🏍️ Moto
            </button>
          </div>
          <div className="filtros">
            <select value={marca} onChange={(e) => setMarca(e.target.value)}>
              <option value="">Selecione a marca</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Fiat">Fiat</option>
              <option value="Honda">Honda</option>
              <option value="Toyota">Toyota</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Ford">Ford</option>
              <option value="Nissan">Nissan</option>
              <option value="Renault">Renault</option>
              <option value="Jeep">Jeep</option>
              <option value="Mitsubishi">Mitsubishi</option>
              <option value="BMW">BMW</option>
            </select>
            <select value={modelo} onChange={(e) => setModelo(e.target.value)}>
              <option value="">Selecione o modelo</option>
              {/* Adicione opções de modelo conforme necessário */}
            </select>
            <select value={ano} onChange={(e) => setAno(e.target.value)}>
              <option value="">Selecione o ano</option>
              {/* Adicione opções de ano conforme necessário */}
            </select>
            <select value={km} onChange={(e) => setKm(e.target.value)}>
              <option value="">Selecione a versão</option>
              {/* Adicione opções de versão conforme necessário */}
            </select>
            <select value={estado} onChange={(e) => setEstado(e.target.value)}>
              <option value="">Selecione o estado</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              {/* Adicione mais estados conforme necessário */}
            </select>
            <button className="consultar-btn" onClick={buscarComparacao}>
              Consultar valor
            </button>
          </div>
        </div>

        <div className="marcas">
          <h2>Consulte carros por marca</h2>
          <div className="marcas-lista">
            {[{src: chevrolet, name: "Chevrolet"},
              {src: volkswagen, name: "Volkswagen"},
              {src: fiat, name: "Fiat"},
              {src: honda, name: "Honda"},
              {src: toyota, name: "Toyota"},
              {src: hyundai, name: "Hyundai"},
              {src: ford, name: "Ford"},
              {src: nissan, name: "Nissan"},
              {src: renault, name: "Renault"},
              {src: jeep, name: "Jeep"},
              {src: mitsubishi, name: "Mitsubishi"},
              {src: bmw, name: "BMW"}].map((brand, index) => (
              <div key={index} className="marca-item">
                <img src={brand.src} alt={brand.name} />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="faq">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-item">O que é a Tabela FIPE?</div>
          <div className="faq-item">Quando surgiu a Tabela FIPE?</div>
          <div className="faq-item">Como a Tabela FIPE funciona?</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ComparadorDePrecos;
