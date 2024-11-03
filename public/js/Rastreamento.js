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
