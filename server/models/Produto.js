const mongoose = require("mongoose");
const Produto = require("./Produto.js");

const produto = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório."],
  },
  codigoBarras: {
    type: String,
    required: [true, "O código de barras é obrigatório."],
  },
  preco: {
    type: Number,
    required: [true, "O campo preço é obrigatório."],
  },
  criadoEm: {
    type: Date,
    required: [true, "O campo Data é obrigatório."]
  }
});

module.exports = mongoose.model("produtos", produto);