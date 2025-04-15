// src/pages/Vehicles.js

import React, { useState } from 'react';
import Header from './components/Header'; // Importando o Header
import Footer from './components/Footer'; // Importando o Footer
import './Vehicles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle, faCheckCircle, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importando Link
import bannerImage from './pages/assets/banner-trucks.jpg';
import vehicleImage from './pages/assets/modelocaminhao1 (2).jpg';

const vehiclesData = [
  { id: 1, brand: 'Mercedes-Benz', model: 'Actros 2546', year: 2018, kilometers: '512,000', transmission: 'Automático', fuel: 'Diesel', price: 'R$390.000,00' },
  { id: 2, brand: 'DAF', model: 'XF 460', year: 2014, kilometers: '638,000', transmission: 'Automático', fuel: 'Diesel', price: 'R$285.000,00' },
  { id: 3, brand: 'Mercedes-Benz', model: 'Actros 2548', year: 2022, kilometers: '143,728', transmission: 'Automático', fuel: 'Diesel', price: 'R$690.000,00' },
  { id: 4, brand: 'Volkswagen', model: 'Constellation 2542', year: 2016, kilometers: '580,000', transmission: 'Automático', fuel: 'Diesel', price: 'R$300.000,00' },
];

function Vehicles() {
  const [vehicles, setVehicles] = useState(vehiclesData);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isTransmissionOpen, setIsTransmissionOpen] = useState(false);
  const [isFuelOpen, setIsFuelOpen] = useState(false);
  const [year, setYear] = useState(2000);
  const [kilometers, setKilometers] = useState(10000);

  return (
    <div className="vehicles-page">
      {/* Header */}
      <Header /> {/* Usando o componente Header */}

      {/* Banner */}
      <div className="banner2">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>

      <div className="content-container">
        {/* Filtro Lateral */}
        <aside className="filter-section2">
          <h3><FontAwesomeIcon icon={faFilter} /> Filtro</h3>

          <div className="filter-option">
            <label>Marca</label>
            <div className="dropdown">
              <input type="text" placeholder="Ex.: Mercedes-Benz" disabled={!isBrandOpen} />
              <FontAwesomeIcon icon={faPlusCircle} className="filter-icon" onClick={() => setIsBrandOpen(!isBrandOpen)} />
              {isBrandOpen && (
                <div className="dropdown-content">
                  <p>Mercedes-Benz</p>
                  <p>DAF</p>
                  <p>Volkswagen</p>
                  {/* Adicione mais opções conforme necessário */}
                </div>
              )}
            </div>
          </div>

          <div className="filter-option">
            <label>Modelo</label>
            <div className="dropdown">
              <input type="text" placeholder="Ex.: Actros" disabled={!isModelOpen} />
              <FontAwesomeIcon icon={faPlusCircle} className="filter-icon" onClick={() => setIsModelOpen(!isModelOpen)} />
              {isModelOpen && (
                <div className="dropdown-content">
                  <p>Actros</p>
                  <p>XF 460</p>
                  {/* Adicione mais opções conforme necessário */}
                </div>
              )}
            </div>
          </div>

          <div className="filter-option">
            <label className="filter-label">Ano</label>
            <input type="range" min="2000" max="2024" value={year} onChange={(e) => setYear(e.target.value)} />
            <div className="range-labels">
              <span>{year}</span>
            </div>
          </div>

          <div className="filter-option">
            <label className="filter-label">Quilometragem</label>
            <input type="range" min="10000" max="350000" step="10000" value={kilometers} onChange={(e) => setKilometers(e.target.value)} />
            <div className="range-labels">
              <span>{kilometers}km</span>
            </div>
          </div>

          <div className="filter-option">
            <label>Câmbio</label>
            <div className="dropdown">
              <select disabled={!isTransmissionOpen}>
                <option>Automático</option>
                <option>Manual</option>
              </select>
              <FontAwesomeIcon icon={faPlusCircle} className="filter-icon" onClick={() => setIsTransmissionOpen(!isTransmissionOpen)} />
            </div>
          </div>

          <div className="filter-option">
            <label>Combustível</label>
            <div className="dropdown">
              <select disabled={!isFuelOpen}>
                <option>Diesel</option>
                <option>Gasolina</option>
                <option>Elétrico</option>
              </select>
              <FontAwesomeIcon icon={faPlusCircle} className="filter-icon" onClick={() => setIsFuelOpen(!isFuelOpen)} />
            </div>
          </div>

          <div className="filter-actions">
            <button className="clear-button"><FontAwesomeIcon icon={faTimesCircle} /> Limpar</button>
            <button className="search-button"><FontAwesomeIcon icon={faCheckCircle} /> Buscar</button>
          </div>
        </aside>

        {/* Cards de Veículos */}
        <main className="vehicles-list">
          {vehicles.map((vehicle) => (
            <Link to="http://localhost:3001/vehicle-test" key={vehicle.id} className="vehicle-card">
              <img src={vehicleImage} alt={vehicle.model} className="vehicle-image" />
              <div className="vehicle-details">
                <h3 className="vehicle-title">{vehicle.brand}</h3>
                <h4 className="vehicle-model">{vehicle.model}</h4>
                <p>Ano: {vehicle.year}</p>
                <p>Quilômetros: {vehicle.kilometers}</p>
                <p>Câmbio: {vehicle.transmission}</p>
                <p>Combustível: {vehicle.fuel}</p>
                <div className="vehicle-price">
                  <button className="more-info-button">
                    <FontAwesomeIcon icon={faPlusCircle} /> Ver mais
                  </button>
                  <span className="price-tag">{vehicle.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>

      {/* Footer */}
      <Footer /> {/* Incluindo o Footer */}
    </div>
  );
}

export default Vehicles;
