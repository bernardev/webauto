// src/pages/UserProfile.js

import React from 'react';
import Header from '../components/Header';  // Importando o Header
import Footer from '../components/Footer';  // Importando o Footer
import './UserProfile.css';

function UserProfile() {
  return (
    <div>
      {/* Header */}
      <Header />

      <div className="profile-container">
        <aside className="sidebar">
          <div className="profile-header">
            <div className="profile-avatar">E</div>
            <h2>Eduardo Bernardes</h2>
            <p>edutiba@gmail.com</p>
          </div>
          <nav className="profile-nav">
            <ul>
              <li>Buscar veículo</li>
              <li>Vender meu veículo</li>
              <li>Meus anúncios</li>
              <li>Chat</li>
              <li>Favoritos</li>
              <li>Alertas</li>
              <li>Produtos</li>
              <li>Financiamento</li>
              <li className="active">Minha conta</li>
              <li>Personalização e dados</li>
              <li>Ajuda</li>
              <li>Sair</li>
            </ul>
          </nav>
        </aside>

        <main className="profile-main">
          <h1>Minha conta</h1>
          <div className="profile-sections">
            <section className="profile-info">
              <h2>Meus dados</h2>
              <form>
                <label>Email*</label>
                <input type="email" value="edutiba@gmail.com" readOnly />
                <label>Nome completo*</label>
                <input type="text" value="Eduardo Bernardes" readOnly />
                <label>Gênero*</label>
                <select>
                  <option>Masculino</option>
                  <option>Feminino</option>
                  <option>Outro</option>
                </select>
                <label>Data de nascimento*</label>
                <input type="date" />
                <label>CPF*</label>
                <input type="text" placeholder="123.456.789-00" />
                <p className="disclaimer">
                  Ao prosseguir, eu declaro ter ciência de que este cadastro é somente para maiores de 18 anos.
                </p>
              </form>
            </section>

            <section className="profile-contact">
              <h2>Meu endereço e contato</h2>
              <form>
                <label>CEP*</label>
                <input type="text" placeholder="12345-678" />
                <div className="address-group">
                  <label>Estado*</label>
                  <input type="text" placeholder="Estado" />
                  <label>Cidade*</label>
                  <input type="text" placeholder="Cidade" />
                </div>
                <label>Telefone*</label>
                <input type="text" placeholder="(00) 12345-6789" />
                <div className="phone-option">
                  <input type="checkbox" id="show-phone" />
                  <label htmlFor="show-phone">Exibir meu telefone no anúncio</label>
                </div>
              </form>
            </section>
          </div>
          <button className="save-button">Salvar alterações</button>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserProfile;
