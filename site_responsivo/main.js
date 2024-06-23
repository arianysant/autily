var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute ("src") == 'img/favicon-32x32.png') {


        iconMenu.setAttribute("src","img/close.png");
    }
    else{
    iconMenu.setAttribute("src","img/favicon-32x32.png");
    }
     menu.classList.toggle('active');
});