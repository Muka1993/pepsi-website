// FUNÇÃO PARA TROCAR AS LATAS
function imgSlider(troca){
    document.querySelector('.pepsi').src = troca;
}

// FUNÇÃO PARA TROCAR A COR DE FUNDO
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}


function ativaMenu(){
    var menu = document.querySelector('.menu');

    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}