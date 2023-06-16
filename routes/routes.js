const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/",(req, res) =>{
 res.send("Seja bem vindo ao Sistema de Cadastro de Usuários.");
})

router.get("/usuarios/cadastrar",(req, res) =>{
 res.render("usuarios/cadastrar");
})

router.post("/usuarios/Create",Services.UsuarioCreate);
router.get("/usuarios/listar",Services.UsuarioListar);
module.exports = router;