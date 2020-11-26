const Produto = require("../models/Produto.js");


class ProdutoController {
  async cadastrar(req, res) {
    var existsProduto = await Produto.exists({"codigoBarras": req.body.codigoBarras})
    if (existsProduto == false){
      res.status(201).json(await Produto.create(req.body));
    } 
    else {
      res.status(500).json({"mensagem ": "Esse produto já existe"});
    }
  }

  async listar(req, res){
    try{
      res.status(201).json(await Produto.find({}));
    }catch(error){
      res.status(500).json(error);
    }
  }
}

module.exports = new ProdutoController();