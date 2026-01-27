module.exports = (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let body = "";

  req.on("data", chunk => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const { username, password } = JSON.parse(body || "{}");

    if (username === "worker" && password === "12345") {
      res.status(200).json({ token: "daguku-token" });
    } else {
      res.status(401).json({ error: "Login gagal" });
    }
  });
};