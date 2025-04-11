const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const cache = [];

// GET /cotacao → busca cotação atual usando CoinGecko
app.get('/cotacao', async (req, res) => {
  try {
    let base = (req.query.base || 'usd').toLowerCase();
    let symbols = (req.query.symbols || 'brl').toLowerCase();

    console.log(`🟢 Buscando cotação CoinGecko: base=${base}, symbols=${symbols}`);

    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: base,
        vs_currencies: symbols
      }
    });

    console.log('🟢 Resposta CoinGecko:', response.data);

    const cotacao = response.data[base][symbols];

    if (!cotacao) {
      return res.status(404).json({ error: 'Cotação não encontrada.' });
    }

    res.json({
      base: base.toUpperCase(),
      symbols: symbols.toUpperCase(),
      cotacao,
      data: new Date().toISOString().split('T')[0]
    });
  } catch (error) {
    console.error('❌ Erro ao buscar a cotação CoinGecko:', error.message);
    res.status(500).json({ error: 'Erro ao buscar a cotação.' });
  }
});

// POST /cotacao → registra uma cotação manual no cache em memória
app.post('/cotacao', (req, res) => {
  const { base, symbols, cotacao } = req.body;

  if (!base || !symbols || !cotacao) {
    return res.status(400).json({ error: 'Parâmetros base, symbols e cotacao são obrigatórios.' });
  }

  const registro = {
    base: base.toUpperCase(),
    symbols: symbols.toUpperCase(),
    cotacao,
    data: new Date().toISOString()
  };

  cache.push(registro);

  res.json({ message: 'Cotação registrada com sucesso.', registro });
});

// GET /historico → retorna todas as cotações registradas no cache
app.get('/historico', (req, res) => {
  res.json(cache);
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
