// src/pages/Home.js

import React, { useState } from 'react'; // Importando useState
import './Home.css';
import aboutImage from './assets/about.jpeg';
import logo from './assets/logo.jpeg';
import modelocaminhao1 from './assets/modelocaminhao1.jpg';
import modelocaminhao2 from './assets/modelocaminhao2.jpg';
import modelocaminhao3 from './assets/modelocaminhao3.jpg';
import modelocaminhao4 from './assets/modelocaminhao4.jpg';
import modelocaminhao5 from './assets/modelocaminhao5.jpg';
import vwLogo from './assets/vw_logo.png';
import scaniaLogo from './assets/scania_logo.png';
import volvoLogo from './assets/volvo_logo.png';
import ivecoLogo from './assets/iveco_logo.png';
import mercedesLogo from './assets/mercedes_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faSearch, faPlusCircle, faHandHoldingUsd, faShieldAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';  // Importação do Header

// Dados dos veículos (exemplo)
const vehiclesData = [
  { id: 1, brand: 'Mercedes-Benz', model: 'Actros 2546', category: 'preco-justo', image: modelocaminhao1 },
  { id: 2, brand: 'Volvo', model: 'FH 540', category: 'abaixo-do-mercado', image: modelocaminhao2 },
  { id: 3, brand: 'Scania', model: 'R450', category: 'custo-beneficio', image: modelocaminhao3 },
  { id: 4, brand: 'Iveco', model: 'Hi-Way 440', category: 'acima-do-mercado', image: modelocaminhao4 },
  { id: 5, brand: 'Volkswagen', model: 'Constellation 2542', category: 'preco-justo', image: modelocaminhao5 },
];

// Opções de filtro e títulos
const filters = {
  'preco-justo': 'Veículos com Preços Justos',
  'abaixo-do-mercado': 'Veículos Abaixo do Preço do Mercado',
  'custo-beneficio': 'Veículos com Maior Custo Benefício',
  'acima-do-mercado': 'Veículos Acima do Preço do Mercado',
};

// Dados das categorias
const categories = [
  { id: 1, name: 'Carros Elétricos', image: modelocaminhao1 },
  { id: 2, name: 'Hatches', image: modelocaminhao2 },
  { id: 3, name: 'Picapes', image: modelocaminhao3 },
  { id: 4, name: 'Sedans', image: modelocaminhao4 },
];

const vehicles = [
  { id: 1, name: 'Mercedes-Benz', image: modelocaminhao1 },
  { id: 2, name: 'Volvo', image: modelocaminhao2 },
  { id: 3, name: 'Scania', image: modelocaminhao3 },
  { id: 4, name: 'Iveco', image: modelocaminhao4 }, 
  { id: 5, name: 'Actros', image: modelocaminhao5 },
];

const brands = [
  { id: 1, name: 'Volkswagen', image: vwLogo },
  { id: 2, name: 'Scania', image: scaniaLogo },
  { id: 3, name: 'Volvo', image: volvoLogo },
  { id: 4, name: 'Iveco', image: ivecoLogo },
  { id: 5, name: 'Mercedes-Benz', image: mercedesLogo },
];

