let jan = document.getElementById('janela');
let botao = document.getElementById('botao');
let botao2 = document.getElementById('botao2');


botao.addEventListener('click', function(){
    let jan = document.getElementById('janela');

    jan.classList.toggle("vermelho")
})

botao2.addEventListener('click',function(){
    let jan = document.getElementById('janela')
    jan.classList.toggle("amarelo")
})
botao3.addEventListener('click',function(){
    let jan = document.getElementById('janela')
    jan.classList.toggle("verde")
})

