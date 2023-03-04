// FUNÇÃO PARA TROCAR AS LATAS
function imgSlider(troca){
    document.querySelector('.pepsi').src = troca;
}

// FUNÇÃO PARA TROCAR A COR DE FUNDO
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}