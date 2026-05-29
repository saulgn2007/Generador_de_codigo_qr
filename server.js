const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
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
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

// ==========================================
// API Endpoints
// ==========================================

// Upload file (Image/Video)
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se subió ningún archivo' });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

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

// ==========================================
// Linktree API Endpoints
// ==========================================

// Save a new Linktree
app.post('/api/linktree/save', (req, res) => {
  try {
    const { name, profile, links, theme } = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }
    if (!profile || !links || !Array.isArray(links)) {
      return res.status(400).json({ error: 'Datos del Linktree inválidos' });
    }

    const id = db.saveLinktree(name.trim(), { profile, links, theme: theme || 'aurora' });
    res.json({
      id,
      url: `${req.protocol}://${req.get('host')}/lt/${id}`
    });
  } catch (error) {
    console.error('Save linktree error:', error);
    res.status(500).json({ error: 'Error al guardar el Linktree' });
  }
});

// Update an existing Linktree
app.put('/api/linktree/:id', (req, res) => {
  try {
    const { name, profile, links, theme } = req.body;
    const updated = db.updateLinktree(req.params.id, { name, profile, links, theme });
    if (!updated) {
      return res.status(404).json({ error: 'Linktree no encontrado' });
    }
    res.json({
      id: req.params.id,
      url: `${req.protocol}://${req.get('host')}/lt/${req.params.id}`
    });
  } catch (error) {
    console.error('Update linktree error:', error);
    res.status(500).json({ error: 'Error al actualizar el Linktree' });
  }
});

// Get all saved Linktrees
app.get('/api/linktrees', (req, res) => {
  try {
    const linktrees = db.getAllLinktrees();
    res.json(linktrees);
  } catch (error) {
    console.error('List linktrees error:', error);
    res.status(500).json({ error: 'Error al recuperar los Linktrees' });
  }
});

// Get a Linktree by ID
app.get('/api/linktree/:id', (req, res) => {
  try {
    const linktree = db.getLinktree(req.params.id);
    if (!linktree) {
      return res.status(404).json({ error: 'Linktree no encontrado' });
    }
    res.json(linktree);
  } catch (error) {
    console.error('Get linktree error:', error);
    res.status(500).json({ error: 'Error al recuperar el Linktree' });
  }
});

// Delete a Linktree
app.delete('/api/linktree/:id', (req, res) => {
  try {
    db.deleteLinktree(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error('Delete linktree error:', error);
    res.status(500).json({ error: 'Error al eliminar el Linktree' });
  }
});

// ==========================================
// Frontend Routing for Linktree Pages
// ==========================================

app.get('/lt/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'linktree.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
