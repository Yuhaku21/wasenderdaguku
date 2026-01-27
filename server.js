const express = require('express');
const path = require('path');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(express.static('public'));

/* ===== CREDENTIAL (AMAN DI SERVER) ===== */
const USERNAME = 'workerdaguku';
const PASSWORD = 'worker123';

/* ===== SESSION SEDERHANA ===== */
const sessions = new Set();

/* ===== LOGIN ===== */
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    const token = crypto.randomBytes(32).toString('hex');
    sessions.add(token);
    return res.json({ success: true, token });
  }

  res.status(401).json({ success: false });
});

/* ===== MIDDLEWARE ===== */
function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

/* ===== CEK LOGIN ===== */
app.get('/api/check', auth, (req, res) => {
  res.json({ ok: true });
});

/* ===== LOGOUT ===== */
app.post('/api/logout', auth, (req, res) => {
  sessions.delete(req.headers.authorization);
  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log('🔥 Server running http://localhost:3000');
});