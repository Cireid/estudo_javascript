let contagem = 0;

let valor = document.querySelector('#valor');
const botoes = document.querySelectorAll('.btn');

botoes.forEach(function(botao){
    botao.addEventListener('click', function(e){
        const estilo = e.currentTarget.classList;

        if(estilo.contains('sub')){
            contagem--
        }
        if(estilo.contains('reset')){
            contagem = 0
        }
        if(estilo.contains('add')){
            contagem++
        }
        if(contagem > 0){
            valor.style.color = "green";
        }
        if(contagem < 0){
            valor.style.color = "red"
        }
        if(contagem === 0){
            valor.style.color = "black"
        }
        valor.textContent = contagem;
    });
});