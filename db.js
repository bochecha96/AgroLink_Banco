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

    module.exports = {
        ShowProdutos,
        DeleteProdutos 
    }