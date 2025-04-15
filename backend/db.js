const mysql = require('mysql2');

// Configurar a conexão com o MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'webauto_user', // Seu usuário MySQL
  password: 'sua_senha_segura', // Sua senha MySQL
  database: 'webauto_db' // O nome do banco de dados que você quer usar
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados MySQL como ID', connection.threadId);
});

module.exports = connection;
