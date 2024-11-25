
require("dotenv").config();

const db =  require("./db");
const port = process.env.PORT;
const express = require("express");
const path = require("path"); 
const app= express();


app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get("/Gerenciar_Produto", async(req,res) =>{
  const produto = await db.ShowProdutos();
  res.render("meusprodutosfazendeiro", { produto });
})

app.get("/Deletar_Produto/:id", async(req,res) =>{
  await db.DeleteProdutos(req.params.id);
  res.redirect("/Gerenciar_Produto"); 
})

app.get("/Adicionar_Produto", async(req,res) =>{
    const produto = await db.ShowProdutos();
    res.render("adicionarproduto", { produto });
  })

app.post('/adicionado_produto', async (req, res) => {

  const { nome_produto, valor, descricao, quantidade, categoria_atual,peso } = req.body;
  try {
    const produto = await db.InserirProdutos(nome_produto, valor, descricao, quantidade, categoria_atual,peso);
    res.redirect("/Gerenciar_Produto"); 
  } catch (err) {
      res.status(500).send("Erro ao adicionar produto.");
  }});



app.listen(port);     
console.log(`Servidor rodando na porta `);