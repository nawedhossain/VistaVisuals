export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://pixel-wave.n8nlaunchpad.com/webhook/df3a79db-e7c0-4a0f-8a93-140bb3604b09",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Webhook failed" });
  }
}
