require('dotenv').config();
const mysql = require('mysql2/promise');

// Create the connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'qr_aura',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Initialize database (create table if it doesn't exist)
async function initDb() {
  try {
    const connection = await pool.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS qr_links (
        id VARCHAR(10) PRIMARY KEY,
        config JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    connection.release();
    console.log('✅ Base de datos MySQL inicializada');
  } catch (err) {
    console.error('❌ Error al inicializar la base de datos:', err.message);
    console.log('Asegúrate de haber creado la base de datos MySQL (ej. CREATE DATABASE qr_aura;)');
  }
}

// Generate a random 6-character short ID
function generateShortId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Save a new configuration and return the short ID
async function saveLink(config) {
  const id = generateShortId();
  try {
    await pool.query('INSERT INTO qr_links (id, config) VALUES (?, ?)', [id, JSON.stringify(config)]);
    return id;
  } catch (error) {
    // Basic collision fallback: try one more time if duplicate
    if (error.code === 'ER_DUP_ENTRY') {
      const newId = generateShortId();
      await pool.query('INSERT INTO qr_links (id, config) VALUES (?, ?)', [newId, JSON.stringify(config)]);
      return newId;
    }
    throw error;
  }
}

// Get configuration by short ID
async function getLink(id) {
  const [rows] = await pool.query('SELECT config FROM qr_links WHERE id = ?', [id]);
  if (rows.length > 0) {
    return rows[0].config;
  }
  return null;
}

module.exports = {
  initDb,
  saveLink,
  getLink
};
