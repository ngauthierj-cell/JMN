export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { system, userContent } = req.body;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2500,
        system,
        messages: [{ role: "user", content: userContent }],
      }),
    });

    const data = await response.json();
    if (data.error) return res.status(400).json({ error: data.error.message });
    const raw = (data.content || []).map(b => b.text || "").join("").trim();
    return res.status(200).json({ raw });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
