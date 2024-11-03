

function menu(valor){

    var i=0;
    if(valor===1){
        for(i=0;i<6;i++){
            if(i !== 1){
                document.getElementById('btn' +valor).style.fontWeight = '400';
            }else{
                document.getElementById('btn' +valor).style.fontWeight = '700';
            }
        }

        document.getElementById('conteinerProdutos').style.display = 'flex';
        document.getElementById('conteinerSobreNos').style.display = 'none';
        document.getElementById('conteinerHistoriaCultivo').style.display = 'none';
        document.getElementById('conteinerMedodoProducao').style.display = 'none';
        document.getElementById('conteinerDadosFazenda').style.display = 'none';
    }else if(valor===2){
        for(i=0;i<6;i++){
            if(i !== 2){
                document.getElementById('btn' +valor).style.fontWeight = '400';
            }else{
                document.getElementById('btn' +valor).style.fontWeight = '700';
            }
        }
        document.getElementById('conteinerProdutos').style.display = 'none';
        document.getElementById('conteinerSobreNos').style.display = 'flex';
        document.getElementById('conteinerHistoriaCultivo').style.display = 'none';
        document.getElementById('conteinerMedodoProducao').style.display = 'none';
        document.getElementById('conteinerDadosFazenda').style.display = 'none';
    }else if(valor===3){
        for(i=0;i<6;i++){
            if(i !== 3){
                document.getElementById('btn' +valor).style.fontWeight = '400';
            }else{
                document.getElementById('btn' +valor).style.fontWeight = '700';
            }
        }
        document.getElementById('conteinerProdutos').style.display = 'none';
        document.getElementById('conteinerSobreNos').style.display = 'none';
        document.getElementById('conteinerHistoriaCultivo').style.display = 'flex';
        document.getElementById('conteinerMedodoProducao').style.display = 'none';
        document.getElementById('conteinerDadosFazenda').style.display = 'none';
    }else if(valor === 4){
        for(i=0;i<6;i++){
            if(i !== 4){
                document.getElementById('btn' +valor).style.fontWeight = '400';
            }else{
                document.getElementById('btn' +valor).style.fontWeight = '700';
            }
        }
        document.getElementById('conteinerProdutos').style.display = 'none';
        document.getElementById('conteinerSobreNos').style.display = 'none';
        document.getElementById('conteinerHistoriaCultivo').style.display = 'none';
        document.getElementById('conteinerMedodoProducao').style.display = 'flex';
        document.getElementById('conteinerDadosFazenda').style.display = 'none';
    }else if(valor===5){
        for(i=0;i<6;i++){
            if(i !== 5){
                document.getElementById('btn' +valor).style.fontWeight = '400';
            }else{
                document.getElementById('btn' +valor).style.fontWeight = '700';
            }
        }
        document.getElementById('conteinerProdutos').style.display = 'none';
        document.getElementById('conteinerSobreNos').style.display = 'none';
        document.getElementById('conteinerHistoriaCultivo').style.display = 'none';
        document.getElementById('conteinerMedodoProducao').style.display = 'none';
        document.getElementById('conteinerDadosFazenda').style.display = 'flex';
    }
}

function abrirProduto(index) {
    const fechados = document.getElementsByClassName('fechado');
    const abertos = document.getElementsByClassName('aberto');
    const descricoes = document.getElementsByClassName('descricaoProduto');
    
   
    fechados[index].style.display = 'none';
    abertos[index].style.display = 'flex';
    descricoes[index].style.display = 'block';  

}

function fecharProduto(index) {
    const fechados = document.getElementsByClassName('fechado');
    const abertos = document.getElementsByClassName('aberto');
    const descricoes = document.getElementsByClassName('descricaoProduto');

    fechados[index].style.display = 'flex';
    abertos[index].style.display = 'none';
    descricoes[index].style.display = 'none'; 
}
function showMenu(){
    var mobileMenu = document.getElementById('menu_mobile');
    var header = document.querySelector('header');

    if(mobileMenu.style.display == 'flex'){
        mobileMenu.style.display = 'none';
        mobileMenu.style.boxShadow = 'none';
        header.style.boxShadow = '0px 4px 18px rgb(203, 203, 203)';
    }else{
        mobileMenu.style.display = 'flex';
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('resize', function() {
    var mobileMenu = document.getElementById('menu_mobile'); 
    if (window.innerWidth > 450) {
        mobileMenu.style.display = 'none';
    }
});