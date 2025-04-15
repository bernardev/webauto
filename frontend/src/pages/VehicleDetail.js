// src/pages/VehicleDetail.js

import React, { useState } from 'react';
import Header from '../components/Header'; // Importando o Header
import Footer from '../components/Footer'; // Importando o Footer
import './VehicleDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faExchangeAlt, faCalendarAlt, faGasPump, faCogs, faRoad, faCar, faEnvelope, faPhone, faCheckCircle, faShieldAlt, faCarSide, faCouch, faMusic, faInfoCircle  } from '@fortawesome/free-solid-svg-icons';
import bannerImage from './assets/banner-trucks.jpg'; // Importando a imagem de exemplo

// Dados de exemplo para visualizar a página
const vehicle = {
    brand: 'Mercedes-Benz',
    model: 'ACTROS 2546',
    year: 2018,
    price: 'R$390.000,00',
    km: '512.000 km',
    transmission: 'Automático',
    fuel: 'Diesel',
    condition: 'Semi novo',
    color: 'Cinza',
    exchangeAccepted: 'Sim',
    location: 'Curitiba - Paraná',
    images: [
      bannerImage, // Usando a imagem importada para o modelo
      'https://via.placeholder.com/150', // Miniaturas
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    observations: [
        "Aceitamos Retomas: Avaliação online super rápida e prática, sem complicações!",
        "Financiamento desde 305,37 €/mês: Pré-aprovação online em minutos!",
        "Entrega Gratuita: Levamos o seu carro à sua porta sem custos adicionais (Portugal Continental).",
        "GARANTIA C/Assistência em Viagem em toda a Europa (Extensível a 36 Meses).",
        "Viatura com livro de revisões completo na BMW. Repleta de extras, incluindo:",
        "- Alarme",
        "- Ar Condicionado Automático e Individual",
        "- Estofos em Pele/ Tecido Desportivos",
        "- Espelhos Retrovisores C/Recolha Automática",
        "- Comfort Access - Easy Open/Easy Close - Porta Bagageira Automática",
        "- Cruise Control C/Função de Travagem",
        "- Faróis Full LED",
        "- GPS",
        "- Pack de Iluminação Interior/Exterior",
        "- Sistema de Aviso Sinal De Trânsito",
        "- Sistema de Chamada de Emergência Inteligente",
        "- Teto de Abrir Panorâmico",
        "- Volante em Pele Desportivo Multifunções",
        "* Consulte as condições de financiamento no nosso site.",
        "* Webauto.pt é Intermediário de Crédito Autorizado P/ Banco de Portugal a Título Acessório C/ N de Registo 0003998.",
        "* A informação disponibilizada não dispensa a sua confirmação, nem poderá ser considerada vinculativa. Este anúncio foi publicado por rotina informática, todos os dados carecem de confirmação junto do vendedor."
      ],
    seller: {
      name: 'Concessionária Exemplo',
      contact: '41 98765-4321',
      email: 'vendas@concessionaria.com.br',
    },
};

function VehicleDetail() { 
    const [entryValue, setEntryValue] = useState(50000);
    const [financingValue, setFinancingValue] = useState(340000);
    const [rate, setRate] = useState(0.02);
    const [term, setTerm] = useState(48);
    const [installment, setInstallment] = useState(null);

    const calculateInstallment = () => {
        const PV = financingValue - entryValue;
        const i = rate;
        const n = term;
        const calculatedInstallment = PV * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        setInstallment(calculatedInstallment.toFixed(2));
    };

    return (
        <div className="vehicle-detail-container">
            <Header />

            <div className="vehicle-detail-header">
                <h1>{vehicle.brand} {vehicle.model}</h1>
                <p className="vehicle-detail-price">{vehicle.price}</p>
            </div>

            <div className="vehicle-detail-content">
                <div className="vehicle-images">
                    <img src={bannerImage} alt={`${vehicle.brand} ${vehicle.model}`} className="main-image" />
                    <div className="thumbnail-images">
                        {vehicle.images.map((image, index) => (
                            <img key={index} src={image} alt={`Thumbnail ${index}`} className="thumbnail" />
                        ))}
                    </div>
                </div>

                <div className="vehicle-info">
                    <h2>Detalhes</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faCalendarAlt} /> Ano: {vehicle.year}</li>
                        <li><FontAwesomeIcon icon={faRoad} /> Quilometragem: {vehicle.km}</li>
                        <li><FontAwesomeIcon icon={faCogs} /> Câmbio: {vehicle.transmission}</li>
                        <li><FontAwesomeIcon icon={faGasPump} /> Combustível: {vehicle.fuel}</li>
                        <li><FontAwesomeIcon icon={faExchangeAlt} /> Aceita Troca: {vehicle.exchangeAccepted}</li>
                        <li><FontAwesomeIcon icon={faCar} /> Cor: {vehicle.color}</li>
                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Localização: {vehicle.location}</li>
                    </ul>
                </div>

                <div className="seller-contact">
                    <h2>Informações do Vendedor</h2>
                    <p><strong>Nome:</strong> {vehicle.seller.name}</p>
                    <p><FontAwesomeIcon icon={faPhone} /> {vehicle.seller.contact}</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> {vehicle.seller.email}</p>
                    <div className="action-buttons">
                        <button className="btn visit">Agendar visita</button>
                        <button className="btn contact">Entrar em contato</button>
                    </div>
                </div>
            </div>

            <div className="vehicle-specifications">
                <div className="specification-section">
                    <h2><FontAwesomeIcon icon={faShieldAlt} /> Segurança & Desempenho</h2>
                    <ul className="specification-list">
                        <li><FontAwesomeIcon icon={faCheckCircle} /> ABS</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Ajuda ao parqueamento</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Aviso de velocidade</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Diferentes Modos de Condução</li>
                    </ul>
                </div>

                <div className="specification-section">
                    <h2><FontAwesomeIcon icon={faCouch} /> Equipamento Interior</h2>
                    <ul className="specification-list">
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Estofos em ¼ pele</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Bancos Desportivos</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Não fumador</li>
                    </ul>
                </div>

                <div className="specification-section">
                    <h2><FontAwesomeIcon icon={faCarSide} /> Equipamento Exterior</h2>
                    <ul className="specification-list">
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Full Led</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Faróis de Nevoeiro</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Jantes de Liga Leve</li>
                    </ul>
                </div>

                <div className="specification-section">
                    <h2><FontAwesomeIcon icon={faMusic} /> Conforto & Multimédia</h2>
                    <ul className="specification-list">
                        <li><FontAwesomeIcon icon={faCheckCircle} /> A/C Bancos Traseiros</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Ecrã Consola Central</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Kit de Telefone Mãos Livres</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Wifi</li>
                    </ul>
                </div>
            </div>

            <div className="vehicle-observations">
                <h2><FontAwesomeIcon icon={faInfoCircle} /> Observações</h2>
                <ul>
                    {vehicle.observations.map((observation, index) => (
                        <li key={index}>{observation}</li>
                    ))}
                </ul>
            </div>

            <div className="vehicle-financing">
                <h2>Simule seu Financiamento</h2>
                <form className="financing-form">
                    <div className="financing-grid">
                        <div className="financing-input-group">
                            <label>Valor de Entrada</label>
                            <input type="number" value={entryValue} onChange={(e) => setEntryValue(Number(e.target.value))} />
                        </div>
                        <div className="financing-input-group">
                            <label>Valor Financiado</label>
                            <input type="number" value={financingValue} onChange={(e) => setFinancingValue(Number(e.target.value))} />
                        </div>
                        <div className="financing-input-group">
                            <label>Taxa de Juros (% ao mês)</label>
                            <input type="number" value={rate * 100} onChange={(e) => setRate(Number(e.target.value) / 100)} />
                        </div>
                        <div className="financing-input-group">
                            <label>Prazo (meses)</label>
                            <input type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} />
                        </div>
                    </div>
                    <button type="button" className="btn financing-submit" onClick={calculateInstallment}>Calcular Parcela</button>
                    {installment && <p>Valor da Parcela: R$ {installment}</p>}
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default VehicleDetail;
