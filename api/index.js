import express from "express";
import crypto from "crypto";

const app = express();
app.use(express.json());

const USERNAME = "workerdaguku";
const PASSWORD = "worker123";
const sessions = new Set();

/* LOGIN */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    const token = crypto.randomBytes(32).toString("hex");
    sessions.add(token);
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid" });
});

/* MIDDLEWARE */
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

/* CHECK */
app.get("/check", auth, (req, res) => {
  res.json({ ok: true });
});

/* LOGOUT */
app.post("/logout", auth, (req, res) => {
  sessions.delete(req.headers.authorization);
  res.json({ ok: true });
});

export default app;