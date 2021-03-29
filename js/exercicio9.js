let botaosoma = document.getElementById('btn-soma')
let resultado = document.getElementById('resultado')


botaosoma.addEventListener('click', function(){
    let num1 = Number(document.getElementById('soma1').value)
    let num2 = Number(document.getElementById('soma2').value)

    resultado.value = num1 + num2
})

