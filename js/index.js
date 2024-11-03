function showMenu(){
    var mobileMenu = document.getElementById('menu_mobile');
    var conteinerMenu = document.getElementById('conteinerMenu');
    var header = document.querySelector('header');

    if(mobileMenu.style.display == 'flex'){
        conteinerMenu.style.display = 'none';
        mobileMenu.style.display = 'none';
        mobileMenu.style.boxShadow = 'none';
        header.style.boxShadow = '0px 4px 18px rgb(203, 203, 203)';
    }else{
        conteinerMenu.style.display = 'flex';
        mobileMenu.style.display = 'flex';
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('resize', function() {
    var mobileMenu = document.getElementById('conteinerMenu'); 
    if (window.innerWidth > 450) {
        mobileMenu.style.display = 'none';
    }
});


function AbrirFiltro(valor){
    if(valor === 1 ){
        document.getElementById('filtrar').style.display = 'flex';
    }else if(valor === 0){
        document.getElementById('filtrar').style.display = 'none';
    }
}


function horariosdisp(){
    const divs = document.getElementsByClassName("disponivel");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'block';
    }
}

function sair_horariosdisp(){
    const divs = document.getElementsByClassName("disponivel");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
}