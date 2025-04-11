# 💰 Mini API RESTful de Cotação de Moedas

API simples em Node.js para consultar cotações em tempo real e registrar manualmente cotações de moedas em relação ao Real (ou qualquer outra).

## 🚀 Tecnologias
- Node.js
- Express.js
- Axios

## ⚙️ Justificativa da Linguagem
Escolhi JavaScript (Node.js) por ser uma tecnologia leve, rápida e eficiente para criação de APIs RESTful. Node.js possui uma ampla comunidade, é extremamente simples de configurar e ideal para protótipos e projetos de aprendizado como este.
Além disso, a integração com bibliotecas como Express.js e Axios facilita muito o desenvolvimento de aplicações escaláveis e modernas.

## 📦 Hospedagem
Você pode hospedar essa API gratuitamente em serviços como:

🌐 Render.

🌐 Vercel.



## 🎯 Funcionalidades
- `GET /cotacao`  
  Consulta a cotação atual da moeda.
  
  Exemplo: GET http://localhost:3000/cotacao?base=USD&symbols=BRL 

- `POST /cotacao`  
Registra manualmente uma cotação no cache de memória.

Exemplo: GET http://localhost:3000/cotacao

- `GET /historico`  
Retorna todas as cotações registradas manualmente no cache.

Exemplo: GET http://localhost:3000/historico


## 👨‍💻 Autor
Feito por João Paulo Ramos Lopes.
