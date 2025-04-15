const express = require('express');
const cors = require('cors');
const connection = require('./db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');  // Adicionar o rate limit
const app = express();

const secretKey = 'sua_chave_secreta'; // Chave secreta para JWT

// Configurações gerais
app.use(cors());
app.use(express.json());

// Configuração do Rate Limiting para a rota de login
const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto (em vez de 15 minutos)
  max: 10, // Permite até 10 tentativas (em vez de 5)
  message: 'Muitas tentativas de login. Tente novamente após um minuto.'
});

// Middleware para verificar o token JWT e o tipo de usuário
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido.' });
    }

    req.user = user; // Anexa o usuário ao request
    next();
  });
};

// Rota para registrar um novo usuário
app.post('/register', async (req, res) => {
  const { username, password, userType } = req.body;
  const type = userType && ['admin', 'user', 'lojista'].includes(userType) ? userType : 'user';

  try {
    // Hash da senha e criação do novo usuário
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, password, userType) VALUES (?, ?, ?)';
    connection.query(query, [username, hashedPassword, userType || 'user'], (err, results) => {
      if (err) {
        console.error('Erro ao registrar usuário:', err);
        return res.status(500).json({ message: 'Erro ao registrar usuário' });
      }
      res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
  } catch (error) {
    console.error('Erro ao hashear a senha:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
});

// Rota para login de usuário (com Rate Limiting)
app.post('/login', loginLimiter, (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  connection.query(query, [username], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar usuário' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const user = results[0];
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Gera o token JWT com userType
    const token = jwt.sign({ userId: user.id, username: user.username, userType: user.userType }, secretKey, { expiresIn: '1h' });
    res.json({ token, userType: user.userType });
  });
});

// Rota para cadastrar um novo veículo (protegida por JWT e com validação de dados)
app.post('/vehicles', authenticateJWT, [
  body('type').isString().trim().escape().notEmpty().withMessage('Tipo do veículo é obrigatório'),
  body('model').isString().trim().escape().notEmpty().withMessage('Modelo é obrigatório'),
  body('price').isString().trim().escape().notEmpty().withMessage('Preço é obrigatório'),
  body('year').isInt({ min: 1900, max: new Date().getFullYear() }).withMessage('Ano deve ser válido entre 1900 e o ano atual'),
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { type, model, price, year } = req.body;

  const query = 'INSERT INTO vehicles (type, model, price, year) VALUES (?, ?, ?, ?)';
  connection.query(query, [type, model, price, year], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao cadastrar veículo' });
    }
    res.status(201).json({ message: 'Veículo cadastrado com sucesso!' });
  });
});

// Rota para editar um veículo (protegida por JWT)
app.put('/vehicles/:id', authenticateJWT, [
  // Valida e sanitiza os dados
  body('type').isString().trim().escape().optional().withMessage('Tipo do veículo é obrigatório'),
  body('model').isString().trim().escape().optional().withMessage('Modelo é obrigatório'),
  body('price').isString().trim().escape().optional().withMessage('Preço é obrigatório'),
  body('year').isInt({ min: 1900, max: new Date().getFullYear() }).optional().withMessage('Ano deve ser válido entre 1900 e o ano atual'),
], (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { type, model, price, year } = req.body;
  const vehicleId = req.params.id;

  const query = `
    UPDATE vehicles 
    SET type = ?, model = ?, price = ?, year = ? 
    WHERE id = ?
  `;
  connection.query(query, [type, model, price, year, vehicleId], (err, results) => {
    if (err) {
      console.error('Erro ao editar veículo:', err);
      return res.status(500).json({ message: 'Erro ao editar veículo' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }

    res.status(200).json({ message: 'Veículo atualizado com sucesso!' });
  });
});

// Rota para listar todos os veículos
app.get('/vehicles', authenticateJWT, (req, res) => {
  const query = 'SELECT * FROM vehicles';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar veículos:', err);
      res.status(500).json({ message: 'Erro ao buscar veículos' });
    } else {
      res.json(results);
    }
  });
});

// Rota para buscar detalhes de um veículo pelo ID
app.get('/vehicles/:id', (req, res) => {
  const vehicleId = req.params.id;
  const query = 'SELECT * FROM vehicles WHERE id = ?';
  connection.query(query, [vehicleId], (err, results) => {
    if (err) {
      console.error('Erro ao buscar veículo:', err);
      res.status(500).json({ message: 'Erro ao buscar veículo' });
    } else {
      res.json(results[0]);
    }
  });
});

// Rota para excluir um veículo (protegida por JWT)
app.delete('/vehicles/:id', authenticateJWT, (req, res) => {
  const vehicleId = req.params.id;

  const query = 'DELETE FROM vehicles WHERE id = ?';
  connection.query(query, [vehicleId], (err, results) => {
    if (err) {
      console.error('Erro ao excluir veículo:', err);
      return res.status(500).json({ message: 'Erro ao excluir veículo' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }

    res.status(200).json({ message: 'Veículo excluído com sucesso!' });
  });
});

// Rota para buscar veículos com filtros (sem autenticação)
app.get('/vehicles/search', (req, res) => {
  const { type, minPrice, maxPrice, minYear, maxYear } = req.query; // Filtros da query string
  let query = 'SELECT * FROM vehicles WHERE 1 = 1'; // Base da query
  const params = [];

  console.log('Parâmetros da query:', req.query); // Log dos parâmetros recebidos

  // Filtro por tipo de veículo
  if (type) {
    query += ' AND type = ?';
    params.push(type);
  }

  // Filtro por faixa de preço
  if (minPrice && maxPrice) {
    query += ' AND price BETWEEN ? AND ?';
    params.push(minPrice, maxPrice);
  }

  // Filtro por faixa de ano
  if (minYear && maxYear) {
    query += ' AND year BETWEEN ? AND ?';
    params.push(minYear, maxYear);
  }

  console.log('Query gerada:', query); // Log da query gerada

  // Executa a query com os parâmetros
  connection.query(query, params, (err, results) => {
    if (err) {
      console.error('Erro ao buscar veículos:', err);
      return res.status(500).json({ message: 'Erro ao buscar veículos' });
    }

    console.log('Resultados da busca:', results); // Log dos resultados

    res.json(results); // Retorna os veículos filtrados
  });
});

  
// Servidor rodando na porta 3999
const PORT = process.env.PORT || 3999;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
