const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("."));

app.post("/generate", async (req, res) => {
  const prompt = req.body.prompt;

  // FAKE AI RESPONSE for now (we’ll add real GPT-4 tomorrow)
  const fakeStrategy = `
# Strategy: ${prompt}
def generate_signals(data):
    # Example RSI + MACD strategy
    rsi = compute_rsi(data['close'])
    macd = compute_macd(data['close'])
    buy = (rsi < 30) & (macd > 0)
    sell = (rsi > 70) & (macd < 0)
    return buy, sell
`;

  res.json({ strategy: fakeStrategy });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
