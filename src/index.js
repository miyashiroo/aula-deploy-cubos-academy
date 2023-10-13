require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("Api rodando Ok!");
});

app.listen(process.env.PORT, () =>
  console.log(`Servidor rodando na porta ${process.env.port}`)
);
