
require("dotenv").config();

const db =  require("./db");
const port = process.env.PORT;
const express = require("express");
const path = require("path"); 
const app= express();

app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, 'public')));


app.get("/Gerenciar_Produto", async(req,res) =>{

  const produto = await db.ShowProdutos();
  res.render("meusprodutosfazendeiro", { produto });
  
})

app.get("/Adicionar_Produto", async(req,res) =>{

    const produto = await db.ShowProdutos();
    res.render("meusprodutosfazendeiro", { produto });
    
  })



app.listen(port);     
console.log(`Servidor rodando na porta `);