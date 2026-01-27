export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, password } = req.body;

  // LOGIN HARD-CODE (AMAN UNTUK INTERNAL TOOL)
  if (username === "worker" && password === "12345") {
    return res.status(200).json({
      token: "daguku-token-aman"
    });
  }

  return res.status(401).json({ error: "Login gagal" });
}