function Home() {
  const [selectedFilter, setSelectedFilter] = useState('preco-justo'); // Estado inicial do filtro
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Veículo selecionado

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const brandSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVehicle(null);
    setIsModalOpen(false);
  };

  const filteredVehicles = vehiclesData.filter(vehicle => vehicle.category === selectedFilter);
  return (
    <div className="home-container">
      <Header />  {/* Componente Header importado */}

      {/* Categorias e Banner */}
      <div className="search-section">
        <div className="search-categories">
          <button className="active-category">Comprar carros</button>
          <button>Máquinas pesadas</button>
          <button>Quero vender</button>
          <button>Quero financiar</button>
        </div>

        <div className="banner">
          <div className="search-bar-container">
            <div className="search-options">
              <button className="active-option">Todos</button>
              <button>Novos</button>
              <button>Usados</button>
            </div>

            <div className="search-input-wrapper">
              <div className="search-input">
                <input type="text" placeholder="Digite marca ou modelo do veículo" />
                <button className="search-button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
              <button className="offer-button">VER OFERTAS (6)</button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider de Veículos */}
      <section className="vehicle-slider">
        <h2>Novos veículos na WebAuto</h2>
        <p>Os mais recentes</p>
        <Slider {...sliderSettings}>
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <img src={vehicle.image} alt={vehicle.name} />
              <div className="vehicle-info">
                <h3>{vehicle.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </section>


      {/* Slider de Marcas */}
      <section className="brand-slider">
        <h2>Marcas Trabalhadas</h2>
        <Slider {...brandSliderSettings}>
          {brands.map(brand => (
            <div key={brand.id} className="brand-card">
              <img src={brand.image} alt={brand.name} />
            </div>
          ))}
        </Slider>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={aboutImage} alt="Sobre o WebAuto" />
          </div>
          <div className="about-text">
            <h2>Quem Somos</h2>
            <h3>Simplificando o Mercado Automotivo</h3>
            <p>
              O <strong>WebAuto</strong> nasceu para ser a solução completa em compra, venda e 
              financiamento de veículos e equipamentos pesados. Com uma plataforma inovadora, 
              conectamos compradores e vendedores em um ambiente seguro, simplificando todo o processo.
            </p>
            <p>
              Valorizamos a transparência e a confiança, oferecendo ferramentas que garantem 
              negociações sem riscos e asseguram veículos vistoriados. Cada transação é acompanhada 
              por relatórios detalhados e opções de financiamento personalizadas, proporcionando 
              a melhor experiência possível.
            </p>
            <p>
              Seja na compra de um carro novo ou na venda de um veículo usado, nossa missão é 
              tornar o processo rápido, prático e seguro, com suporte dedicado em cada etapa.
            </p>
            <button className="learn-more-button">
              <FontAwesomeIcon icon={faPlusCircle} /> Saiba mais
            </button>
          </div>
        </div>
      </section>

            {/* Categorias */}
            <section className="categories-section">
            <h2>Categorias</h2>
              <div className="categories-container">
                {categories.map(category => (
                  <div key={category.id} className="category-card">
                    <img src={category.image} alt={category.name} />
                    <div className="category-info">
                      <h3>{category.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
      {/* Seção de Veículos */}
      <section className="vehicle-section">
        <div className="section-header">
          <h2>{filters[selectedFilter]}</h2>
          <div className="header-decoration">
            <div className="red-stripe"></div>
            <div className="black-stripe"></div>
          </div>
        </div>

      {/* Filtro de Veículos */}
      <div className="filter-section">
        {Object.keys(filters).map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => handleFilterChange(filter)}
          >
            <span>{filters[filter]}</span> {/* Usando <span> para manter o texto visível */}
          </button>
        ))}
      </div>


        {/* Grid de Veículos */}
        <div className="vehicle-grid">
          {filteredVehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
          <button className="vehicle-description-btn" onClick={() => openModal(vehicle)}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
          <img src={vehicle.image} alt={vehicle.model} />
          <div className="vehicle-info">
            <p>{vehicle.brand}</p>
            <h3>{vehicle.model}</h3>
          </div>
        </div>
          ))}
        </div>
        <button className="see-more-btn">Ver Mais</button>
      </section>

            {/* Modal */}
            {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-btn" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img src={selectedVehicle.image} alt={selectedVehicle.model} />
            <h2>{selectedVehicle.brand}</h2>
            <h3>{selectedVehicle.model}</h3>
            <p>{selectedVehicle.description}</p>
          </div>
        </div>
      )}

      {/*Serviços*/}
      <section className="services-section">
        <div className="services-header">
          <h2>Os nossos serviços</h2>
          <p>TEMOS VÁRIAS SOLUÇÕES</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <img src="/assets/intermediacao.jpg" alt="Intermediação de Crédito" />
            <div className="service-content">
              <FontAwesomeIcon icon={faHandHoldingUsd} className="service-icon" />
              <h3>Intermediação de Crédito</h3>
            </div>
          </div>

          <div className="service-card">
            <img src="/assets/consultoria.jpg" alt="Consultoria Automóvel" />
            <div className="service-content">
              <FontAwesomeIcon icon={faQuestionCircle} className="service-icon" />
              <h3>Financiamento 100% online</h3>
            </div>
          </div>

          <div className="service-card">
            <img src="/assets/garantia.jpg" alt="Garantia" />
            <div className="service-content">
              <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
              <h3>Garantia</h3>
            </div>
          </div>
        </div>
      </section>
{/* Footer */}
<footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <img src={logo} alt="WebAuto Logo" />
    </div>

    <div className="footer-links">
      <h3>Links Rápidos</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Serviços</Link></li>
        <li><Link to="/about">Sobre Nós</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h3>Contato</h3>
      <p>Telefone: (41) 98765-4321</p>
      <p>Email: contato@webauto.com</p>
      <p>Endereço: Avenida Abcdefgh, 1234, Curitiba - PR</p>
    </div>

    <div className="footer-social">
      <h3>Siga-nos</h3>
      <div className="social-icons">
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>

    <div className="footer-newsletter">
      <h3>Assine nossa Newsletter</h3>
      <form className="newsletter-form">
        <input type="email" placeholder="Seu email" required />
        <button type="submit">Inscrever-se</button>
      </form>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2024 WebAuto. Todos os direitos reservados.</p>
  </div>
</footer>


    </div>
  );
}

export default Home;