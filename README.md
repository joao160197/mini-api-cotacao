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

**Body JSON:**
```json
{
  "base": "USD",
  "symbols": "BRL",
  "cotacao": 5.12
}

- `GET /historico`  
Retorna todas as cotações registradas manualmente no cache.

Exemplo: GET http://localhost:3000/historico


🧩 Como usar

Clone o projeto:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/mini-api-cotacao.git
cd mini-api-cotacao
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie a API:

bash
Copiar
Editar
npm start
Teste via Postman, Insomnia ou navegador!

⚙️ Justificativa da Linguagem
Escolhi JavaScript (Node.js) por ser uma tecnologia leve, rápida e eficiente para criação de APIs RESTful. Node.js possui uma grande comunidade, é extremamente simples de configurar e ideal para protótipos e projetos de aprendizado como este. Além disso, a integração com bibliotecas como express e axios facilita muito o desenvolvimento.

📦 Hospedagem
Você pode facilmente hospedar essa API gratuitamente usando plataformas como:

Render.

Vercel.

👨‍💻 Autor

Feito por João Paulo Ramos Lopes