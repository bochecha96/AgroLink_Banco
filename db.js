async function Connect() {
    
    const{Pool} = require("pg");
    const pool = new Pool({
        connectionString: process.env.Connection_String
    });

    const produto = await pool.connect();
    console.log("criado a pool dog");

    const res = await produto.query("select now()")
    produto.release();

    global.Connection = pool;
    return pool.connect();
}



    async function ShowProdutos() {

        const produto = await Connect();
        console.log("Conexão criada");
    
        const res = await produto.query("SELECT * FROM produto");
        console.log("ShowProdutos está on");  
        produto.release();
    
        return res.rows; 
        }
    
        async function DeleteProdutos(id_produto) {

            const produto = await Connect();
            const query="DELETE FROM produto WHERE id_produto=$1";
            const values = [id_produto];
            console.log("Delete ta off");  
            await produto.query(query,values);
            }

        async function InserirProdutos(nome_produto, valor, descricao, quantidade, categoria_atual,peso) {
            const produto = await Connect();
            const query = "INSERT INTO produto (nome_produto, valor, descricao, quantidade, categoria_atual,peso) VALUES ($1, $2, $3, $4, $5, $6)";
            const values = [nome_produto, valor, descricao, quantidade, categoria_atual,peso];
        
        try {
            await produto.query(query, values);
        } catch (err) {
            console.error('Erro ao inserir produto', err);
            throw err;
        }
            }

    module.exports = {
        ShowProdutos,
        DeleteProdutos,
        InserirProdutos
    }