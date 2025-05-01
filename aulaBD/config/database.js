const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};


// const { Pool } = require('pg');

// // Usando o banco padrão 'postgres' para teste
// const pool = new Pool({
//   connectionString: 'postgres://postgres:postgres@localhost:5432/aulaDB'
// });

// (async () => {
//   try {
//     const res = await pool.query('SELECT NOW()');
//     console.log('✅ Conexão bem-sucedida! Hora atual do servidor:', res.rows[0].now);
//   } catch (err) {
//     console.error('❌ Erro ao conectar ao banco:', err.message);
//   } finally {
//     await pool.end();
//   }
// })();
