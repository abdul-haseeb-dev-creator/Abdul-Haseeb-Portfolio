import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for SMTP Contact form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const host = process.env.SMTP_HOST;
    const portStr = process.env.SMTP_PORT;
    const port = portStr ? parseInt(portStr, 10) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || user;

    if (!host || !user || !pass) {
      console.warn("SMTP credentials not fully configured in environment variables.");
      return res.status(503).json({
        error: "SMTP server is not fully configured on the server. Please define SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables."
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${user}>`, // Authorized user to prevent spoofing blockages
        replyTo: email, // Direct replies back to the user's email
        to: toEmail,
        subject: `[Portfolio Contact] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #1f2937; max-width: 600px; border: 1px solid #e5e7eb; border-radius: 12px;">
            <h2 style="color: #7c3aed; margin-top: 0;">New Contact Form Submission</h2>
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #7c3aed;">
              <p style="margin: 0; font-weight: bold;">Message:</p>
              <p style="margin: 10px 0 0 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error: any) {
      console.error("SMTP Mail Send Error:", error);
      return res.status(500).json({ error: `Failed to send email via SMTP: ${error.message || error}` });
    }
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
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
