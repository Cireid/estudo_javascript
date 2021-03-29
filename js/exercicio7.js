let lampada = document.getElementById('lamp')
let apagada = '/img/lampada.jpg'
let acesa = '/img/lampada-on.jpg'

lampada.addEventListener('click', function(){
    if(lampada.classList.contains('apagada')){
        lampada.src = acesa
    }else{
        lampada.src = apagada
    } 
    lampada.classList.toggle('apagada')
})

