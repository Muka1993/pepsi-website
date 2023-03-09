// FUNÇÃO PARA TROCAR AS LATAS
function imgSlider(troca){
    document.querySelector('.pepsi').src = troca;
}

// FUNÇÃO PARA TROCAR A COR DE FUNDO
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

// FUNÇÃO MENU HAMBURGUER
function ativaMenu(){
    var menu = document.querySelector('.menu');

    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}

// FUNÇÃO QUE FORÇA O DISPLAY BLOCK PARA TELAS MAIORES
function tamanhoTela(){
    if(window.innerWidth >= '992'){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'

    }
}
