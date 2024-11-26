
require("dotenv").config();

const db =  require("./db");
const port = process.env.PORT;
const express = require("express");
const path = require("path"); 
const app= express();
const multer = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Pasta onde as imagens serão salvas
  },
  filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname)); // Nome do arquivo
  }
});

const upload = multer({ storage });

app.set('view engine', 'ejs'); 

app.use('/uploads', express.static('uploads'));
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

app.post('/adicionado_produto', upload.single('imagem'), async (req, res) => {

  const { nome_produto, valor, descricao, quantidade, categoria_atual,peso} = req.body;
  const imagem = req.file ? req.file.filename : null;

  try {
    if (!imagem) {
      return res.status(400).send("A imagem é obrigatória.");
  }
    const produto = await db.InserirProdutos(nome_produto, valor, descricao, quantidade, categoria_atual,peso,imagem);
    res.redirect("/Gerenciar_Produto"); 
  } catch (err) {
      res.status(500).send("Erro ao adicionar produto.");
  }});



app.listen(port);     
console.log(`Servidor rodando na porta `);