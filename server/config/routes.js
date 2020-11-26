const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");

router.post("/cadastrar", controller.cadastrar);
router.get("/listar", controller.listar);

module.exports = router;