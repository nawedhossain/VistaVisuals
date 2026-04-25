import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/contact", async (req, res) => {
    const { name, businessName, email, phone, details } = req.body;

    if (!name || !email || !details) {
      return res.status(400).json({ error: "Name, email, and details are required." });
    }

    try {
      const webhookUrl = process.env.WEBHOOK_URL || "https://hook.eu1.make.com/4lcp8ry8imnrjmz5jjtuf1jno9xf367a";
      
      // Build query parameters for GET request
      const params = new URLSearchParams({
        name: String(name),
        businessName: String(businessName || ""),
        email: String(email),
        phone: String(phone || ""),
        details: String(details)
      });

      const response = await fetch(`${webhookUrl}?${params.toString()}`, {
        method: 'GET',
      });

      if (response.ok) {
        res.status(200).json({ message: "Form submitted successfully to webhook." });
      } else {
        const errorText = await response.text();
        console.error("Webhook error:", errorText);
        res.status(500).json({ error: "Failed to submit form to webhook." });
      }
    } catch (error) {
      console.error("Error submitting to webhook:", error);
      res.status(500).json({ error: "Failed to submit form. Please try again later." });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
