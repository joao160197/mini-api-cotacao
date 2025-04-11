# 💰 Mini API RESTful de Cotação de Moedas

API simples em Node.js para consultar cotações em tempo real e registrar manualmente cotações de moedas em relação ao Real (ou qualquer outra).

## 🚀 Tecnologias
- Node.js
- Express.js
- Axios

## 🎯 Funcionalidades
- `GET /cotacao`  
  Consulta a cotação atual da moeda.
  
  Exemplo: GET http://localhost:3000/cotacao?base=USD&symbols=BRL 



- `POST /cotacao`  
Registra manualmente uma cotação no cache de memória.

