import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, businessName, email, phone, details } = req.body;

  if (!name || !email || !details) {
    return res.status(400).json({ error: 'Name, email, and details are required.' });
  }

  try {
    const webhookUrl = process.env.WEBHOOK_URL || "https://hook.eu1.make.com/y6x2msa3ohty0p9xw77jt3uo6onu5u8g";
    
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
      return res.status(200).json({ message: "Form submitted successfully to webhook." });
    } else {
      const errorText = await response.text();
      console.error("Webhook error:", errorText);
      return res.status(500).json({ error: "Failed to submit form to webhook." });
    }
  } catch (error) {
    console.error("Error submitting to webhook:", error);
    return res.status(500).json({ error: "Failed to submit form. Please try again later." });
  }
}
