const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Database
db.initDb();

// Middleware
app.use(cors());
app.use(express.json({ limit: '5mb' })); // Allows large configurations and potential base64 logos

// Serve static frontend files from current directory
// Avoid exposing backend files directly
const staticOptions = {
  index: ['index.html']
};
app.use(express.static(__dirname, staticOptions));

// ==========================================
// API Endpoints
// ==========================================

// Save configuration and return short ID
app.post('/api/save', async (req, res) => {
  try {
    const config = req.body;
    if (!config || Object.keys(config).length === 0) {
      return res.status(400).json({ error: 'Configuración inválida' });
    }
    
    const id = await db.saveLink(config);
    res.json({ id, url: `${req.protocol}://${req.get('host')}/e/${id}`, embedUrl: `${req.protocol}://${req.get('host')}/q/${id}` });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ error: 'Error al guardar la configuración' });
  }
});

// Retrieve configuration by short ID
app.get('/api/config/:id', async (req, res) => {
  try {
    const config = await db.getLink(req.params.id);
    if (!config) {
      return res.status(404).json({ error: 'Código no encontrado' });
    }
    res.json(config);
  } catch (error) {
    console.error('Retrieve error:', error);
    res.status(500).json({ error: 'Error al recuperar la configuración' });
  }
});

// ==========================================
// Frontend Routing for Short Links
// ==========================================

// Editor Route: /e/:id -> serves index.html, which will load config from /api/config/:id via frontend JS
app.get('/e/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Embed Route: /q/:id -> serves index.html, frontend JS will detect /q/ route and show clean embed
app.get('/q/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
