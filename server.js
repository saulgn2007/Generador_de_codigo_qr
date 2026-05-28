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
app.use(express.json({ limit: '5mb' }));

// Serve static frontend files
app.use(express.static(__dirname));

// ==========================================
// API Endpoints
// ==========================================

// Save configuration and return short ID
app.post('/api/save', (req, res) => {
  try {
    const { name, config } = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }
    if (!config || Object.keys(config).length === 0) {
      return res.status(400).json({ error: 'Configuración inválida' });
    }

    const id = db.saveLink(name.trim(), config);
    res.json({
      id,
      url: `${req.protocol}://${req.get('host')}/e/${id}`,
      embedUrl: `${req.protocol}://${req.get('host')}/q/${id}`
    });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ error: 'Error al guardar la configuración' });
  }
});

// Get all saved QR links
app.get('/api/qrs', (req, res) => {
  try {
    const qrs = db.getAllLinks();
    res.json(qrs);
  } catch (error) {
    console.error('List error:', error);
    res.status(500).json({ error: 'Error al recuperar los códigos QR' });
  }
});

// Delete configuration by short ID
app.delete('/api/config/:id', (req, res) => {
  try {
    db.deleteLink(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Error al eliminar el código QR' });
  }
});

// Retrieve configuration by short ID
app.get('/api/config/:id', (req, res) => {
  try {
    const config = db.getLink(req.params.id);
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

app.get('/e/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/q/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
