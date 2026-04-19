const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simulated AI chat endpoint
app.post('/api/chat', async (req, res) => {
  const { userMessage, persona } = req.body;
  // TODO: Integrate with Groq AI API here
  let aiResponse = `Simulated response from Groq AI (${persona || "default"})`;
  res.json({ aiResponse });
});

app.listen(4000, () => console.log('Phantom X backend running on port 4000'));