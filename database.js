const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'qr_aura.json');

// Load database from file
function load() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ links: [] }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

// Save database to file
function save(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Initialize database
function initDb() {
  load(); // Creates file if it doesn't exist
  console.log('✅ Base de datos inicializada en', DB_PATH);
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
function saveLink(name, config) {
  const data = load();
  let id = generateShortId();
  // Collision fallback
  while (data.links.find(l => l.id === id)) {
    id = generateShortId();
  }
  data.links.unshift({
    id,
    name,
    config,
    created_at: new Date().toISOString()
  });
  save(data);
  return id;
}

// Get configuration by short ID
function getLink(id) {
  const data = load();
  const entry = data.links.find(l => l.id === id);
  return entry ? entry.config : null;
}

// Get all saved QR links
function getAllLinks() {
  const data = load();
  return data.links;
}

// Delete a saved QR link
function deleteLink(id) {
  const data = load();
  data.links = data.links.filter(l => l.id !== id);
  save(data);
}

// ==========================================
// Linktree CRUD
// ==========================================

function saveLinktree(name, linktreeData) {
  const data = load();
  if (!data.linktrees) data.linktrees = [];
  let id = generateShortId();
  while (data.linktrees.find(l => l.id === id) || data.links.find(l => l.id === id)) {
    id = generateShortId();
  }
  data.linktrees.unshift({
    id,
    name,
    ...linktreeData,
    created_at: new Date().toISOString()
  });
  save(data);
  return id;
}

function getLinktree(id) {
  const data = load();
  if (!data.linktrees) return null;
  return data.linktrees.find(l => l.id === id) || null;
}

function getAllLinktrees() {
  const data = load();
  return data.linktrees || [];
}

function updateLinktree(id, linktreeData) {
  const data = load();
  if (!data.linktrees) return false;
  const index = data.linktrees.findIndex(l => l.id === id);
  if (index === -1) return false;
  data.linktrees[index] = {
    ...data.linktrees[index],
    ...linktreeData,
    id, // preserve original ID
    created_at: data.linktrees[index].created_at, // preserve original date
    updated_at: new Date().toISOString()
  };
  save(data);
  return true;
}

function deleteLinktree(id) {
  const data = load();
  if (!data.linktrees) return;
  data.linktrees = data.linktrees.filter(l => l.id !== id);
  save(data);
}

module.exports = { initDb, saveLink, getLink, getAllLinks, deleteLink, saveLinktree, getLinktree, getAllLinktrees, updateLinktree, deleteLinktree };
