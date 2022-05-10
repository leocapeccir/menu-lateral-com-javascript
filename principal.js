var abreMenu = document.querySelector(".botao__abre");
var mostraMenu = document.querySelector(".menu__principal--abre");
var fechaMenu = document.querySelector(".menu__principal--fecha");
var acompanhaMenu = document.querySelector(".menu__conteudo");

abreMenu.addEventListener("click", function(){
    mostraMenu.classList.add("menu__abre");
    acompanhaMenu.classList.add("menu__conteudo--acompanha");


})

fechaMenu.addEventListener("click", function(){
    mostraMenu.classList.remove("menu__abre");
    acompanhaMenu.classList.remove("menu__conteudo--acompanha")
    
    
    
})



