const axios = require("axios");
module.exports = class Services {

 static async UsuarioCreate(req,res){
 let valores = req.body;
 const options = {
 url: 'https://praticasemana311.carla-ireneiren.repl.co/usuarios/cadastrar',
 method: 'POST',
 data: valores
 };  
 axios(options);
 const mensagem = "Cadastro realizado com sucesso!";
 res.render("mensagem",{mensagem});
 }  

 static async UsuarioListar(req,res){
 const options = {
 url: 'https://praticasemana311.carla-ireneiren.repl.co/usuarios',
 method: 'GET',
 data: {}
 };
 axios(options).then(response => {
 console.log(response.data);
 const usuario =response.data
 res.render("usuarios/listar",{usuario});
 });   
 }
 
}
