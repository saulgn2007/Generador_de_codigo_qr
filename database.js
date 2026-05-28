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
    
    // Create table with name column if it doesn't exist
    await connection.query(`
      CREATE TABLE IF NOT EXISTS qr_links (
        id VARCHAR(10) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        config JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Migration logic: check if 'name' column exists in existing database
    const [columns] = await connection.query(`
      SHOW COLUMNS FROM qr_links LIKE 'name'
    `);
    
    if (columns.length === 0) {
      await connection.query(`
        ALTER TABLE qr_links ADD COLUMN name VARCHAR(255) NOT NULL DEFAULT 'Código QR sin nombre'
      `);
      console.log('✅ Migración: Columna "name" añadida a la tabla qr_links');
    }

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
async function saveLink(name, config) {
  const id = generateShortId();
  try {
    await pool.query('INSERT INTO qr_links (id, name, config) VALUES (?, ?, ?)', [id, name, JSON.stringify(config)]);
    return id;
  } catch (error) {
    // Basic collision fallback: try one more time if duplicate
    if (error.code === 'ER_DUP_ENTRY') {
      const newId = generateShortId();
      await pool.query('INSERT INTO qr_links (id, name, config) VALUES (?, ?, ?)', [newId, name, JSON.stringify(config)]);
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

// Get all saved QR links
async function getAllLinks() {
  const [rows] = await pool.query('SELECT id, name, config, created_at FROM qr_links ORDER BY created_at DESC');
  return rows;
}

// Delete a saved QR link
async function deleteLink(id) {
  await pool.query('DELETE FROM qr_links WHERE id = ?', [id]);
}

module.exports = {
  initDb,
  saveLink,
  getLink,
  getAllLinks,
  deleteLink
};
