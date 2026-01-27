import jwt from "jsonwebtoken";

const USERNAME = "workerdaguku";
const PASSWORD = "worker123";
const SECRET = "daguku_secret_key_2026";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    const token = jwt.sign(
      { user: username },
      SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Login gagal" });
}